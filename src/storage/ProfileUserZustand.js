import create from "zustand";

export const useStoreProfileUser = create((set, get) => ({
	resumeUser:null,
	emailUser:null,
	setResumeUser: (data) => set({resumeUser:data}),
	setEmailUser: (email) => set({emailUser:email})
}));