import { userApi } from '~/store/api';

import {
  type ActivateEmailPayload,
  type CreateTokenPayload,
  type JWTToken,
  type SignUp,
  type SignUpResponse
} from './user.type';

export const {
  useCreateTokensMutation,
  useCreateUserMutation,
  useActivateEmailMutation,
  endpoints: { createTokens }
} = userApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (build) => ({
    createTokens: build.mutation<JWTToken, CreateTokenPayload>({
      query: (payload: CreateTokenPayload) => ({
        url: '/auth/jwt/create/',
        method: 'POST',
        body: payload
      })
    }),
    createUser: build.mutation<SignUpResponse, SignUp>({
      query: (data) => ({
        url: '/auth/users/',
        method: 'POST',
        body: data
      })
    }),
    activateEmail: build.mutation<void, ActivateEmailPayload>({
      query: (payload: ActivateEmailPayload) => ({
        url: '/auth/users/activation/',
        method: 'POST',
        body: payload
      })
    })
  })
});
