import React from 'react';
import cn from 'classnames';

import './styles.scss';

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
