import create from 'zustand';
import { GetState, SetState } from 'zustand/vanilla';
import canvasStoreSlice, { CanvasSlice } from './canvas-store';

export type RootState = CanvasSlice;

const useStore = create<RootState>((set: SetState<any>, get: GetState<any>) => ({
  ...canvasStoreSlice(set, get),
}));

export default useStore;
