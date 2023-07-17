import { type CustomErrorSuccess } from '~/pages/From/SuccessPage/successError.type';

import Styles from '../form.module.scss';

export const SuccessForm = ({
  error,
  isLoading,
  isSuccess
}: {
  error: CustomErrorSuccess;
  isLoading: boolean;
  isSuccess: boolean;
}) => {
  return (
    <div className={Styles.formСontainer}>
      <div className={Styles.title}>Подтверждение регистрации</div>
      {error && (
        <div className={Styles.detailСontainer}>
          <span
            className={Styles.detail}
          >{`${error.status} ${error.data.detail}`}</span>
        </div>
      )}
      {isLoading && (
        <div className={Styles.detailСontainer}>
          <span className={Styles.detail}>{`Loading...`}</span>
        </div>
      )}
      {isSuccess && (
        <div className={Styles.detailСontainer}>
          <span className={Styles.detail}>{`Почта успешно активирована`}</span>
        </div>
      )}
    </div>
  );
};
