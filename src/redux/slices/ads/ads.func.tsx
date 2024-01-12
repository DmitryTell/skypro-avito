import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IAd, IComment, IRequestNewAd } from '@interface/';

import { apiBaseSlice } from '../api-base-reauth';


export const adsApi = createApi({
  reducerPath: 'adsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  tagTypes: ['Ads', 'Comments'],
  endpoints: (builder) => ({
    getAllAds: builder.query<IAd[], void>({
      query: () => '/ads',
      providesTags: ['Ads'],
    }),
    getAdById: builder.query<IAd, string>({
      query: (id: string) => `/ads/${id}`,
    }),
    getCommentsById: builder.query<IComment[], string>({
      query: (id: string) => `/ads/${id}/comments`,
      providesTags: ['Comments'],
    }),
    getSellerAdsByUserId: builder.query<IAd[], string>({
      query: (userId: string) => `/ads?user_id=${userId}`,
      providesTags: ['Ads'],
    }),
  }),
});

export const adsProtectedApi = apiBaseSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUserAds: builder.query<IAd[], void>({
      query: () => '/ads/me',
      providesTags: ['Ads'],
    }),
    createNewAd: builder.mutation({
      query: ({ body }: { body: IRequestNewAd }) => ({
        url: '/adstext',
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    changeCurrentAd: builder.mutation({
      query: (args: { body: IRequestNewAd; id: number }) => ({
        url: `/ads/${args.id}`,
        method: 'PATCH',
        body: args.body,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    addImageToAdv: builder.mutation({
      query: (args: { formData: object; id: number }) => ({
        url: `/ads/${args.id}/image`,
        method: 'POST',
        body: args.formData,
      }),
    }),
    deleteCurrentAd: builder.mutation({
      query: (id: number) => ({
        url: `/ads/${id}`,
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    deleteImageFromAdv: builder.mutation({
      query: (args: { url: string; id: number }) => ({
        url: `/ads/${args.id}/image?file_url=${args.url}`,
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});

export const {
  useGetAllAdsQuery,
  useGetAdByIdQuery,
  useGetCommentsByIdQuery,
  useGetSellerAdsByUserIdQuery,
} = adsApi;

export const {
  useGetCurrentUserAdsQuery,
  useCreateNewAdMutation,
  useChangeCurrentAdMutation,
  useAddImageToAdvMutation,
  useDeleteCurrentAdMutation,
  useDeleteImageFromAdvMutation,
} = adsProtectedApi;
