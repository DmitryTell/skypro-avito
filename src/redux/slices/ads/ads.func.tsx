import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IAd } from '@interface/';


export const adsApi = createApi({
  reducerPath: 'adsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  tagTypes: ['Ads'],
  endpoints: (builder) => ({
    getAllAds: builder.query<IAd[], number>({
      query: () => '/ads',
      providesTags: ['Ads'],
    }),
    getAdById: builder.query<IAd, string>({
      query: (id: string) => `/ads/${id}`,
    }),
  }),
});

export const {
  useGetAllAdsQuery, useGetAdByIdQuery
} = adsApi;
