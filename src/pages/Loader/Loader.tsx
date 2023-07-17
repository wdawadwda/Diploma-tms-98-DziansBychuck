import { useEffect, useState } from 'react';

import { PacmanLoader } from 'react-spinners';

import Style from './loader.module.scss';
import { getLoaderSize } from './loader.utils';

export const Loader = () => {
  const [loaderSize, setLoaderSize] = useState(getLoaderSize());

  useEffect(() => {
    const handleResize = () => {
      setLoaderSize(getLoaderSize());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className={Style.container}>
      <PacmanLoader
        className={Style.pacman}
        color="var(--book--loader-color)"
        size={loaderSize}
        speedMultiplier={5}
      />
    </div>
  );
};
