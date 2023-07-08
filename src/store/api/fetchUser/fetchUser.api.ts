import { createAsyncThunk } from '@reduxjs/toolkit';

import { USER_API_URL } from '~/entities/api.const';
import { type User } from '~/store/user/user.slice';

import { accessToken, axiosAuthorizationInstance } from './axiosInstance';

export const fetchUser = createAsyncThunk(
  'user/fetch',
  async function (_, thunkAPI) {
    if (!accessToken) {
      throw new Error('Unauthorized');
    }
    const { data } = await axiosAuthorizationInstance.get<User>(
      `${USER_API_URL}auth/users/me/`,
      {
        signal: thunkAPI.signal
      }
    );

    return data;
  }
);
