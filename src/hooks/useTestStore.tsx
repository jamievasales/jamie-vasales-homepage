import {create} from "zustand";

export interface TestStore {
    hit: number;
}

export interface TestStoreActions {
    hit: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}

export const useTestStore = create((set): TestStoreActions => ({
    hit: 0,
    increment: () => set((state: TestStore) => ({hit: state.hit + 1})),
    decrement: () => set((state: TestStore) => ({hit: state.hit - 1})),
    reset: () => set({hit: 0}),
}));