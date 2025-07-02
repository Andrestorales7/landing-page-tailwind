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

const HorticulturaProductPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const breadcrumbItems = [
    { name: "Inicio", url: "https://www.cmpagro.com.py" },
    { name: "Productos", url: "https://www.cmpagro.com.py/productos" },
    { name: "Horticultura", url: "https://www.cmpagro.com.py/productos/horticultura" }
  ];

  const breadcrumbSchema = useBreadcrumbSchema(breadcrumbItems);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Productos de Horticultura",
    "description": "Soluciones completas para horticultura: films para invernadero, mulching, mallas de sombra y sistemas de riego",
    "url": "https://www.cmpagro.com.py/productos/horticultura",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": 7, // Ajustar según tu catálogo
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Product",
            "name": "Film para Invernadero",
            "description": "Films especializados para estructuras de invernadero",
            "url": "https://www.cmpagro.com.py/productos/horticultura/film-invernadero"
          }
        }
        // Agregar más productos
      ]
    },
    "breadcrumb": breadcrumbSchema
  };

  const products = [
    {
      name: 'Películas para Invernadero',
      slug: 'peliculas-para-invernadero',
      image: '/images/productos/horticultura/pelicula-invernadero2.webp',
      description: 'Protege tus cultivos con películas de alta calidad para invernaderos.',
      details: ['Alta transmisión de luz', 'Protección UV', 'Durabilidad superior'],
      logo: '/images/logos/agrinpex-logo.png',
    },
    {
      name: 'Media Sombra',
      slug: 'media-sombra',
      image: '/images/productos/horticultura/media-sombra2.jpeg',
      description: 'Crea sombra parcial para tus plantas con nuestras mallas de sombra.',
      details: ['Diferentes porcentajes de sombra', 'Resistente a la intemperie'],
      logo: '/images/logos/sugrand-logo2.png',
    },
    {
      name: 'Mulching',
      slug: 'mulching',
      image: '/images/productos/horticultura/mulching1.jpg',
      description: 'Mejora la retención de humedad y controla las malezas con mulching.',
      details: ['Control de malezas', 'Ahorro de agua', 'Fácil instalación'],
      logo: '/images/logos/agrinpex-logo.png',
    },
    {
      name: 'Mantas para Cultivo',
      slug: 'mantas-para-cultivo',
      image: '/images/productos/horticultura/mantas-cultivos2.jpg',
      description: 'Protege tus cultivos del frío y las plagas con nuestras mantas.',
      details: ['Protección contra heladas', 'Transpirable', 'Ligero y resistente'],
      logo: '/images/logos/agrinpex-logo.png',
    },
    {
      name: 'Hilos para Tutorado',
      slug: 'hilos-para-tutorado',
      image: '/images/productos/horticultura/hilo1.jpg',
      description: 'Soporta el crecimiento de tus plantas con hilos resistentes.',
      details: ['Alta resistencia', 'No daña las plantas'],
      logo: '/images/logos/exporplas-logo.png',
    },
    {
      name: 'Mantas de Solarización',
      slug: 'mantas-de-solarizacion',
      image: '/images/productos/horticultura/manta1.jpeg',
      description: 'Elimina patógenos del suelo con nuestras mantas de solarización.',
      details: ['Control de patógenos', 'Fácil de usar'],
      logo: '/images/logos/agrinpex-logo.png',
    },
  ];

  return (
    <>
      <SEO
        title="Productos de Horticultura | Films para Invernadero y Mulching | CMP Agro"
        description="Soluciones completas para horticultura en Paraguay: films para invernadero, mulching, mallas de sombra, sistemas de riego y más. Calidad profesional garantizada."
        url="https://www.cmpagro.com.py/productos/horticultura"
        image="https://www.cmpagro.com.py/images/hero/soluciones-horticultura.webp"
        type="website"
        structuredData={[breadcrumbSchema, collectionSchema]}
      />
      
      <div id="horticultura" className="min-h-screen bg-gradient-to-b from-green-50 to-gray-50">
        {/* Hero Section */}
        <div className="relative min-h-[52vh] bg-gradient-to-br from-green-900/70 via-green-800/60 to-green-700/50 overflow-hidden">
          {/* Imagen de fondo optimizada */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/productos/horticultura/pelicula-invernadero2.webp"
              alt="Hero Horticultura"
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
                Productos de Horticultura
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white max-w-2xl drop-shadow mx-auto">
                Descubre nuestra amplia gama de productos diseñados para mejorar tus cultivos y optimizar tu producción agrícola.
              </p>
            </motion.div>
          </div>
          {/* Divisoria SVG igual que agropecuaria */}
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
              { title: 'Variedad de Productos', icon: '🌱', description: 'Soluciones para cada etapa del cultivo y protección agrícola.' },
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
                baseUrl="/productos/horticultura"
                index={index}
              />
            ))}
          </div>
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
    </>
  );
};

export default HorticulturaProductPage;
