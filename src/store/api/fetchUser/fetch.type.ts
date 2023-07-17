export interface SetEmailData {
  current_password: string;
  new_email: string;
}

export interface SetEmailResponse {
  new_email: string[];
  current_password: string[];
}

export interface SetPasswordData {
  new_password: string;
  current_password: string;
}

export interface SetPasswordResponse {
  new_email: string[];
  current_password: string[];
}

export interface SetResetPasswordData {
  email: string;
}

export interface SetResetPasswordResponse {
  email: string;
}

export interface Access {
  access: string;
}
