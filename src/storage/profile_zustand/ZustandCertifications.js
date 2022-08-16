import create from 'zustand';

export const useStoreCertifications = create((set, get) => ({
	formInputCertifications: [],
	objectData: {
		name: '',
		company: '',
        obtainedDate: '',
        expirationDate: '',
	},
	addForm: () => set({ formInputCertifications: [...get().formInputCertifications, get().objectData] }),
	deleteForm: (pos) => {
		if (get().formInputCertifications.length > 1) {
			let values = [...get().formInputCertifications];
			values.splice(pos, 1);
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