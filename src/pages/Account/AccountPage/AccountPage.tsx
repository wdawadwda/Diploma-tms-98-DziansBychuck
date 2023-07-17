import { Account } from '~/features/Account/Account/Account';

import Style from '../account.module.scss';

export const AccountPage = () => {
  return (
    <div className={Style.accountContainer}>
      <Account />
    </div>
  );
};
