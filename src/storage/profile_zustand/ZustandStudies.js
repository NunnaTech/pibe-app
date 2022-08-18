import create from 'zustand';

export const useStoreStudies = create((set, get) => ({
	formInputStudies: [],
	objectData: {
		name: '',
		startPeriod: '',
		endPeriod: '',
	},
	setFormInputStudies: (data) => set({formInputStudies:data}),
	addForm: () => set({ formInputStudies: [...get().formInputStudies, get().objectData] }),
	deleteForm: (pos) => {
		if (get().formInputStudies.length > 1) {
			let values = [...get().formInputStudies];
			values.splice(pos, 1);
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