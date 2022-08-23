import create from 'zustand';

export const useStoreResume = create((set, get) => ({
	profile: null,
	idResume:null,
	setProfile: (data) => set({ profile: data }),
	setIdResume: (id) => set({idResume:id})
}));