'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

  const [loadedImages, setLoadedImages] = useState<boolean[]>(Array(soluciones.length).fill(false));
  const handleImageLoad = (idx: number) => {
    setLoadedImages(prev => {
      const copy = [...prev];
      copy[idx] = true;
      return copy;
    });
  };

  return (
    <section
      id="productSect"
      className="relative text-white py-16 sm:py-24 lg:py-32 overflow-hidden"
      style={{
        backgroundImage: `url('/images/hero/soluciones-ensilaje.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background gradient only on content */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-900/60 via-green-800/70 to-black/90 shadow-xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative z-10 flex flex-col lg:flex-row items-start gap-12 lg:gap-16 p-6 sm:p-8 md:p-10"
        >
          {/* Text content */}
          <div className="w-full lg:w-2/5 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-white drop-shadow-lg">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-200 to-green-300">
                Productos
              </span>{" "}
            
            </h2>
            <p className="text-base sm:text-lg text-green-50 leading-relaxed max-w-prose">
            Conozca la gama completa de soluciones diseñanadas para optimizar el rendimiento con las mejores marcas internacionales.
            
              <span className="block mt-2 font-light italic text-green-100/80">Tecnología de vanguardia para una producción más rentable.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-12">
              {/* Botón Ver Productos alineado a la derecha en desktop */}
              <div className="flex w-full justify-center">
                <Link
                  href="/ProductosPage"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-lime-300 to-green-400 text-green-900 font-bold text-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden"
                >
                  <span className="relative z-10">Ver Productos</span>
                  <span className="absolute inset-0 bg-white/30 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>
              </div>
            </div>
          </div>

          {/* Slider */}
          <div className="w-full lg:w-3/5 relative">
            <button
              onClick={() => slider.current?.prev()}
              className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-green-600/70 hover:bg-green-500/90 p-3 rounded-full shadow-md transition-all duration-300 hover:scale-110"
              aria-label="Anterior"
            >
              <ChevronLeft className="text-white w-5 h-5" />
            </button>

            <div className="ml-6 mr-6">
              <div ref={sliderRef} className="keen-slider py-4">
                {soluciones.map((item, index) => (
                  <div
                    key={index}
                    className="keen-slider__slide px-2"
                  >
                    <div
                      className={`relative bg-green-800/30 rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] flex flex-col h-full group`}
                    >
                      <div className="h-48 sm:h-56 relative rounded-lg overflow-hidden bg-gray-200">
                        <Link href={item.link}>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-50 group-hover:opacity-70 transition-opacity"></div>
                          {!loadedImages[index] && (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse z-20">
                              <span className="w-10 h-10 rounded-full bg-gray-300"></span>
                            </div>
                          )}
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className={`object-cover transition-transform duration-700 group-hover:scale-110 ${
                              !loadedImages[index] ? 'opacity-0' : 'opacity-100'
                            }`}
                            {...(index === 0
                              ? { priority: true }
                              : { loading: 'lazy' })}
                            onLoad={() => handleImageLoad(index)}
                          />
                        </Link>
                      </div>

                      <h3 className="text-lg sm:text-xl font-semibold text-white mt-4 group-hover:text-lime-300 transition-colors duration-300">
                        <Link href={item.link}>{item.title}</Link>
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
                  </div>
                ))}
              </div>
            </div>

            {slider.current && (
              <div className="flex justify-center gap-2 mt-6">
                {soluciones.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => slider.current?.moveToIdx(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      activeIndex === idx ? 'bg-lime-300 w-6' : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Ir a la tarjeta ${idx + 1}`}
                  />
                ))}
              </div>
            )}

            <button
              onClick={() => slider.current?.next()}
              className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-green-600/70 hover:bg-green-500/90 p-3 rounded-full shadow-md transition-all duration-300 hover:scale-110"
              aria-label="Siguiente"
            >
              <ChevronRight className="text-white w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolucionesSection;
