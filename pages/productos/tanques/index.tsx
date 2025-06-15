'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Marcas from '@/components/sections/Marcas';
import NoticeSlider from '@/components/sections/NoticeSlider';
import WhatsappContacts from '@/components/layout/WhatsappContacts';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '@/components/SEO';  // Añadida la importación de SEO

const TanquesPage = () => {
  const tanques = [
    {
      name: 'Tanque 750 litros',
      slug: 'tanque-750-litros',
      image: '/images/productos/tanques/tanque750.jpg',
      description: 'Capacidad de 750 litros',
      details: [
        'Ancho: 0,88 m.',
        'Largo: 1,50 m.',
        'Altura: 0,95 m.',
        'Peso: 40 Kg.',
        'Tapa superior de 255 mm.',
        'Salida de descarga de 2″.',
      ],
      capacity: 750,
    },
    {
      name: 'Tanque 1.100 litros',
      slug: 'tanque-1100-litros',
      image: '/images/productos/tanques/tanque-1100-litros.jpg',
      description: 'Capacidad de 1.100 litros',
      details: [
        'Ancho: 0,98 m.',
        'Largo: 1,68 m.',
        'Altura: 1,05 m.',
        'Peso: 60 Kg.',
        'Tapa superior de 450 mm.',
        'Salida de descarga de 2″.',
      ],
      capacity: 1100,
    },
    {
      name: 'Tanque 1.500 litros',
      slug: 'tanque-1500-litros',
      image: '/images/productos/tanques/tanque-1500lt.jpg',
      description: 'Capacidad de 1.500 litros',
      details: [
        'Ancho: 1,15 m.',
        'Largo: 1,70 m.',
        'Altura: 1,23 m.',
        'Peso: 80 Kg.',
        'Tapa superior de 450 mm.',
        'Salida de descarga de 2″.',
      ],
      capacity: 1500,
    },
    {
      name: 'Tanque 3.000 litros',
      slug: 'tanque-3000-litros',
      image: '/images/productos/tanques/tanque-3000lt.png',
      description: 'Capacidad de 3.000 litros',
      details: [
        'Ancho: 1,70 m.',
        'Largo: 2,45 m.',
        'Altura: 1,10 m.',
        'Peso: 140 Kg.',
        'Rompeolas plástico interno.',
        'Tapa superior de 450 mm.',
        'Salida de descarga de 2″.',
      ],
      capacity: 3000,
    },
    {
      name: 'Tanque 3.500 litros',
      slug: 'tanque-3500-litros',
      image: '/images/productos/tanques/tanque-3500lt.jpg',
      description: 'Capacidad de 3.500 litros',
      details: [
        'Ancho: 1,65 m.',
        'Largo: 2,90 m.',
        'Altura: 1,10 m.',
        'Peso: 180 Kg.',
        'Rompeolas plástico interno.',
        'Tapa superior de 450 mm.',
        'Salida de descarga de 2″.',
      ],
      capacity: 3500,
    },
    {
      name: 'Tanque 4.500 litros',
      slug: 'tanque-4500-litros',
      image: '/images/productos/tanques/tanque-4500lt.jpg',
      description: 'Capacidad de 4.500 litros',
      details: [
        'Ancho: 1,65 m.',
        'Largo: 2,95 m.',
        'Altura: 1,30 m.',
        'Peso: 250 Kg.',
        'Rompeolas plástico interno.',
        'Tapa superior de 450 mm.',
        'Salida de descarga de 2″.',
      ],
      capacity: 4500,
    },
    {
      name: 'Tanque 6.000 litros',
      slug: 'tanque-6000-litros',
      image: '/images/productos/tanques/tanque-6000lt.jpg',
      description: 'Capacidad de 6.000 litros',
      details: [
        'Ancho: 1,60 m.',
        'Largo: 3,30 m.',
        'Altura: 1,65 m.',
        'Peso: 350 Kg.',
        'Doble Rompeolas interno.',
        'Tapa superior de 450 mm.',
        'Salida de descarga de 2″.',
      ],
      capacity: 6000,
    },
    {
      name: 'Tanque 8.000 litros',
      slug: 'tanque-8000-litros',
      image: '/images/productos/tanques/tanque-8000lt.jpg',
      description: 'Capacidad de 8.000 litros',
      details: [
        'Ancho: 2,20 m.',
        'Largo: 3,40 m.',
        'Altura: 1,75 m.',
        'Peso: 400 Kg.',
        'Doble Rompeolas interno.',
        'Tapa superior de 450 mm.',
        'Salida de descarga de 2″.',
      ],
      capacity: 8000,
    },
    {
      name: 'Tanque 10.000 litros',
      slug: 'tanque-10000-litros',
      image: '/images/productos/tanques/tanque-10000lt.png',
      description: 'Capacidad de 10.000 litros',
      details: [
        'Ancho: 2,20 m.',
        'Largo: 4,40 m.',
        'Altura: 1,55 m.',
        'Peso: 450 Kg.',
        'Doble Rompeolas interno.',
        'Tapa superior de 450 mm.',
        'Salida de descarga de 2″.',
      ],
      capacity: 10000,
    },
    {
      name: 'Tanque 12.000 litros',
      slug: 'tanque-12000-litros',
      image: '/images/productos/tanques/tanque-12mlt.png',
      description: 'Capacidad de 12.000 litros',
      details: [
        'Ancho: 2,20 m.',
        'Largo: 4,40 m.',
        'Altura: 1,75 m.',
        'Peso: 500 Kg.',
        'Doble Rompeolas interno.',
        'Tapa superior de 450 mm.',
        'Salida de descarga de 2″.',
      ],
      capacity: 12000,
    },
  ];

  const tanquesOrdenados = [...tanques].sort((a, b) => a.capacity - b.capacity);
  const [selected, setSelected] = useState(tanquesOrdenados[0]);

  const handleTanqueSelection = (tanque: React.SetStateAction<{ name: string; slug: string; image: string; description: string; details: string[]; capacity: number; }>) => {
    setSelected(tanque);
  };

  return (
    <>
      <SEO 
        title="Tanques de Polietileno | Capacidades de 750L a 12.000L | CMP Agro"
        description="Amplia gama de tanques rotomoldeados de polietileno de alta densidad con protección UV. Ideales para agua, alimentos y químicos no corrosivos. Capacidades desde 750L hasta 12.000L."
        url="https://www.cmpagro.com.py/productos/tanques"
        image="/images/productos/tanques/tanque-1500lt.jpg"
      />
      
      <div id="tanques" className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        {/* Hero Section */}
        <div className="relative min-h-[52vh] bg-gradient-to-br from-green-900/70 via-green-800/60 to-green-700/50 overflow-hidden">
          {/* Imagen de fondo general */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-80 z-0"
            style={{
              backgroundImage:
                "url('/images/hero/bg-slider.webp')", // Usa aquí tu imagen de fondo general
            }}
          ></div>
          {/* Imagen del carro tanque alineada a la derecha y por encima */}
          <div
            className="absolute inset-y-0 right-0 w-full sm:w-2/3 md:w-1/2 lg:w-[45%] flex items-end justify-end z-10"
            style={{
              pointerEvents: 'none',
            }}
          >
            <Image
              src="/images/hero/carro-tanque.webp"
              alt="Carro Tanque"
              fill
              className="object-contain h-full w-full"
              style={{
                maxHeight: '100%',
                maxWidth: '85%',
              }}
              priority
            />
          </div>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent pointer-events-none z-20"></div>
          {/* Contenido del Hero */}
          <div className="relative z-30 pt-42 pb-22 px-6 sm:px-12 lg:px-18 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
                Tanques
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white max-w-2xl drop-shadow mx-auto">
                Soluciones de almacenamiento resistentes y duraderas para múltiples aplicaciones.
              </p>
            </motion.div>
          </div>
          {/* Divisoria SVG */}
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden z-40">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[10vw] min-h-[60px] max-h-[120px]">
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V56.44Z"
                className="fill-[#f9fafb] relative opacity-10"
              ></path>
              {/* <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3"
                className="fill-none stroke-white stroke-[2px] opacity-50 relative z-10"
              /> */}
            </svg>
          </div>
        </div>

        {/* Intro */}
        <section className="relative max-w-6xl mx-auto -mt-16 mb-12 px-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-4 p-3">
              <div className="text-4xl">🛢️</div>
              <div>
                <h3 className="font-bold text-gray-900">Variedad de Capacidades</h3>
                <p className="text-sm text-gray-600">
                  Tanques para cada necesidad, desde 750L hasta 12.000L.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-3">
              <div className="text-4xl">🚚</div>
              <div>
                <h3 className="font-bold text-gray-900">Envíos Nacionales</h3>
                <p className="text-sm text-gray-600">
                  Entregamos en todo el país y brindamos soporte personalizado.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-3">
              <div className="text-4xl">🛠️</div>
              <div>
                <h3 className="font-bold text-gray-900">Asesoría Técnica</h3>
                <p className="text-sm text-gray-600">
                  Expertos disponibles para resolver todas tus dudas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nueva sección de selección de tanque por tamaño */}
        <section className="max-w-6xl mx-auto py-1 px-2 sm:px-6">
          {/* Tarjeta de detalle del tanque seleccionado */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* Imagen del producto: ahora visible arriba en móvil */}
                <div className="relative p-4 lg:p-8 lg:col-span-3 order-1 lg:order-1 flex flex-col">
                  <div className="w-full aspect-[4/3] relative rounded-xl overflow-hidden shadow-md mb-6">
                    <Image
                      src={selected.image}
                      alt={selected.name}
                      className="object-contain"
                      fill
                      sizes="(max-width: 768px) 100vw, 60vw"
                      priority
                    />
                  </div>
                  {/* Botones de selección de tanque: scroll horizontal en móvil */}
                  <div className="flex flex-wrap gap-3 mb-6 overflow-x-auto">
                    {tanquesOrdenados.map((tanque) => (
                      <button
                        key={tanque.slug}
                        onClick={() => handleTanqueSelection(tanque)}
                        className={`px-3 py-2 text-sm rounded-lg transition-all whitespace-nowrap ${
                          selected.slug === tanque.slug
                            ? 'bg-green-500 text-white font-medium shadow-sm'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {tanque.capacity}L
                      </button>
                    ))}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Descripción:</h3>
                    <p className="text-gray-600 mb-4">
                      Tanque rotomoldeado de {selected.description.toLowerCase()} fabricado con polietileno de alta densidad
                      y protección UV. Ideal para almacenar agua potable, productos alimenticios y químicos no corrosivos.
                    </p>
                    <div className="flex justify-center">
                      <Link 
                        href="/contacto" 
                        className="px-6 py-3 bg-green-500 text-white font-medium rounded-xl shadow hover:bg-green-600 focus:ring-2 focus:ring-green-300 focus:outline-none transition duration-200 flex items-center justify-center"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="whitespace-nowrap">Solicitar Info</span>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Especificaciones: debajo de la imagen en móvil, a la derecha en desktop */}
                <div className="bg-gray-50 p-6 lg:p-8 lg:col-span-2 order-2 lg:order-2">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">{selected.name}</h2>
                  <div className="inline-block bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full mb-6">
                    {selected.description}
                  </div>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">Especificaciones</h3>
                    <ul className="space-y-3">
                      {selected.details.map((detail, i) => (
                        <li key={i} className="flex items-start text-gray-700">
                          <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>

        {/* Apto para */}
        <section className="py-12 sm:py-20 bg-gradient-to-b from-gray-50 to-gray-100">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-8 sm:mb-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
                Apto y Aprobado para Contener
              </h3>
              <div className="w-24 h-1 bg-green-500 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 justify-items-center">
              {[
                { text: 'Agua Potable', icon: 'water_drop' },
                { text: 'Miel', icon: 'hive' },
                { text: 'Aceites', icon: 'oil_barrel' },
                { text: 'Líquidos Densos', icon: 'opacity' },
                { text: 'Leche', icon: 'water_drop' },
                { text: 'Combustible', icon: 'local_gas_station' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center group"
                >
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-green-100 transition-colors duration-300 shadow-sm">
                    <span className="material-icons text-green-600 text-3xl">{item.icon}</span>
                  </div>
                  <p className="text-gray-700 font-medium text-center text-sm sm:text-base">{item.text}</p>
                </motion.div>
              ))}
            </div>
            
            <p className="text-center text-gray-500 mt-8 sm:mt-12 max-w-2xl mx-auto text-sm sm:text-base">
              Nuestros tanques están fabricados con materiales certificados para el almacenamiento seguro 
              de diversos líquidos y sustancias, cumpliendo con los más altos estándares de calidad.
            </p>
          </div>
        </section>
      </div>

      {/* Secciones adicionales */}
      <Marcas />
      <NoticeSlider
        notices={[
          { id: 1, text: 'Contáctanos para asesoría personalizada' },
          { id: 2, text: 'Envíos a todo el país' },
          { id: 3, text: 'Garantía de calidad en todos nuestros productos' },
        ]}
      />
      <WhatsappContacts />
    </>
  );
};

export default TanquesPage;
