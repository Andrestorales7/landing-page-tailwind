// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
        {
          protocol: 'https',
          hostname: 'www.greataussiepatios.com.au',
        },
      ],
    },
    reactStrictMode: true,
  };
  
  module.exports = nextConfig;
  