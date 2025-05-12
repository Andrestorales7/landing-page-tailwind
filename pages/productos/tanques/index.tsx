'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Marcas from '@/components/sections/Marcas';
import NoticeSlider from '@/components/sections/NoticeSlider';
import WhatsappContacts from '@/components/layout/WhatsappContacts';
import { motion, AnimatePresence } from 'framer-motion';

const TanquesPage = () => {
  const tanques = [
    {
      name: 'Tanque 750 litros',
      slug: 'tanque-750-litros',
      image: '/images/tanques/tanque750.jpg',
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
      image: '/images/tanques/tanque-1100-litros.jpg',
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
      image: '/images/tanques/tanque-1500lt.jpg',
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
      image: '/images/tanques/tanque-3000lt.png',
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
      image: '/images/tanques/tanque-3500lt.jpg',
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
      image: '/images/tanques/tanque-4500lt.jpg',
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
      image: '/images/tanques/tanque-6000lt.jpg',
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
      image: '/images/tanques/tanque-8000lt.jpg',
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
      image: '/images/tanques/tanque-10000lt.jpg',
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
      image: '/images/tanques/tanque-12mlt.png',
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
  const [capacityRange, setCapacityRange] = useState(tanquesOrdenados[0].capacity);

  useEffect(() => {
    const closestTank = tanquesOrdenados.reduce((prev, curr) => {
      return Math.abs(curr.capacity - capacityRange) < Math.abs(prev.capacity - capacityRange) ? curr : prev;
    });
    setSelected(closestTank);
  }, [capacityRange]);

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
      <div id="tanques" className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        {/* Hero Section */}
        <div
          className="relative text-white py-16 sm:py-24 px-4 sm:px-12 lg:px-32 text-center bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/logos/tanque-hero-bg.jpg')",
            backgroundPosition: 'center 70%',
          }}
        >
          <div className="absolute inset-0 bg-green-900 bg-opacity-70"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight"
            >
              Tanques Rotomoldeados
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 sm:mt-6 text-lg sm:text-xl max-w-3xl mx-auto"
            >
              Soluciones de almacenamiento resistentes y duraderas para múltiples aplicaciones
            </motion.p>
          </div>
        </div>

        {/* Intro */}
        <section className="relative max-w-5xl mx-auto -mt-12 sm:-mt-16 mb-12 sm:mb-16 px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-8 border border-gray-100">
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-gradient-to-r from-green-600 to-green-500 p-4 rounded-xl shadow-lg flex items-center justify-center w-48 h-48 sm:w-auto sm:h-auto">
                <Image
                  src="/images/logos/Rotor-2.png"
                  alt="Logo"
                  width={180}
                  height={130}
                  className="w-full h-auto max-h-36 object-contain"
                  style={{ filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))' }}
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Tanques de alta resistencia</h2>
              <p className="text-gray-600 leading-relaxed">
                Fabricados con Polietileno 100% virgen y protección UV para garantizar máxima durabilidad.
                Nuestros tanques HDPE ofrecen resistencia superior al impacto y agentes químicos, 
                además de incluir rompeolas para un transporte seguro de líquidos.
              </p>
            </div>
          </div>
        </section>

        {/* Nueva sección de selección de tanque por tamaño */}
        <section className="max-w-6xl mx-auto py-1 px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">Nuestros Tanques</h2>
          </div>

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
                <div className="relative p-4 lg:p-8 lg:col-span-3 order-2 lg:order-1">
                  <div className="lg:aspect-[4/3] relative rounded-xl overflow-hidden shadow-md mb-6">
                    <Image
                      src={selected.image}
                      alt={selected.name}
                      className="object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, 60vw"
                      priority
                    />
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    {tanquesOrdenados.map((tanque) => (
                      <button
                        key={tanque.slug}
                        onClick={() => setSelected(tanque)}
                        className={`px-3 py-2 text-sm rounded-lg transition-all ${
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
                    
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <button className="flex-1 px-4 sm:px-6 py-3 bg-green-500 text-white font-medium rounded-xl shadow hover:bg-green-600 focus:ring-2 focus:ring-green-300 focus:outline-none transition duration-200 flex items-center justify-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="whitespace-nowrap">Solicitar Info</span>
                      </button>
                      <button className="flex-1 px-4 sm:px-6 py-3 bg-white text-green-500 font-medium rounded-xl shadow border border-green-500 hover:bg-green-50 focus:ring-2 focus:ring-green-200 focus:outline-none transition duration-200 flex items-center justify-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                        <span>Contactar</span>
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 lg:p-8 lg:col-span-2 order-1 lg:order-2">
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
      <WhatsappContacts contacts={contacts} />
    </>
  );
};

export default TanquesPage;
