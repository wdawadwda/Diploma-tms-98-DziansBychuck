import { Button } from '~/shared/ui/Button/button';

import Style from './subscribeForm.module.scss';
//TODO: Сделать инпут, заменить на компонент
export const SubscribeForm = () => {
  return (
    <form className={Style.container}>
      <h3>Subscribe to Newsletter</h3>
      <span>
        Be the first to know about new IT books, upcoming releases, exclusive
        offers and more.
      </span>
      <div className={Style.inputContainer}>
        <input
          type="text"
          placeholder="Your email"
        />
        <Button>Subscribe</Button>
      </div>
    </form>
  );
};
