import create from 'zustand';

export const useStoreResumeOthers = create((set, get) => ({
	academic:"",
	description:"",
	setAcademic: (value) => set({academic:value}),
	setDescription: (value) => set({description:value})
}));