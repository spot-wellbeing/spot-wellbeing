import React from 'react';
import cn from 'classnames';

import './styles.scss';

const Image = ({
  img,
  className,
}) => {
  const { imgUrl, webpUrl, alt } = img;

  return (
    <picture className={cn(
      'img',
      className,
    )}>
      {webpUrl && <source srcset={webpUrl} type="image/webp" />}
      <source srcset={imgUrl} type="image/jpeg" /> 
      <img src={imgUrl} alt={alt} />
    </picture>
  );
};

export default Image;
