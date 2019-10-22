import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import '../styles/styles.sass';


const Layout = (props) => (
  <div>
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>Vilhelm Melkstam</title>

      <meta name="description" content="Vilhelm Melkstam's personal website showcasing who I am and what I have done." />
      <link rel="canonical" href="https://melkstam.com" />
    </Helmet>
    {props.children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: '',
};

export default Layout;
