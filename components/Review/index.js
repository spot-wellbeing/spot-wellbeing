import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

import './styles.scss';

const Review = ({
  children,
  odd,
  even,
  attribution
}) => (
  <div className="review container">
    <div className="review__inner container mt-lg mb-lg">
      {odd && <FaQuoteLeft color="rgb(255, 212, 45)" size="36px" className="review__quote-mark review__quote-mark--left" />}
      {even && <FaQuoteRight color="rgb(255, 212, 45)" size="36px" className="review__quote-mark review__quote-mark--right" />}

      {children}
    </div>

    {attribution && (
      <div className="review__attribution mt-sm">
        {`- ${attribution}`}
      </div>
    )}
  </div>
);

export default Review;
