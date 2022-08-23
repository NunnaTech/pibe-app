import create from 'zustand';

export const useStoreExperience = create((set, get) => ({
	formInputExperience: [],
	toDeleteExperience: [],
	objectData: {
		position: '',
		id: 0,
		startPeriod: '',
		endPeriod: '',
		activities: '',
	},
	resetToDeleteExperience: () => set({toDeleteExperience:[]}),
	addForm: () =>
		set({
			formInputExperience: [...get().formInputExperience, get().objectData],
		}),
	deleteForm: (pos) => {
		if (get().formInputExperience.length > 1) {
			// Get all values from original array
			let values = [...get().formInputExperience];
			// Fuck this stupid shit, the API is so complicated and I need to do magic for run this shit >:(
			// However, in this case I delete the selected object from original array
			let deleteObjects = [...get().toDeleteExperience];
			if (values[pos].id != 0) {
				deleteObjects.push(values[pos]);
			}
			values.splice(pos, 1);
			set({ toDeleteExperience: deleteObjects });
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
	setFormInputExperience: (data) => set({ formInputExperience: data }),
}));
