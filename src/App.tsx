import React from 'react';

import './App.styles.scss';
import { Provider } from 'react-redux';

import { AppRouter } from '~/router/appRouter';

import { store } from './store/store';

export const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </React.StrictMode>
  );
};
