import { SignInForm } from '~/features/Form/SignInForm/signInForm';
import { SignUpForm } from '~/features/Form/SignUpForm/signUpFrom';

import { type FormState } from './registrAuth.type';

export function getActiveForm(activeTab: FormState) {
  switch (activeTab) {
    case 'sign in': {
      return <SignInForm />;
    }
    case 'sign up': {
      return <SignUpForm />;
    }
    default: {
      return null;
    }
  }
}
