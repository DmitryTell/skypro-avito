import {
  BaseQueryApi, FetchArgs, createApi, fetchBaseQuery, BaseQueryFn, FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';

import { IUser, IRequestChangeUser } from '@interface/';

import { setNewToken, removeAuthData } from './user.slice';

import type { RootState } from '@redux/';


interface IRefreshResultData {
  access_token: string;
  refresh_token: string;
  token_type: string;
}

const baseQueryWithReauth:
BaseQueryFn<FetchArgs | string, unknown, FetchBaseQueryError, Record<string, unknown>> = async (
  args: FetchArgs | string,
  api: BaseQueryApi,
  extraOptions: Record<string, unknown>,
) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.access;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  });

  const result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status !== 401) {
    return result;
  }

  const forceLogout = () => {
    api.dispatch(removeAuthData());
    window.location.replace('/login');
  };

  const { user } = api.getState() as RootState;

  if (!user.access || !user.refresh) {
    forceLogout();

    return result;
  }

  const refreshResult = await baseQuery(
    {
      url: '/auth/login/',
      method: 'PUT',
      body: {
        access_token: user.access,
        refresh_token: user.refresh,
      },
    },
    api,
    extraOptions,
  );
  const data = refreshResult.data as IRefreshResultData;

  if (!data.access_token || !data.refresh_token || refreshResult.error) {
    forceLogout();

    return refreshResult;
  }

  api.dispatch(setNewToken({
    token: {
      access: data.access_token,
      refresh: data.refresh_token,
      isAuth: true,
    }
  }));

  const retryResult = await baseQuery(args, api, extraOptions);

  if (retryResult?.error?.status === 401) {
    forceLogout();

    return retryResult;
  }

  return retryResult;
};

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQueryWithReauth,
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
  }),
});

export const { useGetUserQuery, useChangeUserDataMutation } = userApi;
