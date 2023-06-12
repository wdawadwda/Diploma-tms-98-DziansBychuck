import * as Yup from 'yup';

import { emailValidationSchema, passwordValidationSchema } from '../validation';

export const formikPropertiesSubscribe = {
  initialValues: {
    email: '',
    password: '',
    isValid: false,
    dirty: false
  },
  validationSchema: Yup.object({
    email: emailValidationSchema,
    password: passwordValidationSchema
  }),
  validateOnChange: true,
  validateOnBlur: true
};
