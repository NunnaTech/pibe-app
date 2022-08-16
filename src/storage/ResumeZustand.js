import create from 'zustand';

export const useStoreResume = create((set, get) => ({
	profile: null,
	setProfile: (data) => set({ profile: data }),
}));