import { type CustomErrorProperties } from './error.type';
import Styles from '../../form.module.scss';

export const CustomErrorMessages = ({ customError }: CustomErrorProperties) => {
  return (
    <div className={Styles.detailСontainer}>
      <span className={Styles.detail}>{`${customError.status} Упс ...`}</span>
      {customError.data.username &&
        customError.data.username.map((errorMessage, index) => (
          <span
            className={Styles.detail}
            key={index}
          >
            {errorMessage}
          </span>
        ))}
      {customError.data.email &&
        customError.data.email.map((errorMessage, index) => (
          <span
            className={Styles.detail}
            key={index}
          >
            {errorMessage}
          </span>
        ))}
      {customError.data.password &&
        customError.data.password.map((errorMessage, index) => (
          <span
            className={Styles.detail}
            key={index}
          >
            {errorMessage}
          </span>
        ))}
    </div>
  );
};
