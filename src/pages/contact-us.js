import React from 'react';
import Head from 'next/head';
import ContentRow from '../components/ContentRow/index';
import ContactForm from '../components/ContactForm';
import Link from 'next/link';
import { FaPhoneSquareAlt, FaEnvelope } from 'react-icons/fa';

const ContactUsPage = () => (
  <>
    <Head>
      <title>SPOT Wellbeing - Contact Us</title>
      <meta
        name="description"
        content="Contact the SPOT Wellbeing team for more information on starting your journey to improve your physical and mental health, and reduce isolation and loneliness."
      />
    </Head>

    <main>
      <div className="container text-align-center bg-blue">
        <h1 role="heading" aria-level="1">Contact Us</h1>
      </div>
      <ContentRow className="text-align-center">
        <div className="container">
          <p>
            Please contact us if you have any questions or enquiries for SPOT Wellbeing.
          </p>
          <Link href="tel:07598678505" className="contact-info__link mb-md">
            <FaPhoneSquareAlt size="24px" className="mr-sm" color="#5EB2D4" />
            <span>07598 678505</span>
          </Link>
          <Link href="mailto:spotwellbeing@gmail.com" className="contact-info__link mb-md">
            <FaEnvelope size="24px" className="mr-sm" color="#5EB2D4" />
            <span>spotwellbeing@gmail.com</span>
          </Link>
        </div>
        <ContactForm />
      </ContentRow>
    </main>
  </>
);

export default ContactUsPage;
