import { Outlet } from 'react-router-dom';

import { Footer } from '~/features/Layout/Footer/Footer';
import { Navbar } from '~/features/Layout/Navbar/Navbar';
import { ScrollToTopButton } from '~/shared/ui/ScrollToTopButton/ScrollToTopButton';

import layoutStyles from './mainLayout.module.scss';
import { useScrollToTopButton } from './useScrollToTopButton';

export const MainLayout = () => {
  const { isShowScrollButton, mainReference } = useScrollToTopButton();

  return (
    <div className={layoutStyles.container}>
      <Navbar />
      <main ref={mainReference}>
        <div className={layoutStyles.mainContent}>
          <Outlet />
        </div>
      </main>
      <Footer />
      {isShowScrollButton && <ScrollToTopButton />}
    </div>
  );
};
