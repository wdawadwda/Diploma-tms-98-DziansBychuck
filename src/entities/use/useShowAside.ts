import { useState } from 'react';

export const useAside = (isInitialState = false) => {
  const [isShowAside, setShowAside] = useState(isInitialState);

  const toggleAside = () => {
    setShowAside((isPreviousState) => !isPreviousState);
  };

  return {
    isShowAside,
    toggleAside
  };
};
