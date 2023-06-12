import { useState } from 'react';

export const useTabs = <T>(initialTab: T) => {
  const [activeTab, setActiveTab] = useState<T>(initialTab);

  const handleTabClick = (tab: T) => {
    setActiveTab(tab);
  };

  return { activeTab, handleTabClick };
};
