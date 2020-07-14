import React from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { FaPhoneSquareAlt, FaFacebookSquare, FaEnvelope } from 'react-icons/fa';

import './styles.scss';

const Footer = ({ className }) => (
  <footer className={cn('footer', className)}>
    <div className="footer__main-content row">
      <div>
        <p>
          SPOT Wellbeing is a non-profit community interest company and all our
          services are free of charge. This is a service for adults over the age
          of 18.
        </p>
      </div>
      <div className="footer__links">
        <div>
          <p>Pages:</p>
          <nav className="footer__nav">
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
        </div>
        <div className="footer__contact-info">
          <p>Get in touch:</p>
          <Link href="tel:07598678505">
            <a className="footer__contact-info__link mb-md">
              <FaPhoneSquareAlt size="24px" className="mr-sm" />
              <span>07598 678505</span>
            </a>
          </Link>
          <Link href="mailto:spotwellbeing@gmail.com">
            <a className="footer__contact-info__link mb-md">
              <FaEnvelope size="24px" className="mr-sm" />
              <span>spotwellbeing@gmail.com</span>
            </a>
          </Link>
          <Link href="https://www.facebook.com/SPOT-Wellbeing-105738034457282">
            <a
              className="footer__contact-info__link"
              target="_blank"
              rel="noopener"
            >
              <FaFacebookSquare size="24px" className="mr-sm" />
              <span>Find us on Facebook</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
    <div className="text-align-center footer__copyright">
      <p><span className="footer__copyright__text--light">© 2020 Copyright:</span> SPOT Wellbeing<span className="footer__copyright__text--light"> || Website by <a href="mailto:ghrodwell@gmail.com">Guy Hunter-Rodwell</a></span></p>
    </div>
  </footer>
);

export default Footer;
