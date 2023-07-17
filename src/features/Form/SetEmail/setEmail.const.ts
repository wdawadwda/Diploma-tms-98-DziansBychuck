import { createFormikProperties } from '~/features/Form/FormUtils';
import {
  emailValidationSchema,
  passwordValidationSchema
} from '~/features/Form/validation';

export const formikPropertiesSetEmail = createFormikProperties({
  current_password: passwordValidationSchema,
  new_email: emailValidationSchema
});
