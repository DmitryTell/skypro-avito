import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const AUTH_DATA = 'auth-data';

interface IUserState {
  access: string | null;
  refresh: string | null;
  isAuth: boolean;
  username: string | null;
}

const initialState: IUserState = {
  access: null,
  refresh: null,
  isAuth: false,
  username: null,
};

const getAuthDataFromLocalStoreage = () => {
  const savedData = localStorage.getItem(AUTH_DATA);
  const data = savedData ? JSON.parse(savedData) as IUserState : initialState;

  return data;
};

export const userSlice = createSlice({
  name: 'user',
  initialState: getAuthDataFromLocalStoreage(),
  reducers: {
    setNewToken(state, action: PayloadAction<{ token: {
      access: string;
      refresh: string;
      isAuth: boolean;
    }; }>) {
      const { token } = action.payload;

      state.access = token.access;
      state.refresh = token.refresh;
      state.isAuth = token.isAuth;

      localStorage.setItem(AUTH_DATA, JSON.stringify(state));
    },
    setUserName(state, action: PayloadAction<{ username: string }>) {
      const { username } = action.payload;

      if (!username) {
        state.username = null;
      }

      state.username = username;

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

export const { setNewToken, removeAuthData, setUserName } = userSlice.actions;
