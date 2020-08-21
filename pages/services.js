import React from 'react';
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
        title="1:1 Sessions"
        img={
          {
            imgUrl: "/img/one-one.jpg",
            webpUrl: "/img/one-one.webp",
            alt: 'Man talking to a consultant',
          }
        }
      >
        <p>1:1 sessions are available with our physiotherapist, occupational therapist or technical instructor who have experience in both mental and physical health. Sessions can be tailored your needs, priorities, and goals. We can include support with anxiety and stress management, exercise, falls awareness, diet and nutrition advice and specific occupational and physiotherapy interventions.</p>
        <p>Currently due to COVID-19 sessions may be adapted for safety (including virtual or outdoor sessions).</p>
      </ContentRow>
      <ContentRow
        odd
        title="Health &amp; Wellbeing Groups"
        img={
          {
            imgUrl: "/img/health-wellbeing.jpg",
            webpUrl: "/img/health-wellbeing.webp",
            alt: 'People laughing and joining hands',
          }
        }
      >
        <p>Our health and wellbeing courses (50 years +) are run over a 6 week period for 1.5 hours per week. All sessions are designed by skilled NHS background health professionals to support your physical and mental wellbeing whilst making connections with others in your community.</p>
        <p>Sessions include: exercise, stress and anxiety management, falls awareness, nutrition, tasters of wellbeing activities and social opportunities.</p>
        <p>Currently unavailable due to COVID-19.</p>
      </ContentRow>
    </main>
  </>
);

export default ServicesPage;
