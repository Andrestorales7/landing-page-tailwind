'use client';

import React, { useState, useEffect } from 'react';
import Marcas from '@/components/sections/Marcas';
import NoticeSlider from '@/components/sections/NoticeSlider';
import WhatsappContacts from '@/components/layout/WhatsappContacts';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import SEO from '@/components/SEO';  // Añadida la importación de SEO

const OtrosProductosPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const products = [
    {
      name: 'Cintas Flexográficas',
      slug: 'cintas-flexograficas',
      image: '/images/productos/otros/cintasflex/cintas1.jpg',
      description: 'Cintas impresas de alta calidad para embalaje y seguridad.',
      details: ['Personalizables', 'Alta resistencia', 'Impresión nítida'],
      logo: '/images/logos/tesa-logo.svg',
    },
    {
      name: 'Máquinas Cerradoras',
      slug: 'maquinas-cerradoras',
      image: '/images/productos/otros/costuradoras/union1.png',
      description: 'Máquinas para cerrar cajas y paquetes de forma eficiente.',
      details: ['Automáticas y manuales', 'Fácil mantenimiento'],
      logo: '/images/productos/otros/costuradoras/union-logo.jpg',
    },
    {
      name: 'Precintos',
      slug: 'precintos',
      image: '/images/productos/otros/precintos/precinto-altaseguridad.jpg',
      description: 'Precintos de seguridad para embalaje y transporte.',
      details: ['Variedad de tamaños', 'Alta seguridad'],
      logo: '/images/logos/cmp-logo.png',
    },
    {
      name: 'Selladora de Silobolsas',
      slug: 'selladora-silos',
      image: '/images/productos/otros/cerradoras/la-pipiola-selladora-de-silos-09.png',
      description: 'Sistema especializado para el sellado hermético de silos y estructuras de almacenamiento agrícola.',
      details: ['Sellado hermético', 'Protección contra humedad', 'Preservación de granos'],
      logo: '/images/logos/pipiola-logo.png',
    },
  ];

  return (
    <>
      <SEO 
        title="Productos Complementarios | Cintas, Precintos y Máquinas | CMP Agro"
        description="Descubra nuestra selección de equipamiento agrícola especializado: cintas flexográficas, precintos, máquinas cerradoras y selladoras de silobolsas. Soluciones complementarias para optimizar su operación."
        url="https://www.cmpagro.com.py/productos/otrosproductos"
        image="/images/hero/otros-productos.png"
      />
      
      <div id="otros-productos" className="min-h-screen bg-gradient-to-b from-green-50 to-gray-50">
        {/* Hero Section */}
        <div className="relative min-h-[52vh] bg-gradient-to-br from-green-900/70 via-green-800/60 to-green-700/50 overflow-hidden">
          {/* Imagen de fondo */}
          <div
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-100"
            style={{
              backgroundImage:
                "url('/images/hero/otros-productos.png')",
            }}
          ></div>
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
                OTROS PRODUCTOS
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white max-w-2xl drop-shadow mx-auto">
                Soluciones complementarias para tu negocio.
              </p>
            </motion.div>
          </div>
          {/* Divisoria SVG */}
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
              { title: 'Calidad Garantizada', icon: '🏅', description: 'Productos confiables y duraderos.' },
              { title: 'Envíos Nacionales', icon: '🚚', description: 'Entrega rápida a todo el país.' },
              { title: 'Soporte Técnico', icon: '🛠️', description: 'Asesoría para elegir la mejor solución.' }
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
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <Link
                key={index}
                href={`/productos/otrosproductos/${product.slug}`}
                className={`group bg-white border border-green-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out flex flex-col overflow-hidden cursor-pointer relative ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    priority={index === 0}
                  />
                  <div className="absolute top-3 right-3 bg-white/80 rounded-full p-2 shadow-md">
                    <Image
                      src={product.logo}
                      alt={`${product.name} logo`}
                      width={40}
                      height={40}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-green-800 mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <ul className="mb-2 space-y-2">
                    {product.details && product.details.map((detail, i) => (
                      <li key={i} className="flex items-center bg-lime-100 rounded px-2 py-1 text-sm text-green-700">
                        <span className="mr-2 text-lime-500">✔</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-2 flex justify-center">
                    <span className="inline-block w-full text-center bg-green-700 text-white rounded-lg px-4 py-2 text-sm font-semibold hover:bg-green-800 transition">
                      Ver producto
                    </span>
                  </div>
                </div>
              </Link>
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
          <WhatsappContacts />
        </div>
      </div>
    </>
  );
};

export default OtrosProductosPage;