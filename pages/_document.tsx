import React from 'react';
import {
  Html, Head, Main, NextScript,
} from 'next/document';

const Document = () => (
  <Html lang="en">
    <Head>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    </Head>
    <body className="min-h-screen min-w-full bg-neutral-800 font-mono">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
