import create from 'zustand';

export const useStoreStudies = create((set, get) => ({
	formInputStudies: [],
	toDeleteStudies: [],
	objectData: {
		name: '',
		id: 0,
		startPeriod: '',
		endPeriod: '',
	},
	resetToDeleteStudies: () => set({toDeleteStudies:[]}),
	setFormInputStudies: (data) => set({ formInputStudies: data }),
	addForm: () =>
		set({ formInputStudies: [...get().formInputStudies, get().objectData] }),
	deleteForm: (pos) => {
		if (get().formInputStudies.length > 1) {
			let values = [...get().formInputStudies];
			let deleteStudies = [...get().toDeleteStudies];
			if (values[pos].id!=0) {
				deleteStudies.push(values[pos]);
			}
			values.splice(pos, 1);
			set({ toDeleteStudies: deleteStudies });
			set({ formInputStudies: values });
		}
	},
	updateFormInput: (property, index, value) => {
		let newData = get().formInputStudies.map((item, i) => {
			if (index == i) {
				return { ...item, [property]: value };
			} else {
				return item;
			}
		});
		set({ formInputStudies: newData });
	},
}));
