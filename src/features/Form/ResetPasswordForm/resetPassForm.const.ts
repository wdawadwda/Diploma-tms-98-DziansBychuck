import { createFormikProperties } from '../FormUtils';
import { emailValidationSchema } from '../validation';

export const formikPropertiesResetPass = createFormikProperties({
  email: emailValidationSchema
});
