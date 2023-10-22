import React from 'react';
import { bool } from 'prop-types';
import cn from 'classnames';
import Image from '../Image/index.js';

const ContentRow = ({
  isOdd,
  isEven,
  title,
  note,
  img,
  className,
  children,
}) => (
  <div className={cn(
    'content-row row',
    {
      'content-row--odd': isOdd,
      'content-row--even': isEven,
    },
    className,
  )}>
    {img && (
      <div className="content-row__header">
        <Image img={img} className="content-row__header__img full-width" />
      </div>
    )}
    <div className="content-row__body container">
      {title && (
        <div className="content-row__header__title text-align-center container">
          {title && <h2 className="text-align-center">{title}</h2>}
          {note && <p>{note}</p>}
        </div>
      )}
      {children}
    </div>
  </div>
);

ContentRow.defaultProps = {
  isEven: false,
  isOdd: false,
};

ContentRow.propTypes = {
  isEven: bool,
  isOdd: bool,
};

export default ContentRow;
