import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IUser } from '@interface/';

import type { RootState } from '@redux/';


export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.access;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUser: builder.query<IUser, void>({
      query: () => '/user',
    }),
  }),
});

export const { useGetUserQuery } = userApi;
