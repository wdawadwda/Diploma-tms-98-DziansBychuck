import axiosCore from 'axios';

export const axiosAuthorizationInstance = axiosCore.create();

export const accessToken = localStorage.getItem('@blog/access-token');
export const refreshToken = localStorage.getItem('@blog/refresh-token');
//TODO: если токены протухли сделать логаут
axiosAuthorizationInstance.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
});
