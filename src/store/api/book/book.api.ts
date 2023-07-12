import { baseApi } from '~/store/api';

import { type BookResponse } from './book.type';
//TODO: Удалить закомментированное если не нужно будет
export const {
  useGetBooksQuery,
  // useSearchBooksQuery,
  useSearchBooksWithPageQuery
} = baseApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (build) => ({
    getBooks: build.query<BookResponse, void>({
      query: () => ({
        url: '/new'
      })
    }),
    // searchBooks: build.query<BookResponse, string>({
    //   query: (searchQuery) => ({
    //     url: `/search/${searchQuery}`
    //   })
    // }),
    searchBooksWithPage: build.query<
      BookResponse,
      { searchQuery: string; page?: number }
    >({
      query: ({ searchQuery, page = 1 }) => ({
        url: `/search/${searchQuery}/${page}`
      })
    })
  })
});
