'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Marcas from '@/components/sections/Marcas';
import NoticeSlider from '@/components/sections/NoticeSlider';
import WhatsappContacts from '@/components/layout/WhatsappContacts';
import { motion } from 'framer-motion';

const AgroPecuariaPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const products = [
    {
      name: 'Malla CTA Aluminet',
      slug: 'malla-cta-aluminet',
      image: '/images/logos/sugrand.png',
      description: 'Malla CTA Aluminet disponible en varias medidas.',
      details: ['0,4 x 50 m', '0,8 x 50 m', '4,30 x 100 m (50%)', '4,30 x 100 m (35%)'],
      logo: '/images/logos/sugrand.png',
    },
    {
      name: 'Tejido Aviary Porcícola',
      slug: 'tejido-aviary-porcicola',
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1964&auto=format&fit=crop',
      description: 'Tejido aviary porcícola con diferentes características.',
      details: [
        'Amarillo: Lateral - 120 g/m² (2,10 - 2,60 m)',
        'Azul: Lateral - 120 g/m² (2,10 - 2,60 m)',
        'Negro: Cielo raso - 135 g/m² (3,00 - 3,20 m)',
        'Negro/Plata: Lateral - 230 g/m² (2,60 m)',
      ],
      logo: '/images/logos/logo1.png',
    },
    {
      name: 'Comederos',
      slug: 'comederos-nortene',
      image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=2070&auto=format&fit=crop',
      description: 'Comederos de alta resistencia (1.000 micras).',
      details: ['1,00 x 25 m', '1,00 x 50 m', '1,20 x 25 m', '1,20 x 50 m', '1,50 x 25 m', '1,50 x 50 m'],
      logo: '/images/logos/nortene-logo.png',
    },
    {
      name: 'Geomembranas',
      slug: 'geomembranas-nortene',
      image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071&auto=format&fit=crop',
      description: 'Geomembranas disponibles en varios espesores.',
      details: ['500 micras', '800 micras', '1.000 micras'],
      logo: '/images/logos/nortene-logo.png',
    },
    {
      name: 'Acquapex',
      slug: 'acquapex',
      image: 'https://images.unsplash.com/photo-1630152675905-c6d7d9e7bfb1?q=80&w=2070&auto=format&fit=crop',
      description: 'Rollos de Acquapex en diferentes colores y medidas.',
      details: ['4,20 x 200 m (Negro/Verde)', '4,20 x 200 m (Negro/Blanco)', '4,20 x 200 m (Negro/Azul)'],
      logo: '/images/logos/logo6.png',
    },
    {
      name: 'Geo Rain Cover',
      slug: 'geo-rain-cover',
      image: 'https://images.unsplash.com/photo-1605007493699-af65834f8aa3?q=80&w=2071&auto=format&fit=crop',
      description: 'Cubiertas de lluvia de alta resistencia.',
      details: ['10 x 50 m (250 micras)'],
      logo: '/images/logos/logo2.png',
    },
    {
      name: 'Techazo',
      slug: 'techazo-rafitec',
      image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a9d9?q=80&w=2070&auto=format&fit=crop',
      description: 'Techazo de alta calidad para uso agropecuario.',
      details: ['8,5 x 50 m (500 micras)'],
      logo: '/images/logos/rafitec-logo.png',
    },
  ];

  const contacts = [
    {
      name: 'Juan Pérez',
      profileImage: '/images/perfil1.png',
      whatsappLink: 'https://wa.me/1234567890',
    },
    {
      name: 'María López',
      profileImage: '/images/perfil1.png',
      whatsappLink: 'https://wa.me/0987654321',
    },
  ];

  return (
    <>
      <div id="agropecuaria-productos" className="min-h-screen bg-gradient-to-b from-green-50 to-gray-50">
        {/* Hero Section */}
        <div className="relative min-h-[52vh] bg-gradient-to-br from-green-900/70 via-green-800/60 to-green-700/50 overflow-hidden">
          {/* Imagen de fondo */}
          <div
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-100"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1483871788521-4f224a86e166?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
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
                Soluciones AGRO PECUARIAS
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white max-w-2xl drop-shadow mx-auto">
                Productos especializados para el sector agropecuario.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Productos</h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <div
                key={index}
                className={`bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-700 ease-out flex flex-col overflow-hidden ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Link href={`/productos/agropecuaria/${product.slug}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-48 w-full object-cover"
                  />
                </Link>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800 hover:text-green-600 transition-colors">
                    <Link href={`/productos/agropecuaria/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                  <ul className="text-sm text-gray-700 space-y-1 flex-grow">
                    {product.details && product.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 mt-auto">
                    <Link
                      href={`/productos/agropecuaria/${product.slug}`}
                      className="block text-center text-lime-500 text-sm font-medium hover:underline bg-gray-100 px-3 py-2 rounded transition-colors hover:bg-gray-200"
                    >
                      Ver producto
                    </Link>
                  </div>
                </div>
                {/* Product Logo */}
                <div className="p-4 flex justify-center bg-gray-100">
                  <img
                    src={product.logo}
                    alt={`${product.name} logo`}
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </div>
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

      <div className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
           style={{ transitionDelay: '700ms' }}>
        <WhatsappContacts contacts={contacts} />
      </div>
    </>
  );
};

export default AgroPecuariaPage;