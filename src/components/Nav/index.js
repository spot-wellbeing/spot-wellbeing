import React from 'react';
import cn from 'classnames';
import Link from 'next/link';

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
    <Link href="/" className="mb-md">Home</Link>
    <Link href="/services" className="mb-md">Services</Link>
    <Link href="/our-team" className="mb-md">Our Team</Link>
    <Link href="/contact-us" className="mb-md">Contact Us</Link>
  </nav>
);

export default Nav;
