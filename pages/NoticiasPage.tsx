// NoticiasSection.tsx
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import NoticiaCard from '../components/ui/NoticiaCard';
import Marcas from '@/components/sections/Marcas';
import WhatsappContacts from '@/components/layout/WhatsappContacts';
import NoticeSlider from '@/components/sections/NoticeSlider';
import { motion } from 'framer-motion';

// Tipos
export type CategoriaNoticia = 'Innovación' | 'Sostenibilidad' | 'Tendencias' | 'Ganadería' | 'Horticultura' | 'Agricultura' | 'Eventos';

export interface Noticia {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
  categoria: CategoriaNoticia;
  autor: string;
  fecha: string;
  tiempoLectura: number;
}

// Datos de ejemplo (en producción estos vendrían de una API/backend)
const noticiasData: Noticia[] = [
    {
        id: 1,
        titulo: "Tecnología en Agricultura de Precisión",
        descripcion: "Descubre cómo las nuevas tecnologías están revolucionando los cultivos y mejorando la eficiencia en el campo.",
        imagen: "/images/noticias/id1.jpg",
        categoria: "Innovación",
        autor: "Juan Pérez",
        fecha: "14/11/2023",
        tiempoLectura: 5
      },
      {
        id: 2,
        titulo: "Cultivos Orgánicos Sostenibles",
        descripcion: "Conoce las técnicas líderes en producción orgánica y su impacto positivo en el medio ambiente.",
        imagen: "/images/noticias/id2.jpg",
        categoria: "Sostenibilidad",
        autor: "María Gómez",
        fecha: "9/11/2023",
        tiempoLectura: 7
      },
      {
        id: 3,
        titulo: "Nuevas Tendencias en Agroindustria",
        descripcion: "Análisis de las últimas tendencias tecnológicas aplicadas a la producción agrícola a gran escala.",
        imagen: "/images/noticias/id3.jpg",
        categoria: "Tendencias",
        autor: "Carlos Rojas",
        fecha: "4/11/2023",
        tiempoLectura: 6
      },
      {
        id: 4,
        titulo: "Feria Innovar 2025",
        descripcion: "INNOVAR 2025, epicentro del agro, la tecnología y la sostenibilidad, culmina con más de 25.000 visitantes.",
        imagen: "/images/noticias/id4.jpg",
        categoria: "Eventos",
        autor: "Laura Mendoza",
        fecha: "28/10/2023",
        tiempoLectura: 4
      },
      {
        id: 5,
        titulo: "Técnicas de control biológico para huertos",
        descripcion: "Alternativas naturales y efectivas para mantener plagas bajo control sin recurrir a químicos nocivos.",
        imagen: "/images/noticias/id5.jpg",
        categoria: "Horticultura",
        autor: "Pedro Benítez",
        fecha: "22/10/2023",
        tiempoLectura: 8
      },
      {
        id: 6,
        titulo: "Manejo integrado de agua en cultivos extensivos",
        descripcion: "Estrategias para optimizar el uso del agua y aumentar la eficiencia en zonas de secano del Chaco paraguayo.",
        imagen: "/images/noticias/id6.jpg",
        categoria: "Agricultura",
        autor: "Sofía Martínez",
        fecha: "15/10/2023",
        tiempoLectura: 6
      },
      {
        id: 7,
        titulo: "ALIM 2024, Alimentando el futuro",
        descripcion: "42°Asamblea Anual de la Asociación Latinoamericana de Industriales Molineros.",
        imagen: "/images/noticias/id7.jpg",
        categoria: "Eventos",
        autor: "José Rodríguez",
        fecha: "10/10/2023",
        tiempoLectura: 5
      },
      {
        id: 8,
        titulo: "Sistemas agroforestales para pequeños productores",
        descripcion: "Cómo la combinación de cultivos y árboles nativos puede beneficiar económicamente a familias campesinas.",
        imagen: "/images/noticias/id8.jpg",
        categoria: "Sostenibilidad",
        autor: "Ana López",
        fecha: "3/10/2023",
        tiempoLectura: 7
      },
      {
        id: 9,
        titulo: "Innovaciones en riego por goteo solar",
        descripcion: "Nuevos sistemas que aprovechan la energía solar para automatizar el riego y ahorrar recursos.",
        imagen: "/images/noticias/id8b.jpg",
        categoria: "Innovación",
        autor: "Roberto Giménez",
        fecha: "28/9/2023",
        tiempoLectura: 4
      },
      {
        id: 10,
        titulo: "Jornada de pesca con clientes",
        descripcion: "Evento de integracion y tiempo de compartir con clientes y amigos.",
        imagen: "/images/noticias/id11.jpg",
        categoria: "Eventos",
        autor: "Carmen Acosta",
        fecha: "20/9/2023",
        tiempoLectura: 6
      },
      {
        id: 11,
        titulo: "Control natural de malezas en hortalizas orgánicas",
        descripcion: "Métodos ecológicos para mantener los huertos libres de malezas sin usar herbicidas químicos.",
        imagen: "/images/noticias/id11a.jpg",
        categoria: "Horticultura",
        autor: "Diego Paredes",
        fecha: "15/9/2023",
        tiempoLectura: 5
      },
      {
        id: 12,
        titulo: "Alimentación tecnificada para ganado lechero",
        descripcion: "Sistemas automáticos que optimizan la nutrición animal y mejoran la producción láctea.",
        imagen: "/images/noticias/id12.jpg",
        categoria: "Ganadería",
        autor: "Patricia Sosa",
        fecha: "8/9/2023",
        tiempoLectura: 6
      }
    ];

