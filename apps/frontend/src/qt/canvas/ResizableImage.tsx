import { Rect, Circle, Image, Group } from 'react-konva';
import React, { useEffect, useState } from 'react';
import useImage from 'use-image';

export const ResizableImage: React.FunctionComponent<{
  imageSrc: string;
  initX: number;
  initY: number;
}> = ({ imageSrc, initX, initY }) => {
  const [catImg] = useImage(imageSrc);
  const [[x, y, w, h], setImageData] = useState<[number, number, number, number]>([
    initX,
    initY,
    0,
    0,
  ]);

  useEffect(() => {
    if (catImg) {
      setImageData([x, y, catImg.width / 10, catImg.height / 10]);
    }
  }, [catImg]);

  return (
    <Group>
      <Image image={catImg} x={x} y={y} width={w} height={h} />
      <Group>
        <Rect x={x} y={y} width={w} height={h} stroke="green" />
        <Circle x={x} y={y} width={10} height={10} fill="white" stroke="green" />
        <Circle x={x + w} y={y} width={10} height={10} fill="white" stroke="green" />
        <Circle x={x} y={y + h} width={10} height={10} fill="white" stroke="green" />
        <Circle x={x + w} y={y + h} width={10} height={10} fill="white" stroke="green" />
        <Circle
          x={x + w}
          y={y + h}
          width={10}
          height={10}
          draggable={true}
          onDragMove={evt => {
            const newX = evt.evt.x;
            const newY = evt.evt.y;
            setImageData([x, y, w + (newX - x - w), h + (newY - y - h)]);
            evt.currentTarget.setAbsolutePosition({
              x: x + w,
              y: y + h,
            });
          }}
          onDragEnd={evt => {
            evt.currentTarget.setAbsolutePosition({
              x: x + w,
              y: y + h,
            });
          }}
        />
      </Group>
    </Group>
  );
};
