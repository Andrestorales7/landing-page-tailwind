import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section id="Nosotros" className="relative py-20 overflow-hidden bg-white">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block">
        <svg width="404" height="384" fill="none" viewBox="0 0 404 384" className="text-green-50">
          <defs>
            <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-green-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2">
            <span className="h-px w-8 bg-green-500"></span>
            <span className="font-medium text-green-600 uppercase tracking-wider text-sm">Nosotros</span>
            <span className="h-px w-8 bg-green-500"></span>
          </div>
          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Innovación y tecnología<br />
            <span className="text-green-600">para el agro del futuro</span>
          </h2>
        </div>
        
        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image with enhanced visibility */}
          <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl transform transition-all hover:scale-[1.02]">
            <Image 
              src="/images/nosotros/nosotros1.jpeg" 
              alt="CMP Agro" 
              layout="fill" 
              objectFit="cover" 
              className="rounded-xl"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Desde 2015</span>
            </div>
          </div>
          
          {/* Text content */}
          <div className="text-lg text-gray-700 space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <p className="ml-3">
                <span className="text-gray-900 font-medium">Nuestra visión:</span> CMP AGRO nació con la visión de llevar la mejor tecnología agrícola mundial a Paraguay, empoderando a agricultores, empresas y comunidades con innovaciones que maximizan la productividad y sostenibilidad.
              </p>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <p className="ml-3">
                <span className="text-gray-900 font-medium">Colaboración global:</span> Trabajamos con líderes mundiales para garantizar que nuestros clientes siempre tengan acceso a soluciones de vanguardia, con un equipo de profesionales dedicados a dar forma al futuro de la agricultura.
              </p>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <p className="ml-3">
                <span className="text-gray-900 font-medium">Compromiso:</span> Gracias por confiar en nosotros para ser parte de su camino hacia la excelencia en el agro paraguayo.
              </p>
            </div>
            
            <div className="pt-6">
              <a href="#contacto" className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 transition-colors">
                Contáctanos
                <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
