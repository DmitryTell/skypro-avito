import type { RootState } from '../store';


export const getStateAds = (state: RootState) => state.ads;
export const getStateAuth = (state: RootState) => state.auth;
export const getStateUser = (state: RootState) => state.user;
