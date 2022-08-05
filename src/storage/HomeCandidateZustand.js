import create from 'zustand';

export const useStoreHomeCandidates = create((set, get) => ({
	republicStates: [
		{name:"Estado de la república"},
		{name:"Salario"},
		{name:"Modalidad"},
	],
	republic: '',
	vacants:[],
	setRepublicStates: (data) => set({ republicStates: data }),
	setRepublic: (e) => set({ republic: e }),
	setVacants: (data) => set({vacants:data})
}));
