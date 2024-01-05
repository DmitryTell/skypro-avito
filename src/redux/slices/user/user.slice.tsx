import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser } from '@interface/';


const AUTH_DATA = 'USER_STOREAGE';

interface IUserState {
  user: IUser | null;
  token_access: string | null;
  token_refresh: string | null;
}

const initialState: IUserState = {
  user: null,
  token_access: null,
  token_refresh: null,
};

const getUserStateFromLocalStoreage = () => {
  const savedData = localStorage.getItem(AUTH_DATA);
  const data = savedData ? JSON.parse(savedData) as IUserState : initialState;

  return data;
};

export const userSlice = createSlice({
  name: 'user',
  initialState: getUserStateFromLocalStoreage(),
  reducers: {
    setUser(state, action: PayloadAction<{ user: IUser }>) {
      const { user } = action.payload;

      state.user = user;
    },
  },
});

export const { setUser } = userSlice.actions;
