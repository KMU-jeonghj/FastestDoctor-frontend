import { create } from 'zustand';
import { UserType } from '../types/user.type';

interface UserState {
  userInfo: UserType | null;
  setUserInfo: (user: UserType) => void;
  clearUserInfo: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  userInfo: null,
  setUserInfo: (userInfo) => set({ userInfo }),
  clearUserInfo: () => set({ userInfo: null }),
}));