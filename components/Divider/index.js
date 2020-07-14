import React from 'react';
import cn from 'classnames';

import './styles.scss';

const Divider = ({
  className
}) => (
  <hr 
    className={cn(
      'divider mv-xxl',
      className,
    )}
  />
);

export default Divider;
