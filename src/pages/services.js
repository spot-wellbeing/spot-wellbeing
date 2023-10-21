import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import ContentRow from '../components/ContentRow/index';

const ServicesPage = () => (
  <>
    <Head>
      <title>SPOT Wellbeing - Services</title>
      <meta
        name="description"
        content="Free 1-to-1 and group sessions delivered by health professionals to improve and maintain your wellbeing, and reduce loneliness. Occupational and physiotherapy."
      />
    </Head>

    <main>
      <div className="container text-align-center bg-blue">
        <h1 role="heading" aria-level="1">Services</h1>
      </div>
      <div odd className="row text-align-center mt-lg">
        <div className="container">
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
            imgUrl: "/img/lynn2.jpg",
            webpUrl: "/img/lynn2.webp",
            alt: 'Lynn',
          }
        }
      >
        <p>Our one-to-one sessions are led by you. We work with you to find out what is important to you. We always come to your home, or a place that’s comfortable for you. Our sessions are always face-to-face unless you request alternatives. Sessions usually last up to an hour, depending on what we are doing together.</p>
        <p>Our aim is to assist you to manage and improve your health and wellbeing. We want to support you to be able to do the things that are important to you. This may be engaging in activities or groups in your community, or activities that are meaningful to you. It may be about overcoming barriers to be able to leave the house. Barriers may be physical, mental, or environmental. Whatever the problem, we will see what we can do to support you.</p>
        <p>Currently our one-to-one sessions are funded in Ipswich and East Suffolk through the Suffolk and North East Essex Integrated Care board. You will need to be referred by your GP or relevant professional.</p>
        <p>To access the service, the person must meet the following criteria:</p>
        <ul>
          <li>They must be registered with a GP in the Ipswich and East Suffolk Area.</li>
          <li>They must have multi-morbidities / complex health and wellbeing needs.</li>
          <li>They must be over 50 years of age.</li>
        </ul>
        <p>Or:</p>
        <ul>
          <li>High user of primary care services</li>
        </ul>
        <p>Referral via the primary care personalised care referral triage via DXS or download the referral form by clicking <Link href="forms/pcpc-referral-form-official.docx" download>here</Link>.</p>
        <p>Central telephone: <Link href="tel:01394332265">01394 332265</Link></p>
        <p>Central email: <Link href="mailto:Primarycare.personalisedcare@nhs.net">Primarycare.personalisedcare@nhs.net</Link></p>
        <p>Or to download the self-referrals or NSFT referrals form, click <Link href="forms/spot-referral-form-2023.docx" download>here</Link>.</p>
      </ContentRow>
      <ContentRow
        odd
        title="Health &amp; Wellbeing Groups"
        img={
          {
            imgUrl: "/img/health-wellbeing-group.jpg",
            webpUrl: "/img/health-wellbeing-group.webp",
            alt: 'Group sessions in progress',
          }
        }
      >
        <p>Our health and wellbeing courses (60 years +) are run over a 6 week period for 1.5 hours per week. All sessions are designed by skilled NHS background health professionals to support your physical and mental wellbeing whilst making connections with others in your community.</p>
        <p>All sessions are relaxed, friendly and include an exercise session, a talk and time to socialise. 90 minute session per week for 6 weeks. Example sessions:</p>

        <p><strong>Week 1</strong> - Introductions | Exercise | Relaxation | Benefits of exercise | Refreshments</p>
        <p><strong>Week 2</strong> - Exercise | Relaxation | Falls awareness | Refreshments</p>
        <p><strong>Week 3</strong> - Exercise | Relaxation | Mindfulness and relaxation | Refreshments</p>
        <p><strong>Week 4</strong> - Exercise | Relaxation | Nutrition | Refreshments</p>
        <p><strong>Week 5</strong> - Exercise | Relaxation | Common health conditions | Refreshments</p>
        <p><strong>Week 6</strong> - Exercise | Relaxation | Sleep | Refreshments</p>

        <p>Contact us via <Link href="tel:07598678505">telephone</Link> or <Link href="/contact-us">through the website</Link> for more information or to book onto a group.</p>
        <p>Keep an eye on our ‘News’ page, Facebook and Instagram for updates on where the groups are taking place.</p>
      </ContentRow>
      <ContentRow
        even
        title="Moving &amp; Handling"
        img={
          {
            imgUrl: "/img/cpd-cert-logo.jpeg",
            webpUrl: "/img/cpd-cert-logo.webp",
            alt: 'CPD certification',
          }
        }
      >
        <p>We offer holistic moving and handling tuition to private carers and organisations at competitive prices. We offer bespoke courses and full moving and handling of inanimate objects and people and equipment. The courses are CPD accredited and you will receive a CPD certificate of attendance. Our training is carried out by an IOSH trained health professional. Please <Link href="/contact-us">contact us</Link> for more details.</p>
      </ContentRow>
      <ContentRow
        odd
        title="Sustainable Groups"
        img={
          {
            imgUrl: "/img/hawthorn-drive-group.jpeg",
            webpUrl: "/img/hawthorn-drive-group.webp",
            alt: 'The Hawthorn Drive group',
          }
        }
      >
        <p>Here's one of our videos demonstrating an assisted passive hip flexor and quadricep stretch.</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/eydqIykeJww?si=j0hx2MwtSah5Q4SJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p>You can find the rest of our videos on our YouTube channel <Link href="https://www.youtube.com/@SPOTWellbeing" target="_blank">here</Link>.</p>
      </ContentRow>
      <ContentRow
        even
        title="SPOT Wellbeing on YouTube"
        // img={
        //   {
        //     imgUrl: "/img/healthy-info.jpg",
        //     webpUrl: "/img/healthy-info.webp",
        //     alt: 'Heart health information',
        //   }
        // }
      >
        <p>We have supported some of our groups to become sustainable community groups.</p>
        <p>Hawthorn Drive has now been run by the community for 10 months. The group members all have different roles and responsibilities. They participate in exercise, relaxation, socialise and a raffle to build funds for the group every Friday. They are supported by us at Spot Wellbeing and Vicky, a social prescriber from the Hawthorn Drive Surgery.</p>
        <p>In Mid Suffolk in collaboration with Communities Together East Anglia and the Mid Suffolk Council, groups have continued as community groups. This means they are led by the community after the 6 weeks Health and Wellbeing Course. They are given support to set up and continue as a sustainable group.</p>
      </ContentRow>
    </main>
  </>
);

export default ServicesPage;
