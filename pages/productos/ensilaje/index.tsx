'use client';

import React, { useState, useEffect } from 'react';
import Marcas from '@/components/sections/Marcas';
import NoticeSlider from '@/components/sections/NoticeSlider';
import WhatsappContacts from '@/components/layout/WhatsappContacts';
import { motion, AnimatePresence } from 'framer-motion';

const AgroProductPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const products = [
    {
      name: 'Film para fardos',
      slug: 'film-agrilpower',
      image: '/images/productos/ensilaje/film-fardos.jpg',
      description: 'Producidos a partir de LLDPE de alta calidad y con la última tecnología (5 capas coextruidas), garantizando así una gran resistencia al desgarro.\n\nSu formulación contiene aditivos de protección UV hasta 12 meses bajo radiación solar.\n\nGracias a su exlusivo sistema de Coextrucción Programada Inteligente (CPI), se ha logrado el mejor material de este tipo de tres capas, con la mayor performance de resistencia a la intemperie, comportamiento mecánico y eficiencia a los distintos sistemas de soldaduras.',
      details: ['750 mm x 1,500 m (25 micras)'],
      logo: '/images/logos/agripower-logo.png',
    },
    {
      name: 'Hilos para fardos',
      slug: 'hilos-exporplas',
      image: '/images/productos/ensilaje/hilo-fardo.png',
      description: 'Proba la excelencia en hilos agrícolas con CMP Agro.\n\nNuestros productos, los hilos E130 y E1000, están diseñados para elevar la eficiencia en la agricultura, especialmente en la formación de fardos redondos y cuadrados.\n\nCon su resistencia y durabilidad, mejorarás significativamente tu proceso de embalaje. Confía en la calidad que solo la marca Exporplas de Portugal puede ofrecer.',
      details: ['Hilo e1000 - 5,400 m (fardos redondos)', 'Hilo e130 - 1,300 m (fardos cuadrados)'],
      logo: '/images/logos/exporplas-logo.png',
    },
    {
      name: 'Mallas para fardos',
      slug: 'mallas-exporplas',
      image: '/images/productos/ensilaje/malla-fardos.png',
      description: 'Mallas para empaque de fardos',
      details: ['HORIZON™: 125 x 3,600 cm, 130 x 3,600 cm', 'EMPACADOR: 124 x 3,600 cm, 130 x 3,600 cm'],
      logo: '/images/logos/exporplas-logo.png',
    },
    {
      name: 'Silobolsas',
      slug: 'silobolsas-agrinpex',
      image: '/images/productos/ensilaje/silobolsa.jpg',
      description: 'El continuo desarrollo de modelos agrícola ganaderos de alta eficiencia ha requerido de la plasticultura una participación protagónica. Conscientes de esta realidad, AgrinPlex y Silox ha desarrollado las Bolsas para Silo. Hechas con equipamiento de coextrusión en tres capas y un Sistema de Coextrusión Programada Inteligente. Estas son durables, con gran resistencia mecánica, y a los rayos UV.',
      details: ['6 pies x 60 m', '6.5 pies x 60 m', '9 pies x 60 m', '9 pies x 75 m'],
      logo: '/images/logos/agrinpex-logo.png',
    },
    {
      name: 'TECH Silaje Bolsa',
      slug: 'bolsa-tech-silaje',
      image: '/images/productos/ensilaje/tech-lona.jpeg',
      description: `Bolsa para Ensilar\nBolsa diseñada para el almacenamiento de ensilaje, convirtiéndose en una alternativa económica para los pequeños y medianos productores.\nPrincipales Ventajas
                    - Empaquetado manual o con mecanismo
                    - Producido con material virgen y aditivación UV.`,
      details: ['Blanco/Negro: 61 x 120 cm (150 micrones)'],
      logo: '/images/logos/tech-logo.png',
    },
    {
      name: 'TECH Lona',
      slug: 'tech-lona-azul',
      image: '/images/productos/ensilaje/tech-lona.jpeg',
      description: 'Producido mediante el más moderno proceso de extrusión disponible en el mercado: la tecnología multicapa, que permite la aplicación específica de resinas para satisfacer las más variadas exigencias.\nPrincipales Ventajas\n-Multicapas.\n-Alta resistencia mecánica.\n-Mayor durabilidad.',
      details: ['Negro: 8 x 100 m (100 micras)'],
      logo: '/images/logos/tech-logo.png',
    },
    {
      name: 'TECH Silo',
      slug: 'tech-silo-azul',
      image: '/images/productos/ensilaje/tech-silo.jpg',
      description: 'Producido mediante el proceso de coextrusión más moderno del mercado: la tecnología multicapa. Protege y sella tu ensilaje contra los gases externos, además de controlar la temperatura interna y reducir el paso de los rayos UV.\n* Principales Ventajas\n- Alta resistencia mecánica.\n- Ideal para cubierta de ensilaje.\n- Aditivación UV.',
      details: ['Blanco/Negro: 12 x 50 m y 14 x 50 m', 'Disponible en 100 y 150 micras'],
      logo: '/images/logos/tech-logo.png',
    },
    {
      name: 'Mantas',
      slug: 'mantas',
      image: '/images/productos/ensilaje/tech-silo.jpg',
      description: 'Mantas de diferentes medidas',
      details: [
        '8 x 50 m (100 micras)',
        '10 x 50 m (100 micras)',
        '12 x 50 m (100 y 150 micras)',
        '13.5 x 50 m (150 micras)',
        '14 x 50 m (150 micras)',
      ],
      logo: '/images/logos/tech-logo.png',
    },
    {
      name: 'TechO2 Barrier',
      slug: 'tech-h2o-barrier',
      image: '/images/productos/ensilaje/silobolsa.jpg',
      description: 'Techos con barrera de humedad',
      details: [
        'Blanco/Negro: 7 capas, con barrera de EVOH',
        'Azul: 45 micras (12 x 50 m y 14 x 50 m) con barrera de EVOH',
      ],
      logo: '/images/logos/tech-logo.png',
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
      <div id="agro-productos" className="min-h-screen bg-gradient-to-b from-green-50 to-gray-50">
        {/* Hero Section */}
        <div className="relative min-h-[52vh] bg-gradient-to-br from-green-900/70 via-green-800/60 to-green-700/50 overflow-hidden">
          {/* Imagen de fondo */}
          <div
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-100"
            style={{
              backgroundImage:
                "url('/images/hero/soluciones-ensilaje.jpg')",
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

        {/* Product Grid */}
        <div className="max-w-7xl mx-auto pt-8 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product, index) => (
              <motion.div
                key={index}
                layout
                transition={{ layout: { duration: 0.4, type: "spring" } }}
                className={`group bg-white border border-green-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out flex flex-col overflow-hidden cursor-pointer relative ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
                onClick={() => setExpandedIndex(index)}
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-white/80 rounded-full p-2 shadow-md">
                    <img
                      src={product.logo}
                      alt={`${product.name} logo`}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-green-800 mb-1">{product.name}</h3>
                  {/* Solo mostrar la descripción completa si está expandida */}
                  <p className={`text-sm text-gray-600 mb-3 ${expandedIndex === index ? '' : 'line-clamp-2'}`}>
                    {expandedIndex === index
                      ? product.description.split('\n').map((line, i) => (
                          <span key={i}>
                            {line}
                            <br />
                          </span>
                        ))
                      : product.description}
                  </p>
                  <ul className="mb-2 space-y-2">
                    {product.details && product.details.map((detail, i) => (
                      <li key={i} className="flex items-center bg-lime-100 rounded px-2 py-1 text-sm text-green-700">
                        <span className="mr-2 text-lime-500">✔</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal de producto expandido */}
        <AnimatePresence>
          {expandedIndex !== null && (
            <motion.div
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
              onClick={() => setExpandedIndex(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", duration: 0.4 }}
                className="bg-white rounded-3xl shadow-2xl w-full max-w-lg mx-2 sm:mx-4 p-4 sm:p-8 relative overflow-y-auto max-h-[90vh] sm:max-h-[80vh]"
                onClick={e => e.stopPropagation()}
              >
                <button
                  className="absolute top-3 right-3 text-gray-400 hover:text-green-700 text-2xl"
                  onClick={() => setExpandedIndex(null)}
                  aria-label="Cerrar"
                >
                  &times;
                </button>
                <div className="flex flex-col items-center">
                  <img
                    src={products[expandedIndex!].image}
                    alt={products[expandedIndex!].name}
                    className="w-full h-40 sm:h-56 object-cover rounded-xl mb-4"
                  />
                  <img
                    src={products[expandedIndex!].logo}
                    alt={`${products[expandedIndex!].name} logo`}
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain mb-2"
                  />
                  <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-2 text-center">{products[expandedIndex!].name}</h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-4 text-center whitespace-pre-line">
                    {products[expandedIndex!].description}
                  </p>
                  <ul className="mb-2 space-y-2 w-full">
                    {products[expandedIndex!].details && products[expandedIndex!].details.map((detail, i) => (
                      <li key={i} className="flex items-center bg-lime-100 rounded px-3 py-2 text-sm sm:text-base text-green-700">
                        <span className="mr-2 text-lime-500">✔</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
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
        <WhatsappContacts contacts={contacts} />
      </div>
    </>
  );
};

export default AgroProductPage;
