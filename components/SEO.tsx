import Head from 'next/head';

type SEOProps = {
  title: string;
  description: string;
  url?: string;
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'product' | 'article';
  structuredData?: any;
};

export default function SEO({
  title,
  description,
  url = 'https://www.cmpagro.com.py',
  image = 'https://www.cmpagro.com.py/images/banner.png',
  imageAlt = 'CMP Agro - Soluciones para el Agro',
  type = 'website',
  structuredData,
}: SEOProps) {
  // Ensure URL is absolute
  const canonicalUrl = url.startsWith('http') ? url : `https://www.cmpagro.com.py${url.startsWith('/') ? url : `/${url}`}`;
  const formattedTitle = title.includes('CMP Agro') ? title : `${title} | CMP Agro`;
  
  // Schema básico de la organización (mejorado)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.cmpagro.com.py/#organization",
    "name": "CMP Agro",
    "url": "https://www.cmpagro.com.py",
    "logo": "https://www.cmpagro.com.py/favicons/android-chrome-512x512.png",
    "description": "Líder en soluciones agrícolas, ganaderas y agroindustriales en Paraguay. Especialistas en productos para horticultura, ensilaje, agropecuaria y más.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Gral. José Gervasio Artigas",
      "addressLocality": "Asunción",
      "addressRegion": "Asunción",
      "postalCode": "001",
      "addressCountry": "PY"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+595 981 176-060",
        "contactType": "customer service",
        "areaServed": "PY",
        "availableLanguage": "Spanish"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+595-983-352-029",
        "contactType": "sales",
        "areaServed": "PY",
        "availableLanguage": "Spanish"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/cmpagro",
      "https://www.instagram.com/cmpagro"
    ],
    "foundingDate": "2010",
    "areaServed": {
      "@type": "Country",
      "name": "Paraguay"
    }
    // ELIMINAR hasOfferCatalog para evitar errores
  };

  // LocalBusiness Schema para múltiples ubicaciones
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "CMP Agro",
    "@id": "https://www.cmpagro.com.py/#localbusiness",
    "description": "Líder en soluciones agrícolas, ganaderas y agroindustriales en Paraguay",
    "url": "https://www.cmpagro.com.py",
    "image": "https://www.cmpagro.com.py/favicons/android-chrome-512x512.png",
    "logo": "https://www.cmpagro.com.py/favicons/android-chrome-512x512.png",
    "telephone": "++595 981 176-060",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Gral. José Gervasio Artigas",
      "addressLocality": "Asunción",
      "addressRegion": "Asunción",
      "postalCode": "001",
      "addressCountry": "PY"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -25.2637,
      "longitude": -57.5759
    },
    "openingHours": [
      "Mo-Fr 07:00-17:00",
      "Sa 07:00-12:00"
    ],
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
    "currenciesAccepted": "PYG",
    "hasMap": "https://maps.google.com/?q=Av.+Gral.+José+Gervasio+Artigas,+Asunción,+Paraguay"
  };

  // Website Schema (mejorado)
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "CMP Agro",
    "url": "https://www.cmpagro.com.py",
    "description": description,
    "publisher": {
      "@id": "https://www.cmpagro.com.py/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.cmpagro.com.py/productos?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@id": "https://www.cmpagro.com.py/#organization"
    }
  };

  return (
    <Head>
      {/* Meta básicos */}
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      
      {/* Canonical URL - this ensures proper indexing */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="CMP Agro" />
      <meta property="og:locale" content="es_PY" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />
      
      {/* Favicons */}
      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      <meta name="msapplication-TileColor" content="#6a9d83" />
      <meta name="theme-color" content="#ffffff" />
      
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* Mejor manejo de structuredData: permite array o objeto */}
      {Array.isArray(structuredData)
        ? structuredData.map((schema, i) => (
            <script
              key={i}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
          ))
        : structuredData && (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
          )}
    </Head>
  );
}
