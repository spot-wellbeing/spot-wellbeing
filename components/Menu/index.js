import React, { useState } from 'react';
import cn from 'classnames';
import Link from 'next/link';

import './styles.scss';

const Menu = ({
  className,
}) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleSetMenuIsOpen = () => {
    menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true);
  };

  return (
    <div className={cn(
      'menu',
      className,
    )}>
      <div
        onClick={handleSetMenuIsOpen}
        className={cn(
          'menu__hamburger mb-xs text-align-center',
          {
            'menu__hamburger--open': menuIsOpen,
            'menu__hamburger--closed': !menuIsOpen,
          },
        )}
        role="button"
        aria-label="Open close main menu on mobile device"
      >
        <div className="full-width"></div>
        <div className="full-width"></div>
        <div className="full-width"></div>
        <span>
          {menuIsOpen ? 'Close' : 'Menu'}
        </span>
      </div>
      <nav
        className={cn(
          'menu__nav',
          {
            'open': menuIsOpen,
            'closed': !menuIsOpen,
          },
        )}
        role="navigation"
        aria-label="Main Navigation"
      >
        <Link href="/">
          <a className="mb-md" onClick={handleSetMenuIsOpen}>Home</a>
        </Link>
        <Link href="/services">
          <a className="mb-md" onClick={handleSetMenuIsOpen}>Services</a>
        </Link>
        <Link href="/our-team">
          <a className="mb-md" onClick={handleSetMenuIsOpen}>Our Team</a>
        </Link>
        <Link href="/news">
          <a className="mb-md" onClick={handleSetMenuIsOpen}>News &amp; Events</a>
        </Link>
        <Link href="/reviews">
          <a className="mb-md" onClick={handleSetMenuIsOpen}>Reviews</a>
        </Link>
        <Link href="/contact-us">
          <a className="mb-md" onClick={handleSetMenuIsOpen}>Contact Us</a>
        </Link>
      </nav>
    </div>
  );
}

export default Menu;
