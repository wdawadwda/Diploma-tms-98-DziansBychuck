import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BOOK_API_URL, USER_API_URL } from '~/entities/api.const';

export const baseApi = createApi({
  // tagTypes: ['BOOK'] as const,
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BOOK_API_URL
  }),
  endpoints: () => ({})
});

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: USER_API_URL
  }),
  endpoints: () => ({})
});
