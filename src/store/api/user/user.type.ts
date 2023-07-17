export interface CreateTokenPayload {
  email: string;
  password: string;
}
export interface JWTToken {
  access: string;
  refresh: string;
}

export interface SignUp {
  username: string;
  password: string;
  email: string;
}
export interface SignUpResponse {
  username: string;
  email: string;
  id: number;
}

export type ActivateEmailPayload = {
  uid: string;
  token: string;
};
