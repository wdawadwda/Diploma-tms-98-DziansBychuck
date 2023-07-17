import { createFormikProperties } from '../FormUtils';
import { emailValidationSchema, passwordValidationSchema } from '../validation';

export const formikPropertiesSignIn = createFormikProperties({
  email: emailValidationSchema,
  password: passwordValidationSchema
});
