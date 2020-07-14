import React from 'react';
import { Helmet } from 'react-helmet';
import ContentRow from '../components/ContentRow/index';
import ContactForm from '../components/ContactForm';

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
        </div>
        <ContactForm />
      </ContentRow>
    </main>
  </>
);

export default ContactUsPage;
