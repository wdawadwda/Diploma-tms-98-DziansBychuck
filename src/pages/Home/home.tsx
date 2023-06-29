import { SubscribeForm } from '~/features/Form/SubscribeForm/subscribeForm';
import { ListContent } from '~/features/ListContent/listContent';
import { useGetBooksQuery } from '~/store/api/posts/posts.api';

import Style from './home.module.scss';
import Styles from '../page.module.scss';
// import { useSearchParams } from 'react-router-dom';
const page = 1;
export const HomePage = () => {
  // const [searchParameters, setSearchParameters] = useSearchParams();
  const { data } = useGetBooksQuery(
    // +(searchParameters.get('page') || 1)
    page
  );
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
