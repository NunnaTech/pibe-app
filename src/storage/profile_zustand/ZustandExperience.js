import create from 'zustand';

export const useStoreExperience = create((set, get) => ({
	formInputExperience: [],
	objectData: {
		position: '',
		startPeriod: '',
		endPeriod: '',
		activities: '',
	},
	addForm: () => set({ formInputExperience: [...get().formInputExperience, get().objectData] }),
	deleteForm: (pos) => {
		if (get().formInputExperience.length > 1) {
			let values = [...get().formInputExperience];
			values.splice(pos, 1);
			set({ formInputExperience: values });
		}
	},
	updateFormInput: (property, index, value) => {
		let newData = get().formInputExperience.map((item, i) => {
			if (index == i) {
				return { ...item, [property]: value };
			} else {
				return item;
			}
		});
		set({ formInputExperience: newData });
	},
	setFormInputExperience: (data) => set({formInputExperience:data})
}));
