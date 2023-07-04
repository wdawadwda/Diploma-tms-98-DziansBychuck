import { createListenerMiddleware } from '@reduxjs/toolkit';

import { userActions } from './user.slice';
import { createTokens } from '../api/user/user.api';

export const listenerMiddlewareUser = createListenerMiddleware();

listenerMiddlewareUser.startListening({
  matcher: createTokens.matchFulfilled,
  effect: ({ payload }) => {
    localStorage.setItem('@blog/access-token', payload.access);
    localStorage.setItem('@blog/refresh-token', payload.refresh);
  }
});

listenerMiddlewareUser.startListening({
  matcher: userActions.logout.match,
  effect: () => {
    localStorage.removeItem('@blog/access-token');
    localStorage.removeItem('@blog/refresh-token');
  }
});
