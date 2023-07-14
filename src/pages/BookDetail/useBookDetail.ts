import { useNavigate, useParams } from 'react-router-dom';

import { useGetBookDetailsByISBNQuery } from '~/store/api/book/book.api';

import { type CustomError } from './bookDetail.type';

export const useBookDetail = () => {
  const navigate = useNavigate();
  const { isbn13 = '' } = useParams();
  const { data, error, isLoading } = useGetBookDetailsByISBNQuery(isbn13);
  const customError = error as CustomError;

  const goBack = () => {
    navigate(-1);
  };

  return {
    data,
    customError,
    isLoading,
    goBack
  };
};
