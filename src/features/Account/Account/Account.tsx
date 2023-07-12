import classNames from 'classnames';

import { Button } from '~/shared/ui/Button/Button';
import { ThemeSwitcher } from '~/shared/ui/ThemeSwitcher/ThemeSwitcher';

import Style from './account.module.scss';
import { useAccountSettings } from './useAccount';
import Styles from '../accounts.module.scss';

export const Account = () => {
  const { user, handleLogout, handleUpdateProfile } = useAccountSettings();

  return (
    <>
      {user && (
        <div
          className={classNames({
            [Style.accountSettingsContainer]: true,
            [Styles.accContainer]: true
          })}
        >
          <div className={Style.userContainer}>
            <span
              className={classNames({
                [Style.title]: true,
                [Styles.title]: true
              })}
            >
              Здравствуйте:{user.username}
            </span>
            <span>Ваш ID: {user.id}</span>
            <span>Ваш Email: {user.email}</span>
          </div>
          <div className={Style.container}>
            <ThemeSwitcher />
            <Button
              appearance="primary"
              onClick={handleUpdateProfile}
            >
              Update Personal Information
            </Button>
          </div>
          <Button
            isFullWidth={true}
            appearance="primary"
            onClick={handleLogout}
          >
            logout
          </Button>
        </div>
      )}
    </>
  );
};
