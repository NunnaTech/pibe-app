import create from 'zustand';

export const useStoreHomeCandidates = create((set, get) => ({
	optionsMenu: [
		{ name: 'Estados', id: 1 },
		{ name: 'Modalidad', id: 2 },
		{ name: 'Nombre', id: 3 },
	],
	option: '',
	normalData: [],
	filterData: [],
	processData:[],
	filteringWord: '',
	page: 1,
	totalPag: 1,
	dataLenght: 0,
	opcRouter:"",
	setOpcRouter: (o) => set({opcRouter:o}),
	setOption: (e) => set({ option: e }),
	setProcessData: (data) => set({processData: data}),
	setFilteringWord: (word) => set({ filteringWord: word }),
	setFilterData: (data) => set({ filterData: data }),
	setPage: (num) => set({ page: num }),
	setNormalData: (data) => set({ normalData: data }),
	setTotalPag: (count) => set({ totalPag: count }),
}));
