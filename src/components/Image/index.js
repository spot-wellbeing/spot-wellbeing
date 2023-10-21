import React from 'react';
import cn from 'classnames';

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
      {webpUrl && <source srcSet={webpUrl} type="image/webp" />}
      <source srcSet={imgUrl} type="image/jpeg" /> 
      <img src={imgUrl} alt={alt} />
    </picture>
  );
};

export default Image;
