'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useKeenSlider } from 'keen-slider/react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import 'keen-slider/keen-slider.min.css';

interface Solucion {
  image: string;
  title: string;
  description: string;
  link: string;
}

interface SolucionesSectionProps {
  soluciones: Solucion[];
}

const SolucionesSection: React.FC<SolucionesSectionProps> = ({ soluciones }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free-snap',
    slides: { perView: 1.1, spacing: 12 },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 1.5, spacing: 16 },
      },
      '(min-width: 768px)': {
        slides: { perView: 2.2, spacing: 20 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 2.5, spacing: 24 },
      },
      '(min-width: 1280px)': {
        slides: { perView: 2, spacing: 24 },
      },
    },
    slideChanged(s) {
      setActiveIndex(s.track.details.rel);
    }
  });

  return (
    <section
      id="productSect"
      className="relative text-white py-16 sm:py-24 lg:py-32 overflow-hidden"
      style={{
        backgroundImage: `url('/images/background3.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-lime-400/20 via-green-500/20 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-8 bg-gradient-to-l from-lime-400/20 via-green-500/20 to-transparent"></div>
      
      {/* Content container with limited green filter */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Green filter now only covers the content area */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-900/60 via-green-800/70 to-black/90 backdrop-blur-[2px] shadow-xl">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_theme(colors.green.300/20)_0%,transparent_60%)]"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative z-10 flex flex-col lg:flex-row items-start gap-12 lg:gap-16 p-6 sm:p-8 md:p-10"
        >
          {/* Texto principal con animaciones */}
          <div className="w-full lg:w-2/5 space-y-6">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-white drop-shadow-lg"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-200 to-green-300">
                Soluciones Innovadoras
              </span>{" "}
              para el Agro-Negocio
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg text-green-50 leading-relaxed max-w-prose"
            >
              Explora nuestras soluciones agrícolas diseñadas para optimizar el rendimiento con las mejores marcas internacionales.
              <span className="block mt-2 font-light italic text-green-100/80">Tecnología de vanguardia para el campo moderno.</span>
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link
                href="/ProductosPage"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-lime-300 to-green-400 text-green-900 font-bold text-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10">Ver Productos</span>
                <span className="absolute inset-0 bg-white/30 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
              
              <Link
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden"
              >
                <FaWhatsapp className="w-5 h-5 group-hover:animate-pulse" />
                <span className="relative z-10">WhatsApp</span>
                <span className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            </motion.div>
          </div>

          {/* Carrusel mejorado */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-3/5 relative"
          >
            {/* Botones de navegación mejorados */}
            <button
              onClick={() => slider.current?.prev()}
              className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-green-600/80 to-green-500/80 hover:from-green-500/90 hover:to-green-400/90 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
              aria-label="Anterior"
            >
              <ChevronLeft className="text-white w-5 h-5" />
            </button>

            <div className="ml-6 mr-6">
              <div ref={sliderRef} className="keen-slider py-4">
                {soluciones.map((item, index) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    viewport={{ once: true }}
                    key={index} 
                    className="keen-slider__slide px-2"
                  >
                    <div className={`bg-gradient-to-b from-white/10 to-green-900/30 border ${index === activeIndex ? 'border-lime-400/60' : 'border-green-600/30'} rounded-xl p-5 shadow-xl hover:shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 flex flex-col h-full group`}>
                      <div className="h-48 sm:h-56 rounded-lg overflow-hidden relative">
                        <Link href={item.link}>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-50 group-hover:opacity-70 transition-opacity"></div>
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </Link>
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white mt-4 group-hover:text-lime-300 transition-colors duration-300">
                        <Link href={item.link} className="hover:text-lime-300 transition-colors flex items-center">
                          {item.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-green-100/90 mt-2 line-clamp-3 group-hover:text-white/90 transition-colors">
                        {item.description || 'Conoce más sobre nuestras soluciones especializadas.'}
                      </p>
                      <div className="mt-auto pt-4">
                        <Link
                          href={item.link}
                          className="inline-flex items-center text-lime-300 text-sm font-medium hover:text-white group-hover:translate-x-1 transition-all duration-300 gap-1"
                        >
                          Ver más
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Dots indicator */}
            {slider.current && (
              <div className="flex justify-center gap-2 mt-6">
                {[...Array(soluciones.length)].map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => slider.current?.moveToIdx(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      activeIndex === idx ? 'bg-lime-300 w-6' : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}

            <button
              onClick={() => slider.current?.next()}
              className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-l from-green-600/80 to-green-500/80 hover:from-green-500/90 hover:to-green-400/90 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
              aria-label="Siguiente"
            >
              <ChevronRight className="text-white w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolucionesSection;
