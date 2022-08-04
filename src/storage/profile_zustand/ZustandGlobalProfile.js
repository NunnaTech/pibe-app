import create from 'zustand';

export const useStoreGeneralProfile = create((set, get) => ({
	republicStates: [],
	email: '',
	flag: false,
	profile: {
		birthDate: '2022-08-01',
		completed: true,
		firstName: '',
		gender: 'N',
		image: 'Nothing',
		name: '',
		phoneNumber: '',
		position: 'Nothing',
		secondName: '',
		state: {
			id: 1,
			name: 'Aguascalientes',
		},
	},
	setRepublicStates: (data) => set({ republicStates: data }),
	setProfile: (obj) => set({profile:obj}),
	setValuesProfile: (key, value) => {
		let newProfile = get().profile;
		newProfile[key] = value;
		set({ profile: newProfile });
	},
	setEmailValue: (e) => set({ email: e }),
	setFlag: (newFlag) => set({ flag: newFlag }),
}));
