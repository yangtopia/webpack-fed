import create from 'zustand';

interface Store {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
}

export const useStore = create<Store>(set => ({
  bears: 0,
  increasePopulation: () => set(state => ({bears: state.bears + 1})),
  removeAllBears: () => set({bears: 0})
}))

export const log = () => {
  console.log("Hello Zustand!");
};
