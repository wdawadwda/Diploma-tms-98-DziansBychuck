import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { fetchUser } from '../api/fetchUser/fetchUser.api';
import { type JWTToken } from '../api/user/user.type';

export interface ErrorObject {
  statusErr: string | number;
  detail: string;
  message: string;
}
export interface User {
  username: string;
  id: number;
  email: string;
}
export interface UserSlice {
  currentUser:
    | { status: 'idle' }
    | { status: 'loading' }
    | { status: 'success'; data: User }
    | { status: 'error'; error: string };
  tokens:
    | { status: 'idle' }
    | { status: 'loading' }
    | { status: 'success'; data: JWTToken }
    | { status: 'error'; error: string };
  error: ErrorObject | null;
}

const getInitialState = (): UserSlice => {
  const access = localStorage.getItem('@user/access-token');
  const refresh = localStorage.getItem('@user/refresh-token');

  return {
    currentUser: { status: 'idle' },
    tokens:
      access && refresh
        ? { status: 'success', data: { access, refresh } }
        : { status: 'idle' },
    error: null
  };
};

export const userSlice = createSlice({
  name: 'user',
  initialState: getInitialState(),
  reducers: {
    logout: (state) => {
      state.currentUser = { status: 'idle' };
    },
    setTokens: (state, action: PayloadAction<JWTToken>) => {
      state.tokens = { status: 'success', data: action.payload };
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.currentUser = { status: 'idle' };
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.currentUser = { status: 'success', data: action.payload };
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      if (action.error.name === 'AbortError') {
        return;
      }

      state.tokens = {
        status: 'error',
        error: action.error.message || 'Something went wrong'
      };
    });
  }
});

export const { actions: userActions } = userSlice;
