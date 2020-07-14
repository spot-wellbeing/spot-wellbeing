import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import Menu from '../Menu/index';
import Image from '../Image/index';

import './styles.scss';

const Header = ({
  className,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleSetIsScrolled = () => {
    if (window.pageYOffset === 0 && isScrolled) setIsScrolled(false);
    if (window.pageYOffset > 0 && !isScrolled) setIsScrolled(true);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleSetIsScrolled);
  });

  return (
    <header className={cn(
      'header',
      {
        'scrolled': isScrolled,
      },
      className,
    )}>
      <Link href="/">
        <a>
          <Image
            className="header__logo"
            img={
              {
                imgUrl: '/img/spot-wellbeing-768.png',
                webpUrl: '/img/spot-wellbeing-768.webp',
                alt: 'SPOT Wellbeing logo',
              }
            }
          />
        </a>
      </Link>
      <Menu />
    </header>
  );
};

export default Header;
