import create from "zustand";
import { persist } from "zustand/middleware";

export const useStoreSession = create(
	persist(
		(set, get) => ({
			userSession: {authorities: [
					{
						authority: "hola",
					}
				]},
			token:"",
			addUserSession: (obj) => set({ userSession: obj }),
			addToken: (tk) => set({token:tk}),
		}),
		{
			name: "authenticate-storage",
			getStorage: () => sessionStorage,
		}
	)
);

export const useStoreLogin = create((set, get) => ({
	username: "",
	password: "",
	disabled: false,
	setUserName: (newEmail) => set({ username: newEmail }),
	setPasswordUser: (newPassword) => set({ password: newPassword }),
	setDisabledButton: (flag) => set({disabled:flag})
}));