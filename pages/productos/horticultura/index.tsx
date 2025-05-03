'use client';

import React from 'react';
import Link from 'next/link';
import Marcas from '@/components/sections/Marcas';
import NoticeSlider from '@/components/sections/NoticeSlider';

const HorticulturaProductPage = () => {
  const products = [
    {
      name: 'Películas para Invernadero',
      image: 'https://images.unsplash.com/photo-1637987327476-5c77df3cb16d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '/productos/horticultura/peliculas-para-invernadero',
    },
    {
      name: 'Media Sombra',
      image: 'https://www.greataussiepatios.com.au/sites/greataussiepatioscomau/assets/public/Image/Patio-of-week-blogs/Nursery_with_Shade_Cloth_for_Shade.jpg',
      link: '/productos/horticultura/media-sombra',
    },
    {
      name: 'Mulching',
      image: '/images/horticultura/mulching/mulching1.jpeg',
      link: '/productos/horticultura/mulching',
    },
    {
      name: 'Mantas para Cultivo',
      image: '/images/horticultura/mantas-cultivo/mantas-cultivos1.jpg',
      link: '/productos/horticultura/mantas-para-cultivo',
    },
    {
      name: 'Hilos para Tutorado',
      image: '/images/horticultura/hilos-tutorado/hilo1.jpg',
      link: '/productos/horticultura/hilos-para-tutorado',
    },
    {
      name: 'Mantas de Solarización',
      image: '/images/horticultura/manta-solarizacion/manta2.jpg',
      link: '/productos/horticultura/mantas-de-solarizacion',
    },
  ];

  return (
    <>
      <div id="horticultura" className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div
          className="relative text-white py-24 px-6 sm:px-12 lg:px-32 text-center bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1708796705570-33fd29ef67d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10">
            <h1 className="text-5xl font-extrabold leading-tight">Productos de Horticultura</h1>
            <p className="mt-6 text-xl max-w-3xl mx-auto">
              Descubre nuestra amplia gama de productos diseñados para mejorar tus cultivos y optimizar tu producción agrícola.
            </p>
          </div>
        </div>

        {/* Product List */}
        <div className="max-w-7xl mx-auto py-16 px-6 sm:px-12 lg:px-20">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <div
                key={index}
                className="group relative bg-white/5 border border-green-600/30 rounded-2xl p-5 shadow-md hover:shadow-2xl backdrop-blur-md transition-all duration-500 ease-in-out transform hover:scale-[1.03] flex flex-col h-full"
              >
                <div className="h-48 rounded-xl overflow-hidden relative">
                  <Link href={product.link}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </Link>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mt-4 group-hover:text-green-600 transition-colors">
                  <Link href={product.link} className="hover:text-lime-400 transition-colors">
                    {product.name}
                  </Link>
                </h3>
                <div className="mt-4">
                  <Link
                    href={product.link}
                    className="text-lime-400 text-sm font-medium hover:underline"
                  >
                    Ver producto
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Marcas />

      <NoticeSlider
        notices={[
          {
            id: 1,
            text: 'Contáctanos por WhatsApp',
          },
        ]}
      />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/1234567890" // Reemplaza con tu número de WhatsApp
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        aria-label="Contactar por WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 6L0 24l6-1.6a11.94 11.94 0 0 0 6 1.6c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.28-1.45l-.38-.22-3.55.95.95-3.55-.22-.38A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.82-1.9-.92-.25-.1-.43-.14-.6.14-.18.28-.7.92-.86 1.1-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.25-1.37-.83-.74-1.4-1.65-1.57-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.1-.18.05-.35-.02-.5-.07-.14-.6-1.43-.82-1.95-.22-.52-.42-.45-.6-.46h-.52c-.18 0-.46.07-.7.35-.24.28-.92.9-.92 2.2s.95 2.55 1.08 2.73c.14.18 1.87 2.85 4.55 3.98.63.27 1.12.43 1.5.55.63.2 1.2.17 1.65.1.5-.07 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32z" />
        </svg>
      </a>
    </>
  );
};

export default HorticulturaProductPage;
