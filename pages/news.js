import React from 'react';
import { Helmet } from 'react-helmet';
import Butter from 'buttercms';
import Moment from 'moment';

const butter = Butter(process.env.BUTTER_API_KEY);

function createMarkup(html) {
  return {__html: `${html}`};
}

class NewsPage extends React.Component {
  static async getInitialProps({ query }) {
    let page = query.page || 1;

    const resp = await butter.post.list({page: page, page_size: 10})    
    return resp.data;
  }
  
  render() {
    Moment.locale('en');
    const { next_page, previous_page } = this.props.meta;

    return (
      <>
        <Helmet>
          <title>SPOT Wellbeing - Our Team</title>
          <meta
            name="description"
            content="Our team of physiotherapists, occupational therapists, and technical instructors have over 50 years of healthcare experience in mental and physical health."
          />
        </Helmet>

        <main>
          <div className="container text-align-center bg-blue">
            <h1 role="heading" aria-level="1">News</h1>
          </div>

          {this.props.data.map((post) => {
            console.log(post);
            return (
              <section className="news__post row">
                <div className="news__post__title container">
                  <h2 dangerouslySetInnerHTML={createMarkup(post.title)} />
                  <h3 dangerouslySetInnerHTML={createMarkup(post.summary)} />
                  <p className="text-italic">Published: {Moment(post.published).format('DD-MM-YYYY')}</p>
                </div>
                <img src={post.featured_image || post.featured_image_alt} />
                <div className="container">
                  <p dangerouslySetInnerHTML={createMarkup(post.body)} />
                </div>
              </section>
            )
          })}
        </main>
      </>
    )
  }
};

export default NewsPage;