// Componente principal
const NoticiasPage: React.FC = () => {
  // Estados para manejar la búsqueda y filtros
  const [busqueda, setBusqueda] = useState<string>('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>('');
  const [noticiasVisibles, setNoticiasVisibles] = useState<Noticia[]>(noticiasData.slice(0, 12));
  const [mostrarTodas, setMostrarTodas] = useState<boolean>(false);
  const [noticiaSeleccionada, setNoticiaSeleccionada] = useState<Noticia | null>(null);
  // Estado para controlar el efecto de carga
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  
  // Extraemos todas las categorías únicas para el filtro
  const categorias: CategoriaNoticia[] = Array.from(
    new Set(noticiasData.map(noticia => noticia.categoria))
  ) as CategoriaNoticia[];
  
  // Efecto para manejar parámetros de URL y carga de página
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const noticiaId = searchParams.get('id');
    
    if (noticiaId) {
      const id = parseInt(noticiaId);
      const noticia = noticiasData.find(n => n.id === id);
      
      if (noticia) {
        setNoticiaSeleccionada(noticia);
        if (noticia.categoria) {
          setCategoriaSeleccionada(noticia.categoria);
        }
        
        setTimeout(() => {
          const element = document.getElementById(`noticia-${id}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            element.classList.add('noticia-destacada');
            setTimeout(() => {
              element.classList.remove('noticia-destacada');
            }, 2000);
          }
        }, 500);
      }
    }
    
    // Simulamos una pequeña carga
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
  }, []);
  
  // Efecto para filtrar noticias según búsqueda y categoría
  useEffect(() => {
    const noticiasFiltradas = noticiasData.filter(noticia => {
      const coincideBusqueda = 
        noticia.titulo.toLowerCase().includes(busqueda.toLowerCase()) || 
        noticia.descripcion.toLowerCase().includes(busqueda.toLowerCase());
      
      const coincideCategoria = categoriaSeleccionada === '' || noticia.categoria === categoriaSeleccionada;
      
      return coincideBusqueda && coincideCategoria;
    });
    
    // Mostrar solo las primeras 12 o todas dependiendo del estado
    if (mostrarTodas) {
      setNoticiasVisibles(noticiasFiltradas);
    } else {
      setNoticiasVisibles(noticiasFiltradas.slice(0, 12));
    }
  }, [busqueda, categoriaSeleccionada, mostrarTodas]);
  
  // Manejadores
  const handleVerMas = () => {
    setMostrarTodas(true);
  };
  
  const handleLimpiarFiltros = () => {
    setBusqueda('');
    setCategoriaSeleccionada('');
    window.history.replaceState({}, '', '/noticias');
  };
  
  return (
    <>
      <div id="NoticiasPage" className="min-h-screen bg-gradient-to-b from-green-50 to-gray-50">
        {/* Hero Section - Actualizado al estilo AgroPecuaria */}
        <div className="relative min-h-[52vh] bg-gradient-to-br from-green-900/70 via-green-800/60 to-green-700/50 overflow-hidden">
          {/* Imagen de fondo con overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-100"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1593106441259-69e345a949f0?q=80&w=2070&auto=format&fit=crop')",
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
                Noticias y Actualidad
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white max-w-2xl drop-shadow mx-auto">
                Mantente informado con las últimas novedades del sector agroindustrial.
              </p>
            </motion.div>
          </div>
          
          {/* SVG Wave divider */}
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" 
                 className="w-full h-[10vw] min-h-[60px] max-h-[120px]">
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

        {/* Destacados - Sección nueva similar a AgroPecuaria */}
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

        {/* Sección de noticias */}
        <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-2">
              ACTUALIDAD AGRÍCOLA
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
              Noticias del Sector
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Mantente actualizado con las últimas innovaciones y desarrollos en agricultura tecnológica
            </p>
          </motion.div>
            
          {/* Barra de búsqueda y filtros */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="flex flex-col md:flex-row gap-4">
              {/* Buscador */}
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  type="text"
                  placeholder="Buscar noticias..."
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-150 ease-in-out"
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                />
              </div>
              
              {/* Filtro por categoría */}
              <div className="md:w-64">
                <select
                  className="block w-full py-3 px-3 border border-gray-300 rounded-lg leading-5 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-150 ease-in-out"
                  value={categoriaSeleccionada}
                  onChange={(e) => setCategoriaSeleccionada(e.target.value)}
                >
                  <option value="">Todas las categorías</option>
                  {categorias.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
          
          {/* Grid de noticias */}
          {noticiasVisibles.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {noticiasVisibles.map((noticia, index) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                    id={`noticia-${noticia.id}`}
                    key={noticia.id}
                    className={`bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 ${
                      noticiaSeleccionada?.id === noticia.id 
                        ? 'ring-4 ring-green-400 ring-offset-2 scale-105' 
                        : ''
                    }`}
                  >
                    <NoticiaCard noticia={noticia} />
                  </motion.div>
                ))}
              </div>
              
              {/* Botón Ver Más */}
              {!mostrarTodas && noticiasData.length > 12 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-center mt-12"
                >
                  <button 
                    onClick={handleVerMas}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
                  >
                    Ver más noticias
                  </button>
                </motion.div>
              )}
            </>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center py-16"
            >
              <svg 
                className="mx-auto h-12 w-12 text-gray-400" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5}
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" 
                />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">No se encontraron resultados</h3>
              <p className="mt-1 text-sm text-gray-500">No hay noticias que coincidan con tu búsqueda.</p>
              <div className="mt-6">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  onClick={handleLimpiarFiltros}
                >
                    Limpiar filtros
                </button>
              </div>
            </motion.div>
          )}
        </section>
      </div>
      
      {/* Secciones adicionales con animación de entrada */}
      <div className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
           style={{ transitionDelay: '500ms' }}>
        <Marcas />
      </div>

      <div className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
           style={{ transitionDelay: '600ms' }}>
        <NoticeSlider
          notices={[
            { id: 1, text: 'Mantente informado de las últimas noticias del sector agroindustrial' },
            { id: 2, text: 'Suscríbete a nuestro boletín para recibir actualizaciones' },
          ]}
        />
      </div>

      <div className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
           style={{ transitionDelay: '700ms' }}>
        <WhatsappContacts
          contacts={[
            {
              name: "Juan Pérez",
              profileImage: "/images/perfil1.png",
              whatsappLink: "https://wa.me/1234567890",
            },
            {
              name: "María López",
              profileImage: "/images/perfil1.png",
              whatsappLink: "https://wa.me/0987654321",
            },
          ]}
        />
      </div>
    </>
  );
};

export default NoticiasPage;