import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

import { SetEmail } from '~/features/Form/SetEmail/SetEmail';
import { SetPassword } from '~/features/Form/SetPassword/SetPassword';
import { Button } from '~/shared/ui/Button/Button';

import Style from './editProfile.module.scss';
import Styles from '../accounts.module.scss';

export const EditProfile = () => {
  const navigate = useNavigate();
  const abortController = new AbortController();

  const handleGoToAccount = () => {
    navigate('/account');
  };

  return (
    <div
      className={classNames({
        [Style.editProfileContainer]: true,
        [Styles.accContainer]: true
      })}
    >
      <div className={Style.back}>
        <Button
          appearance="secondary2"
          contentLeft={<FontAwesomeIcon icon={faArrowLeft} />}
          onClick={handleGoToAccount}
        ></Button>
      </div>
      <span className={Styles.title}>Account</span>
      <div className={Style.form}>
        <SetEmail signal={abortController.signal} />
        <SetPassword signal={abortController.signal} />
      </div>
    </div>
  );
};
