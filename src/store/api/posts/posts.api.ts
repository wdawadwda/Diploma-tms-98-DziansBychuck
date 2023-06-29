import { type BookResponse } from '~/entities/books.type';
import { baseApi } from '~/store/api';
export const booksApi = baseApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (build) => ({
    getBooks: build.query<BookResponse, number>({
      // providesTags: (result) =>
      //   result
      //     ? [
      //         ...result.results.map(({ isbn13 }) => ({
      //           type: 'BOOK' as const,
      //           isbn13
      //         })),
      //         { type: 'BOOK' as const, isbn13: 'LIST' }
      //       ]
      //     : [{ type: 'BOOK' as const, isbn13: 'LIST' }],
      query: (page) => ({
        url: `/new`,
        params: {
          offset: (page - 1) * 9,
          limit: 3
        }
      })
      // keepUnusedDataFor: 15
    })
  })
});

export const { useGetBooksQuery } = booksApi;
