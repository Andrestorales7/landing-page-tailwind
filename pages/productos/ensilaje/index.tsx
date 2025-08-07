'use client';

import React, { useState, useEffect } from 'react';
import Marcas from '@/components/sections/Marcas';
import NoticeSlider from '@/components/sections/NoticeSlider';
import WhatsappContacts from '@/components/layout/WhatsappContacts';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SEO from '../../../components/SEO';
import { useBreadcrumbSchema } from '../../../hooks/useLocationSchema';
import ProductCard from '@/components/ui/ProductCard';

const EnsilajeProductsPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Breadcrumb para esta página
  const breadcrumbItems = [
    { name: "Inicio", url: "https://www.cmpagro.com.py" },
    { name: "Productos", url: "https://www.cmpagro.com.py/productos" },
    { name: "Ensilaje", url: "https://www.cmpagro.com.py/productos/ensilaje" }
  ];

  const breadcrumbSchema = useBreadcrumbSchema(breadcrumbItems);

  // Schema para la colección de productos
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Productos de Ensilaje",
    "description": "Amplia gama de productos para ensilaje: films para fardos, hilos, mallas, silobolsas y techos para almacenamiento de forrajes",
    "url": "https://www.cmpagro.com.py/productos/ensilaje",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": 7, // Ajustar según tu cantidad de productos
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Product",
            "name": "Film para Fardos",
            "description": "Films de alta calidad para ensilaje de fardos",
            "url": "https://www.cmpagro.com.py/productos/ensilaje/film-fardos"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Product",
            "name": "Silobolsas",
            "description": "Silobolsas para almacenamiento de granos y forrajes",
            "url": "https://www.cmpagro.com.py/productos/ensilaje/silobolsas"
          }
        }
        // Agregar más productos según tu catálogo
      ]
    },
    "breadcrumb": breadcrumbSchema
  };

  const products = [
    {
      name: 'Film para fardos',
      slug: 'film-agripower',
      image: '/images/productos/ensilaje/film-fardos.jpg',
      description: 'Film resistente y protección UV para fardos.',
      details: ['750 mm x 1,500 m (25 micras)'],
      logo: '/images/logos/exporplas-logo.png',
    },
    {
      name: 'Hilos para fardos',
      slug: 'hilos-exporplas',
      image: '/images/productos/ensilaje/hilos.jpg',
      description: 'Hilos resistentes para fardos redondos y cuadrados.',
      details: ['Hilo e1000 - 5,400 m (fardos redondos)', 'Hilo e130 - 1,300 m (fardos cuadrados)'],
      logo: '/images/logos/exporplas-logo.png',
    },
    {
      name: 'Mallas para fardos',
      slug: 'mallas-exporplas',
      image: '/images/productos/ensilaje/malla-fardos.png',
      description: 'Mallas para empaque eficiente de fardos.',
      details: ['HORIZON™: 125 x 3,600 cm, 130 x 3,600 cm', 'EMPACADOR: 124 x 3,600 cm, 130 x 3,600 cm'],
      logo: '/images/logos/exporplas-logo.png',
    },
    {
      name: 'Silobolsas',
      slug: 'silobolsas-agrinpex',
      image: '/images/productos/ensilaje/silobolsa-3.jpg',
      description: 'Bolsas resistentes para almacenar silos.',
      details: ['6 pies x 60 m', '6.5 pies x 60 m', '9 pies x 60 m', '9 pies x 75 m'],
      logo: '/images/logos/agrinpex-logo.png',
    },
    
    {
      name: 'Tech Lona',
      slug: 'tech-lona-azul',
      image: '/images/productos/ensilaje/tech-lona.jpeg',
      description: 'Lona multicapa resistente y durable.',
      details: ['Negro: 8 x 100 m (100 micras)'],
      logo: '/images/logos/azul-pack2-removebg.png',
    },
    {
      name: 'Tech Silo',
      slug: 'tech-silo-azul',
      image: '/images/productos/ensilaje/tech-silo.jpg',
      description: 'Lámina multicapa para cubrir ensilaje.',
      details: ['Blanco/Negro: 12 x 50 m y 14 x 50 m', 'Disponible en 100 y 150 micras'],
      logo: '/images/logos/azul-pack2-removebg.png',
    },
    {
      name: 'TechO2 Barrier',
      slug: 'tech-h2o-barrier',
      image: '/images/productos/ensilaje/tech-barrier-2.png',
      description: 'Techos con barrera de humedad y EVOH.',
      details: [
        'Blanco/Negro: 7 capas, con barrera de EVOH',
        'Azul: 45 micras (12 x 50 m y 14 x 50 m) con barrera de EVOH',
      ],
      logo: '/images/logos/azul-pack2-removebg.png',
    },
  ];

  return (
    <>
      <SEO
        title="Productos de Ensilaje | Films, Silobolsas y Mallas | CMP Agro"
        description="Productos de alta calidad para ensilaje: films para fardos, hilos, mallas, silobolsas y techos. Soluciones especializadas para almacenamiento y protección de cultivos y forrajes en Paraguay."
        url="https://www.cmpagro.com.py/productos/ensilaje"
        image="https://www.cmpagro.com.py/images/hero/soluciones-ensilaje.webp"
        type="website"
        structuredData={[breadcrumbSchema, collectionSchema]}
      />
      <div id="agro-productos" className="min-h-screen bg-gradient-to-b from-green-50 to-gray-50">
        {/* Hero Section */}
        <div className="relative min-h-[52vh] bg-gradient-to-br from-green-900/70 via-green-800/60 to-green-700/50 overflow-hidden">
          {/* Imagen de fondo optimizada */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero/soluciones-ensilaje.webp"
              alt="Hero Ensilaje"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent pointer-events-none"></div>
          {/* Contenido del Hero */}
          <div className="relative z-10 pt-42 pb-22 px-6 sm:px-12 lg:px-18 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
                Ensilaje
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white max-w-2xl drop-shadow mx-auto">
                Soluciones especializadas para el almacenamiento y protección de cultivos y forrajes.
              </p>
            </motion.div>
          </div>
          {/* Divisoria SVG igual que horticultura */}
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[10vw] min-h-[60px] max-h-[120px]">
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V56.44Z"
                className="fill-[#f9fafb] relative opacity-90"
              ></path>
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3"
                className="fill-none stroke-white stroke-[2px] opacity-50 relative z-10"
              ></path>
            </svg>
          </div>
        </div>

        {/* Destacados */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 -mt-16 mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Variedad de Productos', icon: '🌾', description: 'Soluciones para cada etapa del ensilaje y protección agrícola.' },
              { title: 'Envíos Nacionales', icon: '🚚', description: 'Entrega rápida a todo el país y soporte constante.' },
              { title: 'Asesoría Técnica', icon: '👨‍🌾', description: 'Expertos disponibles para resolver todas tus dudas.' }
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-4 p-3">
                <div className="text-4xl">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Grid - Updated section */}
        <div className="max-w-7xl mx-auto pt-8 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product, index) => (
              <ProductCard
                key={product.slug}
                name={product.name}
                slug={product.slug}
                image={product.image}
                description={product.description}
                details={product.details}
                logo={product.logo}
                baseUrl="/productos/ensilaje"
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Additional Sections */}
        <div className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
             style={{ transitionDelay: '500ms' }}>
          <Marcas />
        </div>

        <div className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
             style={{ transitionDelay: '600ms' }}>
          <NoticeSlider
            notices={[
              { id: 1, text: 'Contáctanos para asesoría personalizada' },
              { id: 2, text: 'Envíos a todo el país' },
            ]}
          />
        </div>

        {/* Botón flotante de WhatsApp siempre visible */}
        <div className="fixed bottom-6 right-6 z-50">
          <WhatsappContacts  />
        </div>
      </div>
    </>
  );
};

export default EnsilajeProductsPage;
