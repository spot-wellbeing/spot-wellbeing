import CookieConsent from 'react-cookie-consent';
import Layout from '../components/Layout.js';

import '../styles/styles.scss';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <CookieConsent
        location="bottom"
        buttonText="Okay"
        style={{ background: "#212121" }}
        buttonStyle={{ color: "#4e503b", fontSize: "14.4px", padding: "16px 24px", borderRadius: "2px", fontFamily: "Roboto" }}
        expires={150}
        cookieName="SpotCookie"
      >
        <span style={{ fontSize: "14.4px", fontFamily: "Roboto" }}>This website uses cookies to enhance the user experience.</span>
      </CookieConsent>
    </Layout>
  );
}
