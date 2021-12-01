import React from 'react';
import Link from 'next/link';
import { Helmet } from 'react-helmet';
import ContentRow from '../components/ContentRow/index';

const ServicesPage = () => (
  <>
    <Helmet>
      <title>SPOT Wellbeing - Services</title>
      <meta
        name="description"
        content="Free 1-to-1 and group sessions delivered by health professionals to improve and maintain your wellbeing, and reduce loneliness. Occupational and physiotherapy."
      />
    </Helmet>

    <main>
      <div className="container text-align-center bg-blue">
        <h1 role="heading" aria-level="1">Services</h1>
      </div>
      <div odd className="row text-align-center mt-lg">
        <div className="container">
          <p>
            SPOT Wellbeing offers one to one and group sessions.
          </p>
          <p>
            We have adapted our services to meet the ongoing needs of people and safety precautions during COVID-19. This is continually changing so please contact us to find out how we can support your needs.
          </p>
          <p>
            All services are free to access.
          </p>
        </div>
      </div>
      <ContentRow
        even
        title="One-to-One Sessions"
        img={
          {
            imgUrl: "/img/lynn2.jpg",
            webpUrl: "/img/lynn2.webp",
            alt: 'Lynn',
          }
        }
      >
        <p>One to one sessions are available with our physiotherapist, occupational therapist or technical instructor who have experience in both mental and physical health. </p>
        <p>Sessions are tailored your needs, values, and goals.</p>
        <p>Please read our case studies to see some of the ways we support people.</p>
        <p>All our sessions are face to face and we come to your home environment. However, if you prefer to meet somewhere else or have phone / zoom sessions we can provide this.</p>
      </ContentRow>
      <ContentRow
        odd
        title="Health &amp; Wellbeing Groups"
        img={
          {
            imgUrl: "/img/group-session.jpg",
            webpUrl: "/img/group-session.webp",
            alt: 'A group session in progress',
          }
        }
      >
        <p>Our health and wellbeing groups are usually run over a 6 week period for 1.5 hours per week. All sessions are designed by skilled NHS background health professionals to support your physical and mental wellbeing whilst making connections with others in your community.</p>
        <p>All sessions are relaxed, friendly and include an exercise session, a talk and time to socialise. 90 minute session per week for 6 weeks.</p>
        <p>This is an example of a group program.</p>

        <p><strong>Week 1</strong> - | Introductions |Exercise | Benefits of exercise | Refreshments</p>
        <p><strong>Week 2</strong> - Exercise | Falls awareness | Refreshments</p>
        <p><strong>Week 3</strong> - Exercise | Mindfulness and relaxation | Refreshments</p>
        <p><strong>Week 4</strong> - Exercise | Nutrition | Refreshments</p>
        <p><strong>Week 5</strong> - Exercise | Common health conditions | Refreshments</p>
        <p><strong>Week 6</strong> - Exercise | Discussion, signposting and feedback | Refreshments</p>

        <p>Contact us via <Link href="tel:07598678505">telephone</Link> or <Link href="/contact-us">through the website</Link> for more information or to book onto a group.</p>
        <p>Keep an eye on our ‘News’ page, Facebook and Instagram for updates on where the groups are taking place.</p>
      </ContentRow>
      <ContentRow
        even
        title="Bespoke Services"
        img={
          {
            imgUrl: "/img/healthy-info.jpg",
            webpUrl: "/img/healthy-info.webp",
            alt: 'Heart health information',
          }
        }
      >
        <p>We also offer a bespoke service of group or one to one sessions tailored to your business / organisation’s needs. We have a broad range of skills to meet your requirements.</p>
        <p>Please contact us to discuss further. The heart health group is an example of a bespoke group.</p>
      </ContentRow>
      <ContentRow
        odd
        title="Moving &amp; Handling"
        img={
          {
            imgUrl: "/img/leaflet2.jpg",
            webpUrl: "/img/leaflet2.webp",
            alt: 'SPOT Wellbeing leaflet',
          }
        }
      >
        <p>We offer holistic moving and handling tuition to private carers and small organisations at competitive prices. Please contact us for more details.</p>
      </ContentRow>
    </main>
  </>
);

export default ServicesPage;
