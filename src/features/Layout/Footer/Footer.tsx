import classNames from 'classnames';

import Style from './footer.module.scss';
import StyleLayout from '../layout.module.scss';

export const Footer = () => {
  return (
    <div
      className={classNames({
        [Style.container]: true,
        [StyleLayout.container]: true
      })}
    >
      <span>©2022 Bookstore</span>
      <span>All rights reserved</span>
    </div>
  );
};
