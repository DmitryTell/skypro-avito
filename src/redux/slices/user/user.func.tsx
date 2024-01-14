import { IUser, IRequestChangeUser, IRequestChangePassword } from '@interface/';

import { apiBaseSlice } from '../api-base-reauth';


export const userApi = apiBaseSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<IUser, void>({
      query: () => '/user',
      providesTags: ['User'],
    }),
    changeUserData: builder.mutation({
      query: ({ body }: { body: IRequestChangeUser }) => ({
        url: '/user',
        method: 'PATCH',
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      invalidatesTags: ['User'],
    }),
    changePassword: builder.mutation({
      query: ({ body }: { body: IRequestChangePassword }) => ({
        url: '/user/password',
        method: 'PUT',
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      invalidatesTags: ['User'],
    }),
    setUserAvatar: builder.mutation({
      query: (formData: object) => ({
        url: '/user/avatar',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useGetUserQuery,
  useChangeUserDataMutation,
  useChangePasswordMutation,
  useSetUserAvatarMutation,
} = userApi;
