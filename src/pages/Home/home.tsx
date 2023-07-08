import { SubscribeForm } from '~/features/Form/SubscribeForm/SubscribeForm';
import { ListContent } from '~/features/ListContent/ListContent';
import { useGetBooksQuery } from '~/store/api/posts/posts.api';

import Style from './home.module.scss';
import Styles from '../page.module.scss';

const page = 1;
export const HomePage = () => {
  const { data } = useGetBooksQuery(page);
  const books = data?.books ?? null;

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
