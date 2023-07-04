import { baseApi } from './api';

export const rootReducer = {
  [baseApi.reducerPath]: baseApi.reducer
};
