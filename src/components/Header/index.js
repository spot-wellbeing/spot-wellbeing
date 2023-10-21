import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import Menu from '../Menu/index.js';
import Image from '../Image/index.js';

const Header = ({
  alt,
  className,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleSetIsScrolled = () => {
    if (window.scrollY === 0 && isScrolled) setIsScrolled(false);
    if (window.scrollY > 0 && !isScrolled) setIsScrolled(true);
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
        <Image
          alt={alt}
          className="header__logo"
          img={
            {
              imgUrl: '/img/spot-wellbeing-768.png',
              webpUrl: '/img/spot-wellbeing-768.webp',
              alt: 'SPOT Wellbeing logo',
            }
          }
        />
      </Link>
      <Menu />
    </header>
  );
};

export default Header;
