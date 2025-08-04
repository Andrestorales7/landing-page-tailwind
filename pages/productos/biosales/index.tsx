'use client';

import React, { useState, useEffect } from 'react';
import Marcas from '@/components/sections/Marcas';
import NoticeSlider from '@/components/sections/NoticeSlider';
import WhatsappContacts from '@/components/layout/WhatsappContacts';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SEO from '@/components/SEO';

const BiosalesProductPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('premix');

  useEffect(() => {
    setIsLoaded(true);
  }, [activeTab]);

  return (
    <>
      <SEO 
        title="Biosales | Suplementos Nutricionales | CMP Agro"
        description="Mejora el rendimiento de tu ganado con nuestra línea de productos Biosales. Soluciones biotecnológicas que optimizan la nutrición y digestión ruminal."
        url="https://www.cmpagro.com.py/productos/biosales"
        image="/images/productos/biosales/hero-biosales.png"
      />
      
      <div id="biosales" className="min-h-screen bg-gradient-to-b from-green-50 to-gray-50">
        {/* Hero Section */}
        <div className="relative min-h-[52vh] bg-gradient-to-br from-green-900/70 via-green-800/60 to-green-700/50 overflow-hidden">
          {/* Imagen de fondo */}
          <div
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-100"
            style={{
              backgroundImage:
                "url('/images/productos/biosales/hero-biosales.png')",
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
                Biosales
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white max-w-2xl drop-shadow mx-auto">
                Suplementos nutricionales biotecnológicos para optimizar la producción ganadera.
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

        {/* Botones de pestañas */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 px-4">
          <button
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              activeTab === 'premix'
                ? 'bg-green-800 text-white shadow-lg'
                : 'bg-white text-green-800 border border-green-800'
            }`}
            onClick={() => setActiveTab('premix')}
          >
            Bio-Núcleo Premix Engorde 1%
          </button>
          <button
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              activeTab === 'full'
                ? 'bg-green-800 text-white shadow-lg'
                : 'bg-white text-green-800 border border-green-800'
            }`}
            onClick={() => setActiveTab('full')}
          >
            Bio-Núcleo Full
          </button>
          <button
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              activeTab === 'biosalt500'
                ? 'bg-green-800 text-white shadow-lg'
                : 'bg-white text-green-800 border border-green-800'
            }`}
            onClick={() => setActiveTab('biosalt500')}
          >
            Biosalt 500
          </button>
          <button
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              activeTab === 'premixsalt'
                ? 'bg-green-800 text-white shadow-lg'
                : 'bg-white text-green-800 border border-green-800'
            }`}
            onClick={() => setActiveTab('premixsalt')}
          >
            Biosalt Premix Salt
          </button>
        </div>

        {/* Contenido de pestañas */}
        <div className="max-w-5xl mx-auto px-4 py-16 min-h-[320px]">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {activeTab === 'premix' && (
              <div>
                <h2 className="text-2xl font-bold text-green-900 mb-4">Bio-Núcleo Premix Engorde 1%</h2>
                <div className="flex flex-col md:flex-row items-center md:items-start min-h-[320px]">
                  {/* Imagen única */}
                  <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
                    <div className="relative w-full max-w-lg mb-4">
                      <Image
                        src="/images/productos/biosales/bio-nucleo-premix.jpg"
                        alt="Bio-Núcleo Premix Engorde 1%"
                        width={600}
                        height={400}
                        className="rounded-2xl shadow-2xl w-full object-cover"
                        priority={true}
                      />
                    </div>
                  </div>
                  {/* Información al costado */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center md:pl-8 mt-4 md:mt-0">
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Descripción del Producto</h3>
                    <p className="text-gray-700 text-base mb-4">
                      Se trata de una premix (pre-mezcla) ingredientes bio-orgánicos e inorgánicos
                      formulada para la elaboración de raciones tipo RTM (Raciones Totalmente
                      Mezcladas) en mixer u otro tipo de mezclador que generalmente se destinan al
                      autoconsumo en el mismo establecimiento ganadero.
                    </p>
                    <p className="text-gray-700 text-base mb-4">
                      Por su formulación permite el uso de ingredientes secos, húmedos o una combinación 
                      de ambos logrando una amplia versatilidad en la formulación para las diferentes 
                      categorías de engorde.
                    </p>
                    <p className="text-gray-700 text-base mb-4">
                      Por sus contenidos de fermentos, levaduras y enzimas promueve un mejor
                      equilibrio ruminal mejorando los periodos de adaptación y los niveles de inclusión
                      de ingredientes fibrosos. Se recomienda al utilizar este premix poner especial
                      énfasis al balance proteico en la dieta.
                    </p>
                    
                    {/* Botón de descarga de ficha técnica */}
                    <a 
                      href="/fichas/Bio-Nucleo-1.pdf" 
                      download
                      className="mt-8 flex items-center justify-center px-4 py-2 bg-green-700 hover:bg-green-800 text-white font-medium rounded-md transition-colors duration-300 w-full sm:w-auto shadow-md"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Descargar Ficha Técnica
                    </a>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'full' && (
              <div>
                <h2 className="text-2xl font-bold text-green-900 mb-4">Bio-Núcleo Full</h2>
                <div className="flex flex-col md:flex-row items-center md:items-start min-h-[320px]">
                  {/* Imagen única */}
                  <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
                    <div className="relative w-full max-w-lg mb-4">
                      <Image
                        src="/images/productos/biosales/bio-nucleo-full.jpg"
                        alt="Bio-Núcleo Full"
                        width={600}
                        height={400}
                        className="rounded-2xl shadow-2xl w-full object-cover"
                      />
                    </div>
                  </div>
                  {/* Información al costado */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center md:pl-8 mt-4 md:mt-0">
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Descripción del Producto</h3>
                    <p className="text-gray-700 text-base mb-4">
                      Se trata de un premix (pre-mezcla) de ingredientes bio-orgánicos e inorgánicos
                      formulada para la elaboración de raciones tipo RTM (Raciones Totalmente
                      Mezclados) en mixer u otro tipo de mezclador que generalmente se destinan
                      al autoconsumo en el mismo establecimiento ganadero.
                    </p>
                    <p className="text-gray-700 text-base mb-4">
                      Esta técnicamente formulada para una mayor inclusión de fibras y suculentos en las 
                      RTM elaboradas con este premix debido al uso de fermentos, levaduras y enzimas que 
                      favorecen la digestión ruminal de estos ingredientes.
                    </p>
                    <p className="text-gray-700 text-base mb-4">
                      Al mismo tiempo aporta altos niveles de NNP (Nitrógeno No Proteico) de liberación 
                      lenta, estimulando así la biota ruminal o producir mayor síntesis de proteína 
                      microbiana de alto valor biológico. Es decir, MAYOR PROTEINA A MENOR COSTO.
                    </p>
                    
                    {/* Botón de descarga de ficha técnica */}
                    <a 
                      href="/fichas/Bio-Nucleo-Full.pdf" 
                      download
                      className="mt-8 flex items-center justify-center px-4 py-2 bg-green-700 hover:bg-green-800 text-white font-medium rounded-md transition-colors duration-300 w-full sm:w-auto shadow-md"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Descargar Ficha Técnica
                    </a>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'biosalt500' && (
              <div>
                <h2 className="text-2xl font-bold text-green-900 mb-4">Biosalt 500</h2>
                <div className="flex flex-col md:flex-row items-center md:items-start min-h-[320px]">
                  {/* Imagen única */}
                  <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
                    <div className="relative w-full max-w-lg mb-4">
                      <Image
                        src="/images/productos/biosales/biosalt-500.jpg"
                        alt="Biosalt 500"
                        width={600}
                        height={400}
                        className="rounded-2xl shadow-2xl w-full object-cover"
                      />
                    </div>
                  </div>
                  {/* Información al costado */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center md:pl-8 mt-4 md:mt-0">
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Descripción del Producto</h3>
                    <p className="text-gray-700 text-base mb-4">
                      Producto diseñado para ser ofrecido en batea ad libitum (autoconsumo). Su
                      formulación contempla la acción de ingredientes Biotecnológicos con el agregado 
                      de azucares reductores y almidón modificado.
                    </p>
                    <p className="text-gray-700 text-base mb-4">
                      De esta forma se mejora el balance electrolítico y la presión osmótica del rumen, 
                      logrando un mejor aprovechamiento de los forrajes de baja calidad (espartillos, 
                      diferidos, rollos y otros pastos fibrosos); mejorando la performance del rodeo.
                    </p>
                    <p className="text-gray-700 text-base mb-4">
                      Este producto de Bionutrición Ruminal, potencia la capacidad natural del rumen 
                      para transformar alimentos en nutrientes disponibles para el animal.
                    </p>
                    
                    {/* Botón de descarga de ficha técnica */}
                    <a 
                      href="/fichas/Biosalt-500.pdf" 
                      download
                      className="mt-8 flex items-center justify-center px-4 py-2 bg-green-700 hover:bg-green-800 text-white font-medium rounded-md transition-colors duration-300 w-full sm:w-auto shadow-md"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Descargar Ficha Técnica
                    </a>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'premixsalt' && (
              <div>
                <h2 className="text-2xl font-bold text-green-900 mb-4">Biosalt Premix Salt</h2>
                <div className="flex flex-col md:flex-row items-center md:items-start min-h-[320px]">
                  {/* Imagen única */}
                  <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
                    <div className="relative w-full max-w-lg mb-4">
                      <Image
                        src="/images/productos/biosales/biosalt-premix-salt.jpg"
                        alt="Biosalt Premix Salt"
                        width={600}
                        height={400}
                        className="rounded-2xl shadow-2xl w-full object-cover"
                      />
                    </div>
                  </div>
                  {/* Información al costado */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center md:pl-8 mt-4 md:mt-0">
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Descripción del Producto</h3>
                    <p className="text-gray-700 text-base mb-4">
                      Producto formulado con ingredientes bio-orgánicos e inorgánicos, diseñado
                      para ser suministrada "ad libitum" en comederos de autoconsumo, con el consecuente 
                      menor costo de distribución.
                    </p>
                    <p className="text-gray-700 text-base mb-4">
                      Esta mezcla permite estimular un mejor aprovechamiento de los pastos, 
                      corrigiendo el balance electrolítico entre otros aspectos.
                    </p>
                    <p className="text-gray-700 text-base mb-4">
                      A nivel del rumen trabaja de manera sinérgica con los forrajes consumidos mejorando 
                      el funcionamiento de la biota ruminal, permitiendo una mayor producción de proteína 
                      microbiana de elevado valor biológico.
                    </p>
                    
                    {/* Botón de descarga de ficha técnica */}
                    <a 
                      href="/fichas/Biosalt-Premix-Salt.pdf" 
                      download
                      className="mt-8 flex items-center justify-center px-4 py-2 bg-green-700 hover:bg-green-800 text-white font-medium rounded-md transition-colors duration-300 w-full sm:w-auto shadow-md"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Descargar Ficha Técnica
                    </a>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
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
              { id: 1, text: 'Contáctanos para asesoría personalizada en nutrición de ganado' },
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

export default BiosalesProductPage;