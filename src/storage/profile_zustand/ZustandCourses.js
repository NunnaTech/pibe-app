import create from 'zustand';

export const useStoreCourses = create((set, get) => ({
	formInputCourses: [],
	objectData: {
		name: '',
		hours: 0,
		trainingInstitution: '',
		realizationDate: '',
		finishedDate:''
	},
	addForm: () => set({ formInputCourses: [...get().formInputCourses, get().objectData] }),
	deleteForm: (pos) => {
		if (get().formInputCourses.length > 1) {
			let values = [...get().formInputCourses];
			values.splice(pos, 1);
			set({ formInputCourses: values });
		}
	},
	updateFormInput: (property, index, value) => {
		let newData = get().formInputCourses.map((item, i) => {
			if (index == i) {
				return { ...item, [property]: value };
			} else {
				return item;
			}
		});
		set({ formInputCourses: newData });
	},
}));