import { useParams } from 'react-router-dom';

import { useGetBookDetailsByISBNQuery } from '~/store/api/book/book.api';

import { type CustomError } from './bookDetail.type';

export const useBookDetail = () => {
  const { isbn13 = '' } = useParams();
  const { data, error, isLoading } = useGetBookDetailsByISBNQuery(isbn13);
  const customError = error as CustomError;

  return {
    data,
    customError,
    isLoading
  };
};
