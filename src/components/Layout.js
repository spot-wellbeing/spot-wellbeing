import React from 'react';
import Footer from './Footer/index.js';
import Header from './Header/index.js';

const Layout = ({ children }) => (
  <>
    <Header className="pv-lg ph-xl" />
    {children}
    <Footer />
  </>
);

export default Layout;
