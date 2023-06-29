import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BOOK_API_URL } from '~/entities/api.const';

export const baseApi = createApi({
  // tagTypes: ['BOOK'] as const,
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BOOK_API_URL
  }),
  endpoints: () => ({})
});
