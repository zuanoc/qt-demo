import { Stage, Layer, Text } from 'react-konva';
import React, { useEffect, useRef, useState } from 'react';
import Konva from 'konva';
import { v4 as uuid } from 'uuid';
import { grpcService } from '../../grpc/client';
import useStore from '../../store/use-store';
import { debounceTime, Subject } from 'rxjs';

interface UserTextStringUpdate {
  value: string;
  userTextId: string;
}

export const CanvasContainer: React.FunctionComponent<{
  parentRect: DOMRectReadOnly;
}> = ({ parentRect }) => {
  const rootDivRef = useRef<HTMLDivElement>(null);
  const taRef = useRef<HTMLTextAreaElement>(null);
  const [texts, setTexts] = useState([]);
  const [currentTextId, setCurrentTextId] = useState(null);
  const [currentTextString, setCurrentTextString] = useState('');
  const [[inputX, inputY], setInputPosition] = useState<[number, number]>([0, 0]);
  const [inputVisible, setInputVisible] = useState(false);
  const [userTextStringUpdate$] = useState(new Subject<UserTextStringUpdate>());
  const { userId, userTexts } = useStore(s => s.canvasState);

  useEffect(() => {
    grpcService.init(userId);
    const subscription = userTextStringUpdate$.pipe(debounceTime(100)).subscribe({
      next: update => {
        grpcService.sendTextTypingAction({
          id: update.userTextId,
          type: update.value,
        });
      },
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  function createNewText(evt: Konva.KonvaEventObject<MouseEvent>) {
    if (inputVisible) {
      grpcService.sendTextCancelAction({
        id: currentTextId,
      });
      setCurrentTextString('');
      setCurrentTextId('');
    }

    const newX = evt.evt.x - rootDivRef.current.offsetLeft;
    const newY = evt.evt.y - rootDivRef.current.offsetTop;
    setInputPosition([newX, newY]);
    setInputVisible(true);
    taRef.current.focus();
    const id = uuid();
    setCurrentTextId(id);
    grpcService.sendNewInputAction({
      id,
      x: newX,
      y: newY,
      w: 200,
      h: 200,
      color: 'white',
    });
  }

  function cancelInput() {
    grpcService.sendTextCancelAction({
      id: currentTextId,
    });
    cleanupInput();
  }

  function addNewText() {
    const finalTextString = currentTextString;
    setTexts(prevState => {
      return [
        ...prevState,
        {
          id: uuid(),
          x: inputX,
          y: inputY,
          text: finalTextString,
          width: 200,
          height: 200,
          color: 'white',
        },
      ];
    });

    cleanupInput();
  }

  function cleanupInput() {
    setInputVisible(false);
    setCurrentTextString('');
    setCurrentTextId(null);
  }

  return (
    <div tw="w-full h-full relative" ref={rootDivRef}>
      <Stage
        width={parentRect.width - 10}
        height={parentRect.height}
        onDblClick={createNewText}
      >
        <Layer>
          {userTexts.map(t => (
            <Text
              key={t.id}
              fontSize={16}
              fontFamily="lato"
              strokeWidth={2}
              id={t.id}
              x={t.x}
              y={t.y}
              text={t.text}
              width={t.w}
              height={t.h}
              fill={t.color}
            />
          ))}
          {texts.map(t => (
            <Text
              key={uuid()}
              fontSize={16}
              fontFamily="lato"
              strokeWidth={2}
              id={uuid()}
              x={t.x}
              y={t.y}
              text={t.text}
              width={t.width}
              height={t.height}
              fill={t.color}
            />
          ))}
        </Layer>
      </Stage>
      <div
        tw="absolute flex flex-col"
        style={{ left: inputX, top: inputY, display: inputVisible ? 'flex' : 'none' }}
      >
        <textarea
          tw="outline-none p-2"
          ref={taRef}
          value={currentTextString}
          onChange={event => {
            setCurrentTextString(event.target.value);
            userTextStringUpdate$.next({
              userTextId: currentTextId,
              value: event.target.value,
            });
          }}
        ></textarea>
        <div tw="flex bg-qtGrey-42 text-white">
          <button onClick={cancelInput}>Cancel</button>
          <button onClick={addNewText} tw="ml-2">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
