import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { type AxiosResponse } from 'axios';

import { USER_API_URL } from '~/entities/api.const';
import { type User } from '~/store/user/user.slice';

import { accessToken, axiosAuthorizationInstance } from './axiosInstance';
import {
  type SetEmailData,
  type SetEmailResponse,
  type SetPasswordData,
  type SetPasswordResponse,
  type SetResetPasswordData,
  type SetResetPasswordResponse
} from './fetch.type';

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

export const setEmailFetch = async (
  data: SetEmailData,
  signal?: AbortSignal
): Promise<SetEmailResponse> => {
  try {
    const response: AxiosResponse<SetEmailResponse> =
      await axiosAuthorizationInstance.post(
        `${USER_API_URL}/auth/users/set_email/`,
        data,
        { signal }
      );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const setPasswordFetch = async (
  data: SetPasswordData,
  signal?: AbortSignal
): Promise<SetPasswordResponse> => {
  try {
    const response: AxiosResponse<SetPasswordResponse> =
      await axiosAuthorizationInstance.post(
        `${USER_API_URL}/auth/users/set_password/`,
        data,
        { signal }
      );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const resetPasswordFetch = async (
  data: SetResetPasswordData,
  signal?: AbortSignal
): Promise<SetResetPasswordResponse> => {
  try {
    const response: AxiosResponse<SetResetPasswordResponse> = await axios.post(
      `${USER_API_URL}/auth/users/reset_password/`,
      data,
      { signal }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
