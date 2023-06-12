import {
  type ReactElement,
  type ButtonHTMLAttributes,
  type PropsWithChildren
} from 'react';

import classNames from 'classnames';

import buttonStyles from './button.module.scss';
import { ButtonAppearance, type ButtonAppearances } from './button.types';

export const Button = ({
  appearance = ButtonAppearance.Primary,
  children,
  isFullWidth = false,
  contentLeft = null,
  contentRight = null,
  ...passThroughProperties
}: PropsWithChildren<
  {
    appearance?: ButtonAppearances;
    isFullWidth?: boolean;
    contentLeft?: ReactElement | null;
    contentRight?: ReactElement | null;
  } & ButtonHTMLAttributes<HTMLButtonElement>
>) => {
  return (
    <button
      {...passThroughProperties}
      className={`${passThroughProperties.className || ''} ${classNames({
        [buttonStyles.btn]: true,
        [buttonStyles[appearance]]: true
      })}`}
      style={{
        ...passThroughProperties.style,
        width: isFullWidth ? '100%' : passThroughProperties.style?.width
      }}
    >
      {contentLeft && <div className={buttonStyles.icon}>{contentLeft}</div>}
      {children}
      {contentRight && <div className={buttonStyles.icon}>{contentRight}</div>}
    </button>
  );
};
