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
  
  module.exports = {
    ...nextConfig,
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: "frame-src 'self' https://www.google.com https://*.google.com;",
            },
          ],
        },
      ];
    },
  };
