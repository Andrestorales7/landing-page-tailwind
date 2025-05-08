import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiFacebook, FiInstagram, FiMessageSquare } from 'react-icons/fi';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-gradient-to-b from-green-900 to-green-950 text-green-50 relative overflow-hidden">
      {/* Background pattern - opcional: puedes usar un patrón de hojas o cultivos */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="h-full w-full bg-[url('/images/leaf-pattern.svg')] bg-repeat bg-center" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12"
          >
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <motion.a 
                href="/" 
                whileHover={{ scale: 1.05 }}
                className="inline-block"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-gradient-to-br from-green-600 to-green-700 rounded-full shadow-lg">
                    <Image
                      src="/images/logos/cmp-logo8.png"
                      alt="CMP Agro"
                      width={60}
                      height={60}
                      className="w-14 h-14"
                      priority
                    />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-green-300 to-green-200 bg-clip-text text-transparent">
                    CMP Agro
                  </span>
                </div>
              </motion.a>
              
              <p className="text-sm text-green-100 leading-relaxed">
                Innovación agrícola con tecnología de vanguardia para un futuro sostenible.
              </p>

              <div className="flex gap-4">
                {[
                  { icon: FiFacebook, href: "https://facebook.com" },
                  { icon: FiInstagram, href: "https://instagram.com" },
                  { icon: FiMessageSquare, href: "https://wa.me/1234567890" },
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    whileHover={{ y: -3 }}
                    className="p-2 rounded-full bg-green-800/80 hover:bg-green-700 transition-colors text-green-100 hover:text-white"
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.icon.name.replace('Fi', '')}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Locations Section */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  title: "Asunción",
                  address: "Avda. Artigas 4145 c/ Gral. Delgado",
                  phones: ["(0981) 176 060", "(0983) 352 029", "(0982) 163 262"]
                },
                { 
                  title: "Minga Guazú",
                  address: "Ruta 2 Km. 14",
                  phones: ["(0981) 253 081", "(0983) 846 825"]
                },
                { 
                  title: "Loma Plata",
                  address: "Oficina 4 - Predio Plasti Chaco",
                  phones: ["(0986) 289 494"]
                },
              ].map((location, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl bg-green-800/30 backdrop-blur-sm hover:bg-green-800/50 transition-colors border border-green-700/30"
                >
                  <h3 className="text-lg font-semibold text-green-300 mb-3">{location.title}</h3>
                  <p className="text-sm text-green-100 mb-3">{location.address}</p>
                  <div className="space-y-1">
                    {location.phones.map((phone, pIdx) => (
                      <a 
                        key={pIdx} 
                        href={`tel:${phone}`}
                        className="block text-green-100 hover:text-green-300 transition-colors text-sm"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Copyright Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="pt-8 mt-8 border-t border-green-800/50 text-center"
          >
            <div className="text-sm text-green-200/80">
              © {new Date().getFullYear()} CMP Agro. Todos los derechos reservados.
              <span className="block mt-1">Desarrollado por <span className="text-green-300">Andres</span></span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;