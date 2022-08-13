import create from 'zustand';

export const useStoreHabilities = create((set, get) => ({
    habilities:[],
    setHabilities: (value) => set({habilities:value})  
}));
