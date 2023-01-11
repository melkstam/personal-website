/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import PlausibleProvider from 'next-plausible';

import '@fontsource/fira-code';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <DefaultSeo
      titleTemplate="%s | Vilhelm Melkstam"
      defaultTitle="Vilhelm Melkstam"
      description="Fullstack developer and nerd, here I am."
    />
    <PlausibleProvider
      domain="melkstam.com"
      customDomain="plausible.melkstam.com"
      selfHosted
      trackOutboundLinks
    >
      <Component {...pageProps} />
    </PlausibleProvider>
  </>
);

export default App;
