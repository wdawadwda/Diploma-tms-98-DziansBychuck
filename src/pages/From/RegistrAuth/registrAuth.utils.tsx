import { SignInForm } from '~/features/Form/SignInForm/SignInForm';
import { SignUpForm } from '~/features/Form/SignUpForm/SignUpForm';

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
