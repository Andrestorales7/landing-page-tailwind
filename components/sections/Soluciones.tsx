'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useKeenSlider } from 'keen-slider/react';
import { FaWhatsapp } from 'react-icons/fa';
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
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free-snap', // scroll más natural
    slides: { perView: 1.1, spacing: 12 },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 1.5, spacing: 16 },
      },
      '(min-width: 768px)': {
        slides: { perView: 2.2, spacing: 20 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 2, spacing: 24 },
      },
    },
  });

  return (
    <section
      id="productSect"
      className="relative text-white py-14 sm:py-20 lg:py-28"
      style={{
        backgroundImage: `url('/images/background3.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/40 via-green-800/70 to-black/80 backdrop-blur-sm z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-10">
          {/* Texto principal */}
          <div className="w-full lg:w-1/2 space-y-5">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-white drop-shadow-md">
              Soluciones Innovadoras para el Agro-Negocio
            </h2>
            <p className="text-base sm:text-lg text-green-100 leading-relaxed max-w-prose">
              Explora nuestras soluciones agrícolas diseñadas para optimizar el rendimiento con las mejores marcas internacionales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/productos"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-lime-300 to-green-400 text-green-900 font-bold text-sm rounded-full shadow-md hover:shadow-xl transition-all hover:scale-105"
              >
                Ver - Productos
              </Link>
              <Link
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-400 to-green-600 text-white font-bold text-sm rounded-full shadow-md hover:shadow-xl transition-all hover:scale-105"
              >
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp
              </Link>
            </div>
          </div>

          {/* Carrusel */}
          <div className="w-full lg:w-1/2 relative">
            {/* Botón izquierdo */}
            <button
              onClick={() => slider.current?.prev()}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-green-700/50 p-2 rounded-full shadow-md backdrop-blur transition-all"
              aria-label="Anterior"
            >
              <ChevronLeft className="text-white w-5 h-5" />
            </button>

            <div ref={sliderRef} className="keen-slider py-2">
              {soluciones.map((item, index) => (
                <div key={index} className="keen-slider__slide px-1">
                  <div className="bg-white/5 border border-green-600/30 rounded-xl p-4 shadow-lg hover:shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-[1.02] flex flex-col h-full">
                    <div className="h-44 sm:h-52 rounded-md overflow-hidden relative">
                      <Link href={item.link}>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-50 transition-opacity duration-300" />
                      </Link>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mt-3">
                      <Link href={item.link} className="hover:text-lime-300 transition-colors">
                        {item.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-green-100 mt-2 line-clamp-3">
                      {item.description || 'Conoce más sobre nuestras soluciones especializadas.'}
                    </p>
                    <div className="mt-3">
                      <Link
                        href={item.link}
                        className="text-lime-400 text-sm font-medium hover:underline"
                      >
                        Ver más
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Botón derecho */}
            <button
              onClick={() => slider.current?.next()}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-green-700/30 p-2 rounded-full shadow-md backdrop-blur transition-all"
              aria-label="Siguiente"
            >
              <ChevronRight className="text-white w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolucionesSection;
