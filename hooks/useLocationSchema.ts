export const useLocationSchema = (location: 'mingaguazu' | 'lomaplata') => {
  const locations = {
    mingaguazu: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "CMP Agro - Minga Guazú",
      "description": "Sucursal de CMP Agro en Minga Guazú, Alto Paraná",
      "url": "https://www.cmpagro.com.py",
      "telephone": "+595-61-508-800",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ruta 2 Km 23",
        "addressLocality": "Minga Guazú",
        "addressRegion": "Alto Paraná",
        "postalCode": "7220",
        "addressCountry": "PY"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -25.5167,
        "longitude": -54.6167
      },
      "openingHours": [
        "Mo-Fr 07:00-17:00"
      ],
      "parentOrganization": {
        "@id": "https://www.cmpagro.com.py/#organization"
      }
    },
    lomaplata: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "CMP Agro - Loma Plata",
      "description": "Sucursal de CMP Agro en Loma Plata, Boquerón",
      "url": "https://www.cmpagro.com.py",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Loma Plata",
        "addressRegion": "Boquerón",
        "addressCountry": "PY"
      },
      "openingHours": [
        "Mo-Fr 07:00-17:00"
      ],
      "parentOrganization": {
        "@id": "https://www.cmpagro.com.py/#organization"
      }
    }
  };

  return locations[location];
};

// Hook para generar schema de productos
export const useProductSchema = (product: any, category: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description?.replace(/<[^>]+>/g, '') || product.description,
    "image": [
      `https://www.cmpagro.com.py${product.image}`,
      ...(product.images?.map((img: string) => `https://www.cmpagro.com.py${img}`) || [])
    ],
    "brand": {
      "@type": "Brand",
      "name": "CMP Agro"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "CMP Agro",
      "@id": "https://www.cmpagro.com.py/#organization"
    },
    "category": category,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "PYG",
      "seller": {
        "@type": "Organization",
        "name": "CMP Agro"
      }
    },
    "additionalProperty": product.details?.map((detail: string) => ({
      "@type": "PropertyValue",
      "name": "Característica",
      "value": detail.replace(/<[^>]+>/g, '')
    })) || []
  };
};

// Schema para breadcrumbs
export const useBreadcrumbSchema = (items: Array<{name: string, url: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};