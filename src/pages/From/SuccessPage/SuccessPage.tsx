import { SuccessForm } from '~/features/Form/SuccessForm/SuccessForm';

import { type CustomErrorSuccess } from './successError.type';
import { useRedirect } from './useRedirect';
import { useSuccessPage } from './useSuccess';
import Styles from '../form.module.scss';

export const SuccessPage = () => {
  const {
    isLoading,
    isSuccess,
    customError
  }: {
    isLoading: boolean;
    isSuccess: boolean;
    customError: CustomErrorSuccess;
  } = useSuccessPage();

  useRedirect('/registration-authentication', 5000);

  return (
    <div className={Styles.formContainer}>
      <div className={Styles.form}>
        <SuccessForm
          error={customError}
          isLoading={isLoading}
          isSuccess={isSuccess}
        />
      </div>
    </div>
  );
};
