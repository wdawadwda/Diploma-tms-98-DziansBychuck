import { configureStore } from '@reduxjs/toolkit';

import { baseApi } from './api';
import { rootReducer } from './rootReduser';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(baseApi.middleware),
  devTools: import.meta.env.DEV
});
