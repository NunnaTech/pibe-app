import create from 'zustand';

export const useStoreNotifications = create((set, get) => ({
	notifications:[],
	setNotifications: (data) => set({notifications:data})
}));