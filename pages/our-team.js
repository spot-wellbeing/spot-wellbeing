import React from 'react';
import { Helmet } from 'react-helmet';
import ContentRow from '../components/ContentRow/index';

const TeamPage = () => (
  <>
    <Helmet>
      <title>SPOT Wellbeing - Our Team</title>
      <meta
        name="description"
        content="Our team of physiotherapists, occupational therapists, and technical instructors have over 50 years of healthcare experience in mental and physical health."
      />
    </Helmet>

    <main>
      <div className="container text-align-center full-width bg-blue">
        <h1 role="heading" aria-level="1">Our Team</h1>
      </div>
      <ContentRow
        odd
        title="Lynn Sibley - Physiotherapist Bsc HCPC registered MCSP"
        note="CEO, Founder &amp; HCPC-registered Physiotherapist"
        img={
          {
            imgUrl: '/img/lynn.jpg',
            webpUrl: '/img/lynn.webp',
            alt: 'Lynn',
          }
        }
      >
        <p>I have worked in healthcare for 15 years. I started my physiotherapy career at Colchester Hospital working as a physio assistant and this spurred me on to become a qualified physiotherapist.</p>
        <p>I have covered a very broad range of areas in the hospital setting covering acute, stroke rehab, care of the elderly, musculoskeletal, orthopaedics, orthotics, medical respiratory and working in the community. I am also trained in pilates.</p>
        <p>I have also worked for Essex County Council, which has given me a good knowledge of available services. I currently work in a Suffolk-based community healthcare team, keeping up to date with current research and using evidence-based practise. My passion is to provide holistic care in the community, to help mental and physical health, helping communities connect and improving quality of life.</p>
      </ContentRow>
      <ContentRow
        even
        title="Holly Simpson – Occupational Therapist, BSc, HCPC, IPCOTSS"
        note="CEO, Founder &amp; HCPC registered Occupational Therapist"
        img={
          {
            imgUrl: '/img/holly.jpg',
            webpUrl: '/img/holly.webp',
            alt: 'Holly',
          }
        }
      >
        <p>I have worked in various health care settings for 12 years now, qualifying as an Occupational Therapist (OT) in 2013. Prior to, and during my degree I worked in many health and care settings to gain a broad range of understanding of these services and life for the people using them.</p>
        <p>I worked in care homes, domiciliary care, hospital wards and as a 1:1 support for a young man with profound and multiple learning disabilities at his home and special needs school. My final elective placement at university was setting up OT services in a council funded day service and a working farm for people with learning disabilities, this grew my confidence, passion and skills and ability to think outside the box. After qualifying as an OT I have worked in mental health services including inpatient secure units for adolescents with neurodevelopmental diagnosis and adult rehabilitation and recovery services.</p>
        <p>In both mental health settings I set up OT services as they either did not have an OT before or had not for a period of time. I have worked in an Ipswich community therapy team for several years supporting people with with long term health conditions, people who are at the end of their life and those in crisis. I love working with people.</p>
        <p>I love getting to know them, learning from each other and working towards meaningful goals whilst supporting them to live as independently, safely and happily as possible.</p>
      </ContentRow>
      <ContentRow
        odd
        title="John Ottaway – Technical Instructor"
        note="CEO Founder MCSP"
        img={
          {
            imgUrl: '/img/john.jpg',
            webpUrl: '/img/john.webp',
            alt: 'John',
          }
        }
      >
        <p>I have worked in healthcare settings for 24 years. Starting out as a healthcare assistant within a nursing home, I moved onto home care of the elderly and dementia patients followed by working on a mental health ward. I began within the NHS as a physiotherapy assistant, under the guidance of experienced physios this rapidly turned into becoming a Technical Instructor within the Community Physiotherapy team.</p>
        <p>I have experience within musculoskeletal clinics and worked in a Day and Treatment team covering long term health conditions, brain injuries, other neurological conditions and falls. I hold an NVQ 3 in therapeutic support, am a chair based exercise and Otago trained instructor. My knowledge of support services in and around Ipswich is vast and over the years I have built important networks within the local healthcare community.</p>
        <p>I have a special interest in anxiety and mental health and use my own experiences to help and guide others. I’m passionate about helping those in need. My aim is for all people to be as healthy as possible in both body and mind whilst maintaining their independence.</p>
      </ContentRow>
    </main>
  </>
);

export default TeamPage;
