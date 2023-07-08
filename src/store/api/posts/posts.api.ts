import { type BookResponse } from '~/entities/books.type';
import { baseApi } from '~/store/api';
export const booksApi = baseApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (build) => ({
    getBooks: build.query<BookResponse, number>({
      query: (page) => ({
        url: `/new`,
        params: {
          offset: (page - 1) * 9,
          limit: 3
        }
      })
    })
  })
});

export const { useGetBooksQuery } = booksApi;
