import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const USER_STATE_DATA = 'user-state-data';

interface IUserState {
  id: number | null;
  username: string | null;
}

const initialState: IUserState = {
  id: null,
  username: null,
};

const getUserStateFromLocalStoreage = () => {
  const savedData = localStorage.getItem(USER_STATE_DATA);
  const data = savedData ? JSON.parse(savedData) as IUserState : initialState;

  return data;
};

export const userSlice = createSlice({
  name: 'user',
  initialState: getUserStateFromLocalStoreage(),
  reducers: {
    setNewUserState(state, action: PayloadAction<{ userState: IUserState }>) {
      const { userState } = action.payload;

      state.id = userState.id;
      state.username = userState.username;

      localStorage.setItem(USER_STATE_DATA, JSON.stringify(state));
    },
  },
});

export const { setNewUserState } = userSlice.actions;
