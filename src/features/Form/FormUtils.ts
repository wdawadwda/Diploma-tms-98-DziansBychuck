import * as Yup from 'yup';

export const createFormikProperties = (
  fields: Record<string, Yup.StringSchema> = {}
) => {
  const initialValues = {
    ...fields
  };

  const validationSchema: Record<string, Yup.StringSchema> = {};

  for (const [fieldName, fieldSchema] of Object.entries(fields)) {
    validationSchema[fieldName] = fieldSchema;
  }

  return {
    initialValues: Object.keys(initialValues).reduce(
      (accumulator: Record<string, string>, key) => {
        accumulator[key] = '';
        return accumulator;
      },
      {}
    ),
    validationSchema: Yup.object(validationSchema),
    validateOnChange: true,
    validateOnBlur: true
  };
};
