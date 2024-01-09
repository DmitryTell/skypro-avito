import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IAd } from '@interface/';


interface IAds {
  allAds: IAd[];
  searchText: string;
  isOpenedComments: boolean;
  isOpenedChangingPassword: boolean;
}

const initialState: IAds = {
  allAds: [],
  searchText: '',
  isOpenedComments: false,
  isOpenedChangingPassword: false,
};

export const adsSlice = createSlice({
  name: 'ads',
  initialState,
  reducers: {
    setAllAds(state, action: PayloadAction<{ ads: IAd[] }>) {
      const { ads } = action.payload;

      state.allAds = ads;
    },
    setSearchText(state, action: PayloadAction<{ searchText: string }>) {
      const { searchText } = action.payload;

      state.searchText = searchText;
    },
    setIsOpenedComments(state, action: PayloadAction<{ isOpenedComments: boolean }>) {
      const { isOpenedComments } = action.payload;

      state.isOpenedComments = isOpenedComments;
    },
    setIsOpenedChangingPassword(state, action: PayloadAction<{ isOpenedChangingPassword: boolean }>) {
      const { isOpenedChangingPassword } = action.payload;

      state.isOpenedChangingPassword = isOpenedChangingPassword;
    },
  },
});

export const {
  setSearchText,
  setAllAds,
  setIsOpenedComments,
  setIsOpenedChangingPassword,
} = adsSlice.actions;
