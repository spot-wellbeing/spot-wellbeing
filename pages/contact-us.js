import React from 'react';
import { Helmet } from 'react-helmet';
import ContentRow from '../components/ContentRow/index';
import ContactForm from '../components/ContactForm';
import Link from 'next/link';
import { FaPhoneSquareAlt, FaFacebookSquare, FaEnvelope } from 'react-icons/fa';

const ContactUsPage = () => (
  <>
    <Helmet>
      <title>SPOT Wellbeing - Contact Us</title>
      <meta
        name="description"
        content="Contact the SPOT Wellbeing team for more information on starting your journey to improve your physical and mental health, and reduce isolation and loneliness."
      />
    </Helmet>

    <main>
      <div className="container text-align-center bg-blue">
        <h1 role="heading" aria-level="1">Contact Us</h1>
      </div>
      <ContentRow className="text-align-center">
        <div className="container">
          <p>
            Please contact us if you have any questions or enquiries for SPOT Wellbeing.
          </p>
          <Link href="tel:07598678505">
            <a className="contact-info__link mb-md">
              <FaPhoneSquareAlt size="24px" className="mr-sm" />
              <span>07598 678505</span>
            </a>
          </Link>
          <Link href="mailto:spotwellbeing@gmail.com">
            <a className="contact-info__link mb-md">
              <FaEnvelope size="24px" className="mr-sm" />
              <span>spotwellbeing@gmail.com</span>
            </a>
          </Link>
        </div>
        <ContactForm />
      </ContentRow>
    </main>
  </>
);

export default ContactUsPage;
