interface Store {
    bears: number;
    increasePopulation: () => void;
    removeAllBears: () => void;
}
export declare const useStore: import("zustand").UseBoundStore<Store, import("zustand").StoreApi<Store>>;
export declare const log: () => void;
export {};
