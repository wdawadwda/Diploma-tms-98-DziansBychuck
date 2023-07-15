import { createListenerMiddleware } from '@reduxjs/toolkit';

import { userActions } from '../user/user.slice';

export const listenerMiddlewareBook = createListenerMiddleware();

listenerMiddlewareBook.startListening({
  matcher: userActions.logout.match,
  effect: () => {
    localStorage.removeItem('bookLikes');
    localStorage.removeItem('bookCart');
  }
});
