import axiosCore, { type AxiosError, type AxiosResponse } from 'axios';

import { USER_API_URL } from '~/entities/api.const';

export const axiosAuthorizationInstance = axiosCore.create();

export let accessToken = localStorage.getItem('@user/access-token');
export const refreshToken = localStorage.getItem('@user/refresh-token');

const MAX_RETRY_ATTEMPTS = 1;

let retryCount = 0;
interface Access {
  access: string;
}
const handleRequestError = async (error: AxiosError) => {
  if (
    error.response &&
    error.response.status === 401 &&
    refreshToken &&
    retryCount < MAX_RETRY_ATTEMPTS
  ) {
    retryCount++;
    const { data } = await axiosAuthorizationInstance.post<Access>(
      `${USER_API_URL}auth/jwt/refresh/`,
      { refresh: refreshToken }
    );

    const newAccessToken = data.access;

    localStorage.setItem('@user/access-token', newAccessToken);
    accessToken = newAccessToken;

    const originalRequest = error.config;
    if (originalRequest) {
      return axiosAuthorizationInstance(originalRequest);
    } else {
      throw new Error('Оригинальный запрос не найден');
    }
  }
  throw error;
};

axiosAuthorizationInstance.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
});

axiosAuthorizationInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error) => handleRequestError(error)
);
