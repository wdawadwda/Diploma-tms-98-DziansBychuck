import Styles from './tabs.module.scss';
import { type TabsProperties } from './tabs.types';
import { Button } from '../Button/Buttons';

export const Tabs = ({ activeTab, tabs, handleTabClick }: TabsProperties) => {
  return (
    <div className={Styles.tabs}>
      {tabs.map((tab) => (
        <Button
          key={tab}
          className={activeTab === tab ? Styles.activeTab : ''}
          appearance="secondary2"
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </Button>
      ))}
    </div>
  );
};
