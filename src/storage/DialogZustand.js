import create from 'zustand';

export const useStoreDialog = create((set, get) => ({
	message: '',
	headerMessage: '',
	displayDialog: false,
	setMessageDialog: (newMessage) => set({ message: newMessage }),
	setDisplayDialog: (flag) => set({ displayDialog: flag }),
	setHeaderMessage: (newHeader) => set({ headerMessage: newHeader }),
}));
