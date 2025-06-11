import Head from 'next/head';

type SEOProps = {
  title: string;
  description: string;
  url?: string;
  image?: string;
  imageAlt?: string;
};

export default function SEO({
  title,
  description,
  url = 'https://www.cmpagro.com.py', // default value
  image = 'https://www.cmpagro.com.py/images/banner.png', // default value
  imageAlt = 'CMP Agro - Soluciones para el Agro', // default alt text
}: SEOProps) {
  // Formato de título para SEO: aseguramos que siempre incluya CMP Agro
  const formattedTitle = title.includes('CMP Agro') ? title : `${title} | CMP Agro`;
  
  return (
    <Head>
      {/* Standard SEO */}
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:site_name" content="CMP Agro" />
      <meta property="og:locale" content="es_PY" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {/* Pinterest */}
      <meta name="pinterest:description" content={description} />
      <meta name="pinterest:image" content={image} />

      {/* LinkedIn */}
      <meta property="linkedin:title" content={formattedTitle} />
      <meta property="linkedin:description" content={description} />
      <meta property="linkedin:image" content={image} />

      {/* WhatsApp specific (will use og: tags but these help) */}
      <meta property="article:publisher" content={url} />
      <meta property="article:modified_time" content={new Date().toISOString()} />

      {/* Control image dimensions for better sharing */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Favicons - Completo */}
      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#6a9d83" />
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      <meta name="msapplication-TileColor" content="#6a9d83" />
      <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
      
      {/* Canonical URL to prevent duplicate content issues */}
      <link rel="canonical" href={url} />

      {/* Schema.org markup para Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "CMP Agro",
            "url": "https://www.cmpagro.com.py",
            "logo": "https://www.cmpagro.com.py/favicons/android-chrome-512x512.png",
            "sameAs": [
              "https://www.facebook.com/cmpagro",
              "https://www.instagram.com/cmpagro"
              // Puedes añadir otros perfiles sociales si existen
            ]
          })
        }}
      />
    </Head>
  );
}
