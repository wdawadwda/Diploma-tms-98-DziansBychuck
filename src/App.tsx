import React from 'react';

import './App.styles.scss';
import { AppRouter } from '~/router/appRouter';

export const App = () => {
  return (
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  );
};
