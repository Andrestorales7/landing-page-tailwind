import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SolucionesProps {
  soluciones: Array<{
    image: string;
    title: string;
    description: string;
    link: string;
  }>;
}

const SolucionesSection: React.FC<SolucionesProps> = ({ soluciones }) => {
  return (
    <section id="soluciones" className="relative px-4 py-16 sm:px-6 lg:px-8 xl:px-12 bg-gray-200 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-green-600 text-sm font-semibold tracking-widest uppercase mb-2 font-sans">
              Soluciones
            </h2>
            <h3 className="text-4xl font-extrabold leading-tight text-balance text-gray-900 mb-4 font-sans">
              Innovación Agrícola para el Futuro del Campo
            </h3>
            <p className="text-lg text-gray-700 font-medium mb-3 font-sans">
              Excelencia en Productos y Servicios Agrícolas
            </p>
            <p className="text-gray-600 text-base leading-relaxed font-sans">
              Ofrecemos soluciones integrales para optimizar su producción agrícola con tecnología de vanguardia
              y respeto por el medio ambiente. Nuestros productos están diseñados para mejorar el rendimiento
              y la sostenibilidad de su actividad agropecuaria.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-5">
              <div className="bg-green-600 text-white w-12 h-12 flex items-center justify-center rounded-xl shadow">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-1">
                  Todo lo que Necesita en un Solo Lugar
                </h4>
                <p className="text-gray-600 text-base leading-relaxed">
                  Reciba todos los insumos y soluciones agrícolas desde un solo proveedor – semillas, fertilizantes, maquinaria y asesoría técnica.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="bg-green-600 text-white w-12 h-12 flex items-center justify-center rounded-xl shadow">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-1">
                  Enfoque Centrado en el Productor
                </h4>
                <p className="text-gray-600 text-base leading-relaxed">
                  Personalizamos su plan agrícola para adaptarse a sus metas. Le ofrecemos soluciones sostenibles y rentables con acompañamiento experto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Eliminando el título "Productos" y reduciendo el margen superior */}
        <div className="mt-6 md:mt-12"> {/* Reducido desde mt-10 md:mt-20 */}
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              navigation={{
                nextEl: '.custom-swiper-button-next',
                prevEl: '.custom-swiper-button-prev',
              }}
              pagination={{
                clickable: true,
                el: '.custom-swiper-pagination',
                type: 'bullets',
              }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
                1280: { slidesPerView: 4, spaceBetween: 30 },
              }}
            >
              {soluciones.map((solucion, index) => (
                <SwiperSlide key={index}>
                  <div className="h-full flex flex-col">
                    <div className="bg-gradient-to-br from-green-100 to-gray-200 rounded-2xl border border-gray-300/50 p-5 h-full flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                      <div className="h-52 flex items-center justify-center mb-4 rounded-xl overflow-hidden relative">
                        <img 
                          src={solucion.image} 
                          alt={solucion.title} 
                          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" 
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <h4 className="text-lg font-bold mt-2 min-h-[56px] flex items-center text-gray-800">
                        {solucion.title}
                      </h4>
                      <div className="flex-grow">
                        <p className="mt-2 text-gray-600 line-clamp-3 min-h-[72px] text-sm leading-relaxed">
                          {solucion.description}
                        </p>
                      </div>
                      <a 
                        href={solucion.link} 
                        className="inline-flex items-center mt-4 text-green-600 hover:text-green-700 font-medium transition-all duration-300 group self-start"
                      >
                        <span>Ver más</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button className="custom-swiper-button-next absolute top-1/2 -right-4 z-10 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors focus:outline-none">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="custom-swiper-button-prev absolute top-1/2 -left-4 z-10 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors focus:outline-none">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Custom Pagination */}
            <div className="custom-swiper-pagination mt-6 flex justify-center gap-2" />
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/productos"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Ver Todos los Productos
          </a>
        </div>
      </div>
      
      <style jsx global>{`
        .soluciones-carousel {
          padding-bottom: 50px;
        }

        .custom-swiper-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s;
        }

        .custom-swiper-pagination .swiper-pagination-bullet-active {
          width: 24px;
          background: #059669;
          border-radius: 4px;
        }

        @media (max-width: 640px) {
          .custom-swiper-button-next,
          .custom-swiper-button-prev {
            display: none;
          }
        }

        .swiper-slide {
          height: auto;
        }
      `}</style>
    </section>
  );
};

export default SolucionesSection;
