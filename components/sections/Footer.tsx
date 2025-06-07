import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiFacebook, FiInstagram, FiMapPin, FiPhone } from 'react-icons/fi';

const Footer: React.FC = () => {
  
  return (
    <footer id="footer" className="bg-[#1c2825] text-gray-200 relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="h-full w-full opacity-10 [background-image:linear-gradient(#d1fae5_1px,transparent_1px),linear-gradient(to_right,#d1fae5_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>
      
      {/* Top border accent line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#365947] via-[#4b7561] to-[#365947]"></div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Two column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Company info section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-8"
            >
              <motion.div 
                className="flex items-center gap-4"
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src="/images/logos/cmp-logo3.png"
                  alt="CMP Agro"
                  width={66}
                  height={66}
                  className="w-22 h-11"
                  priority
                />
                <span className="text-2xl font-bold text-gray-100">
                  CMP <span className="text-[#6a9d83]">Agro</span>
                </span>
              </motion.div>
              
              <p className="text-gray-300 leading-relaxed max-w-md text-sm">
              Acompañamos cada paso con un compromiso real, brindando soluciones confiables, eficientes y pensadas para resolver lo que realmente importa. Porque cuando el campo crece, crece todo un país… y estamos aquí para impulsarlo.

              </p>

              {/* Social icons */}
              <div className="flex gap-4 items-center pt-2">
                {[
                  { icon: FiFacebook, href: "https://www.facebook.com/cmpagropy?mibextid=wwXIfr&mibextid=wwXIfr", label: "Facebook" },
                  { icon: FiInstagram, href: "https://instagram.com/cmpagro", label: "Instagram" },
                  
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.08 }}
                    className="p-2.5 rounded-lg bg-[#2a3832] hover:bg-[#3a4c42] transition-all text-[#6a9d83] hover:text-[#8ab99e] shadow-sm"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Locations section */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <h2 className="text-lg font-medium text-gray-100 mb-7 flex items-center gap-2">
                <span className="inline-block w-8 h-[2px] bg-[#6a9d83]"></span>
                Nuestras Ubicaciones
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
                    phones: ["(0986) 778 771"]
                  },
                ].map((location, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + idx * 0.15 }}
                    viewport={{ once: true }}
                    className="p-5 rounded-xl border border-[#2d3d36] bg-[#21302b] hover:bg-[#253530] transition-all duration-300 group"
                  >
                    <h3 className="text-base font-medium text-gray-100 mb-3 flex items-center gap-2">
                      <FiMapPin className="text-[#6a9d83]" />
                      {location.title}
                    </h3>
                    <p className="text-xs text-gray-400 mb-4 leading-relaxed">{location.address}</p>
                    <div className="space-y-2.5">
                      {location.phones.map((phone, pIdx) => (
                        <motion.a 
                          key={pIdx} 
                          href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
                          className="flex items-center gap-2 text-gray-300 hover:text-[#8ab99e] transition-all text-xs group-hover:translate-x-1 duration-300"
                          whileHover={{ x: 2 }}
                        >
                          <FiPhone className="text-[#6a9d83] h-3 w-3" />
                          {phone}
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-[#2d3d36] my-12"></div>

          {/* Copyright section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center text-center"
          >
            <div className="text-sm text-green-200/80">
              ©CMP Agro. Todos los derechos reservados.
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;