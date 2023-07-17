import { createListenerMiddleware } from '@reduxjs/toolkit';

import { userActions } from './user.slice';
import { createTokens } from '../api/user/user.api';

export const listenerMiddlewareUser = createListenerMiddleware();

listenerMiddlewareUser.startListening({
  matcher: createTokens.matchFulfilled,
  effect: ({ payload }) => {
    localStorage.setItem('@user/access-token', payload.access);
    localStorage.setItem('@user/refresh-token', payload.refresh);
  }
});

listenerMiddlewareUser.startListening({
  matcher: userActions.logout.match,
  effect: () => {
    localStorage.removeItem('@user/access-token');
    localStorage.removeItem('@user/refresh-token');
  }
});
