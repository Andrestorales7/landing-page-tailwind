import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AcademicCapIcon, ChartBarIcon, BuildingOffice2Icon, UsersIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

const AboutUs: React.FC = () => {
  return (
    <section
      id="nosotros" 
      className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white py-10"
    >
      {/* Background pattern with improved opacity */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="h-full w-full opacity-15 [background-image:linear-gradient(#d1fae5_1px,transparent_1px),linear-gradient(to_right,#d1fae5_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-green-200/20 to-emerald-300/30 rounded-full blur-3xl -z-5"></div>
      <div className="absolute bottom-40 left-10 w-72 h-72 bg-gradient-to-tr from-emerald-200/20 to-green-300/20 rounded-full blur-3xl -z-5"></div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
            {/* Enhanced Image Section with Overlays */}
          <motion.div
            className="relative h-[500px] rounded-[2rem] shadow-2xl overflow-hidden group mt-16 lg:mt-28"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Decorative border */}
            <div className="absolute inset-0 -right-14 -top-14 rounded-[2rem] border-2 border-green-100/30" />
            {/* Image with overlay gradient */}
            <div className="absolute inset-0">
              <Image
                src="/images/hero/about-us.jpg"
                alt="Tecnología Agrícola"
                fill
                className="rounded-[2rem] object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 via-transparent to-transparent rounded-[2rem]"></div>
            </div>
            {/* Badge with improved glass effect */}
            <div className="absolute bottom-6 left-6 backdrop-blur-md bg-white/40 px-5 py-3 rounded-2xl shadow-lg border border-white/30">
              <span className="font-bold text-emerald-800 text-sm flex items-center">
                <AcademicCapIcon className="h-5 w-5 mr-2 text-emerald-600" />
                Innovación agrícola desde 2000
              </span>
            </div>
            {/* New floating achievements badge */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute top-6 right-6 bg-green-600/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
            >
              <span className="text-white text-sm font-semibold">+25 años de experiencia</span>
            </motion.div>
          </motion.div>

          {/* Content Section with Improved Typography and Layout */}
          <motion.div
            className="flex flex-col justify-center space-y-8 pt-6"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {/* Title with decorative elements */}
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-24 w-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full opacity-10 blur-3xl" />
              <span className="inline-block text-sm font-medium uppercase tracking-widest text-emerald-600">
                <span className="text-emerald-500"></span> Nuestra historia
              </span>
              <h2 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
                Mas de 25 años impulsando el{' '}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Agro Paraguayo
                </span>
              </h2>
            </div>

            {/* Content with improved typography and styled first paragraph */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-700 border-l-4 border-emerald-500 pl-4 italic bg-green-50/50 py-3 pr-3 rounded-r-lg">
                Somos un equipo de profesionales apasionados por el campo, por su gente y por su futuro. Nuestro compromiso va mucho más allá de un intercambio: acompañamos a los productores desde el primer momento.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 border-l-4 border-emerald-500 pl-4 italic bg-green-50/50 py-3 pr-3 rounded-r-lg">
                Nuestro equipo se traslada constantemente a lo largo y ancho del país, visitando estancias, participando de jornadas de campo, ferias, eventos y capacitaciones, siempre con la misión de sumar valor y estar presentes donde se nos necesita.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 border-l-4 border-emerald-500 pl-4 italic bg-green-50/50 py-3 pr-3 rounded-r-lg">
                Representamos a marcas líderes a nivel mundial, que cuentan con las certificaciones más exigentes del sector y que confían en nosotros por nuestra capacidad de traducir calidad en soluciones concretas.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Quote section moved below the image and content */}
        <div className="mt-10 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-4 rounded-lg border-l-4 border-emerald-500">
            <p className="text-emerald-800 italic font-medium">
              "Estamos convencidos de que el motor del agro paraguayo es su gente. Por eso, elegimos estar cerca, escuchar, responder y crecer junto a quienes cada día hacen posible el desarrollo del país."
            </p>
          </div>
        </div>
        
        {/* Statistics with improved visual design - Full Width Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-16 bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-emerald-100"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '+ 57', label: 'Marcas Representadas', icon: <BuildingOffice2Icon className="h-8 w-8 text-emerald-500" /> },
              { number: '+ 1.000', label: 'Clientes satisfechos', icon: <CheckCircleIcon className="h-8 w-8 text-emerald-500" /> },
              { number: '+ 25 Años', label: 'En el Mercado', icon: <ChartBarIcon className="h-8 w-8 text-emerald-500" /> },
              { number: '+ 500', label: 'Soluciones', icon: <UsersIcon className="h-8 w-8 text-emerald-500" /> },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-b from-white to-green-50 shadow-sm border border-green-100"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.4 + index * 0.1, duration: 0.5 }
                }}
              >
                <div className="mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-emerald-600">{stat.number}</div>
                <div className="text-sm text-gray-600 text-center mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          
          {/* Button with improved styling and positioning */}
          <div className="flex justify-center mt-10">
            <motion.a
              href="/NosotrosPage"
              className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 px-8 py-4 text-white shadow-lg transition-all hover:shadow-xl"
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(16, 185, 129, 0.1), 0 10px 10px -5px rgba(16, 185, 129, 0.04)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="font-medium">Conoce más sobre nosotros</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;