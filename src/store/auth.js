import { create } from "zustand";

const useAuthStore = create((set) => ({
  isLoggedIn: false,
  user: null,
  login: (userData) => set({ isLoggedIn: true, user: userData }),
  logout: () => set({ isLoggedIn: false, user: null }),
}));

export default useAuthStore;
