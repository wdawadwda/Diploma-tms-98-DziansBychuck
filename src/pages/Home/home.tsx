import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { ListContent } from '~/features/Content/ListContent/ListContent';
import { SubscribeForm } from '~/features/Form/SubscribeForm/SubscribeForm';
import { useGetBooksQuery } from '~/store/api/book/book.api';
import { bookActions } from '~/store/book/book.slice';

import { total } from './home.const';
import Style from './home.module.scss';
import Styles from '../page.module.scss';

export const HomePage = () => {
  const dispatch = useDispatch();
  const { data } = useGetBooksQuery();
  const books = data?.books?.slice(0, total) ?? null;

  useEffect(() => {
    if (books) {
      dispatch(bookActions.setBooks(books));
    }
  }, [books, dispatch]);

  return (
    <>
      <span className={Styles.title}>New Releases Books</span>
      {books === null ? (
        <div className={Styles.loading}>Loading...</div>
      ) : (
        <div className={Style.bookContainer}>
          <ListContent books={books} />
        </div>
      )}
      <SubscribeForm />
    </>
  );
};
