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
    mode: 'snap',
    slides: { perView: 2, spacing: 18 },
    breakpoints: {
      1024: { slides: { perView: 3, spacing: 18 } },
    },
  });

  return (
    <section
      id="productSect"
      className="relative text-white py-20 lg:py-32 flex items-center justify-center"
      style={{
        backgroundImage: `url('/images/background3.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-15 bg-gradient-to-br from-green-900/20 via-green-800/60 to-black/80 backdrop-blur-sm"></div>

      <div className="relative z-20 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 px-6">
        <div className="lg:w-1/2 text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg">
            Soluciones Innovadoras para el Agro-Negocio
          </h2>
          <p className="text-lg text-green-100 max-w-md leading-relaxed">
            Explora nuestras soluciones agrícolas diseñadas para optimizar el rendimiento con las mejores marcas Internacionales.
          </p>
          <div className="mt-6 flex gap-4">
            <Link
              href="/productos"
              className="inline-flex items-center px-7 py-3 bg-gradient-to-r from-lime-300 to-green-400 text-green-900 font-bold text-sm rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Ver - Productos
            </Link>
            <Link
              href="https://wa.me/1234567890" // Reemplaza con tu número real
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-green-400 to-green-600 text-white font-bold text-sm rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <FaWhatsapp className="w-5 h-5" />
              WhatsApp
            </Link>
          </div>
        </div>

        <div className="relative lg:w-1/2 w-full">
          <button
            onClick={() => slider.current?.prev()}
            className="absolute z-20 left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-green-700/50 p-2 rounded-full shadow-lg backdrop-blur-md transition-all"
            aria-label="Anterior"
          >
            <ChevronLeft className="text-white w-6 h-6" />
          </button>

          <div ref={sliderRef} className="keen-slider">
            {soluciones.map((item, index) => (
              <div key={index} className="keen-slider__slide px-1">
                <div className="group relative bg-white/5 border border-green-600/30 rounded-2xl p-5 shadow-md hover:shadow-2xl backdrop-blur-md transition-all duration-500 ease-in-out transform hover:scale-[1.03] flex flex-col h-full">
                  <div className="h-48 rounded-xl overflow-hidden relative">
                    <Link href={item.link}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    </Link>
                  </div>
                  <h3 className="text-lg font-semibold text-white mt-4">
                    <Link
                      href={item.link}
                      className="hover:text-lime-400 transition-colors"
                    >
                      {item.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-green-100 mt-2 line-clamp-3">
                    {item.description || 'Conoce más sobre nuestras soluciones especializadas.'}
                  </p>
                  <div className="mt-4">
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

          <button
            onClick={() => slider.current?.next()}
            className="absolute z-20 right-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-green-700/30 p-2 rounded-full shadow-lg backdrop-blur-md transition-all"
            aria-label="Siguiente"
          >
            <ChevronRight className="text-white w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolucionesSection;
