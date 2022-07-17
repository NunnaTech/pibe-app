import create from 'zustand';

export const useStoreLanguages = create((set, get) => ({
	formInput: [],
	objectData: {
		name: '',
		abbreviation: '',
	},
	addForm: () => set({ formInput: [...get().formInput, get().objectData] }),
	deleteForm: (pos) => {
		if (get().formInput.length > 1) {
			let values = [...get().formInput];
			values.splice(pos, 1);
			set({ formInput: values });
		}
	},
	updateFormInput: (property, index, value) => {
		let newData = get().formInput.map((item, i) => {
			if (index == i) {
				return { ...item, [property]: value };
			} else {
				return item;
			}
		});
		set({ formInput: newData });
	},
}));