/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.cmpagro.com.py', // ✅ this is the key field!
    generateRobotsTxt: true,
    sitemapSize: 5000,
    changefreq: 'monthly',
    priority: 0.7,
    exclude: ['/admin', '/private'], // optional
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
    },
  }
  