import React, { useState } from 'react';
import cn from 'classnames';
import Link from 'next/link';

const Menu = ({
  className,
}) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleSetMenuIsOpen = () => {
    menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true);
  };

  return (
    <div className={cn(
      className,
      'menu',
    )}>
      <div
        onClick={handleSetMenuIsOpen}
        className={cn(
          'menu__hamburger mb-xs text-align-center',
          {
            'menu__hamburger--closed': !menuIsOpen,
            'menu__hamburger--open': menuIsOpen,
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
        <Link href="/" className="mb-md" onClick={handleSetMenuIsOpen}>Home</Link>
        <Link href="/services" className="mb-md" onClick={handleSetMenuIsOpen}>Services</Link>
        <Link href="/our-team" className="mb-md" onClick={handleSetMenuIsOpen}>Our Team</Link>
        <Link href="/reviews" className="mb-md" onClick={handleSetMenuIsOpen}>Reviews</Link>
        <Link href="/contact-us" className="mb-md" onClick={handleSetMenuIsOpen}>Contact Us</Link>
      </nav>
    </div>
  );
}

export default Menu;
