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
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Catálogo de Productos CMP Agro",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "ProductGroup",
            "name": "Productos de Horticultura",
            "description": "Films para invernadero, mulching, mallas de sombra y sistemas de riego"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "ProductGroup",
            "name": "Productos de Ensilaje",
            "description": "Films y accesorios para ensilaje de forrajes de calidad"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "ProductGroup",
            "name": "Productos Agropecuarios",
            "description": "Soluciones integrales para ganadería y agricultura"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "ProductGroup",
            "name": "Productos Agroindustriales",
            "description": "Equipamiento y soluciones para la industria agrícola"
          }
        }
      ]
    }
  };

  // LocalBusiness Schema para múltiples ubicaciones
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "CMP Agro",
    "@id": "https://www.cmpagro.com.py/#localbusiness",
    "description": "Líder en soluciones agrícolas, ganaderas y agroindustriales en Paraguay",
    "url": "https://www.cmpagro.com.py",
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
      {/* Standard SEO */}
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:type" content={type} />
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
          __html: JSON.stringify(organizationSchema)
        }}
      />

      {/* Schema.org markup - LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />

      {/* Schema.org markup - Website */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />

      {/* Custom Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
    </Head>
  );
}
