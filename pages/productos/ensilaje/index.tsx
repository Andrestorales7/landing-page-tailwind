'use client';

import React from 'react';
import Link from 'next/link';
import Marcas from '@/components/sections/Marcas';
import NoticeSlider from '@/components/sections/NoticeSlider';
import WhatsappContacts from '@/components/layout/WhatsappContacts';

const AgroProductPage = () => {
  const products = [
    {
      name: 'Inoculante',
      slug: 'inoculante-supracil',
      image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Inoculante para ensilaje disponible en tres tipos SupraSil',
      details: ['SILAJES - 1 litro', 'GRANOS - 1 litro', 'FORRAJES - 1 litro'],
      logo: '/images/logos/suprasil-logo.png',
    },
    {
      name: 'Film para fardos',
      slug: 'film-agrilpower',
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Film para empaque de fardos',
      details: ['750 mm x 1,500 m (25 micras)'],
      logo: '/images/logos/agripower-logo.png',
    },
    {
      name: 'Hilos para fardos',
      slug: 'hilos-exporplas',
      image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Hilos para diferentes tipos de fardos',
      details: ['Hilo e1000 - 5,400 m (fardos redondos)', 'Hilo e130 - 1,300 m (fardos cuadrados)'],
      logo: '/images/logos/exporplas-logo.png',
    },
    {
      name: 'Mallas para fardos',
      slug: 'mallas-exporplas',
      image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Mallas para empaque de fardos',
      details: ['HORIZON™: 125 x 3,600 cm, 130 x 3,600 cm', 'EMPACADOR: 124 x 3,600 cm, 130 x 3,600 cm'],
      logo: '/images/logos/exporplas-logo.png',
    },
    {
      name: 'Silobolsas',
      slug: 'silobolsas-agrinpex',
      image: 'https://images.unsplash.com/photo-1630152675905-c6d7d9e7bfb1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Silobolsas de diferentes capacidades',
      details: ['6 pies x 60 m', '6.5 pies x 60 m', '9 pies x 60 m', '9 pies x 75 m'],
      logo: '/images/logos/agrinpex-logo.png',
    },
    {
      name: 'TECH H2O Barrier',
      slug: 'tech-h2o-barrier',
      image: 'https://images.unsplash.com/photo-1605007493699-af65834f8aa3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Techos con barrera de humedad',
      details: [
        'Blanco/Negro: 7 capas, con barrera de EVOH',
        'Azul: 45 micras (12 x 50 m y 14 x 50 m) con barrera de EVOH',
      ],
      logo: '/images/logos/tech-logo.png',
    },
    {
      name: 'Máquina selladora',
      slug: 'maquina-selladora',
      image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a9d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Selladora para silobolsas',
      details: ['Impide ingreso de humedad', 'Presión temporizada', 'Portátil y liviana con alarma auditiva'],
      logo: '/images/logos/pipiola-logo.png',
    },
    {
      name: 'TECH Lona',
      slug: 'tech-lona-azul',
      image: 'https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Lonas de protección',
      details: ['Negro: 8 x 100 m (100 micras)'],
      logo: '/images/logos/tech-logo.png',
    },
    {
      name: 'Mantas',
      slug: 'mantas',
      image: 'https://images.unsplash.com/photo-1605001016900-683fd85a4415?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Mantas de diferentes medidas',
      details: [
        '8 x 50 m (100 micras)',
        '10 x 50 m (100 micras)',
        '12 x 50 m (100 y 150 micras)',
        '13.5 x 50 m (150 micras)',
        '14 x 50 m (150 micras)',
      ],
      logo: '/images/logos/tech-logo.png',
    },
    {
      name: 'TECH Silo',
      slug: 'tech-silo-azul',
      image: 'https://images.unsplash.com/photo-1605001017150-6fa309a6eddd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Cubiertas para silos',
      details: ['Blanco/Negro: 12 x 50 m y 14 x 50 m', 'Disponible en 100 y 150 micras'],
      logo: '/images/logos/tech-logo.png',
    },
    {
      name: 'Bolsa TECH Silaje',
      slug: 'bolsa-tech-silaje',
      image: 'https://images.unsplash.com/photo-1605001016331-37e565ff2a3a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Bolsas para silaje',
      details: ['Blanco/Negro: 61 x 120 cm (150 micrones)'],
      logo: '/images/logos/tech-logo.png',
    },
  ];

  return (
    <>
      <div id="agro-productos" className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div
          className="relative text-white py-24 px-6 sm:px-12 lg:px-32 text-center bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1483871788521-4f224a86e166?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10">
            <h1 className="text-5xl font-extrabold leading-tight">Ensilaje</h1>
            <p className="mt-6 text-xl max-w-3xl mx-auto">
              Soluciones especializadas para el almacenamiento y protección de cultivos y forrajes.
            </p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition duration-300 flex flex-col overflow-hidden"
              >
                <Link href={`/productos/agricolas/${product.slug}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-48 w-full object-cover"
                  />
                </Link>

                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800 hover:text-green-600 transition-colors">
                    <Link href={`/productos/agricolas/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                  <ul className="text-sm text-gray-700 space-y-1 flex-grow">
                    {product.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Product Logo */}
                <div className="p-4 flex justify-center bg-gray-100">
                  <img
                    src={product.logo}
                    alt={`${product.name} logo`}
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <Marcas />
      <NoticeSlider
        notices={[
          { id: 1, text: 'Contáctanos para asesoría personalizada' },
          { id: 2, text: 'Envíos a todo el país' },
        ]}
      />
      <WhatsappContacts contacts={[]} />
    </>
  );
};

export default AgroProductPage;
