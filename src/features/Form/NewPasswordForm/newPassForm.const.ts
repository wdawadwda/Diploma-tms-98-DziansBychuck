import { createFormikProperties } from '../FormUtils';
import {
  confirmPasswordValidationSchema,
  passwordValidationSchema
} from '../validation';

export const formikPropertiesNewPass = createFormikProperties({
  password: passwordValidationSchema,
  confirmPassword: confirmPasswordValidationSchema
});
