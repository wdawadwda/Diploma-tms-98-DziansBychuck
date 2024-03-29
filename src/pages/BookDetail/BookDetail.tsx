import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

import { BookDetailContent } from '~/features/Content/BookDetailContent/BookDetailContent';
import { Button } from '~/shared/ui/Button/Buttons';

import Style from './bookDetail.module.scss';
import { useBookDetail } from './useBookDetail';
import Styles from '../page.module.scss';

export const BookDetail = () => {
  const { data, customError, isLoading } = useBookDetail();

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className={Style.bookDetailContainer}>
      <div className={Style.btnWrapper}>
        <Button
          appearance="secondary2"
          onClick={goBack}
          contentLeft={<FontAwesomeIcon icon={faArrowLeft} />}
        ></Button>
      </div>
      {isLoading ? (
        <div className={Styles.loading}>Loading...</div>
      ) : (
        <>
          {customError && (
            <div className={Styles.error}>
              <div>Status: {customError.status}</div>
              <div>Error: {customError.error}</div>
            </div>
          )}
          {data && <BookDetailContent bookDetail={data} />}
        </>
      )}
    </div>
  );
};
