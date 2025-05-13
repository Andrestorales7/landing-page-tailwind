'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Marcas from '@/components/sections/Marcas';
import NoticeSlider from '@/components/sections/NoticeSlider';
import WhatsappContacts from '@/components/layout/WhatsappContacts';

const HorticulturaProductPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const products = [
    {
      name: 'Películas para Invernadero',
      slug: 'peliculas-para-invernadero',
      image: 'https://images.unsplash.com/photo-1637987327476-5c77df3cb16d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Protege tus cultivos con películas de alta calidad para invernaderos.',
    },
    {
      name: 'Media Sombra',
      slug: 'media-sombra',
      image: 'https://www.greataussiepatios.com.au/sites/greataussiepatioscomau/assets/public/Image/Patio-of-week-blogs/Nursery_with_Shade_Cloth_for_Shade.jpg',
      description: 'Crea sombra parcial para tus plantas con nuestras mallas de sombra.',
    },
    {
      name: 'Mulching',
      slug: 'mulching',
      image: '/images/horticultura/mulching/mulching1.jpeg',
      description: 'Mejora la retención de humedad y controla las malezas con mulching.',
    },
    {
      name: 'Mantas para Cultivo',
      slug: 'mantas-para-cultivo',
      image: '/images/horticultura/mantas-cultivo/mantas-cultivos1.jpg',
      description: 'Protege tus cultivos del frío y las plagas con nuestras mantas.',
    },
    {
      name: 'Hilos para Tutorado',
      slug: 'hilos-para-tutorado',
      image: '/images/horticultura/hilos-tutorado/hilo1.jpg',
      description: 'Soporta el crecimiento de tus plantas con hilos resistentes.',
    },
    {
      name: 'Mantas de Solarización',
      slug: 'mantas-de-solarizacion',
      image: '/images/horticultura/manta-solarizacion/manta2.jpg',
      description: 'Elimina patógenos del suelo con nuestras mantas de solarización.',
    },
  ];

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
      <div id="horticultura" className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div
          className="relative text-white py-24 px-6 sm:px-12 lg:px-32 text-center bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1708796705570-33fd29ef67d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className={`relative z-10 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl font-extrabold leading-tight">Productos de Horticultura</h1>
            <p className="mt-6 text-xl max-w-3xl mx-auto">
              Descubre nuestra amplia gama de productos diseñados para mejorar tus cultivos y optimizar tu producción agrícola.
            </p>
          </div>
        </div>

        {/* Product List */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <div
                key={index}
                className={`bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-700 ease-out flex flex-col overflow-hidden ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Link href={`/productos/horticultura/${product.slug}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-48 w-full object-cover"
                  />
                </Link>

                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800 hover:text-green-600 transition-colors">
                    <Link href={`/productos/horticultura/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {product.description}
                  </p>
                  <div className="mt-4 mt-auto">
                    <Link
                      href={`/productos/horticultura/${product.slug}`}
                      className="block text-center text-lime-500 text-sm font-medium hover:underline bg-gray-100 px-3 py-2 rounded transition-colors hover:bg-gray-200"
                    >
                      Ver producto
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Secciones adicionales */}
      <div className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
           style={{ transitionDelay: '500ms' }}>
        <Marcas />
      </div>

      <div className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
           style={{ transitionDelay: '600ms' }}>
        <NoticeSlider
          notices={[
            {
              id: 1,
              text: 'Contáctanos por WhatsApp',
            },
          ]}
        />
      </div>

      <div className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
           style={{ transitionDelay: '700ms' }}>
        <WhatsappContacts contacts={contacts} />
      </div>
    </>
  );
};

export default HorticulturaProductPage;
