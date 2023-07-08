import { ResetPasswordForm } from '~/features/Form/ResetPasswordForm/ResetPassForm';

import Styles from '../form.module.scss';

export const ResetPassword = () => {
  return (
    <div className={Styles.formContainer}>
      <div className={Styles.form}>
        <ResetPasswordForm />
      </div>
    </div>
  );
};
