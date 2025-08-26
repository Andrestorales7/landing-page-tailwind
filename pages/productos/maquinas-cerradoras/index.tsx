import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ProductTab, { ProductTabItem } from '../../../components/ui/ProductTab';
import SEO from '../../../components/SEO';
import WhatsappContacts from '@/components/layout/WhatsappContacts';

const MaquinasCerradoras: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Define our product tabs
  const products: ProductTabItem[] = [
    {
      id: 'union-special-4000a',
      label: 'Union Special 4000A™',
      title: 'Union Special 4000A™',
      imageSrc: ['/images/productos/maquinas/union-4000A.png'],
      imageAlt: ['Máquina cerradora Union Special 4000A'],
      description: [
        `<p>Modelo portátil de 5,5 kg para bolsas de todo tipo. Baja emisión de ruido. Costura de tipo simple (1 hilo), lubricación y corte manual. Destinada para trabajo en ambientes de temperatura y condiciones normales.</p>`,
        `<h3 class="text-lg font-semibold mt-4 mb-2">Beneficios operativos</h3>
         <ul class="list-disc pl-6 space-y-1">
           <li>Soporte técnico y stock de repuestos garantizados.</li>
           <li>Envíos a todo el país, respaldo postventa con técnicos especializados.</li>
         </ul>`
      ],
      technicalSheetUrl: '/manuales/manual-despiece-union-special-4000a.pdf'
    },
    {
      id: 'union-special-2200aa',
      label: 'Union Special 2200AA™',
      title: 'Union Special 2200AA™',
      imageSrc: ['/images/productos/maquinas/union2200AA.png'],
      imageAlt: ['Máquina cerradora Union Special 2200AA'],
      description: [
        `<p>Modelo portátil de 5,5 kg para bolsas de todo tipo. Baja emisión de ruido. Con excelente eficiencia, flexibilidad y confiabilidad. Uso de 1 o 2 hilos, lubricación manual, preparada para uso intenso. Esta máquina es la única apta para trabajo con geotextiles. (polipropileno, poliéster o poliamida).</p>`,
        `<table class="w-full my-4">
          <tbody>
            <tr>
              <td class="font-medium">Rango de puntada:</td>
              <td>3 a 9 mm</td>
            </tr>
            <tr>
              <td class="font-medium">Ajuste normal de puntada:</td>
              <td>8 mm</td>
            </tr>
            <tr>
              <td class="font-medium">Velocidad:</td>
              <td>1200 a 1700 puntada por minuto</td>
            </tr>
            <tr>
              <td class="font-medium">Capacidad para sacos de papel:</td>
              <td>hasta 24 pliegues</td>
            </tr>
          </tbody>
        </table>`
      ],
      technicalSheetUrl: '/manuales/manual-despiece-union-special-2200aa.pdf'
    },
    {
      id: 'union-special-80800',
      label: 'Union Special 80800™',
      title: 'Union Special 80800™',
      imageSrc: ['/images/productos/maquinas/union80800.png'],
      imageAlt: ['Máquina cerradora Union Special 80800'],
      description: [
        `<p>Unidad de costura tipo cabezal. Para cerrado de todo tipo de bolsa. Con excelente eficiencia, confiabilidad y robustez. Lubricación manual, costura de 1 o 2 hilos, con diseño de manejo práctico y sencillo.</p>`,
        `<table class="w-full my-4">
          <tbody>
            <tr>
              <td class="font-medium">Rango de puntada:</td>
              <td>6,5 a 11 mm</td>
            </tr>
            <tr>
              <td class="font-medium">Ajuste normal de puntada:</td>
              <td>8 mm</td>
            </tr>
            <tr>
              <td class="font-medium">Velocidad:</td>
              <td>hasta 1800 puntada por minuto</td>
            </tr>
            <tr>
              <td class="font-medium">Capacidad para sacos de papel:</td>
              <td>hasta 32 pliegues</td>
            </tr>
          </tbody>
        </table>`
      ],
      technicalSheetUrl: '/manuales/manual-despiece-union-special-80800.pdf'
    },
    {
      id: 'union-special-bc200',
      label: 'Union Special BC200™',
      title: 'Union Special BC200™',
      imageSrc: ['/images/productos/maquinas/union-bc-200.png'],
      imageAlt: ['Máquina cerradora Union Special BC200'],
      description: [
        `<p>Unidad de costura tipo cabezal. Para cerrado de todo tipo de bolsa. Con excelente eficiencia, confiabilidad y robustez. Carcasa herméticamente cerrada y piezas altamente resistentes a químicos. Lubricación automática, costura de 1 o 2 hilos, con diseño de manejo práctico y sencillo.</p>`,
        `<ul class="list-disc pl-6 space-y-1">
          <li>Rango de puntada: 6,5 a 12,5 mm.</li>
          <li>Ajuste normal de puntada: 8 mm.</li>
          <li>Velocidad: hasta 2000 puntada por minuto.</li>
          <li>Capacidad para sacos de papel: hasta 32 pliegues.</li>
        </ul>`
      ],
      
    },
    {
      id: 'repuestos-lubricantes',
      label: 'Repuestos y lubricantes',
      title: 'Repuestos y lubricantes para máquinas cerradoras',
      imageSrc: ['/images/productos/maquinas/union-lubricante-removebg-preview.png'],
      imageAlt: ['Aceite lubricante Union Special'],
      description: [
        `<h3 class="text-lg font-semibold mt-2 mb-2">Descripción técnica</h3>
         <ul class="list-disc pl-6 space-y-1">
           <li>Producto: Aceite lubricante industrial para máquinas de coser.</li>
           <li>Marca: Union Special.</li>
           <li>Modelo / Especificación: 28604R SPEC. 175.</li>
           <li>Contenido: 16 fl. oz. (1 pinta ≈ 473 ml).</li>
           <li>Fabricante: Union Special, LLC – Huntley, IL 60142, USA.</li>
         </ul>`,
        `<h3 class="text-lg font-semibold mt-4 mb-2">Características técnicas</h3>
         <ol class="space-y-2 pl-5 list-decimal">
           <li>
             <span class="font-medium">Tipo de aceite:</span>
             <ul class="list-disc pl-6 mt-1">
               <li>Aceite mineral ligero (no compuesto, sin aditivos ni detergentes).</li>
               <li>Especialmente formulado para cumplir con la viscosidad Saybolt Universal (SUS) de 100 segundos a 100°F.</li>
             </ul>
           </li>
           <li>
             <span class="font-medium">Aplicación:</span>
             <ul class="list-disc pl-6 mt-1">
               <li>Lubricación de máquinas de coser industriales Union Special y equipos similares.</li>
               <li>Diseñado para asegurar bajo desgaste, mínima formación de residuos y máxima vida útil de los componentes mecánicos.</li>
             </ul>
           </li>
           <li>
             <span class="font-medium">Propiedades principales:</span>
             <ul class="list-disc pl-6 mt-1">
               <li>Baja viscosidad → facilita la penetración en piezas móviles de alta velocidad.</li>
               <li>Alto grado de pureza → evita manchas en textiles y residuos en mecanismos.</li>
               <li>Resistencia a la oxidación → prolonga la vida útil del aceite y del equipo.</li>
               <li>Sin aditivos agresivos → no daña piezas plásticas, sellos ni superficies tratadas.</li>
             </ul>
           </li>
           <li>
             <span class="font-medium">Usos recomendados:</span>
             <ul class="list-disc pl-6 mt-1">
               <li>Máquinas de coser de uso intensivo en industria textil, confección y embalaje.</li>
               <li>Sistemas de lubricación automática o manual en equipos Union Special.</li>
             </ul>
           </li>
         </ol>`
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Máquinas Cerradoras de Bolsas | Productos"
        description="Conozca nuestra línea de máquinas cerradoras Union Special para todo tipo de bolsas y envases. Soporte técnico y repuestos garantizados."
        url="https://www.cmpagro.com.py/productos/maquinas-cerradoras"
        image="/images/productos/maquinas/hero-cerradoras.jpg"
      />
      
      <div id="maquinas-cerradoras" className="min-h-screen bg-gradient-to-b from-green-50 to-gray-50">
        {/* Hero Section */}
        <div className="relative min-h-[52vh] bg-gradient-to-br from-green-900/70 via-green-800/60 to-green-700/50 overflow-hidden">
          {/* Imagen de fondo */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/productos/maquinas/union-hero.png"
              alt="Hero Máquinas Cerradoras"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent pointer-events-none"></div>
          {/* Contenido del Hero */}
          <div className="relative z-10 pt-42 pb-22 px-6 sm:px-12 lg:px-18 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
                MÁQUINAS CERRADORAS
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white max-w-2xl drop-shadow mx-auto">
                Soluciones de alta eficiencia para el cerrado de bolsas y envases.
              </p>
            </motion.div>
          </div>
          {/* Divisoria SVG */}
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[10vw] min-h-[60px] max-h-[120px]">
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V56.44Z"
                className="fill-[#f9fafb] relative opacity-90"
              ></path>
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3"
                className="fill-none stroke-white stroke-[2px] opacity-50 relative z-10"
              ></path>
            </svg>
          </div>
        </div>

        {/* Destacados */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 -mt-16 mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Soporte Técnico', icon: '🔧', description: 'Stock de repuestos garantizados y técnicos especializados.' },
              { title: 'Envíos Nacionales', icon: '🚚', description: 'Entrega rápida a todo el país.' },
              { title: 'Alta Eficiencia', icon: '⚙️', description: 'Máquinas de alta calidad y rendimiento duradero.' }
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-4 p-3">
                <div className="text-4xl">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Section - Reduced size */}
        <div className="max-w-5xl mx-auto px-4 py-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <section className="bg-white rounded-xl shadow-md p-6 mb-12">
              <div className="max-w-4xl mx-auto">
                <ProductTab 
                  products={products} 
                  accentColor="green"
                  initialTab="union-special-4000a"
                />
              </div>
            </section>
          </motion.div>
        </div>

        {/* WhatsApp Contact */}
        <div className="fixed bottom-6 right-6 z-50">
          <WhatsappContacts />
        </div>
      </div>
    </>
  );
};

export default MaquinasCerradoras;
