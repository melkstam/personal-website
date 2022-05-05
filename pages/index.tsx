import React from 'react';
import type { NextPage } from 'next';
import Terminal from '../components/Terminal';

const Home: NextPage = () => (
  <div className="container mx-auto max-w-4xl min-h-[100vh] flex flex-col justify-center">

    <Terminal />
  </div>
);

export default Home;
