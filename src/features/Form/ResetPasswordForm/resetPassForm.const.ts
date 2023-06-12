import * as Yup from 'yup';

import { emailValidationSchema } from '../validation';

export const formikPropertiesSubscribe = {
  initialValues: {
    email: '',
    isValid: false,
    dirty: false
  },
  validationSchema: Yup.object({
    email: emailValidationSchema
  }),
  validateOnChange: true,
  validateOnBlur: true
};
