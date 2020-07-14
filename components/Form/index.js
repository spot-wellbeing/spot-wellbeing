import React from 'react';
import cn from 'classnames';

import './styles.scss';

const Form = ({
  className,
  children,
  onSubmit,
}) => (
  <form
    className={cn(
      'form',
      className,
    )}
    onSubmit={onSubmit}
  >
    {children}
  </form>
);

export default Form;
