import React from 'react';
import { Helmet } from 'react-helmet';
import Review from '../components/Review/index';

const ReviewsPage = () => (
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
        <h1 role="heading" aria-level="1">Reviews</h1>
      </div>
      <div className="container bg-alternative text-align-center">
        <h2 role="heading" aria-level="2">One-to-One Feedback</h2>
      </div>
      <div className="row">
        <div className="grid">
          <Review>
            100% of people who filled out a feedback form said that they ‘strongly agreed’ that they would recommend the service to friends and family.
          </Review>
          <Review>
            100% of people who filled out a feedback form said that they ‘strongly agreed’ that they felt empowered to support their own health and wellbeing.
          </Review>
          <Review>
            100% of people who filled out a feedback form said that they ‘strongly agreed’ that they worked together with the professional and was involved in all decision making.
          </Review>
          <Review even attribution="David, 70">
            I think the service is bloody brilliant.
          </Review>
          <Review odd attribution="Steve">
            As an ex Falklands war veteran suffering with PTSD I struggled with where I was living. Spot wellbeing gave me hope and with their intervention in helping me achieve a higher banding and I am now looking to move into a better property more suited to my needs and health.
          </Review>
          <Review even>
            I feel that John has supported me and given me confidence to go out for walks which is something I had loved doing but my illness prevented. John always allows me enough time to express my mental health issues and listens to me carefully and reassures me positively. My goal was to feel more confident, manage my mental health, be happier and improve my sleep.
          </Review>
          <Review odd>
            Lynn has helped me to overcome chronic back pain. I particularly appreciated seeing the same person.
          </Review>
          <Review even>
            Working with Holly gave me the confidence to go back outside. She took me to the opticians, we went out for walks and chatted. I have continued short walks and can do my shopping independently.
          </Review>
          <Review odd>
            This is one life you have saved, though you might not know it.
          </Review>
          <Review even>
            Spot is a lifeline to me.
          </Review>
          <Review odd>
            I have no issues with Spot Wellbeing. Upfront, from the start. I don’t think I have taken a backward turn – I am going forwards all the time. It’s not ticking boxes, spot is about working together, building up a trust between your spot wellbeing support worker and the client, service user, whatever you want to call them, I prefer client. I don’t want to be a service user. Spot is personal, it is not ticking boxes and I will never be a box ticker.
          </Review>
          <Review even>
            We have a client and support worker relationship, we bounce off each other, that’s never happened before. We have known each other 4 months. I had one issue, [Holly brought up healthy eating] I knew it had to be addressed. Let’s put it this way, when you brought the box of fruit and vegetables, after you went I thought ‘ah bless’ and I thought ‘you’re trying to tell me something’, and it got me thinking. I jogged me to do something.
          </Review>
          <Review odd>
          I have a support system now.
          </Review>
        </div>
      </div>
      <div className="container bg-alternative text-align-center">
        <h2 role="heading" aria-level="2">Group Feedback</h2>
      </div>
      <div className="row">
        <div className="grid">
          <Review odd>
            Spot are transparent too, transparency is really important with your support worker.
          </Review>
          <Review even>
            Very professional but fun.
          </Review>
          <Review odd>
            Very beneficial exercises with good explanations of why to do them.
          </Review>
          <Review even>
            Lynn, Holly and John were so lovely and supportive. I felt very comfortable at all times. It was really nice to also have the ability to talk about and get specific advice on issues rather than go to the GP.
          </Review>
          <Review odd>
            I enjoyed the exercise – handout was helpful to jog my memory when doing exercises at home.
          </Review>
          <Review even>
            I now take exercise when time allows and am trying very hard to take more time for myself. The breathing exercises and being used to relax before getting to sleep.
          </Review>
          <Review odd>
            All the staff were empathetic with my situation and were very kind and supportive and I would like to thank them for that.
          </Review>
          <Review even>
            Very professionally run but also relaxed and friendly.
          </Review>
          <Review odd>
            Exercises were very useful as they targeted important muscles to maintain independence.
          </Review>
          <Review even>
            I can tie my shoelaces again and do exercises at home regularly.
          </Review>
          <Review odd>
            Best thing I decided to do.
          </Review>
        </div>
      </div>
    </main>
  </>
);

export default ReviewsPage;
