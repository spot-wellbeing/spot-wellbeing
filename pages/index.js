import React from 'react';
import { Helmet } from 'react-helmet';
import Image from '../components/Image/index';
import ContentRow from '../components/ContentRow/index';

const Home = () => (
  <>
    <Helmet>
      <title>SPOT Wellbeing - Home</title>
      <meta
        name="description"
        content="Improve and maintain your wellbeing. Free physiotherapy and occupational therapy, to support mental and physical health, and reduce loneliness and isolation."
      />
    </Helmet>

    <main>
      <section className="desktop-split-row">
        <Image
          img={{
            imgUrl: '/img/spot-team.jpg',
            webpUrl: '/img/spot-team.webp',
            alt: 'The SPOT Wellbeing team: Lynn, John & Holly',
          }}
          className="banner"
        />
        <div className="container text-align-center vertical-center">
          <h1 role="heading" aria-level="1">
            Welcome to SPOT Wellbeing
          </h1>
          <h2 role="heading" aria-level="2">
            Community Interest Company
          </h2>
          <p>
            <span className="text-strong">SPOT Wellbeing</span> is a team of{' '}
            <span className="text-strong">Occupational Therapists</span> and{' '}
            <span className="text-strong">Physiotherapists</span> working with
            adults in Suffolk to improve and maintain their{' '}
            <span className="text-strong">mental and physical wellbeing</span>,
            promote healthy living and prevent ill health. We are a{' '}
            <span className="text-strong">non-profit</span> organisation and all
            of our services are free of charge.
          </p>
          <p>
            We work with you to identify goals and support you to achieve them.
          </p>
        </div>
      </section>
      <ContentRow
        odd
        title="Our Mission"
        img={{
          imgUrl: '/img/leaflets.jpg',
          webpUrl: '/img/leaflets.webp',
          alt: 'SPOT Wellbeing leaflets',
        }}
        className="bg-alternative"
      >
        <p>
          <span className="text-bold">S</span>upport people’s physical and
          mental wellbeing through a holistic service designed and delivered by
          professionals.
        </p>
        <p>
          <span className="text-bold">P</span>revent ill health: poor mental and
          physical wellbeing, falls, isolation and loneliness, through
          education, intervention and bringing communities together.
        </p>
        <p>
          <span className="text-bold">O</span>ne service: a service which works
          with the whole person, their mental and physical health, social and
          environmental factors.
        </p>
        <p>
          <span className="text-bold">T</span>each each other: people are
          experts, professionals are experts. We can work together towards a
          healthier, safer Suffolk.
        </p>
      </ContentRow>
    </main>
  </>
);

export default Home;
