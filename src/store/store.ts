import { configureStore } from '@reduxjs/toolkit';

import { baseApi, userApi } from './api';
import { rootReducer } from './rootReduser';
import { listenerMiddlewareUser } from './user/user.listeners';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend(baseApi.middleware)
      .prepend(userApi.middleware)
      .prepend(listenerMiddlewareUser.middleware),
  devTools: import.meta.env.DEV
});
