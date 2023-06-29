import { ErrorMessage, Field, Form, Formik } from 'formik';

import { Button } from '~/shared/ui/Button/button';

import { formSchema } from './form.schema';
import { formikPropertiesSubscribe } from './signInForm.const';
import Style from './signInForm.module.scss';
import Styles from '../form.module.scss';
import { type FormValues } from '../form.type';

const handleFormSubmit = ({ email, password }: FormValues) => {
  console.warn('Form values:', { email, password });
};

export const SignInForm = () => {
  return (
    <div className={Styles.formСontainer}>
      <Formik
        {...formikPropertiesSubscribe}
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
            <a className={Style.resetLink}>Forgot password ?</a>
            <Button
              isFullWidth={true}
              appearance="primary"
              type="submit"
              disabled={!isDirty || !isValid}
            >
              sign in
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
