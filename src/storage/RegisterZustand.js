import create from "zustand";

export const useStoreRegister = create((set, get) => ({
	username: "",
    email: "",
	password: "",
    role: 0,
	disabled: false,
	setUserName: (userName) => set({ username: userName }),
	setPasswordUser: (newPassword) => set({ password: newPassword }),
    setRole: (newRole) => set({ role: newRole }),
    setEmail: (newEmail) => set({ email: newEmail }),
	setDisabledButton: (flag) => set({disabled:flag})
}));