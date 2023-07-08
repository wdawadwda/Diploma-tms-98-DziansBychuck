import { createFormikProperties } from '~/features/Form/FormUtils';
import { passwordValidationSchema } from '~/features/Form/validation';

export const formikPropertiesSetEmail = createFormikProperties({
  new_password: passwordValidationSchema,
  current_password: passwordValidationSchema
});
