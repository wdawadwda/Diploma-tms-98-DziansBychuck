import { createFormikProperties } from '~/features/Form/FormUtils';
import { searchValidationSchema } from '~/features/Form/validation';

export const formikPropertiesSearchBar = createFormikProperties({
  search: searchValidationSchema
});
