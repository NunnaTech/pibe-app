import create from 'zustand';

export const useStoreLanguages = create((set, get) => ({
	formInputLanguages: [],
	objectData: {
		name: '',
		abbreviation: '',
	},
	setFormInputLanguages: (data) => set({formInputLanguages:data}),
	addForm: () => set({ formInputLanguages: [...get().formInputLanguages, get().objectData] }),
	deleteForm: (pos) => {
		if (get().formInputLanguages.length > 1) {
			let values = [...get().formInputLanguages];
			values.splice(pos, 1);
			set({ formInputLanguages: values });
		}
	},
	updateFormInput: (property, index, value) => {
		let newData = get().formInputLanguages.map((item, i) => {
			if (index == i) {
				return { ...item, [property]: value };
			} else {
				return item;
			}
		});
		set({ formInputLanguages: newData });
	},
}));