import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AUTH_DATA } from '@utils/';


interface IAuthState {
  access: string | null;
  refresh: string | null;
  isAuth: boolean;
}

const initialState: IAuthState = {
  access: null,
  refresh: null,
  isAuth: false,
};

const getAuthDataFromLocalStoreage = () => {
  const savedData = localStorage.getItem(AUTH_DATA);
  const data = savedData ? JSON.parse(savedData) as IAuthState : initialState;

  return data;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: getAuthDataFromLocalStoreage(),
  reducers: {
    setNewToken(state, action: PayloadAction<{ token: IAuthState }>) {
      const { token } = action.payload;

      state.access = token.access;
      state.refresh = token.refresh;
      state.isAuth = token.isAuth;

      localStorage.setItem(AUTH_DATA, JSON.stringify(state));
    },
    removeAuthData(state) {
      state.access = null;
      state.refresh = null;
      state.isAuth = false;

      localStorage.clear();
    },
  },
});

export const { setNewToken, removeAuthData } = authSlice.actions;
