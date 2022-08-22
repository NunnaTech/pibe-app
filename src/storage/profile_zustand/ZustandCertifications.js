import create from 'zustand';

export const useStoreCertifications = create((set, get) => ({
	formInputCertifications: [],
	toDeleteCertifications:[],
	objectData: {
		name: '',
		company: '',
		obtainedDate: '',
		expirationDate: '',

	},
	resetToDeleteCertifications: () => set({toDeleteCertifications:[]}),
	setFormInputCertifications: (data) => set({formInputCertifications:data}),
	addForm: () => set({ formInputCertifications: [...get().formInputCertifications, get().objectData] }),
	deleteForm: (pos) => {
		if (get().formInputCertifications.length > 1) {
			let values = [...get().formInputCertifications];
			let deleteCertifications = [...get().toDeleteCertifications];
			if (values[pos].id != 0){
				deleteCertifications.push(values[pos])
			}
			values.splice(pos, 1);
			set({toDeleteCertifications:deleteCertifications});
			set({ formInputCertifications: values });
		}
	},
	updateFormInput: (property, index, value) => {
		let newData = get().formInputCertifications.map((item, i) => {
			if (index == i) {
				return { ...item, [property]: value };
			} else {
				return item;
			}
		});
		set({ formInputCertifications: newData });
	},
}));