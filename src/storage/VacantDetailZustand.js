import create from 'zustand';

export const useStoreVacantDetail = create((set,get)=>({
	vacant:null,
	creator:null,
	contacts:null,
	dialog:false,
	setVacant: (data) => set({vacant:data}),
	setCreator: (obj) => set({creator:obj}),
	setContacts: (data) => set({contacts:data}),
	setDialog: (flag) => set({dialog:flag})
}))