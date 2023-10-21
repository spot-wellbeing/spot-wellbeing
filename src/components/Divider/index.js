import React from 'react';
import cn from 'classnames';

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
