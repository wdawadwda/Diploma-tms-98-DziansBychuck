import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { type Book } from '~/entities/books.type';
import { type RootState } from '~/store/store.types';

export const useSearchPage = () => {
  const { query, page } = useParams<{ query: string; page: string }>();
  const searchQuery = decodeURIComponent(query || 'Что-то пошло не так');
  let pageNumber = Number.parseInt(page || '1', 10);
  const books: Book[] | null = useSelector(
    (state: RootState) => state.books.books
  );
  const total: number | undefined = useSelector((state: RootState) =>
    state.books.total ? Number.parseInt(state.books.total, 10) : undefined
  );

  if (pageNumber < 1 || Number.isNaN(pageNumber)) {
    pageNumber = 1;
  }

  return {
    searchQuery,
    pageNumber,
    books,
    total
  };
};
