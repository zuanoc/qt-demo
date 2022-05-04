import { GetState, SetState } from 'zustand/vanilla';
import { text } from '@qt-demo/model';
import { v4 as uuid } from 'uuid';
import produce, { enableMapSet } from 'immer';

enableMapSet();

export interface CanvasState {
  userId: string;
  userTexts: text.UserText[];
  userTextMap: Map<string, text.UserText>;
  handleReceivedNewInputAction(action: text.UserAction): void;
  handleReceivedTextTypingAction(action: text.UserAction): void;
  handleReceivedTextCancelAction(action: text.UserAction): void;
  handleReceivedFetchAllAction(action: text.UserAction): void;
  handleReceivedUserDeletionAction(action: text.UserAction): void;
}

export interface CanvasSlice {
  canvasState: CanvasState;
}

const canvasStoreSlice = (
  set: SetState<CanvasSlice>,
  get: GetState<CanvasSlice>,
): CanvasSlice => ({
  canvasState: {
    userId: uuid(),
    userTexts: [],
    userTextMap: new Map<string, text.UserText>(),
    handleReceivedNewInputAction: function (action: text.UserAction) {
      const newInputAction = action.newInputAction;
      set(
        produce<CanvasSlice>(state => {
          const newText = {
            userId: action.userId,
            id: newInputAction.id,
            text: '',
            x: newInputAction.x,
            y: newInputAction.y,
            w: newInputAction.w,
            h: newInputAction.h,
            color: newInputAction.color,
          };
          state.canvasState.userTexts = [...state.canvasState.userTexts, newText];
          state.canvasState.userTextMap.set(newInputAction.id, newText);
        }),
      );
    },
    handleReceivedTextTypingAction: function (action: text.UserAction) {
      const textTypingAction = action.textTypingAction;
      set(
        produce<CanvasSlice>(state => {
          const userText = state.canvasState.userTextMap.get(textTypingAction.id);
          const updatedUserText = {
            ...userText,
            text: textTypingAction.type,
          };
          state.canvasState.userTexts = [
            ...state.canvasState.userTexts.filter(t => t.id !== userText.id),
            updatedUserText,
          ];
          state.canvasState.userTextMap.set(textTypingAction.id, updatedUserText);
        }),
      );
    },
    handleReceivedTextCancelAction: function (action: text.UserAction) {
      const textCancelAction = action.textCancelAction;
      set(
        produce<CanvasSlice>(state => {
          const userText = state.canvasState.userTextMap.get(textCancelAction.id);

          state.canvasState.userTexts = state.canvasState.userTexts.filter(
            t => t.id !== userText.id,
          );
          state.canvasState.userTextMap.delete(textCancelAction.id);
        }),
      );
    },
    handleReceivedFetchAllAction: function (action: text.UserAction) {
      const fetchAllAction = action.fetchAllAction;
      set(
        produce<CanvasSlice>(state => {
          const texts = fetchAllAction.texts.map(t => ({
            userId: action.userId,
            id: t.id,
            text: t.text,
            x: t.x,
            y: t.y,
            w: t.w,
            h: t.h,
            color: t.color,
          }));
          state.canvasState.userTexts = [...state.canvasState.userTexts, ...texts];
          for (const t of texts) {
            state.canvasState.userTextMap.set(t.id, t);
          }
        }),
      );
    },
    handleReceivedUserDeletionAction: function (action: text.UserAction) {
      const { userId } = action.userDeletionAction;
      set(
        produce<CanvasSlice>(state => {
          const targetUserTexts = state.canvasState.userTexts.filter(
            t => t.userId === userId,
          );
          state.canvasState.userTexts = state.canvasState.userTexts.filter(
            t => t.userId !== userId,
          );
          for (const t of targetUserTexts) {
            state.canvasState.userTextMap.delete(t.id);
          }
        }),
      );
    },
  },
});

export default canvasStoreSlice;
