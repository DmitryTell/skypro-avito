import { IUser, IRequestChangeUser, IRequestChangePassword } from '@interface/';

import { apiBaseSlice } from '../api-base-reauth';


export const userApi = apiBaseSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<IUser, void>({
      query: () => '/user',
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
    }),
  }),
});

export const {
  useGetUserQuery,
  useChangeUserDataMutation,
  useChangePasswordMutation,
} = userApi;
