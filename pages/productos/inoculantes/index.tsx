'use client';

import React, { useState, useEffect } from 'react';
import Marcas from '@/components/sections/Marcas';
import NoticeSlider from '@/components/sections/NoticeSlider';
import WhatsappContacts from '@/components/layout/WhatsappContacts';
import { motion } from 'framer-motion';

const InoculantesProductPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  

  return (
    <>
      <div id="inoculantes" className="min-h-screen bg-gradient-to-b from-green-50 to-gray-50">
        {/* Hero Section */}
        <div className="relative min-h-[52vh] bg-gradient-to-br from-green-900/70 via-green-800/60 to-green-700/50 overflow-hidden">
          {/* Imagen de fondo */}
          <div
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-100"
            style={{
              backgroundImage:
                "url('/images/productos/inoculantes/hero-inocu.jpg')",
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
                Inoculantes
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white max-w-2xl drop-shadow mx-auto">
                Soluciones biológicas para potenciar el rendimiento de tus cultivos.
              </p>
            </motion.div>
          </div>
          {/* Divisoria SVG igual que otras páginas */}
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

        {/* Sección de producto con dos fotos y descripciones */}
        <div className="max-w-5xl mx-auto px-4 py-16">
          <div className="relative flex flex-col md:flex-row items-center md:items-start min-h-[520px]">
            {/* Imagen 1 */}
            <div className="relative z-10 w-full md:w-1/2 flex flex-col items-center md:items-start">
              <img
                src="/images/productos/inoculantes/inoculante2.jpeg"
                alt="Inoculante Producto 1"
                className="rounded-2xl shadow-2xl w-full max-w-lg object-cover mb-4"
              />
              <p className="text-center md:text-left text-gray-700 text-base max-w-lg">
                <span className="font-semibold text-green-800">Inoculante Premium:</span>
                Ideal para soja y leguminosas, mejora la fijación biológica de nitrógeno y aumenta el rendimiento del cultivo.
              </p>
            </div>
            {/* Imagen 2 - mismo tamaño, superpuesta abajo a la derecha en desktop, debajo en mobile */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-end mt-8 md:mt-0 md:absolute md:right-0 md:bottom-0 z-20">
              <img
                src="/images/productos/inoculantes/inoculante3.jpeg"
                alt="Inoculante Producto 2"
                className="rounded-2xl shadow-xl w-full max-w-lg object-cover border-4 border-white"
              />
              <p className="text-center text-gray-700 text-sm mt-2 bg-white/80 rounded-xl px-2 py-1 shadow max-w-lg">
                <span className="font-semibold text-green-800">Inoculante Líquido:</span>
                Fácil de aplicar, compatible con diferentes sistemas de siembra y cultivos, promueve raíces más sanas y vigorosas.
              </p>
            </div>
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
        <WhatsappContacts />
      </div>
    </>
  );
};

export default InoculantesProductPage;