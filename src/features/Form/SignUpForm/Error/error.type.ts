import { type CustomError } from '~/entities/error.type';

export type CustomErrorSignUp = Omit<CustomError, 'data'> & {
  data: {
    username?: string[];
    email?: string[];
    password?: string[];
  };
};

export type CustomErrorProperties = {
  customError: CustomErrorSignUp;
};
