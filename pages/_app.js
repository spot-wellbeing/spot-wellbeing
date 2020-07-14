import App from 'next/app';
import React from 'react';

import Layout from '../components/Layout';

import '../styles/styles.scss';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}
