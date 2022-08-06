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
	filteringWord: '',
	page: 1,
	totalPages: 0,
	setOption: (e) => set({ option: e }),
	setFilteringWord: (word) => set({ filteringWord: word }),
	setFilterData: (data) => set({ filterData: data }),
	setPage: (num) => set({ page: num }),
	setNormalData: (data) => set({ normalData: data }),
	setTotalPages: (num) => set({ totalPages: num }),
}));
