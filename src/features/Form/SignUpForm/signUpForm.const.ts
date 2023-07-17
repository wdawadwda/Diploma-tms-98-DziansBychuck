import { createFormikProperties } from '../FormUtils';
import {
  confirmPasswordValidationSchema,
  emailValidationSchema,
  nameValidationSchema,
  passwordValidationSchema
} from '../validation';

export const formikPropertiesSignUp = createFormikProperties({
  name: nameValidationSchema,
  email: emailValidationSchema,
  password: passwordValidationSchema,
  confirmPassword: confirmPasswordValidationSchema
});
