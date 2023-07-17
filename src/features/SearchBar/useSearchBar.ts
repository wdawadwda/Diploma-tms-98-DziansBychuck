import { useState, useEffect } from 'react';

import { type FormikHelpers } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

import { useSearchBooksWithPageQuery } from '~/store/api/book/book.api';
import { bookActions } from '~/store/book/book.slice';

import { type FormValues } from '../Form/form.type';

export const useSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const { data, isLoading } = useSearchBooksWithPageQuery(
    { searchQuery, page },
    {
      skip: searchQuery === ''
    }
  );
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleFormSubmit = (
    values: FormValues,
    formikBag: FormikHelpers<FormValues>
  ) => {
    if (values.search !== undefined) {
      setSearchQuery(values.search);
      setPage(1);
      formikBag.resetForm();
      navigate(`/search/${encodeURIComponent(values.search)}/1`);
    }
  };

  useEffect(() => {
    const searchParameters = new URLSearchParams(location.search);
    const query = searchParameters.get('query');
    const pageParameter = searchParameters.get('page');
    const pathname = location.pathname;
    if (pathname.startsWith('/search/')) {
      const pathParts = pathname.split('/');
      if (pathParts.length >= 4) {
        const searchQueryFromPath = decodeURIComponent(pathParts[2]);
        const pageFromPath = Number.parseInt(pathParts[3], 10);
        setSearchQuery(searchQueryFromPath);
        setPage(pageFromPath);
      }
    }
    if (query) {
      setSearchQuery(query);
    }
    if (pageParameter) {
      setPage(Number.parseInt(pageParameter, 10));
    }
  }, [location.pathname, location.search]);

  useEffect(() => {
    if (data) {
      dispatch(bookActions.setBooks(data.books));
      if (data.total) {
        dispatch(bookActions.setTotal(data.total));
      }
    }
  }, [data, dispatch]);

  return {
    isLoading,
    handleFormSubmit
  };
};
