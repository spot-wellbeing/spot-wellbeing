import React from 'react';
import Link from 'next/link';
import { FaPhoneSquareAlt, FaFacebookSquare, FaEnvelope } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer">
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
            <Link href="/">Home</Link>
            <Link href="/services" className="mb-md">Services</Link>
            <Link href="/our-team" className="mb-md">Our Team</Link>
            <Link href="/contact-us" className="mb-md">Contact Us</Link>
          </nav>
        </div>
        <div className="footer__contact-info">
          <p>Get in touch:</p>
          <Link href="tel:07598678505" className="footer__contact-info__link mb-md">
            <FaPhoneSquareAlt size="24px" className="mr-sm" />
            <span>07598 678505</span>
          </Link>
          <Link href="mailto:spotwellbeing@gmail.com" className="footer__contact-info__link mb-md">
            <FaEnvelope size="24px" className="mr-sm" />
            <span>spotwellbeing@gmail.com</span>
          </Link>
          <Link
            href="https://www.facebook.com/SPOT-Wellbeing-105738034457282"
            className="footer__contact-info__link"
            target="_blank"
            rel="noopener"
          >
            <FaFacebookSquare size="24px" className="mr-sm" />
            <span>Find us on Facebook</span>
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
