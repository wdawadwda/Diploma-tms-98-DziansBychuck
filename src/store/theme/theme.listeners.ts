import { createListenerMiddleware } from '@reduxjs/toolkit';

import { themeActions } from './theme.slice';
import { userActions } from '../user/user.slice';

export const listenerMiddlewareTheme = createListenerMiddleware();

listenerMiddlewareTheme.startListening({
  matcher: themeActions.changeTheme.match,
  effect: ({ payload }) => {
    document.body.dataset.themeMode = payload === 'dark' ? 'dark' : 'light';
  }
});

listenerMiddlewareTheme.startListening({
  matcher: userActions.logout.match,
  effect: () => {
    document.body.dataset.themeMode = 'light';
    localStorage.setItem('themeMode', 'light');
  }
});

listenerMiddlewareTheme.startListening({
  matcher: themeActions.setThemeFromLocalStorage.match,
  effect: () => {
    const themeMode = localStorage.getItem('themeMode');
    document.body.dataset.themeMode = themeMode === 'dark' ? 'dark' : 'light';
  }
});
