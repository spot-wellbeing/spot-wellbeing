import React from 'react';
import cn from 'classnames';

import './styles.scss';

const TeamProfile = ({
  imgUrl,
  name,
  position,
  className,
  children,
}) => (
  <div className={cn(
    'team-profile',
    className,
  )}>
    <img src={imgUrl} className="team-profile__img full-width" />
    <div className="team-profile__header container">
      <h2>{name}</h2>
      <h3>{position}</h3>
    </div>
    <div className="team-profile__description container">
      <p>
        {children}
      </p>
    </div>
  </div>
);

export default TeamProfile;
