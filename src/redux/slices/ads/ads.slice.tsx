import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IAd } from '@interface/';


interface IAds {
  allAds: IAd[];
  searchText: string;
}

const initialState: IAds = {
  allAds: [],
  searchText: '',
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
  },
});

export const { setSearchText, setAllAds } = adsSlice.actions;
