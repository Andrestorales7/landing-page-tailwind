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
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: `
                default-src 'self';
                script-src 'self' 'unsafe-inline' 'unsafe-eval' unpkg.com;
                style-src 'self' 'unsafe-inline' unpkg.com;
                img-src 'self' data: *.tile.openstreetmap.org unpkg.com;
                font-src 'self';
                connect-src 'self' *.tile.openstreetmap.org;
                frame-src 'self';
              `.replace(/\s+/g, ' ').trim()
            }
          ]
        }
      ]
    }
  };
  
  module.exports = nextConfig;
