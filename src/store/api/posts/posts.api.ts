import { baseApi } from '~/store/api';

import { type BookResponse } from './post.type';

export const { useGetBooksQuery } = baseApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (build) => ({
    getBooks: build.query<BookResponse, void>({
      query: () => ({
        url: '/new'
      })
    })
  })
});
