import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Field, Form, Formik } from 'formik';

import { Button } from '~/shared/ui/Button/Buttons';

import { formSchemaSearchBar } from './form.schema';
import { formikPropertiesSearchBar } from './searchBar.const';
import Style from './searchBar.module.scss';
import { useSearchBar } from './useSearchBar';

export const SearchBar = ({
  toggleAside = () => {
    console.warn('');
  }
}) => {
  const { isLoading, handleFormSubmit } = useSearchBar(toggleAside);

  return (
    <>
      <Formik
        {...formikPropertiesSearchBar}
        onSubmit={handleFormSubmit}
      >
        {({ dirty: isDirty, isValid }) => (
          <Form className={Style.container}>
            {formSchemaSearchBar.map((field) => (
              <Field
                key={field.name}
                type={field.type}
                id={field.name}
                name={field.name}
                placeholder={field.placeholder}
              />
            ))}
            <Button
              appearance="primary"
              contentLeft={<FontAwesomeIcon icon={faMagnifyingGlass} />}
              type="submit"
              disabled={!isDirty || !isValid || isLoading}
            ></Button>
          </Form>
        )}
      </Formik>
    </>
  );
};
