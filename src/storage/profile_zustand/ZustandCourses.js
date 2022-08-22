import create from 'zustand';

export const useStoreCourses = create((set, get) => ({
	formInputCourses: [],
	toDeleteCourses:[],
	objectData: {
		name: '',
		hours: 0,
		id: 0,
		trainingInstitution: '',
		realizationDate: '',
		finishedDate:''
	},
	resetToDeleteCourses: () => set({toDeleteCourses:[]}),
	setFormInputCourses: (data) => set({formInputCourses:data}),
	addForm: () => set({ formInputCourses: [...get().formInputCourses, get().objectData] }),
	deleteForm: (pos) => {
		if (get().formInputCourses.length > 1) {
			let values = [...get().formInputCourses];
			let deleteCourses = [...get().toDeleteCourses]
			if (values[pos].id != 0){
				deleteCourses.push(values[pos])
			}
			values.splice(pos, 1);
			set({toDeleteCourses: deleteCourses})
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