import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import WhatsappContacts from '@/components/layout/WhatsappContacts';

// Puedes extraer este array a un archivo común si lo deseas
const products = [
  {
    name: 'Film para fardos',
    slug: 'film-agripower',
    images: [
      '/images/productos/ensilaje/film-fardos.jpg',
      '/images/productos/ensilaje/film-fardos-2.jpg',
      '/images/productos/ensilaje/film-fardos-3.jpg',
    ],
    description: `
<span class="font-bold underline">Características Principales</span>

<span class="font-semibold">Tecnología de Coextrusión en 5 Capas:</span> Fabricado con polietileno lineal de baja densidad (LLDPE) de alta calidad, este film utiliza una avanzada tecnología de coextrusión en cinco capas, lo que le confiere una resistencia superior al desgarro y una excelente flexibilidad.<br/>
<span class="font-semibold">Protección UV de Larga Duración:</span> Incorpora aditivos que garantizan una protección eficaz contra los rayos ultravioleta durante hasta 12 meses, asegurando la integridad del forraje incluso en condiciones climáticas adversas.<br/>
<span class="font-semibold">Sistema CPI (Coextrusión Programada Inteligente):</span> Este exclusivo sistema optimiza el comportamiento mecánico del film, mejorando su resistencia a la intemperie y su eficiencia en diversos sistemas de soldadura.<br/>
<span class="font-semibold">100% Reciclable:</span> Comprometidos con el medio ambiente, este producto es completamente reciclable, contribuyendo a prácticas agrícolas sostenibles.

<br/><span class="font-bold underline">Beneficios para el Agricultor</span>

<span class="font-semibold">Conservación Óptima del Forraje:</span> La alta barrera al oxígeno y la protección UV prolongan la frescura y calidad del forraje, reduciendo pérdidas y mejorando la eficiencia alimentaria del ganado.<br/>
<span class="font-semibold">Mayor Rendimiento por Bobina:</span> Gracias a su diseño y materiales de alta calidad, se obtiene una mayor cantidad de fardos por bobina, optimizando recursos y reduciendo costos operativos.<br/>
<span class="font-semibold">Aplicación Versátil:</span> Compatible con diversas empacadoras y sistemas de enfardado, su flexibilidad y resistencia permiten un uso eficiente en diferentes condiciones de campo.
`,
    details: ['750 mm x 1,500 m (25 micras)'],
    logo: '/images/logos/exporplas-logo.png',
  },
  {
    name: 'Hilos para fardos',
    slug: 'hilos-exporplas',
    images: [
      '/images/productos/ensilaje/hilos.jpg',
      '/images/productos/ensilaje/hilos2.jpg',
     
    ],
    description: `
<span class="font-bold underline">Características Destacadas</span>

<span class="font-semibold">Modelos Disponibles:</span> E130 y E1000, diseñados para optimizar el proceso de empacado en fardos redondos y cuadrados.<br/>
<span class="font-semibold">Fibrilación Mecánica:</span> Proporciona una estructura uniforme y resistente, mejorando la cohesión del fardo y facilitando su manipulación.<br/>
<span class="font-semibold">Torsión Uniforme:</span> Garantiza un rendimiento constante durante el empacado, reduciendo el riesgo de roturas y asegurando una aplicación eficiente.<br/>
<span class="font-semibold">100% Reciclables:</span> Comprometidos con el medio ambiente, estos hilos son completamente reciclables, promoviendo prácticas agrícolas sostenibles.<br/>
<span class="font-semibold">Calidad Europea:</span> Fabricados por Exporplas, reconocida marca portuguesa, asegurando estándares internacionales de calidad y durabilidad.

<br/><span class="font-bold underline">Beneficios para el Productor</span>

<span class="font-semibold">Mayor Eficiencia Operativa:</span> La resistencia y uniformidad de los hilos permiten un empacado más rápido y seguro, optimizando el tiempo de trabajo en el campo.<br/>
<span class="font-semibold">Versatilidad de Uso:</span> Adecuados para diferentes tipos de empacadoras y condiciones de trabajo, adaptándose a las necesidades específicas de cada productor.<br/>
<span class="font-semibold">Reducción de Costos:</span> Al minimizar roturas y desperdicios, se logra una disminución en los costos operativos y una mejora en la rentabilidad.
`,
    details: ['Hilo e1000 - 5,400 m (fardos redondos)', 'Hilo e130 - 1,300 m (fardos cuadrados)'],
    logo: '/images/logos/exporplas-logo.png',
  },
  {
    name: 'Mallas para fardos',
    slug: 'mallas-exporplas',
    images: [
      '/images/productos/ensilaje/malla-fardos.png',
      '/images/productos/ensilaje/malla-fardos-2.jpg',
      
    ],
    description: `
<span class="font-bold underline">Mallas para Fardos CMP Agro: Protección Superior para tus Cultivos</span>

<span class="font-bold">Características Destacadas</span><br/>
<span class="font-semibold">Marca Premium: Green Rhino.</span> Importadas desde Portugal y respaldadas por Exporplas, las mallas Green Rhino son reconocidas por su alta resistencia y calidad en el mercado.<br/>
<span class="font-semibold">Estabilización UV:</span> Diseñadas para resistir la exposición prolongada al sol, garantizando una mayor durabilidad y protección de los fardos.<br/>
<span class="font-semibold">Gran Resistencia Mecánica:</span> Fabricadas con materiales de alta calidad que ofrecen una excelente resistencia al desgarro y a las condiciones climáticas adversas.<br/>
<span class="font-semibold">Compatibilidad Universal:</span> Adecuadas para diversas marcas y modelos de empacadoras, facilitando su implementación en diferentes sistemas de enfardado.

<br/><span class="font-bold underline">Beneficios para el Productor</span>

<span class="font-semibold">Protección Eficiente del Forraje:</span> Las mallas aseguran una cobertura uniforme, protegiendo el contenido de los fardos contra la humedad y otros factores ambientales.<br/>
<span class="font-semibold">Optimización del Tiempo de Empacado:</span> Su diseño permite un enfardado más rápido y eficiente, reduciendo el tiempo y esfuerzo requeridos en el proceso.<br/>
<span class="font-semibold">Reducción de Pérdidas:</span> Al mantener la integridad de los fardos, se minimizan las pérdidas de forraje durante el almacenamiento y transporte.
`,
    details: ['HORIZON™: 125 x 3,600 cm, 130 x 3,600 cm', 'EMPACADOR: 124 x 3,600 cm, 130 x 3,600 cm'],
    logo: '/images/logos/exporplas-logo.png',
  },
  {
    name: 'Silobolsas',
    slug: 'silobolsas-agrinpex',
    images: [
      '/images/productos/ensilaje/silobolsa-3.jpg',
      '/images/productos/ensilaje/silobolsa.jpg',
      '/images/productos/ensilaje/silobolsa-2.jpg',
      
    ],
    description: `
<span class="font-bold underline">Silobolsas: Almacenamiento Eficiente y Seguro para Granos y Forrajes</span>

<span class="font-bold">Características Técnicas</span><br/>
<span class="font-semibold">Coextrusión en Tres Capas:</span> Fabricadas con tecnología de coextrusión en tres capas, estas silobolsas ofrecen una resistencia mecánica superior y una mayor durabilidad frente a condiciones climáticas adversas.<br/>
<span class="font-semibold">Sistema de Coextrusión Programada Inteligente:</span> Este sistema garantiza una distribución uniforme de materiales, optimizando la resistencia y flexibilidad de las bolsas.<br/>
<span class="font-semibold">Protección UV y Opacidad Total:</span> Diseñadas para resistir la exposición prolongada al sol, las silobolsas cuentan con aditivos UV y una opacidad total que protegen el contenido de la degradación por luz.<br/>
<span class="font-semibold">Ambiente Hermético y Anaeróbico:</span> Su diseño asegura un entorno sellado que previene el desarrollo de insectos y mantiene la calidad del producto almacenado.

<br/><span class="font-bold underline">Beneficios para el Productor</span>

<span class="font-semibold">Almacenamiento en el Campo:</span> Permite almacenar granos y forrajes directamente en el potrero, eliminando la necesidad de transporte inmediato y reduciendo costos logísticos.<br/>
<span class="font-semibold">Flexibilidad en la Comercialización:</span> Facilita el diferimiento de la venta, permitiendo al productor esperar mejores condiciones de mercado.<br/>
<span class="font-semibold">Adaptabilidad a Diferentes Humedades:</span> Capaz de almacenar cereales con niveles de humedad superiores a los estándares habituales, sin comprometer la calidad.<br/>
<span class="font-semibold">Conservación de Forrajes de Alta Calidad:</span> Ideal para ensilados de granos húmedos y forrajes, manteniendo su valor nutricional y reduciendo pérdidas de materia seca.

<br/><span class="font-bold">Aplicaciones Prácticas</span><br/>
<span class="font-semibold">Almacenaje de Granos:</span> Maíz, girasol, soja, trigo, arroz, entre otros.<br/>
<span class="font-semibold">Ensilado de Forrajes:</span> Pasturas, sorgo, maíz forrajero y otros cultivos destinados a la alimentación animal.
`,
    details: ['6 pies x 60 m', '6.5 pies x 60 m', '9 pies x 60 m', '9 pies x 75 m'],
    logo: '/images/logos/agrinpex-logo.png',
  },
  {
    name: 'Tech Lona',
    slug: 'tech-lona-azul',
    images: [
      '/images/productos/ensilaje/tech-lona.jpeg',
      '/images/productos/ensilaje/tech-lona.webp',
      '/images/productos/ensilaje/tech-lona2.webp',
      
    ],
    description: `
<span class="font-bold underline">TechLona: Protección Multicapa para el Agro</span>

<span class="font-bold">Características Técnicas</span><br/>
<span class="font-semibold">Tecnología Multicapa:</span> Producida con tecnología de extrusión en múltiples capas, lo que permite la aplicación específica de resinas para satisfacer diversas exigencias.<br/>
<span class="font-semibold">Alta Resistencia Mecánica:</span> Diseñada para soportar condiciones adversas, ofreciendo una mayor durabilidad en el campo.<br/>
<span class="font-semibold">Variedad de Medidas:</span> Disponible en anchos de 4,0 a 12,0 metros y largos de 50 o 100 metros, adaptándose a diferentes necesidades.<br/>
<span class="font-semibold">Opciones de Color:</span> Disponible en colores negro, blanco y lechoso, para diversas aplicaciones.

<br/><span class="font-bold underline">Aplicaciones en el Agro</span>

<span class="font-semibold">Cobertura de Silos:</span> Protege el ensilado de factores externos, manteniendo su calidad.<br/>
<span class="font-semibold">Almacenamiento de Granos:</span> Ofrece una barrera efectiva contra la humedad y la luz.<br/>
<span class="font-semibold">Protección de Cultivos:</span> Actúa como cubierta para cultivos, resguardándolos de condiciones climáticas adversas.
`,
    details: ['Negro: 8 x 100 m (100 micras)'],
    logo: '/images/logos/tech-logo.png',
  },
  {
    name: 'Tech Silo',
    slug: 'tech-silo-azul',
    images: [
      '/images/productos/ensilaje/tech-silo.webp',
      '/images/productos/ensilaje/tech-silo-2.webp',
      '/images/productos/ensilaje/tech-silo-3.webp',
    ],
    description: `
<span class="font-bold underline">TechSilo: Protección Avanzada para tu Silaje</span>

<span class="font-bold">Características Técnicas</span><br/>
<span class="font-semibold">Tecnología Multicapa de Coextrusión:</span> Fabricada con un proceso de coextrusión de múltiples capas, lo que proporciona una resistencia mecánica superior y una mayor durabilidad frente a condiciones climáticas adversas.<br/>
<span class="font-semibold">Aditivación UV:</span> Incorpora aditivos que protegen contra la radiación ultravioleta, prolongando la vida útil de la lona y preservando la calidad del silaje.<br/>
<span class="font-semibold">Control de Temperatura Interna:</span> Diseñada para mantener una temperatura estable dentro del silo, lo que ayuda a conservar los nutrientes del forraje y reduce las pérdidas por fermentación no deseada.<br/>
<span class="font-semibold">Colores Disponibles:</span> Disponible en combinaciones de colores como blanco/negro y blanco/plata. La cara blanca refleja la luz solar, reduciendo el calentamiento superficial, mientras que la cara negra o plateada impide la penetración de luz, evitando el crecimiento de hongos y bacterias.<br/>
<span class="font-semibold">Dimensiones Variadas:</span> Ofrecida en anchos de 4,0 a 12,0 metros y longitudes de 50 o 100 metros, adaptándose a diversas necesidades de cobertura.<br/>
<span class="font-semibold">Garantía:</span> Dependiendo del modelo, la garantía puede ser de 12, 15 o 18 meses, asegurando la calidad y durabilidad del producto.

<br/><span class="font-bold underline">Beneficios para el Productor</span>

<span class="font-semibold">Protección Eficiente del Silaje:</span> La combinación de resistencia mecánica y protección UV asegura que el silaje esté resguardado de factores externos, manteniendo su calidad nutricional.<br/>
<span class="font-semibold">Reducción de Pérdidas:</span> Al controlar la temperatura interna y evitar la entrada de luz, se minimizan las pérdidas por deterioro del forraje.<br/>
<span class="font-semibold">Facilidad de Aplicación:</span> Su diseño y flexibilidad permiten una instalación sencilla y rápida, optimizando el tiempo de trabajo en el campo.<br/>
<span class="font-semibold">Versatilidad de Uso:</span> Además de la cobertura de silajes, puede ser utilizada en otras aplicaciones agrícolas que requieran protección contra factores ambientales.
`,
    details: ['Blanco/Negro: 12 x 50 m y 14 x 50 m', 'Disponible en 100 y 150 micras'],
    logo: '/images/logos/tech-logo.png',
  },
  {
    name: 'TechO2 Barrier',
    slug: 'tech-h2o-barrier',
    images: [
      '/images/productos/ensilaje/tech-barrier.png',
      '/images/productos/ensilaje/tech-barrier-2.png',
      
    ],
    description: `
<span class="font-bold underline">TechO₂ Barrier: Sistema de Barreras de Oxígeno AzulPack TechAgro</span>

<span class="font-bold">Características Técnicas Destacadas</span><br/>
<span class="font-semibold">Tecnología Multicapa EVOH:</span> Utiliza polímeros de etileno-alcohol vinílico (EVOH) en una estructura de 7 capas, logrando una barrera casi impermeable al oxígeno. Esto reduce la Tasa de Transmisión de Oxígeno (OTR) de los valores típicos de 2.500–3.000 cm³/m²/día a menos de 4 cm³/m²/día.<br/>
<span class="font-semibold">Variedad de Productos:</span>
<ul class="list-disc ml-6">
  <li><span class="font-semibold">TechO₂ Barrier PA:</span> Reduce la permeabilidad al oxígeno hasta diez veces en comparación con lonas convencionales.</li>
  <li><span class="font-semibold">TechO₂ Barrier Underlayer EVOH:</span> Ofrece una barrera de oxígeno prácticamente nula, ideal para silajes de alta exigencia.</li>
  <li><span class="font-semibold">TechO₂ Barrier 2 in 1:</span> Combina una lona superior con una barrera de oxígeno en un solo producto, facilitando la aplicación.</li>
  <li><span class="font-semibold">TechSilo HP:</span> Lona de alta resistencia mecánica, adecuada para diversas condiciones climáticas.</li>
</ul>

<br/><span class="font-bold underline">Beneficios para el Productor</span>

<span class="font-semibold">Mejora de la Calidad Nutricional:</span> Al minimizar la entrada de oxígeno, se preservan los nutrientes del forraje, aumentando su valor alimenticio.<br/>
<span class="font-semibold">Reducción de Pérdidas:</span> Disminuye la presencia de hongos y bacterias, reduciendo las pérdidas de materia seca y mejorando la rentabilidad.<br/>
<span class="font-semibold">Facilidad de Uso:</span> Los productos están diseñados para una aplicación sencilla, adaptándose a diferentes sistemas de ensilado.

<br/><span class="font-bold">Aplicaciones Prácticas</span><br/>
<span class="font-semibold">Ensilaje de Forrajes:</span> Maíz, sorgo, pasturas y otros cultivos destinados a la alimentación animal.<br/>
<span class="font-semibold">Almacenamiento de Granos Húmedos:</span> Conserva la calidad de los granos con altos niveles de humedad.<br/>
<span class="font-semibold">Condiciones Climáticas Variables:</span> Su resistencia mecánica y protección UV las hacen adecuadas para diversas condiciones ambientales.
`,
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
            {/* Logo eliminado del Hero */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
              {product.name}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white max-w-2xl drop-shadow mx-auto whitespace-pre-line">
              {product.details.join(' • ')}
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
                {/* Logo agregado aquí */}
                <img
                  src={product.logo}
                  alt="logo"
                  className="w-40 h-40 mb-6 rounded-2xl p-2 shadow-2xl mx-auto object-contain bg-white border-2 border-green-200"
                  style={{ maxWidth: 200, maxHeight: 200 }}
                />
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
            {product.slug === 'film-agripower' ? (
              <div className="prose prose-lg max-w-none text-gray-700">
                <h3 className="text-2xl font-semibold mb-2">Film para Fardos – Exporplas</h3>
                <p>
                  Film coextruido en 5 capas, fabricado con polietileno lineal de baja densidad (LLDPE) de alta calidad. 
                  Ofrece resistencia superior al desgarro, excelente flexibilidad y protección UV de larga duración (hasta 12 meses).
                  Incorpora sistema CPI (Coextrusión Programada Inteligente) para optimizar el comportamiento mecánico y eficiencia en soldadura.
                  100% reciclable, contribuyendo a prácticas agrícolas sostenibles.
                </p>
                <h4 className="mt-6 mb-2 font-bold text-green-700">Beneficios para el Agricultor</h4>
                <ul className="list-disc pl-6">
                  <li>Conservación óptima del forraje: alta barrera al oxígeno y protección UV prolongan la frescura y calidad.</li>
                  <li>Mayor rendimiento por bobina: más fardos por bobina, optimizando recursos y reduciendo costos.</li>
                  <li>Aplicación versátil: compatible con diversas empacadoras y sistemas de enfardado.</li>
                </ul>
                <h4 className="mt-6 mb-2 font-bold text-green-700">Medidas Disponibles</h4>
                <ul className="list-disc pl-6">
                  <li>750 mm x 1,500 m (25 micras)</li>
                </ul>
              </div>
            ) : product.slug === 'hilos-exporplas' ? (
              <div className="prose prose-lg max-w-none text-gray-700">
                <h3 className="text-2xl font-semibold mb-2">Hilos para Fardos – Exporplas</h3>
                <p>
                  Modelos E130 y E1000, diseñados para optimizar el empacado en fardos redondos y cuadrados. 
                  Fibrilación mecánica para estructura uniforme y resistente, torsión uniforme y 100% reciclables.
                  Calidad europea, fabricados en Portugal.
                </p>
                <h4 className="mt-6 mb-2 font-bold text-green-700">Beneficios para el Productor</h4>
                <ul className="list-disc pl-6">
                  <li>Mayor eficiencia operativa: empacado más rápido y seguro.</li>
                  <li>Versatilidad de uso: aptos para diferentes empacadoras y condiciones.</li>
                  <li>Reducción de costos: minimiza roturas y desperdicios.</li>
                </ul>
                <h4 className="mt-6 mb-2 font-bold text-green-700">Presentaciones</h4>
                <ul className="list-disc pl-6">
                  <li>Hilo e1000 - 5,400 m (fardos redondos)</li>
                  <li>Hilo e130 - 1,300 m (fardos cuadrados)</li>
                </ul>
              </div>
            ) : product.slug === 'mallas-exporplas' ? (
              <div className="prose prose-lg max-w-none text-gray-700">
                <h3 className="text-2xl font-semibold mb-2">Mallas para Fardos – Green Rhino</h3>
                <p>
                  Marca premium importada desde Portugal, estabilización UV, gran resistencia mecánica y compatibilidad universal.
                </p>
                <h4 className="mt-6 mb-2 font-bold text-green-700">Beneficios</h4>
                <ul className="list-disc pl-6">
                  <li>Protección eficiente del forraje: cobertura uniforme y protección contra humedad.</li>
                  <li>Optimización del tiempo de empacado: diseño para enfardado rápido y eficiente.</li>
                  <li>Reducción de pérdidas: mantiene la integridad de los fardos.</li>
                </ul>
                <h4 className="mt-6 mb-2 font-bold text-green-700">Medidas Disponibles</h4>
                <ul className="list-disc pl-6">
                  <li>HORIZON™: 125 x 3,600 cm, 130 x 3,600 cm</li>
                  <li>EMPACADOR: 124 x 3,600 cm, 130 x 3,600 cm</li>
                </ul>
              </div>
            ) : product.slug === 'silobolsas-agrinpex' ? (
              <div className="prose prose-lg max-w-none text-gray-700">
                <h3 className="text-2xl font-semibold mb-2">Silobolsas – Agrinpex</h3>
                <h4 className="mt-4 mb-2 font-bold text-green-700">Características Técnicas</h4>
                <ul className="list-disc pl-6">
                  <li>Coextrusión en tres capas para máxima resistencia mecánica y durabilidad.</li>
                  <li>Sistema de Coextrusión Programada Inteligente para distribución uniforme de materiales.</li>
                  <li>Protección UV y opacidad total para evitar degradación por luz.</li>
                  <li>Ambiente hermético y anaeróbico que previene insectos y mantiene la calidad.</li>
                </ul>
                <h4 className="mt-6 mb-2 font-bold text-green-700">Beneficios para el Productor</h4>
                <ul className="list-disc pl-6">
                  <li>Almacenamiento en el campo, sin necesidad de transporte inmediato.</li>
                  <li>Flexibilidad en la comercialización: permite esperar mejores condiciones de mercado.</li>
                  <li>Adaptabilidad a diferentes humedades, sin comprometer la calidad.</li>
                  <li>Conservación de forrajes de alta calidad, reduciendo pérdidas de materia seca.</li>
                </ul>
                <h4 className="mt-6 mb-2 font-bold text-green-700">Aplicaciones Prácticas</h4>
                <ul className="list-disc pl-6">
                  <li>Almacenaje de granos: maíz, girasol, soja, trigo, arroz, entre otros.</li>
                  <li>Ensilado de forrajes: pasturas, sorgo, maíz forrajero y otros cultivos.</li>
                </ul>
                <h4 className="mt-6 mb-2 font-bold text-green-700">Medidas Disponibles</h4>
                <ul className="list-disc pl-6">
                  {product.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ) : product.slug === 'tech-lona-azul' ? (
              <div className="prose prose-lg max-w-none text-gray-700">
                <h3 className="text-2xl font-semibold mb-2">TechLona</h3>
                <h4 className="mt-4 mb-2 font-bold text-green-700">Características Técnicas</h4>
                <ul className="list-disc pl-6">
                  <li>Tecnología multicapa para máxima protección y durabilidad.</li>
                  <li>Alta resistencia mecánica, ideal para condiciones adversas.</li>
                  <li>Variedad de medidas: anchos de 4 a 12 metros, largos de 50 o 100 metros.</li>
                  <li>Opciones de color: negro, blanco y lechoso.</li>
                </ul>
                <h4 className="mt-6 mb-2 font-bold text-green-700">Aplicaciones en el Agro</h4>
                <ul className="list-disc pl-6">
                  <li>Cobertura de silos: protege el ensilado de factores externos.</li>
                  <li>Almacenamiento de granos: barrera efectiva contra humedad y luz.</li>
                  <li>Protección de cultivos: cubierta para cultivos ante condiciones climáticas adversas.</li>
                </ul>
                <h4 className="mt-6 mb-2 font-bold text-green-700">Presentaciones</h4>
                <ul className="list-disc pl-6">
                  {product.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ) : product.slug === 'tech-silo-azul' ? (
              <div className="prose prose-lg max-w-none text-gray-700">
                <h3 className="text-2xl font-semibold mb-2">TechSilo</h3>
                <h4 className="mt-4 mb-2 font-bold text-green-700">Características Técnicas</h4>
                <ul className="list-disc pl-6">
                  <li>Tecnología multicapa de coextrusión para resistencia y durabilidad.</li>
                  <li>Aditivación UV para mayor vida útil y protección del silaje.</li>
                  <li>Control de temperatura interna para conservar nutrientes y reducir pérdidas.</li>
                  <li>Colores disponibles: blanco/negro y blanco/plata.</li>
                  <li>Dimensiones variadas: anchos de 4 a 12 metros, largos de 50 o 100 metros.</li>
                  <li>Garantía de 12, 15 o 18 meses según modelo.</li>
                </ul>
                <h4 className="mt-6 mb-2 font-bold text-green-700">Beneficios para el Productor</h4>
                <ul className="list-disc pl-6">
                  <li>Protección eficiente del silaje, manteniendo calidad nutricional.</li>
                  <li>Reducción de pérdidas por deterioro del forraje.</li>
                  <li>Facilidad de aplicación e instalación rápida.</li>
                  <li>Versatilidad de uso en otras aplicaciones agrícolas.</li>
                </ul>
                <h4 className="mt-6 mb-2 font-bold text-green-700">Presentaciones</h4>
                <ul className="list-disc pl-6">
                  {product.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ) : product.slug === 'tech-h2o-barrier' ? (
              <div className="prose prose-lg max-w-none text-gray-700">
                <h3 className="text-2xl font-semibold mb-2">TechO₂ Barrier</h3>
                <h4 className="mt-4 mb-2 font-bold text-green-700">Características Técnicas Destacadas</h4>
                <ul className="list-disc pl-6">
                  <li>Tecnología multicapa EVOH: estructura de 7 capas, barrera casi impermeable al oxígeno.</li>
                  <li>Reduce la tasa de transmisión de oxígeno (OTR) a menos de 4 cm³/m²/día.</li>
                  <li>Variedad de productos:
                    <ul className="list-disc pl-6">
                      <li><b>TechO₂ Barrier PA:</b> Reduce la permeabilidad al oxígeno hasta diez veces.</li>
                      <li><b>TechO₂ Barrier Underlayer EVOH:</b> Barrera de oxígeno prácticamente nula.</li>
                      <li><b>TechO₂ Barrier 2 in 1:</b> Lona superior con barrera de oxígeno integrada.</li>
                      <li><b>TechSilo HP:</b> Lona de alta resistencia mecánica.</li>
                    </ul>
                  </li>
                </ul>
                <h4 className="mt-6 mb-2 font-bold text-green-700">Beneficios para el Productor</h4>
                <ul className="list-disc pl-6">
                  <li>Mejora la calidad nutricional del forraje.</li>
                  <li>Reducción de pérdidas por hongos y bacterias.</li>
                  <li>Facilidad de uso y aplicación sencilla.</li>
                </ul>
                <h4 className="mt-6 mb-2 font-bold text-green-700">Aplicaciones Prácticas</h4>
                <ul className="list-disc pl-6">
                  <li>Ensilaje de forrajes: maíz, sorgo, pasturas y otros cultivos.</li>
                  <li>Almacenamiento de granos húmedos.</li>
                  <li>Uso en condiciones climáticas variables.</li>
                </ul>
                <h4 className="mt-6 mb-2 font-bold text-green-700">Presentaciones</h4>
                <ul className="list-disc pl-6">
                  {product.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-xl leading-relaxed mb-6">{product.description.replace(/<[^>]+>/g, '')}</p>
                <ul className="list-disc pl-6">
                  {product.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}
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