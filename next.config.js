const { withPlausibleProxy } = require('next-plausible');

const plausibleWrapper = withPlausibleProxy({
  customDomain: 'https://plausible.melkstam.com',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
};

const config = plausibleWrapper(nextConfig);

module.exports = config;
