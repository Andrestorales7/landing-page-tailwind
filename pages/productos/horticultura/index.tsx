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
    </>
  );
};

export default HorticulturaProductPage;
