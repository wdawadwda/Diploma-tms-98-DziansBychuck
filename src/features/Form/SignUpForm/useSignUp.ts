import { useCreateUserMutation } from '~/store/api/user/user.api';

import { type CustomErrorSignUp } from './Error/error.type';
import { type FormValues } from '../form.type';

export const useSignUpForm = () => {
  const [signUp, { isLoading, error, isSuccess }] = useCreateUserMutation();
  const customError = error as CustomErrorSignUp;

  const handleFormSubmit = async (values: FormValues) => {
    try {
      const signUpData = {
        username: values.name as string,
        email: values.email as string,
        password: values.password as string
      };

      const response = await signUp(signUpData).unwrap();

      console.warn('User created:', response);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return { isLoading, error, isSuccess, customError, handleFormSubmit };
};
