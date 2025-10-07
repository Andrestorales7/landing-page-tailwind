'use client';

import React, { useState, useEffect } from 'react';
import ProductTab, { ProductTabItem } from '@/components/ui/ProductTab';
import Marcas from '@/components/sections/Marcas';
import WhatsappContacts from '@/components/layout/WhatsappContacts';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SEO from '@/components/SEO';
import { useBreadcrumbSchema } from '@/hooks/useLocationSchema';

const CintasIndustrialesPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const breadcrumbItems = [
    { name: "Inicio", url: "https://www.cmpagro.com.py" },
    { name: "Productos", url: "https://www.cmpagro.com.py/productos" },
    { name: "Cintas Industriales", url: "https://www.cmpagro.com.py/productos/cintas-industriales" }
  ];

  const breadcrumbSchema = useBreadcrumbSchema(breadcrumbItems);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Cintas Industriales tesa®",
    "description": "Descubre nuestra línea completa de cintas industriales tesa® para diferentes aplicaciones y condiciones. Soluciones profesionales para la industria.",
    "url": "https://www.cmpagro.com.py/productos/cintas-industriales",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": 4,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Product",
            "name": "tesa® Professional 4668 Transparent PE Tape",
            "description": "Cinta de reparación transparente y resistente para tareas de empalme en interior o exterior",
            "url": "https://www.cmpagro.com.py/productos/cintas-industriales#tesa-4668"
          }
        }
      ]
    }
  };
  const products: ProductTabItem[] = [
    {
      id: 'tesa-4668',
      label: 'tesa® 4668',
      title: 'tesa® Professional 4668 Transparent PE Tape',
      imageSrc: ['/images/productos/cintas-industriales/tesa-4668-2.jpg'],
      imageAlt: ['tesa® Professional 4668 Transparent PE Tape'],
      description: [
        `<p>La cinta de reparar transparente y resistente ofrece la solución ideal cuando se trata de tareas de empalme en interior o exterior.</p>
        <p><strong>Color:</strong> transparente<br/>
        <strong>Dimensiones:</strong> 33m x 50mm<br/>
        <strong>Contenido del envase:</strong> 1 roll</p>
        <h3>Descripción del producto y aplicaciones</h3>
        <p>tesa® 4668 es una cinta de polietileno transparente de 110 micras con un adhesivo acrílico. tesa® 4668 es una cinta muy resistente para una amplia gama de aplicaciones, a menudo se usa para unión de láminas de LDPE en construcción o para la reparación de invernaderos. Tambien bien utilizada para el cerrado de silobolsas.</p>
        <h4>Características:</h4>
        <ul>
          <li>Excelente resistencia a los rayos UV</li>
          <li>Adhesivo resistente al envejecimiento</li>
          <li>Resistencia a la abrasión y a los disolventes</li>
        </ul>`
      ]
    },
    {
      id: 'tesa-4970',
      label: 'tesa® 4970',
      title: 'tesa® 4970 Cinta de doble cara de film',
      imageSrc: ['/images/productos/cintas-industriales/tesa-4970-1.webp'],
      imageAlt: ['tesa® 4970 Cinta de doble cara de film'],
      description: [
        `<h3 class="font-bold">Aspectos sostenibles</h3>
        <ul>
          <li>Papel soporte tesa® Más Sostenible</li>
          <li>Papel soporte de origen responsable (certificado)</li>
          <li>Papel no blanqueado con un 30% de fibras recicladas</li>
        </ul>
        <h3 class="font-bold">Descripción del producto</h3>
        <p>tesa 4970 es una cinta de doble cara blanca con soporte de PVC y adhesivo acrílico modificado.</p>
        <h4 class="font-bold">tesa 4970 se caracteriza por:</h4>
        <ul>
          <li>Alto nivel de adhesión inmediata y tack</li>
          <li>Alta adhesión sobre superficies rugosas</li>
          <li>Adecuado para aplicaciones permanentes</li>
        </ul>
        <h3 class="font-bold">Aplicaciones principales</h3>
        <ul>
          <li>Montaje de perfiles de plástico y madera</li>
          <li>Montaje de puntos de venta y displays</li>
          <li>Montajes de señales</li>
          <li>Montajes de películas para invernaderos en estructuras metálicas</li>
        </ul>`
      ]
    },
    {
      id: 'tesa-extra-power',
      label: 'tesa® Extra Power',
      title: 'tesa® extra Power Universal',
      imageSrc: ['/images/productos/cintas-industriales/tesa-extrapower-universal.webp'],
      imageAlt: ['tesa® extra Power Universal'],
      description: [
        `<p>Extra Power Universal de tesa® es una cinta adhesiva versátil con un poder de adherencia extra. Ideal para reparar, unir, agrupar y mucho más.</p>
        <h3>Detalles del producto</h3>
        <p><strong>Color:</strong> gris<br/>
        <strong>Dimensiones:</strong> 50m x 50mm<br/>
        <strong>Contenido del envase:</strong> 1 roll<br/>
        <strong>Material:</strong> PE (polietileno)</p>
        <h3>Descripción del producto</h3>
        <p>Extra Power Universal de tesa® es una cinta adhesiva multiuso caracterizada por un fuerte poder de pegado adicional. Si bien se destaca por una fuerza superior, esta cinta adhesiva puede romperse fácilmente con la mano al momento de la aplicacion, ideal para pegado, atado, reforzamiento, marcado y mucho más. Al ser universal, la cinta es suficientemente resistente a la intemperie y se adhiere a casi cualquier superficie.</p>
        <h4>Características principales</h4>
        <ul>
          <li>Para reparaciones, fijación, refuerzos, marcaje y mucho más</li>
          <li>Cinta resistente y fácil de cortar con las manos</li>
          <li>Libre de solventes</li>
        </ul>`
      ]
    },
    {
      id: 'tesa-4600',
      label: 'tesa® 4600',
      title: 'tesa® Professional 4600 Xtreme Conditions',
      imageSrc: ['/images/productos/cintas-industriales/tesa-4600-pro1.webp'],
      imageAlt: ['tesa® Professional 4600 Xtreme Conditions'],
      description: [
        `<p>La cinta de reparación de autosoldadura es un verdadero comodín de todos los oficios y ofrece a los profesionales un valioso apoyo en las más variadas áreas.</p>
        <p><strong>Color:</strong> transparente<br/>
        <strong>Dimensiones:</strong> 3m x 25mm<br/>
        <strong>Contenido del envase:</strong> 1 roll</p>
        <h3>Descripción del producto</h3>
        <p>tesa® 4600 es una cinta de silicona de autosoldadura que se pega en su propia base. El material flexible se ajusta firmemente a varias superficies, proporcionando así un sello hermético instantáneo. La cinta de reparación de autosoldadura se puede utilizar tanto en interiores como en exteriores y también logra resultados fiables en superficies grasas, sucias o mojadas. Incluso la aplicación bajo el agua es posible.</p>
        <p>La base de silicona asegura que la cinta robusta proporciona una alta resistencia a diversos productos químicos, aceites, ácidos, disolventes, agua salada, exposición a los rayos UV y altas temperaturas (de-65 ° C a 260 ° C). La cinta de silicona también se puede utilizar para los enlaces temporales y se puede quitar en cualquier momento sin problemas.</p>`
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Cintas Industriales | Productos"
        description="Descubre nuestra línea de cintas industriales tesa® para diferentes aplicaciones y condiciones. Soluciones profesionales para la industria."
        structuredData={[breadcrumbSchema, collectionSchema]}
      />

      <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/productos/cintas-industriales/tesa-4668-1.jpg"
            alt="Cintas Industriales tesa®"
            fill
            className="object-cover opacity-40"
            priority
            quality={100}
          />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="py-24 lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Cintas Industriales
              </h1>
              <p className="text-lg lg:text-xl text-gray-200 mb-8">
                Descubre nuestra línea completa de cintas industriales tesa® para diferentes aplicaciones y condiciones. Soluciones profesionales para la industria.
              </p>
              <div className="mt-4">
                <Image
                  src="/images/logos/tesa-logo.svg"
                  alt="tesa® Logo"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <ProductTab products={products} accentColor="blue" />
        </div>
      </section>

      <Marcas />
      <WhatsappContacts />
    </>
  );
};

export default CintasIndustrialesPage;
