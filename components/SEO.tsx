import Head from 'next/head';

type SEOProps = {
  title: string;
  description: string;
  url?: string;
  image?: string;
};

export default function SEO({
  title,
  description,
  url = 'https://www.cmpagro.com', // default value
  image = 'https://www.cmpagro.com/images/banner.jpg', // default value
}: SEOProps) {
  return (
    <Head>
      {/* Standard SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Favicon (optional) */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
