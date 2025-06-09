'use client';

import React, { useState, useEffect } from 'react';
import Marcas from '@/components/sections/Marcas';
import NoticeSlider from '@/components/sections/NoticeSlider';
import WhatsappContacts from '@/components/layout/WhatsappContacts';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const EnvasesPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const products = [
    {
      name: 'Bag in Box',
      slug: 'bag-in-box',
      image: '/images/productos/envases/baginbox.jpg',
      description: 'Envase flexible para líquidos a granel.',
      details: ['Capacidad: 1000 litros'],
      logo: '/images/logos/embaquim-logo.png',
    },
    {
      name: 'IBC',
      slug: 'ibc',
      image: '/images/productos/envases/ibc-img.png',
      description: 'Contenedor rígido intermedio reutilizable.',
      details: ['Capacidad: 1000 litros'],
      logo: '/images/logos/mauser-logo1.png',
    },
    {
      name: 'Flexitank',
      slug: 'flexitank',
      image: '/images/productos/envases/flexi-tank3.png',
      description: 'Sistema flexible para transporte de líquidos.',
      details: [
        'Capacidades: 1000, 18.000, 20.000, 24.000 litros',
      ],
      logo: '/images/logos/magnum-logo.png',
    },
    {
      name: 'Tambores Metálicos',
      slug: 'tambores-metalicos',
      image: '/images/productos/envases/envase2.jpg',
      description: 'Tambores de acero para líquidos y sólidos.',
      details: [
        'Capacidades: 50, 100, 200, 210, 220 litros',
        'Modelos: tapa fija, tapa removible',
      ],
      logo: '/images/logos/greif-logo.png',
    },
    {
      name: 'Tambores de Plástico',
      slug: 'tambores-plastico',
      image: '/images/productos/envases/envase-plastico.jpg',
      description: 'Tambores plásticos resistentes y versátiles.',
      details: [
        'Capacidades: 100, 200, 250 litros',
      ],
      logo: '/images/logos/mauser-logo1.png',
    },
    {
      name: 'Bolsa de Rafia',
      slug: 'bolsa-rafia',
      image: '/images/productos/envases/bolsarafia.jpg',
      description: 'Bolsas versátiles para empaque industrial.',
      details: [
        'Tipos: valvulado o boca abierta',
        'Blanco o transparente',
        'Con o sin fuelle',
        'Impresión frente y reverso',
        'Laminada o convencional',
      ],
      logo: '/images/logos/textil-logo.png',
    },
    {
      name: 'Bolsas de Papel',
      slug: 'bolsa-papel',
      image: '/images/productos/envases/bolsadepapel.jpeg',
      description: 'Bolsas ecológicas y resistentes.',
      details: [
        'Tipos: valvulado o boca abierta',
        'Blanca o marrón',
        'Con o sin fuelle',
        'Impresión frente y reverso',
        'Linner interno',
      ],
      logo: '/images/logos/klabin-logo.png',
    },
    {
      name: 'Big Bags',
      slug: 'big-bags',
      image: '/images/productos/envases/bigbags.jpg',
      description: 'Sacos de gran tamaño para cargas a granel.',
      details: [
        'Capacidades: 500kg, 800kg, 1000kg, 1200kg, 1500kg',
        'Modelos: tubular (blanco), maparado (blanco o transparente)',
      ],
      logo: '/images/logos/rafitec-logo.png',
    },
  ];

  return (
    <>
      <div id="envases-productos" className="min-h-screen bg-gradient-to-b from-green-50 to-gray-50">
        {/* Hero Section */}
        <div className="relative min-h-[52vh] bg-gradient-to-br from-green-900/70 via-green-800/60 to-green-700/50 overflow-hidden">
          {/* Imagen de fondo optimizada */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/productos/envases/back-tambores.jpeg"
              alt="Hero Envases"
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
                ENVASES
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white max-w-2xl drop-shadow mx-auto">
                Productos especializados para el sector de envases y embalajes.
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
              { title: 'Variedad de Envases', icon: '📦', description: 'Soluciones para cada necesidad de empaque.' },
              { title: 'Envíos Nacionales', icon: '🚚', description: 'Entrega rápida a todo el país y soporte constante.' },
              { title: 'Asesoría Técnica', icon: '👨‍💼', description: 'Expertos disponibles para resolver todas tus dudas.' }
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
              <Link
                key={index}
                href={`/productos/envases/${product.slug}`}
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

        {/* ...resto igual... */}
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
    </>
  );
};

export default EnvasesPage;