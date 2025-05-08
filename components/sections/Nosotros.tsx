import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AcademicCapIcon } from "@heroicons/react/24/outline";

const AboutUs: React.FC = () => {
  return (
    <section
      id="nosotros" // Added id attribute
      className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Sección de Imagen con Efecto Flotante */}
          <motion.div
            className="relative h-[500px] rounded-[2rem] shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute inset-0 -right-14 -top-14 rounded-[2rem] border-2 border-green-100/30" />
            <Image
              src="https://images.unsplash.com/photo-1590682680695-43b964a3ae17?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Tecnología Agrícola"
              fill
              className="rounded-[2rem] object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            
            {/* Insigncia con Efecto Vidrio */}
            <div className="absolute bottom-6 left-6 backdrop-blur-sm bg-white/30 px-4 py-2 rounded-2xl shadow-sm">
              <span className="font-bold text-emerald-800 text-sm">
                <AcademicCapIcon className="h-4 w-4 mr-2 inline-block text-emerald-600" />
                Innovación agrícola desde 2015
              </span>
            </div>
          </motion.div>

          {/* Sección de Contenido */}
          <motion.div
            className="flex flex-col justify-center space-y-8"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {/* Elementos Decorativos Animados */}
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-24 w-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full opacity-10 blur-3xl" />
              <span className="inline-block text-sm font-medium uppercase tracking-widest text-emerald-600">
                <span className="text-emerald-500">//</span> Nuestra historia
              </span>
            </div>

            <h2 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
              Cultivando el futuro con{' '}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                tecnología sostenible
              </span>
            </h2>

            <p className="text-lg leading-relaxed text-gray-600">
              En AgroTec, combinamos tradición agrícola con innovación tecnológica para 
              impulsar una agricultura más eficiente y sustentable. Nuestras soluciones 
              inteligentes y más de 8 años de experiencia en el campo nos permiten 
              optimizar recursos y maximizar cosechas en armonía con el medio ambiente.
            </p>

            {/* Estadísticas Agrícolas */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { number: '25k+', label: 'Hectáreas cultivadas' },
                { number: '95%', label: 'Clientes satisfechos' },
                { number: '150+', label: 'Proyectos activos' },
                { number: '18+', label: 'Tecnologías aplicadas' },
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  className="p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-green-100"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-2xl font-bold text-emerald-600">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Botón Principal */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="/nosotros"
                className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-600 to-green-600 px-6 py-4 text-white shadow-lg transition-all hover:shadow-xl hover:scale-[1.02]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Nosotros</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Patrón de Fondo Temático */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="h-full w-full opacity-10 [background-image:linear-gradient(#d1fae5_1px,transparent_1px),linear-gradient(to_right,#d1fae5_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>
    </section>
  );
};

export default AboutUs;