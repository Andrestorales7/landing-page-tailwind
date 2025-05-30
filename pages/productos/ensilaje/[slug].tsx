import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import WhatsappContacts from '@/components/layout/WhatsappContacts';

// Puedes extraer este array a un archivo común si lo deseas
const products = [
  {
    name: 'Film para fardos',
    slug: 'film-agrilpower',
    images: [
      '/images/productos/ensilaje/film-fardos.jpg',
    ],
    description: 'Producidos a partir de LLDPE de alta calidad y con la última tecnología (5 capas coextruidas), garantizando así una gran resistencia al desgarro.\n\nSu formulación contiene aditivos de protección UV hasta 12 meses bajo radiación solar.\n\nGracias a su exlusivo sistema de Coextrucción Programada Inteligente (CPI), se ha logrado el mejor material de este tipo de tres capas, con la mayor performance de resistencia a la intemperie, comportamiento mecánico y eficiencia a los distintos sistemas de soldaduras.',
    details: ['750 mm x 1,500 m (25 micras)'],
    logo: '/images/logos/agripower-logo.png',
  },
  {
    name: 'Hilos para fardos',
    slug: 'hilos-exporplas',
    images: [
      '/images/productos/ensilaje/hilo-fardo.png',
    ],
    description: 'Proba la excelencia en hilos agrícolas con CMP Agro.\n\nNuestros productos, los hilos E130 y E1000, están diseñados para elevar la eficiencia en la agricultura, especialmente en la formación de fardos redondos y cuadrados.\n\nCon su resistencia y durabilidad, mejorarás significativamente tu proceso de embalaje. Confía en la calidad que solo la marca Exporplas de Portugal puede ofrecer.',
    details: ['Hilo e1000 - 5,400 m (fardos redondos)', 'Hilo e130 - 1,300 m (fardos cuadrados)'],
    logo: '/images/logos/exporplas-logo.png',
  },
  {
    name: 'Mallas para fardos',
    slug: 'mallas-exporplas',
    images: [
      '/images/productos/ensilaje/malla-fardos.png',
    ],
    description: 'Mallas para empaque de fardos',
    details: ['HORIZON™: 125 x 3,600 cm, 130 x 3,600 cm', 'EMPACADOR: 124 x 3,600 cm, 130 x 3,600 cm'],
    logo: '/images/logos/exporplas-logo.png',
  },
  {
    name: 'Silobolsas',
    slug: 'silobolsas-agrinpex',
    images: [
      '/images/productos/ensilaje/silobolsa.jpg',
    ],
    description: 'El continuo desarrollo de modelos agrícola ganaderos de alta eficiencia ha requerido de la plasticultura una participación protagónica. Conscientes de esta realidad, AgrinPlex y Silox ha desarrollado las Bolsas para Silo. Hechas con equipamiento de coextrusión en tres capas y un Sistema de Coextrusión Programada Inteligente. Estas son durables, con gran resistencia mecánica, y a los rayos UV.',
    details: ['6 pies x 60 m', '6.5 pies x 60 m', '9 pies x 60 m', '9 pies x 75 m'],
    logo: '/images/logos/agrinpex-logo.png',
  },
  {
    name: 'TECH Silaje Bolsa',
    slug: 'bolsa-tech-silaje',
    images: [
      '/images/productos/ensilaje/tech-lona.jpeg',
    ],
    description: `Bolsa para Ensilar\nBolsa diseñada para el almacenamiento de ensilaje, convirtiéndose en una alternativa económica para los pequeños y medianos productores.\nPrincipales Ventajas\n- Empaquetado manual o con mecanismo\n- Producido con material virgen y aditivación UV.`,
    details: ['Blanco/Negro: 61 x 120 cm (150 micrones)'],
    logo: '/images/logos/tech-logo.png',
  },
  {
    name: 'TECH Lona',
    slug: 'tech-lona-azul',
    images: [
      '/images/productos/ensilaje/tech-lona.jpeg',
    ],
    description: 'Producido mediante el más moderno proceso de extrusión disponible en el mercado: la tecnología multicapa, que permite la aplicación específica de resinas para satisfacer las más variadas exigencias.\nPrincipales Ventajas\n-Multicapas.\n-Alta resistencia mecánica.\n-Mayor durabilidad.',
    details: ['Negro: 8 x 100 m (100 micras)'],
    logo: '/images/logos/tech-logo.png',
  },
  {
    name: 'TECH Silo',
    slug: 'tech-silo-azul',
    images: [
      '/images/productos/ensilaje/tech-silo.jpg',
    ],
    description: 'Producido mediante el proceso de coextrusión más moderno del mercado: la tecnología multicapa. Protege y sella tu ensilaje contra los gases externos, además de controlar la temperatura interna y reducir el paso de los rayos UV.\n* Principales Ventajas\n- Alta resistencia mecánica.\n- Ideal para cubierta de ensilaje.\n- Aditivación UV.',
    details: ['Blanco/Negro: 12 x 50 m y 14 x 50 m', 'Disponible en 100 y 150 micras'],
    logo: '/images/logos/tech-logo.png',
  },
  {
    name: 'Mantas',
    slug: 'mantas',
    images: [
      '/images/productos/ensilaje/tech-silo.jpg',
    ],
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
    name: 'TechO2 Barrier',
    slug: 'tech-h2o-barrier',
    images: [
      '/images/productos/ensilaje/silobolsa.jpg',
    ],
    description: 'Techos con barrera de humedad',
    details: [
      'Blanco/Negro: 7 capas, con barrera de EVOH',
      'Azul: 45 micras (12 x 50 m y 14 x 50 m) con barrera de EVOH',
    ],
    logo: '/images/logos/tech-logo.png',
  },
];

