import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import ContentRow from '../components/ContentRow/index';

const TeamPage = () => (
  <>
    <Head>
      <title>SPOT Wellbeing - Our Team</title>
      <meta
        name="description"
        content="Our team of physiotherapists, occupational therapists, and technical instructors have over 50 years of healthcare experience in mental and physical health."
      />
    </Head>

    <main>
      <div className="container text-align-center full-width bg-blue">
        <h1 role="heading" aria-level="1">Our Team</h1>
      </div>
      <ContentRow
        odd
        title="Lynn Sibley - Physiotherapist Bsc HCPC registered MCSP"
        note="Director and Co-Founder of Spot Wellbeing CIC, HCPC-registered Physiotherapist"
        img={
          {
            imgUrl: '/img/lynn.jpg',
            webpUrl: '/img/lynn.webp',
            alt: 'Lynn',
          }
        }
      >
        <p>I have worked in the health service for 20 years as a Physiotherapist. I started at Colchester hospital. I covered many areas including acute stroke, long term therapy, musculoskeletal, care of the elderly and worked in the community.</p>
        <p>My passion is to provide a holistic service supporting peoples mental and physical health. Providing a service which is tailored to the individuals needs and their family.</p>
        <p>I co-founded SPOT to be able to work in this way, and I can cover all aspects of care as required.</p>
        <br />
        <Link href="tel:07398796393" className="contact-info__link mb-md">
          <FaPhoneSquareAlt size="24px" className="mr-sm" />
          <span>07398 796393</span>
        </Link>
      </ContentRow>
      <ContentRow
        even
        title="Holly Simpson – Occupational Therapist, BSc, HCPC, IPCOTSS"
        note="Director and Co-Founder of Spot Wellbeing CIC, HCPC registered Occupational Therapist"
        img={
          {
            imgUrl: '/img/holly.jpg',
            webpUrl: '/img/holly.webp',
            alt: 'Holly',
          }
        }
      >
        <p>I have always loved working with people. I spent time in care homes, domiciliary care and as a 1:1 support worker for a young person with profound and multiple learning difficulties and epilepsy at school and in his family home.</p>
        <p>I qualified as an Occupational Therapist in 2013 and have worked in community therapy teams, adult mental health and in an acute unit with neurodivergent adolescents.</p>
        <p>I co-founded Spot as I wanted to be able to use all my skills and support people holistically, in a personalised way. I love developing the service and the freedom to grow the service with the needs of the people and communities we work with.</p>
      </ContentRow>
      <ContentRow
        odd
        title="John Ottaway – Technical Instructor"
        note="Director and Co-Founder of Spot Wellbeing CIC, MCSP"
        img={
          {
            imgUrl: '/img/john.jpg',
            webpUrl: '/img/john.webp',
            alt: 'John',
          }
        }
      >
        <p>Where do I start? 25+ years in and still going strong. Starting out as a healthcare assistant within a nursing home, I moved onto home care of the elderly and dementia patients followed by working on a mental health ward. I began within the NHS as a physiotherapy assistant and under the guidance of experienced physios this rapidly turned into becoming a Technical Instructor within the Community Physiotherapy team in Ipswich. Over the years I have worked within musculoskeletal clinics, in rehab teams treating long term health conditions, brain injuries and other neurological conditions as well as falls and pretty much everything else in between. As an experienced exercise instructor, I am qualified in chair based exercise, postural stability and Otago, I like to keep people on the move! My knowledge of support services in and around Ipswich is vast and over the years I have built important networks within the local healthcare community as well as social care and the voluntary sector. These links mean the people I work with always have a holistic approach with ‘what matters’ in mind. I have a special interest in anxiety, depression and mental health using my own life experience to assist and guide others. I’m passionate about helping those in need, love my work and enjoy meeting people and building relationships, it&#39;s what I do best. Sometimes all you need to do is listen. My aim is for people to stay as healthy as possible in both body and mind, managing their health conditions in the best way possible whilst maintaining their independence ...and enjoying life!.. Sometimes you’ve got to go there to come back.</p>
        <br />
        <Link href="tel:07743004515" className="contact-info__link mb-md">
          <FaPhoneSquareAlt size="24px" className="mr-sm" />
          <span>07743 004515</span>
        </Link>
      </ContentRow>
      <ContentRow
        even
        title="Daisy - Business Support"
        img={
          {
            imgUrl: '/img/daisy.jpg',
            webpUrl: '/img/daisy.webp',
            alt: 'Daisy',
          }
        }
      >
        <p>Daisy helps us to organise and insure the smooth running of all our Health and Wellbeing groups across the county. Daisy has previous experience working with charities and councils. Daisy has a degree in Society, Culture and Media.</p>
      </ContentRow>
      <ContentRow
        odd
        title="Jane - Health &amp; Wellbeing Support Partner"
        img={
          {
            imgUrl: '/img/jane.jpg',
            webpUrl: '/img/jane.webp',
            alt: 'Jane',
          }
        }
      >
        <p>Jane has many years working in health care in a range of settings. Jane supports people through our one-to-one service and runs the health and wellbeing groups with us.</p>
      </ContentRow>
      <ContentRow
        even
        title="Kate - Health &amp; Wellbeing Partner"
        img={
          {
            imgUrl: '/img/kate.jpg',
            webpUrl: '/img/kate.webp',
            alt: 'Kate',
          }
        }
      >
        <p>Kate is a qualified yoga teacher and is training to be a physiotherapist. Kate works with people one to one and supports our groups. Kate is also developing resources for our service including exercise plans and our YouTube channel.</p>
      </ContentRow>
    </main>
  </>
);

export default TeamPage;
