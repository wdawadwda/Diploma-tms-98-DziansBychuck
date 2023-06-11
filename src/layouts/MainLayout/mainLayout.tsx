import { Outlet } from 'react-router-dom';

import layoutStyles from './mainLayout.module.scss';

export const MainLayout = () => {
  return (
    <div className={layoutStyles.container}>
      {/* <Navbar /> */}
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};
