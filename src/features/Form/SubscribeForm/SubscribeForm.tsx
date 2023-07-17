import { Formik, Field, Form, ErrorMessage } from 'formik';

import { Button } from '~/shared/ui/Button/Buttons';

import {
  formikPropertiesSubscribe,
  useHandleFormSubmit
} from './subscribe.const';
import Style from './subscribeForm.module.scss';

export const SubscribeForm = () => {
  const [status, handleFormSubmit] = useHandleFormSubmit();

  return (
    <Formik
      {...formikPropertiesSubscribe}
      onSubmit={handleFormSubmit}
    >
      {({ isValid, dirty: isDirty }) => (
        <Form className={Style.container}>
          {status !== 'success' && (
            <>
              <h3>Subscribe to Newsletter</h3>
              <span>
                Be the first to know about new IT books, upcoming releases,
                exclusive offers and more.
              </span>
              <div className={Style.inputContainer}>
                <Field
                  type="text"
                  name="email"
                  placeholder="Your email"
                  disabled={status === 'loading'}
                />
                <Button
                  appearance="secondary2"
                  type="submit"
                  disabled={!isDirty || !isValid || status === 'loading'}
                >
                  {status === 'loading' ? 'Submitting...' : 'Subscribe'}
                </Button>
              </div>
            </>
          )}
          {status === 'success' && (
            <div className={Style.successMessage}>
              Form submitted successfully!
            </div>
          )}
          {status !== 'success' && (
            <ErrorMessage
              name="email"
              component="div"
              className={Style.errorMessage}
            />
          )}
          {status === 'error' && (
            <div className={Style.errorMessage}>Попробуйте ещё раз</div>
          )}
        </Form>
      )}
    </Formik>
  );
};
