import { Outlet } from 'react-router-dom';

import { Footer } from '~/features/Footer/footer';
import { Navbar } from '~/features/Navbar/navbar';

import layoutStyles from './mainLayout.module.scss';
export const MainLayout = () => {
  return (
    <div className={layoutStyles.container}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