export default function EnsilajeProductDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const product = products.find((p) => p.slug === slug);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Producto no encontrado</h2>
        <Link href="/productos/ensilaje" className="text-green-700 underline">
          Volver
        </Link>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[40vh] bg-green-900 overflow-hidden">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage: `url(${product.images[0]})`,
          }}
        ></div>
        {/* Overlay simple */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
        {/* Contenido del Hero */}
        <div className="relative z-10 pt-32 pb-16 px-6 sm:px-12 lg:px-18 max-w-6xl mx-auto">
          <div className="text-center">
            <img
              src={product.logo}
              alt="logo"
              className="w-20 h-20 mb-4 bg-white/90 rounded-full p-2 shadow-lg mx-auto"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
              {product.name}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white max-w-2xl drop-shadow mx-auto whitespace-pre-line">
              {product.description}
            </p>
          </div>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Breadcrumb */}
          <nav className="flex mb-8">
            <Link
              href="/productos/ensilaje"
              className="text-green-700 hover:text-green-900 transition-colors"
            >
              ← Volver a productos de ensilaje
            </Link>
          </nav>

          {/* Galería de Imágenes con Slider */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Imágenes</h2>

              {/* Slider Principal */}
              <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-6">
                <img
                  src={product.images[currentImageIndex]}
                  alt={`${product.name} imagen ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />

                {/* Botones de navegación */}
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}

                {/* Indicadores */}
                {product.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {product.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                          idx === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="grid grid-cols-3 gap-4">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`relative overflow-hidden rounded-lg shadow-md transition-all duration-200 ${
                        idx === currentImageIndex
                          ? 'ring-2 ring-green-500 ring-offset-2'
                          : 'hover:shadow-lg'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} thumbnail ${idx + 1}`}
                        className="w-full h-24 object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Información del Producto */}
            <div className="lg:col-span-1">
              <div className="sticky top-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Características del Producto
                </h2>
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-green-100">
                  <ul className="space-y-4">
                    {product.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-green-600 text-sm font-bold">✓</span>
                        </div>
                        <span className="text-gray-700 leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Descripción Detallada */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Descripción Detallada</h2>
            <div className="prose prose-lg max-w-none text-gray-700 whitespace-pre-line">
              {product.description}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-green-600 to-lime-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">¿Interesado en este producto?</h3>
              <p className="text-lg mb-6 opacity-90">
                Contáctanos para más información y asesoría personalizada
              </p>
              <button className="bg-white text-green-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Contactar ahora
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Botón flotante de WhatsApp siempre visible */}
      <div className="fixed bottom-6 right-6 z-50">
        <WhatsappContacts />
      </div>
    </>
  );
}