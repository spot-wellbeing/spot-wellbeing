import React from 'react';
import Footer from './Footer/index';
import Header from './Header/index';

const Layout = ({ children }) => (
  <>
    <Header className="pv-lg ph-xl" />
    {children}
    <Footer />
  </>
);

export default Layout;
