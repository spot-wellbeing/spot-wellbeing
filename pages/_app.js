import App from 'next/app';
import React from 'react';
import CookieConsent from "react-cookie-consent";

import Layout from '../components/Layout';

import '../styles/styles.scss';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps} />
        <CookieConsent
            location="bottom"
            buttonText="Okay"
            style={{ background: "#212121" }}
            buttonStyle={{ color: "#4e503b", fontSize: "14.4px", padding: "16px 24px", borderRadius: "2px", fontFamily: "Roboto" }}
            expires={150}
            cookieName="ConsentGiven"
            cookieValue={true}
          >
            <span style={{ fontSize: "14.4px", fontFamily: "Roboto" }}>This website uses cookies to enhance the user experience.</span>
          </CookieConsent>
      </Layout>
    );
  }
}
