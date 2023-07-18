import { combineReducers } from '@reduxjs/toolkit';

import { baseApi, userApi } from './api';
import { booksSlice } from './book/book.slice';
import { navbarSlice } from './navbar/navbar.slice';
import { themeSlice } from './theme/theme.slice';
import { userSlice } from './user/user.slice';

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [userSlice.name]: userSlice.reducer,
  [themeSlice.name]: themeSlice.reducer,
  [booksSlice.name]: booksSlice.reducer,
  [navbarSlice.name]: navbarSlice.reducer
});
