import React from 'react';
import cn from 'classnames';
import Link from 'next/link';

import './styles.scss';

const Nav = ({
  className,
  isOpen,
}) => (
  <nav
    className={cn(
      'nav',
      {
        'open': isOpen,
        'closed': !isOpen,
      },
      className,
    )}
  >
    <Link href="/">
      <a className="mb-md">Home</a>
    </Link>
    <Link href="/services">
      <a className="mb-md">Services</a>
    </Link>
    <Link href="/our-team">
      <a className="mb-md">Our Team</a>
    </Link>
    <Link href="/contact-us">
      <a className="mb-md">Contact Us</a>
    </Link>
  </nav>
);

export default Nav;
