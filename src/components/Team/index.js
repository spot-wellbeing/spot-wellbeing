import React from 'react';
import cn from 'classnames';

const Team = ({
  className,
  children,
}) => (
  <div className={cn(
    'team',
    className,
  )}>
    {children}
  </div>
);

export default Team;
