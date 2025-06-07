'use client';

import React, { useState, useEffect } from 'react';
import Marcas from '@/components/sections/Marcas';
import NoticeSlider from '@/components/sections/NoticeSlider';
import WhatsappContacts from '@/components/layout/WhatsappContacts';
import { motion } from 'framer-motion';
import Image from 'next/image';

const InoculantesProductPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('granos');
  // Estado del slider SOLO para Suprasil Granos
  const [slide, setSlide] = useState(0);
  const images = [
    {
      src: "/images/productos/inoculantes/suprasil-granos1.jpeg",
      alt: "Inoculante Suprasil Granos 1",
    },
    {
      src: "/images/productos/inoculantes/suprasil-granos2.jpeg",
      alt: "Inoculante Suprasil Granos 2",
    },
  ];

  useEffect(() => {
    setIsLoaded(true);
    // Reinicia el slide al cambiar de pestaña
    setSlide(0);
  }, [activeTab]);

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

        {/* Botones de pestañas */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              activeTab === 'granos'
                ? 'bg-green-800 text-white shadow-lg'
                : 'bg-white text-green-800 border border-green-800'
            }`}
            onClick={() => setActiveTab('granos')}
          >
            Suprasil Granos
          </button>
          <button
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              activeTab === 'heno'
                ? 'bg-green-800 text-white shadow-lg'
                : 'bg-white text-green-800 border border-green-800'
            }`}
            onClick={() => setActiveTab('heno')}
          >
            Suprasil Heno
          </button>
          <button
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              activeTab === 'silajes'
                ? 'bg-green-800 text-white shadow-lg'
                : 'bg-white text-green-800 border border-green-800'
            }`}
            onClick={() => setActiveTab('silajes')}
          >
            Suprasil Silajes
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
            {activeTab === 'granos' && (
              <div>
                <h2 className="text-2xl font-bold text-green-900 mb-4">Suprasil Granos</h2>
                <div className="flex flex-col md:flex-row items-center md:items-start min-h-[320px]">
                  {/* Slide de imágenes */}
                  <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
                    <div className="w-full max-w-lg mb-4">
                      <div className="relative">
                        <Image
                          src={images[slide].src}
                          alt={images[slide].alt}
                          fill
                          className="rounded-2xl shadow-2xl w-full object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority
                        />
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                          {images.map((_, idx) => (
                            <button
                              key={idx}
                              className={`w-3 h-3 rounded-full ${slide === idx ? 'bg-green-800' : 'bg-green-200'} border border-green-800`}
                              onClick={() => setSlide(idx)}
                              aria-label={`Ver imagen ${idx + 1}`}
                              type="button"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Información al costado */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center md:pl-8">
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Conservación y calidad de granos</h3>
                    <p className="text-gray-700 text-base mb-4">
                      Este aditivo inoculante actúa inmediatamente a través de microorganismos de rápida multiplicación que mejoran la conservación y calidad de granos y semillas almacenados en silobolsas.
                    </p>
                    <h4 className="text-lg font-semibold text-green-700 mb-2">Ventajas:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 mb-2">
                      <li>
                        <span className="font-semibold">Modificación del medio ambiente:</span> en el interior del silobolsa.
                      </li>
                      <li>
                        <span className="font-semibold">Rápido descenso del nivel de oxígeno.</span>
                      </li>
                      <li>
                        <span className="font-semibold">Rápido aumento de los niveles de anhídrido carbónico.</span>
                      </li>
                      <li>
                        <span className="font-semibold">Ambiente antagonista:</span> para patógenos e insectos perjudiciales para la calidad del grano almacenado en silobolsa.
                      </li>
                      <li>
                        <span className="font-semibold">En caso de rotura del silobolsa:</span> ayuda a limitar el deterioro de los granos almacenados.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'heno' && (
              <div>
                <h2 className="text-2xl font-bold text-green-900 mb-4">Suprasil Heno</h2>
                <div className="flex flex-col md:flex-row items-center md:items-start min-h-[320px]">
                  {/* Imagen única */}
                  <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
                    <Image
                      src="/images/productos/inoculantes/suprasil-heno.jpeg"
                      alt="Inoculante Suprasil Heno"
                      width={600}
                      height={400}
                      className="rounded-2xl shadow-2xl w-full max-w-lg object-cover mb-4"
                    />
                  </div>
                  {/* Información al costado */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center md:pl-8">
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Henificación sin riesgos</h3>
                    <p className="text-gray-700 text-base mb-4">
                      Permite confeccionar heno con alto contenido de humedad sin comprometer su calidad, brindando protección desde el primer contacto con el material.
                    </p>
                    <h4 className="text-lg font-semibold text-green-700 mb-2">Ventajas:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 mb-2">
                      <li>
                        <span className="font-semibold">Ahorro de tiempo:</span> Reduce el tiempo entre el corte y la confección, optimizando la producción.
                      </li>
                      <li>
                        <span className="font-semibold">Mayor humedad:</span> Permite trabajar con porcentajes de humedad de hasta un 30%, sin riesgo de ardido.
                      </li>
                      <li>
                        <span className="font-semibold">Fácil y accesible:</span> Aplicación sencilla durante el proceso y a un costo accesible.
                      </li>
                      <li>
                        <span className="font-semibold">Protección total:</span> Desde el primer contacto con el material.
                      </li>
                      <li>
                        <span className="font-semibold">Mayor calidad y digestibilidad:</span> Disminuye la pérdida de nutrientes, mejora la palatabilidad y favorece la digestión de la fibra tratada.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'silajes' && (
              <div>
                <h2 className="text-2xl font-bold text-green-900 mb-4">Suprasil Silajes</h2>
                <div className="flex flex-col md:flex-row items-center md:items-start min-h-[320px]">
                  {/* Imagen única */}
                  <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
                    <Image
                      src="/images/productos/inoculantes/suprasil-silaje.jpeg"
                      alt="Inoculante Suprasil Silajes"
                      width={600}
                      height={400}
                      className="rounded-2xl shadow-2xl w-full max-w-lg object-cover mb-4"
                    />
                  </div>
                  {/* Información al costado */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center md:pl-8">
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Suprasil Silajes</h3>
                    <p className="text-gray-700 text-base mb-4">
                      El único inoculante diseñado para ensilar cultivos secos sin comprometer la fermentación.
                    </p>
                    <h4 className="text-lg font-semibold text-green-700 mb-2">Ventajas:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 mb-2">
                      <li>
                        <span className="font-semibold">Adaptabilidad:</span> al estado del cultivo.
                      </li>
                      <li>
                        <span className="font-semibold">Conservación segura:</span> incluso en condiciones no ideales.
                      </li>
                      <li>
                        <span className="font-semibold">Fermentación más rápida y controlada.</span>
                      </li>
                      <li>
                        <span className="font-semibold">Estabilidad fermentativa:</span> en solo 2 a 7 días.
                      </li>
                      <li>
                        <span className="font-semibold">Mayor estabilidad aeróbica.</span>
                      </li>
                      <li>
                        <span className="font-semibold">Ideal:</span> para asegurar tus reservas forrajeras húmedas.
                      </li>
                      <li>
                        <span className="font-semibold">Más digestibilidad:</span> mejor aprovechamiento por el ganado.
                      </li>
                      <li>
                        <span className="font-semibold">Fermentación rápida:</span> incluso en cultivos secos.
                      </li>
                    </ul>
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

export default InoculantesProductPage;