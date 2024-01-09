import { configureStore } from '@reduxjs/toolkit';

import {
  adsApi, adsSlice, userApi, authSlice, userSlice,
} from '../slices';


export const store = configureStore({
  reducer: {
    [adsApi.reducerPath]: adsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    ads: adsSlice.reducer,
    auth: authSlice.reducer,
    user: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(adsApi.middleware).concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
