import { combineReducers } from '@reduxjs/toolkit';

import { baseApi, userApi } from './api';
import { ThemeSlice } from './theme/theme.slice';
import { userSlice } from './user/user.slice';

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [userSlice.name]: userSlice.reducer,
  [ThemeSlice.name]: ThemeSlice.reducer
});
