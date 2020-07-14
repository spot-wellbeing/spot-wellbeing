import React from 'react';
import cn from 'classnames';

import './styles.scss';

const Button = ({
  className,
  primary,
  secondary,
  disabled,
  type,
  children,
  id,
}) => (
  <button
    className={cn(
      'btn',
      {
        'btn--primary': primary,
        'btn--secondary': secondary,
      },
      className,
    )}
    disabled={disabled}
    type={type}
    id={id}
  >
    {children}
  </button>
);

export default Button;
