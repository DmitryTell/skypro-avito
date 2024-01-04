import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IAd, IComment } from '@interface/';


export const adsApi = createApi({
  reducerPath: 'adsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  tagTypes: ['Ads', 'Comments'],
  endpoints: (builder) => ({
    getAllAds: builder.query<IAd[], number>({
      query: () => '/ads',
      providesTags: ['Ads'],
    }),
    getAdById: builder.query<IAd, string>({
      query: (id: string) => `/ads/${id}`,
    }),
    getCommentsById: builder.query<IComment, string>({
      query: (id: string) => `/ads/${id}/comments`,
      providesTags: ['Comments'],
    }),
  }),
});

export const {
  useGetAllAdsQuery, useGetAdByIdQuery, useGetCommentsByIdQuery
} = adsApi;
