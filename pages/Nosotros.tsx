import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AcademicCapIcon, UsersIcon, GlobeAltIcon, HeartIcon } from "@heroicons/react/24/outline";
import WhatsappContacts from "@/components/layout/WhatsappContacts";

const AboutUsPage: React.FC = () => {
  return (
    <>

      <main>
        {/* Hero Section */}
        <section className="min-h-screen bg-gradient-to-b from-green-50 to-gray-50">
          {/* Hero Section - Actualizado al estilo AgroPecuaria */}
        <div className="relative min-h-[52vh] bg-gradient-to-br from-green-900/70 via-green-800/60 to-green-700/50 overflow-hidden">
          {/* Imagen de fondo con overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-100"
            style={{
              backgroundImage: "url('/images/nosotros.JPG')",
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
                Sobre Nosotros
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white max-w-2xl drop-shadow mx-auto">
                Conoce nuestra historia y nuestra misión.
              </p>
            </motion.div>
          </div>
          
          {/* SVG Wave divider */}
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" 
                 className="w-full h-[10vw] min-h-[60px] max-h-[120px]">
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V56.44Z"
                className="fill-[#f9fafb] opacity-90"
              ></path>
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3"
                className="fill-none stroke-white stroke-2 opacity-50"
              ></path>
            </svg>
          </div>
        </div>

        {/* Destacados */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 -mt-16 mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Actualidad del Sector', icon: '📰', description: 'Noticias relevantes del ámbito agroindustrial.' },
              { title: 'Contenido Clasificado', icon: '🏷️', description: 'Artículos organizados por categorías temáticas.' },
              { title: 'Eventos y Tendencias', icon: '📅', description: 'Información actualizada sobre eventos del sector.' }
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

        <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-16 lg:grid-cols-2">
              {/* Image Section */}
              <motion.div
                className="relative h-[500px] rounded-2xl shadow-2xl"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="absolute inset-0 -right-14 -top-14 rounded-2xl border-2 border-green-100/30" />
                <Image
                  src="/images/nosotros.JPG"
                  alt="Tecnología Agrícola"
                  fill
                  className="rounded-2xl object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                
                <div className="absolute bottom-6 left-6 backdrop-blur-sm bg-white/30 px-4 py-2 rounded-2xl shadow-sm">
                  <span className="font-bold text-emerald-800 text-sm">
                    <AcademicCapIcon className="h-4 w-4 mr-2 inline-block text-emerald-600" />
                    Innovación agrícola desde 2015
                  </span>
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col justify-center"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Nuestra Historia
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                Somos una empresa líder que tiene como objetivo dar soluciones innovadoras y tecnológicas al Agronegocio del Paraguay.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                Seleccionamos cuidadosamente las marcas internacionales que representamos. Esto con el objetivo de ofrecer un amplio portafolio de productos de primer nivel. 
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                Nuestros técnicos están siempre disponibles para brindar asesoramiento personalizado y garantizar a los clientes, productos y soluciones de acuerdo a sus necesidades.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Valores</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Los principios que guían cada decisión y acción en CMP Agro
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <UsersIcon className="h-8 w-8 text-emerald-600" />,
                  title: "Trabajo en Equipo",
                  description: "Colaboración y sinergia para alcanzar objetivos comunes"
                },
                {
                  icon: <GlobeAltIcon className="h-8 w-8 text-emerald-600" />,
                  title: "Sostenibilidad",
                  description: "Compromiso con el medio ambiente y las generaciones futuras"
                },
                {
                  icon: <AcademicCapIcon className="h-8 w-8 text-emerald-600" />,
                  title: "Innovación",
                  description: "Búsqueda constante de soluciones tecnológicas avanzadas"
                },
                {
                  icon: <HeartIcon className="h-8 w-8 text-emerald-600" />,
                  title: "Compromiso",
                  description: "Dedicación total a la excelencia y al servicio al cliente"
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <WhatsappContacts contacts={[]} />
      
    </>
  );
};

export default AboutUsPage;
