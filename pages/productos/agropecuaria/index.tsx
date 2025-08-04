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

const AgroPecuariaPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const products = [
    {
      name: 'Malla CTA Aluminet',
      slug: 'malla-cta-aluminet',
      image: '/images/productos/agropecuaria/cta2.jpg',
      description: 'Malla CTA Aluminet disponible en varias medidas.',
      details: ['Varias medidas disponibles'],
      logo: '/images/logos/sugrand-logo.png',
    },
    {
      name: 'Tejido Aviar',
      slug: 'tejido-aviar',
      image: '/images/productos/agropecuaria/tejido-aviar.jpg',
      description: 'Tejido aviary porcícola con diferentes características.',
      details: ['Colores y gramajes variados'],
      logo: '/images/logos/rafitec-logo.png',
    },
    {
      name: 'Comederos',
      slug: 'comederos-nortene',
      image: '/images/productos/agropecuaria/comedero.jpg',
      description: 'Comederos de alta resistencia (1.000 micras).',
      details: ['Diferentes tamaños'],
      logo: '/images/logos/nortene-logo.png',
    },
    {
      name: 'Geomembranas',
      slug: 'geomembranas-nortene',
      image: '/images/productos/agropecuaria/geomembrana.jpeg',
      description: 'Geomembranas disponibles en varios espesores.',
      details: ['Material: Polietileno de alta densidad (HDPE), atóxico'],
      logo: '/images/logos/nortene-logo.png',
    },
    {
      name: 'Acquapex',
      slug: 'acquapex',
      image: '/images/productos/agropecuaria/acquapex.png',
      description: 'Rollos de Acquapex en diferentes colores y medidas.',
      details: ['Colores y medidas variadas'],
      logo: '/images/logos/rafitec-logo.png',
    },
    {
      name: 'GeoRain Cover',
      slug: 'georain-cover',
      image: '/images/productos/agropecuaria/geo-rain.jpg',
      description: 'Cubiertas de lluvia de alta resistencia.',
      details: ['10 x 50 m (250 micras)'],
      logo: '/images/logos/agrinpex-logo.png',
    },
    {
      name: 'Techazo',
      slug: 'techazo',
      image: '/images/productos/agropecuaria/techazo.jpg',
      description: 'Techazo de alta calidad para uso agropecuario.',
      details: ['8,5 x 50 m (500 micras)'],
      logo: '/images/logos/agrinpex-logo.png',
    },
  ];

  const breadcrumbItems = [
    { name: "Inicio", url: "https://www.cmpagro.com.py" },
    { name: "Productos", url: "https://www.cmpagro.com.py/productos" },
    { name: "Agropecuaria", url: "https://www.cmpagro.com.py/productos/agropecuaria" }
  ];

  const breadcrumbSchema = useBreadcrumbSchema(breadcrumbItems);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Productos Agropecuarios",
    "description": "Soluciones integrales para ganadería y agricultura: equipos, herramientas y suministros especializados",
    "url": "https://www.cmpagro.com.py/productos/agropecuaria",
    "breadcrumb": breadcrumbSchema
  };

  return (
    <>
      <SEO
        title="Productos Agropecuarios | Soluciones para Ganadería y Agricultura | CMP Agro"
        description="Equipos y suministros especializados para ganadería y agricultura en Paraguay. Herramientas de calidad para el sector agropecuario."
        url="https://www.cmpagro.com.py/productos/agropecuaria"
        image="https://www.cmpagro.com.py/images/hero/soluciones-agropecuaria.webp"
        type="website"
        structuredData={[breadcrumbSchema, collectionSchema]}
      />
      <div id="agropecuaria-productos" className="min-h-screen bg-gradient-to-b from-green-50 to-gray-50">
        {/* Hero Section */}
        <div className="relative min-h-[52vh] bg-gradient-to-br from-green-900/70 via-green-800/60 to-green-700/50 overflow-hidden">
          {/* Imagen de fondo */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero/agropecuaria-hero.webp"
              alt="Hero Agropecuaria"
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
                AGROPECUARIA
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white max-w-2xl drop-shadow mx-auto">
                Productos especializados para el sector Agropecuario.
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
              { title: 'Variedad de Productos', icon: '🐄', description: 'Soluciones para cada etapa del sector agropecuario.' },
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

        {/* Product Grid */}
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
                baseUrl="/productos/agropecuaria"
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Elimina el modal y la lógica de expandedIndex */}

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
          <WhatsappContacts />
        </div>
      </div>
    </>
  );
};

export default AgroPecuariaPage;