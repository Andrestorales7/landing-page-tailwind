'use client';

import React, { useState, useEffect } from 'react';
import Marcas from '@/components/sections/Marcas';
import NoticeSlider from '@/components/sections/NoticeSlider';
import WhatsappContacts from '@/components/layout/WhatsappContacts';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import ProductTabDisplay from '@/components/ui/ProductTabDisplay';

const BiosalesProductPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab] = useState('premix');
  
  // Define product data for the component
  const biosalesProducts = [
    {
      id: 'premix',
      label: 'Bio-Núcleo Ruminant',
      title: 'Bio-Núcleo Premix Engorde 1%',
      imageSrc: '/images/productos/biosales/bio-nucleo-premix.jpg',
      imageAlt: 'Bio-Núcleo Premix Engorde 1%',
      description: [
        'Se trata de una premix (pre-mezcla) ingredientes bio-orgánicos e inorgánicos formulada para la elaboración de raciones tipo RTM (Raciones Totalmente Mezcladas) en mixer u otro tipo de mezclador que generalmente se destinan al autoconsumo en el mismo establecimiento ganadero.',
        'Por su formulación permite el uso de ingredientes secos, húmedos o una combinación de ambos logrando una amplia versatilidad en la formulación para las diferentes categorías de engorde.',
        'Por sus contenidos de fermentos, levaduras y enzimas promueve un mejor equilibrio ruminal mejorando los periodos de adaptación y los niveles de inclusión de ingredientes fibrosos. Se recomienda al utilizar este premix poner especial énfasis al balance proteico en la dieta.'
      ],
      technicalSheetUrl: '/fichas/Bio-Nucleo-1.pdf'
    },
    {
      id: 'full',
      label: 'Bio-Núcleo Full',
      title: 'Bio-Núcleo Full',
      imageSrc: '/images/productos/biosales/bio-nucleo-full.jpg',
      imageAlt: 'Bio-Núcleo Full',
      description: [
        'Se trata de un premix (pre-mezcla) de ingredientes bio-orgánicos e inorgánicos formulada para la elaboración de raciones tipo RTM (Raciones Totalmente Mezclados) en mixer u otro tipo de mezclador que generalmente se destinan al autoconsumo en el mismo establecimiento ganadero.',
        'Esta técnicamente formulada para una mayor inclusión de fibras y suculentos en las RTM elaboradas con este premix debido al uso de fermentos, levaduras y enzimas que favorecen la digestión ruminal de estos ingredientes.',
        'Al mismo tiempo aporta altos niveles de NNP (Nitrógeno No Proteico) de liberación lenta, estimulando así la biota ruminal o producir mayor síntesis de proteína microbiana de alto valor biológico. Es decir, MAYOR PROTEINA A MENOR COSTO.'
      ],
      technicalSheetUrl: '/fichas/Bio-Nucleo-Full.pdf'
    },
    {
      id: 'biosalt500',
      label: 'Biosalt 500',
      title: 'Biosalt 500',
      imageSrc: '/images/productos/biosales/biosalt-500.jpg',
      imageAlt: 'Biosalt 500',
      description: [
        'Producto diseñado para ser ofrecido en batea ad libitum (autoconsumo). Su formulación contempla la acción de ingredientes Biotecnológicos con el agregado de azucares reductores y almidón modificado.',
        'De esta forma se mejora el balance electrolítico y la presión osmótica del rumen, logrando un mejor aprovechamiento de los forrajes de baja calidad (espartillos, diferidos, rollos y otros pastos fibrosos); mejorando la performance del rodeo.',
        'Este producto de Bionutrición Ruminal, potencia la capacidad natural del rumen para transformar alimentos en nutrientes disponibles para el animal.'
      ],
      technicalSheetUrl: '/fichas/Biosalt-500.pdf'
    },
    {
      id: 'premixsalt',
      label: 'Biosalt Premix Salt',
      title: 'Biosalt Premix Salt',
      imageSrc: '/images/productos/biosales/biosalt-premix-salt.jpg',
      imageAlt: 'Biosalt Premix Salt',
      description: [
        'Producto formulado con ingredientes bio-orgánicos e inorgánicos, diseñado para ser suministrada "ad libitum" en comederos de autoconsumo, con el consecuente menor costo de distribución.',
        'Esta mezcla permite estimular un mejor aprovechamiento de los pastos, corrigiendo el balance electrolítico entre otros aspectos.',
        'A nivel del rumen trabaja de manera sinérgica con los forrajes consumidos mejorando el funcionamiento de la biota ruminal, permitiendo una mayor producción de proteína microbiana de elevado valor biológico.'
      ],
      technicalSheetUrl: '/fichas/Biosalt-Premix-Salt.pdf'
    },
    {
      id: 'premixsaltrumiantes',
      label: 'Biosalt Premix Salt Pequeños Rumiantes',
      title: 'Biosalt Premix Salt Pequeños Rumiantes',
      imageSrc: '/images/productos/biosales/premix_salt_pequenos_rumiantes.jpg',
      imageAlt: 'Biosalt Premix Salt Pequeños Rumiantes',
      description: [
        'Se trata de una mezcla física de diversos ingredientes bio-orgánicos e inorgánicos diseñado para alimentación "ad libitum" DE PEQUEÑOS RUMIANTES suministrada en comederos de autoconsumo, con el consecuente menor costo de distribución.',
        'Esta mezcla de diseño EXCLUSIVO esta formulada para estimular un mejor aprovechamiento de los pastos CONTEMPLANDO LAS PARTICULARIDADES ANATOMOFISIOLÓGICAS DE LOS PEQUEÑOS RUMIANTES EN SUS HABITOS DE PASTOREO, ESPECIALMENTE FORMULADA PARA UN MEJOR BALANCE ELECTROLÍTICO.',
        'También provee una cuidadosa selección de fermentos levaduriformes probióticos y complejos enzimáticos exógenos que contribuyen a un mejor funcionamiento de la biota ruminal promoviendo un mayor consumo y digestibilidad de los pastos secos y como consecuencia una mayor producción de proteína microbiana.',
        'De esta forma los animales aprovechan esta energía extra liberada traduciéndose a campo en una mejor performance zootécnica de todas las categorías lográndose una mayor respuesta sanitaria y un mejor bienestar animal que se nota en una mayor vitalidad en las majadas.',
        'En algunos casos hasta se ha observado cambios importantes en los hábitos de consumo y pastoreo que permiten mejorar las cargas animales con el consecuente beneficio económico.'
      ],
      technicalSheetUrl: '/fichas/Premix-Salt-Pequenos-rumiantes.pdf'
    }
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, [activeTab]);

  return (
    <>
      <SEO 
        title="Biosales y Suplementos Nutricionales | Bio-Núcleo, Biosalt | CMP Agro"
        description="Suplementos minerales y biotecnológicos para ganado. Incluye Bio-Núcleo Premix, Bio-Núcleo Full, Biosalt 500 y más. Mejore la nutrición y el rendimiento de su ganado con productos especializados."
        url="https://www.cmpagro.com.py/productos/biosales"
        image="/images/productos/biosales/hero-biosales.png"
        type="product"
        keywords="biosales, suplementos minerales, bio-núcleo, biosalt, nutrición animal, ganadería paraguay"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ProductCollection",
          "name": "Biosales y Suplementos Nutricionales",
          "description": "Línea completa de suplementos minerales y biotecnológicos para ganado",
          "offers": {
            "@type": "AggregateOffer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "PYG",
            "seller": {
              "@type": "Organization",
              "name": "CMP Agro",
              "url": "https://www.cmpagro.com.py"
            }
          },
          "brand": {
            "@type": "Brand",
            "name": "CMP Agro"
          }
        }}
      />
      
      <div id="biosales" className="min-h-screen bg-gradient-to-b from-green-50 to-gray-50">
        {/* Hero Section */}
        <div className="relative min-h-[52vh] bg-gradient-to-br from-green-900/70 via-green-800/60 to-green-700/50 overflow-hidden">
          {/* Imagen de fondo */}
          <div
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-100"
            style={{
              backgroundImage:
                "url('/images/productos/biosales/hero-biosales.png')",
            }}
          ></div>
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
                Biosales
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white max-w-2xl drop-shadow mx-auto">
                Suplementos nutricionales biotecnológicos para optimizar la producción ganadera.
              </p>
            </motion.div>
          </div>
          {/* Divisoria SVG igual que otras páginas */}
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

        {/* Componente ProductTabDisplay */}
        <ProductTabDisplay
          products={biosalesProducts}
          initialTab="premix"
          accentColor="green"
        />
        
        {/* Additional Sections */}
        <div className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
             style={{ transitionDelay: '500ms' }}>
          <Marcas />
        </div>

        <div className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
             style={{ transitionDelay: '600ms' }}>
          <NoticeSlider
            notices={[
              { id: 1, text: 'Contáctanos para asesoría personalizada en nutrición de ganado' },
              { id: 2, text: 'Envíos a todo el país' },
            ]}
          />
        </div>

        {/* Botón flotante de WhatsApp siempre visible */}
        <div className="fixed bottom-6 right-6 z-50">
          <WhatsappContacts />
        </div>
      </div>
    </>
  );
};

export default BiosalesProductPage;