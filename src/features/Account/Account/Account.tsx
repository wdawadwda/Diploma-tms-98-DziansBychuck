import { Button } from '~/shared/ui/Button/Button';

import Style from './account.module.scss';
import { useAccountSettings } from './useAccount';

export const Account = () => {
  const { user, handleLogout, handleUpdateProfile } = useAccountSettings();

  return (
    <>
      {user && (
        <div className={Style.accountSettingsContainer}>
          <div className={Style.userContainer}>
            <span className={Style.title}>Здравствуйте:{user.username}</span>
            <span>Ваш ID: {user.id}</span>
            <span>Ваш Email: {user.email}</span>
          </div>
          <div className={Style.container}>
            <div>
              <Button appearance="primary">light</Button>
              <Button appearance="primary">dark</Button>
            </div>
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
