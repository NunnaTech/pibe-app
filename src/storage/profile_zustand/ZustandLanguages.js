import create from 'zustand';

export const useStoreLanguages = create((set, get) => ({
	formInputLanguages: [],
	toDeleteLanguages: [],
	objectData: {
		name: '',
		id: 0,
		abbreviation: '',
	},
	resetToDeleteLanguages: () => set({toDeleteLanguages:[]}),
	setFormInputLanguages: (data) => set({ formInputLanguages: data }),
	addForm: () =>
		set({
			formInputLanguages: [...get().formInputLanguages, get().objectData],
		}),
	deleteForm: (pos) => {
		if (get().formInputLanguages.length > 1) {
			let values = [...get().formInputLanguages];
			let deleteLanguages = [...get().toDeleteLanguages];
			if ((values[pos].id != 0)) {
				deleteLanguages.push(values[pos]);
			}
			values.splice(pos, 1);
			set({ toDeleteLanguages: deleteLanguages });
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
