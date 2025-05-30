import React from "react";
import { motion } from "framer-motion";
import WhatsappContacts from "@/components/layout/WhatsappContacts";

export default function Contacto() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[52vh] bg-gradient-to-br from-green-900/70 via-green-800/60 to-green-700/50 overflow-hidden flex items-end">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-100"
          style={{
            backgroundImage: "url('/images/hero/contacto.jpg')",
          }}
        ></div>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent pointer-events-none"></div>
        {/* Contenido del Hero */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
              Contáctanos
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white max-w-2xl drop-shadow mx-auto">
              ¿Tienes dudas o necesitas asesoría? Completa el formulario o usa
              nuestros datos de contacto.
            </p>
          </motion.div>
        </div>
        {/* SVG Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-[60px]"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V56.44Z"
              className="fill-emerald-50 opacity-90"
            ></path>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-emerald-50 py-16">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 bg-white/90 rounded-2xl shadow-xl p-8">
          {/* Formulario */}
          <form className="space-y-6 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-emerald-700 mb-2">
              Envíanos un mensaje
            </h2>
            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-emerald-500 focus:border-emerald-500 transition"
                required
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-emerald-500 focus:border-emerald-500 transition"
                required
                placeholder="tucorreo@ejemplo.com"
              />
            </div>
            <div>
              <label
                htmlFor="mensaje"
                className="block text-sm font-medium text-gray-700"
              >
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-emerald-500 focus:border-emerald-500 transition"
                required
                placeholder="¿En qué podemos ayudarte?"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-emerald-700 transition"
            >
              Enviar mensaje
            </button>
          </form>

          {/* Información de contacto */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-emerald-700 mb-2">
                Información de contacto
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <span className="font-medium">Email:</span> contacto@tusitio.com
                </li>
                <li>
                  <span className="font-medium">Teléfono:</span> +34 123 456 789
                </li>
                <li>
                  <span className="font-medium">Dirección:</span> Calle Falsa 123,
                  Ciudad, País
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold text-emerald-700 mb-1">
                Redes sociales
              </h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-emerald-600 hover:text-emerald-800 transition"
                  aria-label="Twitter"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.74c-.37.63-.58 1.36-.58 2.14 0 1.48.75 2.78 1.89 3.54a4.28 4.28 0 0 1-1.94-.54v.05c0 2.07 1.47 3.8 3.42 4.19-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.12 2.9 3.99 2.93A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.7 8.7 0 0 0 24 4.59a8.48 8.48 0 0 1-2.54.7z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-emerald-600 hover:text-emerald-800 transition"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-emerald-600 hover:text-emerald-800 transition"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-11h3v11zm-1.5-12.27c-.97 0-1.75-.79-1.75-1.76 0-.97.78-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.78 1.76-1.75 1.76zm15.25 12.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-11h2.89v1.5h.04c.4-.76 1.37-1.56 2.82-1.56 3.01 0 3.57 1.98 3.57 4.56v6.5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Botón flotante de WhatsApp siempre visible */}
      <div className="fixed bottom-6 right-6 z-50">
        <WhatsappContacts />
      </div>
    </>
  );
}