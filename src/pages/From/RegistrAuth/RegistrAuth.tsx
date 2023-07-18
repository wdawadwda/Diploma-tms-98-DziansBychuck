import { Tabs } from '~/shared/ui/Tabs/Tab';
import { useTabs } from '~/shared/ui/Tabs/useTabs';

import { type FormState, tabs } from './registrAuth.type';
import { getActiveForm } from './registrAuth.utils';
import Styles from '../form.module.scss';

export const RegistrAuth = () => {
  const { activeTab, handleTabClick } = useTabs<FormState>(tabs[0]);

  const activeForm: JSX.Element | null = getActiveForm(activeTab);

  return (
    <div className={Styles.formContainer}>
      <div className={Styles.form}>
        <Tabs
          activeTab={activeTab}
          tabs={tabs}
          handleTabClick={handleTabClick}
        />
        {activeForm}
      </div>
    </div>
  );
};
