import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IAd, IComment } from '@interface/';


interface IAds {
  allAds: IAd[];
  comments: IComment[];
  searchText: string;
  isOpenedComments: boolean;
  isOpenedChangingPassword: boolean;
  isOpenedNewAdv: boolean;
  isOpenedEditAdv: boolean;
}

const initialState: IAds = {
  allAds: [],
  comments: [],
  searchText: '',
  isOpenedComments: false,
  isOpenedChangingPassword: false,
  isOpenedNewAdv: false,
  isOpenedEditAdv: false,
};

export const adsSlice = createSlice({
  name: 'ads',
  initialState,
  reducers: {
    setAllAds(state, action: PayloadAction<{ ads: IAd[] }>) {
      const { ads } = action.payload;

      state.allAds = ads;
    },
    setComments(state, action: PayloadAction<{ comments: IComment[] }>) {
      const { comments } = action.payload;

      state.comments = comments;
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
    setIsOpenedNewAdv(state, action: PayloadAction<{ isOpenedNewAdv: boolean }>) {
      const { isOpenedNewAdv } = action.payload;

      state.isOpenedNewAdv = isOpenedNewAdv;
    },
    setIsOpenedEditAdv(state, action: PayloadAction<{ isOpenedEditAdv: boolean }>) {
      const { isOpenedEditAdv } = action.payload;

      state.isOpenedEditAdv = isOpenedEditAdv;
    },
  },
});

export const {
  setSearchText,
  setAllAds,
  setComments,
  setIsOpenedComments,
  setIsOpenedChangingPassword,
  setIsOpenedNewAdv,
  setIsOpenedEditAdv,
} = adsSlice.actions;
