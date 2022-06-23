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
            alt: 'The SPOT Wellbeing team receiving an award',
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
            We are a team of Occupational Therapists and Physiotherapists working with
            adults over 50 in Suffolk to empower people to improve and maintain
            their mental and physical wellbeing. We promote healthy living and support
            people to prevent ill health.
          </p>
          <p>
            We listen to you, learn about what's important and meaningful to you and help 
            you to improve your quality of life.
          </p>
          <p>
            We are holistic - and will support you with many different factors that impact
            on your health and wellbeing.
          </p>
          <p>
            We understand that what wellbeing is, is different for every individual. We
            want to work with you to find out what might improve your wellbeing.
          </p>
          <p>
            We are a non-profit organisation, and all our services are free of charge.
          </p>
        </div>
      </section>
      <ContentRow
        odd
        title="Our Mission"
        img={{
          imgUrl: '/img/advice.jpg',
          webpUrl: '/img/advice.webp',
          alt: 'Advice infographic',
        }}
        className="bg-alternative"
      >
        <p>
          <span className="text-bold">S</span>upport people’s physical and mental wellbeing through a holistic service designed and delivered by professionals.
        </p>
        <p>
          <span className="text-bold">P</span>revent ill health: poor mental and physical wellbeing, falls, isolation and loneliness, through education, intervention and bringing communities together.
        </p>
        <p>
          <span className="text-bold">O</span>ne service: a service which works with the whole person, their mental and physical health, social and environmental factors.
        </p>
        <p>
          <span className="text-bold">T</span>each each other: people are experts, professionals are experts. We can work together towards a healthier, safer Suffolk.
        </p>
      </ContentRow>
    </main>
  </>
);

export default Home;
