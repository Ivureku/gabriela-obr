import { create } from "zustand";

interface LogicStore {
  noClickCount: number;
  answered: boolean;
  givenUp: boolean;
  incrementNoClick: () => void;
  setAnswered: (value: boolean) => void;
  setGivenUp: (value: boolean) => void;
  reset: () => void;
}

export const useLogicStore = create<LogicStore>((set) => ({
  noClickCount: 0,
  answered: false,
  givenUp: false,
  incrementNoClick: () =>
    set((state) => {
      const newCount = state.noClickCount + 1;
      return {
        noClickCount: newCount,
        givenUp: newCount >= 3,
      };
    }),
  setAnswered: (value) => set({ answered: value }),
  setGivenUp: (value) => set({ givenUp: value }),
  reset: () =>
    set({
      noClickCount: 0,
      answered: false,
      givenUp: false,
    }),
}));
