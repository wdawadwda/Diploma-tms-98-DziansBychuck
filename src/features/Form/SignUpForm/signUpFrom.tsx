import { ErrorMessage, Field, Form, Formik } from 'formik';

import { Button } from '~/shared/ui/Button/Button';

import { CustomErrorMessages } from './Error/CustomErrorSignUpForm';
import { formSchema } from './form.schema';
import { formikPropertiesSignUp } from './signUpForm.const';
import { useSignUpForm } from './useSignUp';
import Styles from '../form.module.scss';

export const SignUpForm = () => {
  const { isLoading, error, isSuccess, customError, handleFormSubmit } =
    useSignUpForm();

  return (
    <div className={Styles.formСontainer}>
      {error && <CustomErrorMessages customError={customError} />}
      {isSuccess && (
        <div className={Styles.detailСontainer}>
          <span className={Styles.detail}>{`Проверьте вашу почту`}</span>
        </div>
      )}
      <Formik
        {...formikPropertiesSignUp}
        onSubmit={handleFormSubmit}
      >
        {({ dirty: isDirty, isValid }) => (
          <Form>
            {formSchema.map((field) => (
              <div
                className={Styles.field}
                key={field.name}
              >
                <label htmlFor={field.name}>{`${field.label} *`}</label>
                <Field
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                />
                <ErrorMessage
                  className={Styles.errorMessage}
                  name={field.name}
                  component="div"
                />
              </div>
            ))}
            <Button
              isFullWidth={true}
              appearance="primary"
              type="submit"
              disabled={!isDirty || !isValid || isLoading}
            >
              {isLoading ? 'Signing up...' : 'Sign up'}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
