import { configureStore } from '@reduxjs/toolkit';

import { adsApi, adsSlice, userSlice } from '../slices';


export const store = configureStore({
  reducer: {
    [adsApi.reducerPath]: adsApi.reducer,
    ads: adsSlice.reducer,
    user: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(adsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
