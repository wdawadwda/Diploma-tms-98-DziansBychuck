import { EditProfile } from '~/features/Account/EditProfile/EditProfile';

import Style from '../account.module.scss';

export const EditProfilePage = () => {
  return (
    <div className={Style.accountContainer}>
      <EditProfile />
    </div>
  );
};
