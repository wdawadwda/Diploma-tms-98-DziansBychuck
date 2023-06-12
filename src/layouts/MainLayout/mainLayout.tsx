import { Outlet } from 'react-router-dom';

import { Footer } from '~/features/Layout/Footer/footer';
import { Navbar } from '~/features/Layout/Navbar/navbar';

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
