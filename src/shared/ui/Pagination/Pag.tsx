import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

import Style from './pag.module.scss';
import { type PaginationProperties } from './pag.type';
import { Button } from '../Button/Button';

export const Pagination = ({
  query,
  currentPage,
  total
}: PaginationProperties) => {
  let pageNumber = currentPage;
  const itemsPerPage = 10;
  const totalPages = total ? Math.ceil(total / itemsPerPage) : 0;
  const navigate = useNavigate();

  if (pageNumber < 1 || Number.isNaN(pageNumber)) {
    pageNumber = 1;
  }

  const goToPage = (page: number) => {
    if (query) {
      navigate(`/search/${query}/${page}`);
    }
  };

  const previousPage = pageNumber > 1 ? pageNumber - 1 : undefined;
  const nextPage = pageNumber < totalPages ? pageNumber + 1 : undefined;

  return (
    <div className={Style.pagination}>
      <Button
        appearance="secondary2"
        contentLeft={<FontAwesomeIcon icon={faArrowLeft} />}
        onClick={() => previousPage && goToPage(previousPage)}
        disabled={!previousPage}
      >
        Prev
      </Button>
      <div className={Style.page}>
        {currentPage > 1 && (
          <>
            <a onClick={() => goToPage(1)}>1</a>
            {currentPage !== 1 && <span>&nbsp;</span>}
          </>
        )}
        {currentPage === totalPages && (
          <>
            <span className={Style.default}>...</span>
            <span>&nbsp;</span>
          </>
        )}
        <span className={Style.currentPage}>{currentPage}</span>
        {currentPage < totalPages && (
          <>
            <span>&nbsp;</span>
            {currentPage + 1 < totalPages && (
              <a onClick={() => goToPage(currentPage + 1)}>{currentPage + 1}</a>
            )}
            <span>&nbsp;</span>
            {currentPage + 2 < totalPages && (
              <a onClick={() => goToPage(currentPage + 2)}>{currentPage + 2}</a>
            )}
            {currentPage + 2 < totalPages && (
              <>
                <span>&nbsp;</span>
                <span className={Style.default}>...</span>
                <span>&nbsp;</span>
              </>
            )}
            {currentPage + 2 === totalPages && (
              <>
                <span className={Style.default}>...</span>
                <span>&nbsp;</span>
              </>
            )}
            {currentPage + 1 === totalPages && (
              <>
                <span className={Style.default}>...</span>
                <span>&nbsp;</span>
              </>
            )}
            <a onClick={() => goToPage(totalPages)}>{totalPages}</a>
          </>
        )}
      </div>
      <Button
        appearance="secondary2"
        contentRight={<FontAwesomeIcon icon={faArrowRight} />}
        onClick={() => nextPage && goToPage(nextPage)}
        disabled={!nextPage}
      >
        Next
      </Button>
    </div>
  );
};
