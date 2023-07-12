import { ListContent } from '~/features/ListContent/ListContent';
import { Pagination } from '~/shared/ui/Pagination/Pag';

import Style from './searchPage.module.scss';
import { useSearchPage } from './useSearchPage';
import Styles from '../page.module.scss';

export const SearchPage = () => {
  const { searchQuery, pageNumber, books, total } = useSearchPage();
  return (
    <>
      <span className={Styles.title}>{`'${searchQuery}' Search results`}</span>
      {books === null ? (
        <div className={Styles.loading}>Loading...</div>
      ) : (
        <>
          <div className={Style.bookContainer}>
            <ListContent books={books} />
          </div>
          <Pagination
            query={searchQuery}
            currentPage={pageNumber}
            total={total}
          />
        </>
      )}
    </>
  );
};
