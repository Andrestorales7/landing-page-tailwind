import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SEO from "@/components/SEO";
import { useBreadcrumbSchema } from "@/hooks/useLocationSchema";

export default function Contacto() {
  // Breadcrumb para la página de contacto
  const breadcrumbItems = [
    { name: "Inicio", url: "https://www.cmpagro.com.py" },
    { name: "Contacto", url: "https://www.cmpagro.com.py/Contacto" }
  ];

  const breadcrumbSchema = useBreadcrumbSchema(breadcrumbItems);

  // Schema específico para la página de contacto
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contacto - CMP Agro",
    "description": "Contáctanos para consultas sobre nuestros productos agrícolas. Múltiples sucursales en Paraguay.",
    "url": "https://www.cmpagro.com.py/Contacto",
    "mainEntity": {
      "@id": "https://www.cmpagro.com.py/#organization"
    },
    "breadcrumb": breadcrumbSchema
  };

  // Schema para el equipo de vendedores
  const teamSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Equipo de Asesores CMP Agro",
    "description": "Nuestro equipo de asesores especializados en soluciones agrícolas",
    "member": [
      {
        "@type": "Person",
        "name": "Alejandro Suehsner",
        "jobTitle": "Asesor de Ventas",
        "worksFor": {
          "@type": "Organization",
          "name": "CMP Agro"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "sales",
          "url": "https://wa.link/ktpqgg"
        }
      },
      {
        "@type": "Person",
        "name": "Iván Amarilla",
        "jobTitle": "Asesor de Ventas",
        "worksFor": {
          "@type": "Organization",
          "name": "CMP Agro"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "sales",
          "url": "https://wa.link/62cfao"
        }
      },
      {
        "@type": "Person",
        "name": "Heriberto Lugo",
        "jobTitle": "Asesor de Ventas",
        "worksFor": {
          "@type": "Organization",
          "name": "CMP Agro"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "sales",
          "url": "https://wa.link/a4sm5x"
        }
      },
      {
        "@type": "Person",
        "name": "Emilio Winckler",
        "jobTitle": "Asesor de Ventas",
        "worksFor": {
          "@type": "Organization",
          "name": "CMP Agro"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "sales",
          "url": "https://wa.link/50chk0"
        }
      },
      {
        "@type": "Person",
        "name": "Francisco Céspedes",
        "jobTitle": "Asesor de Ventas",
        "worksFor": {
          "@type": "Organization",
          "name": "CMP Agro"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "sales",
          "url": "https://wa.link/unfsew"
        }
      },
      {
        "@type": "Person",
        "name": "Manuel Bobadilla",
        "jobTitle": "Asesor de Ventas",
        "worksFor": {
          "@type": "Organization",
          "name": "CMP Agro"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "sales",
          "url": "https://wa.link/mqmch5"
        }
      }
    ]
  };

  // Schema para las ubicaciones/sucursales
  const locationsSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CMP Agro - Sucursales",
    "description": "Ubicaciones de las sucursales de CMP Agro en Paraguay",
    "hasMap": "https://maps.google.com/?q=CMP+Agro+Paraguay",
    "location": [
      {
        "@type": "Place",
        "name": "CMP Agro - Asunción",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Avda. Artigas 4145 c/ Gral. Delgado",
          "addressLocality": "Asunción",
          "addressRegion": "Asunción",
          "addressCountry": "PY"
        },
        "telephone": "+595-981-176-060",
        "openingHours": "Mo-Fr 07:30-17:00",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -25.2637,
          "longitude": -57.5759
        }
      },
      {
        "@type": "Place",
        "name": "CMP Agro - Minga Guazú",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Ruta 2 - Km.16",
          "addressLocality": "Minga Guazú",
          "addressRegion": "Alto Paraná",
          "addressCountry": "PY"
        },
        "telephone": "+595-981-253-081",
        "openingHours": "Mo-Fr 07:30-17:00",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -25.5167,
          "longitude": -54.6167
        }
      },
      {
        "@type": "Place",
        "name": "CMP Agro - Loma Plata",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Oficina 4 - Predio Plasti Chaco",
          "addressLocality": "Loma Plata",
          "addressRegion": "Boquerón",
          "addressCountry": "PY"
        },
        "telephone": "+595-986-778-771",
        "openingHours": "Mo-Fr 07:30-17:00"
      }
    ]
  };

  // Datos de vendedores actualizados con contactos reales
  const vendedores = [
    {
      id: 1,
      nombre: "Alejandro Suehsner",
      especialidad: "Asesor de Ventas",
      telefono: "Contactar por WhatsApp",
      email: "Consultas disponibles",
      whatsapp: "https://wa.link/ktpqgg",
      imagen: "/images/people/ale.png",
    },
    {
      id: 2,
      nombre: "Iván Amarilla",
      especialidad: "Asesor de Ventas",
      telefono: "Contactar por WhatsApp",
      email: "Consultas disponibles",
      whatsapp: "https://wa.link/62cfao",
      imagen: "/images/people/n.png",
    },
    {
      id: 3,
      nombre: "Heriberto Lugo",
      especialidad: "Asesor de Ventas",
      telefono: "Contactar por WhatsApp",
      email: "Consultas disponibles",
      whatsapp: "https://wa.link/a4sm5x",
      imagen: "/images/people/heriberto.png",
    },
    {
      id: 4,
      nombre: "Emilio Winckler",
      especialidad: "Asesor de Ventas",
      telefono: "Contactar por WhatsApp",
      email: "Consultas disponibles",
      whatsapp: "https://wa.link/50chk0",
      imagen: "/images/people/s.png",
    },
    {
      id: 5,
      nombre: "Francisco Céspedes",
      especialidad: "Asesor de Ventas",
      telefono: "Contactar por WhatsApp",
      email: "Consultas disponibles",
      whatsapp: "https://wa.link/unfsew",
      imagen: "/images/people/francisco.png",
    },
    {
      id: 6,
      nombre: "Manuel Bobadilla",
      especialidad: "Asesor de Ventas",
      telefono: "Contactar por WhatsApp",
      email: "Consultas disponibles",
      whatsapp: "https://wa.link/mqmch5",
      imagen: "/images/people/manuel.png",
    },
  ];

  // Datos de ubicaciones (puedes modificar estos datos)
  const ubicaciones = [
    {
      id: 1,
      nombre: "Asuncion",
      direccion: "Avda. Artigas 4145 c/ Gral. Delgado",
      telefono: "(0981) 176 060",
      horario: "Lun - Vie: 07:30 - 17:00",
      coordenadas: "40.4168, -3.7038",
    },
    {
      id: 2,
      nombre: " Minga Guazu",
      direccion: "Ruta 2 - Km.16",
      telefono: "(0981) 253 081",
      horario: "Lun - Vie: 07:30 - 17:00",
      coordenadas: "40.4500, -3.6900",
    },
    {
      id: 3,
      nombre: "Loma Plata",
      direccion: "Oficina 4 - Predio Plasti Chaco",
      telefono: "(0986) 778 771",
      horario: "Lun - Vie: 07:30 - 17:00",
      coordenadas: "40.3800, -3.7200",
    },
  ];

  return (
    <>
      <SEO 
        title="Contacto | CMP Agro - Asesores Especializados en Soluciones Agrícolas"
        description="Ponte en contacto con nuestro equipo de asesores especializados en soluciones agrícolas, ganaderas y agroindustriales. Oficinas en Asunción, Minga Guazú y Loma Plata. Atención personalizada vía WhatsApp."
        url="https://www.cmpagro.com.py/Contacto"
        image="https://www.cmpagro.com.py/images/hero/contactopic.jpg"
        imageAlt="Equipo de asesores CMP Agro - Contacto"
        type="website"
        structuredData={[breadcrumbSchema, contactSchema, teamSchema, locationsSchema]}
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[52vh] bg-gradient-to-br from-emerald-200/70 via-emerald-100/60 to-emerald-50/50 overflow-hidden flex items-center">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{
            backgroundImage: "url('/images/hero/contactopic.jpg')",
          }}
        ></div>
        {/* Overlay gradient más claro */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-emerald-100/20 to-transparent pointer-events-none"></div>
        {/* Contenido del Hero */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pb-2">
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
              ¿Tienes dudas o necesitas asesoría?
              comunícate directamente con nuestros vendedores.
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

      {/* Sección de Vendedores */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-4">
              Nuestros Asesores
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conoce a nuestro equipo de amplia experiencia, listos para
              ayudarte a encontrar la solucion agricola que estas buscando.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vendedores.map((vendedor, index) => (
              <motion.div
                key={vendedor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-emerald-100"
              >
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-emerald-200 rounded-full flex items-center justify-center overflow-hidden">
                    <Image
                      src={vendedor.imagen}
                      alt={`${vendedor.nombre} - ${vendedor.especialidad} en CMP Agro`}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback a icono SVG si la imagen no carga
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        if (target.nextSibling) {
                          (target.nextSibling as HTMLElement).style.display = 'block';
                        }
                      }}
                    />
                    <svg
                      className="w-12 h-12 text-emerald-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      style={{ display: 'none' }}
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-800 mb-1">
                    {vendedor.nombre}
                  </h3>
                  <p className="text-emerald-600 font-medium mb-3">
                    {vendedor.especialidad}
                  </p>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <p className="flex items-center justify-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                      </svg>
                      {vendedor.telefono}
                    </p>
                    <p className="flex items-center justify-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                      {vendedor.email}
                    </p>
                  </div>
                  <a
                    href={vendedor.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                    aria-label={`Contactar a ${vendedor.nombre} por WhatsApp`}
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z" />
                    </svg>
                    Contactar por WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Ubicaciones */}
      <section className="bg-emerald-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-4">
              Nuestras Ubicaciones
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visítanos en cualquiera de nuestras oficinas estratégicamente
              ubicadas para brindarte el mejor servicio.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ubicaciones.map((ubicacion, index) => (
              <motion.div
                key={ubicacion.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-emerald-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-emerald-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-800">
                    {ubicacion.nombre}
                  </h3>
                </div>

                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <div>
                      <p className="font-medium">{ubicacion.direccion}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-emerald-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                    <p>{ubicacion.telefono}</p>
                  </div>

                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-emerald-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                      <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                    </svg>
                    <p>{ubicacion.horario}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-4">
              Encuéntranos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ubica nuestras oficinas en el mapa y planifica tu visita.
            </p>
          </motion.div>

          <div className="rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.507403931926!2d-57.583179623703764!3d-25.253511225933764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da65cc180c135%3A0xe48a7b91dc634dfd!2sCompa%C3%B1ia%20Maritima%20Paraguaya%20SA!5e0!3m2!1ses-419!2spy!4v1749481584572!5m2!1ses-419!2spy"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="Ubicación de CMP Agro en Google Maps"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}