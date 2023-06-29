import { NewPasswordForm } from '~/features/Form/NewPasswordForm/newPassForm';

import Styles from '../form.module.scss';

export const NewPassword = () => {
  return (
    <div className={Styles.formContainer}>
      <div className={Styles.form}>
        <NewPasswordForm />
      </div>
    </div>
  );
};
