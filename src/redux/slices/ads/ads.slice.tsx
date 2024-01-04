import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IAd } from '@interface/';


interface IAds {
  allAds: IAd[];
  searchText: string;
  isOpenedModal: boolean;
}

const initialState: IAds = {
  allAds: [],
  searchText: '',
  isOpenedModal: false,
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
    setIsOpenedModal(state, action: PayloadAction<{ isOpenedModal: boolean }>) {
      const { isOpenedModal } = action.payload;

      state.isOpenedModal = isOpenedModal;
    },
  },
});

export const { setSearchText, setAllAds, setIsOpenedModal } = adsSlice.actions;
