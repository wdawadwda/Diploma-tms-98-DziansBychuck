import { baseApi } from '~/store/api';

import { type BookDetailsResponse, type BookResponse } from './book.type';

export const {
  useGetBooksQuery,
  useSearchBooksWithPageQuery,
  useGetBookDetailsByISBNQuery
} = baseApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (build) => ({
    getBooks: build.query<BookResponse, void>({
      query: () => ({
        url: '/new'
      })
    }),
    searchBooksWithPage: build.query<
      BookResponse,
      { searchQuery: string; page?: number }
    >({
      query: ({ searchQuery, page = 1 }) => ({
        url: `/search/${searchQuery}/${page}`
      })
    }),
    getBookDetailsByISBN: build.query<BookDetailsResponse, string>({
      query: (isbn) => ({
        url: `/books/${isbn}`
      })
    })
  })
});
