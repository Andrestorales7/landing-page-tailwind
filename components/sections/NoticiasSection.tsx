// NoticiasSection.tsx
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import NoticiaCard from '../ui/NoticiaCard';
// Eliminar estos imports de React Router
// import { useLocation, useNavigate } from 'react-router-dom';

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
const NoticiasSection: React.FC = () => {
  // Eliminar estas líneas que usan React Router
  // const location = useLocation();
  // const navigate = useNavigate();
  
  // Estados para manejar la búsqueda y filtros
  const [busqueda, setBusqueda] = useState<string>('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>('');
  const [noticiasVisibles, setNoticiasVisibles] = useState<Noticia[]>(noticiasData.slice(0, 12));
  const [mostrarTodas, setMostrarTodas] = useState<boolean>(false);
  const [noticiaSeleccionada, setNoticiaSeleccionada] = useState<Noticia | null>(null);
  
  // Extraemos todas las categorías únicas para el filtro
  const categorias: CategoriaNoticia[] = Array.from(
    new Set(noticiasData.map(noticia => noticia.categoria))
  ) as CategoriaNoticia[];
  
  // Efecto para manejar parámetros de URL (para cuando se navega desde la página principal)
  useEffect(() => {
    // Usamos window.location en lugar de React Router
    const searchParams = new URLSearchParams(window.location.search);
    const noticiaId = searchParams.get('id');
    
    if (noticiaId) {
      const id = parseInt(noticiaId);
      const noticia = noticiasData.find(n => n.id === id);
      
      if (noticia) {
        setNoticiaSeleccionada(noticia);
        
        // Si hay una categoría asociada a la noticia, la seleccionamos
        if (noticia.categoria) {
          setCategoriaSeleccionada(noticia.categoria);
        }
        
        // Hacemos scroll hasta la noticia seleccionada después de que se renderice
        setTimeout(() => {
          const element = document.getElementById(`noticia-${id}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Añadimos una clase para destacar brevemente la noticia
            element.classList.add('noticia-destacada');
            setTimeout(() => {
              element.classList.remove('noticia-destacada');
            }, 2000);
          }
        }, 500);
      }
    }
  }, []); // Eliminar location.search de las dependencias
  
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
  
  // Manejador para el botón "Ver más"
  const handleVerMas = () => {
    setMostrarTodas(true);
  };
  
  // Manejador para limpiar filtros y volver al estado inicial
  const handleLimpiarFiltros = () => {
    setBusqueda('');
    setCategoriaSeleccionada('');
    // Usar window.history en lugar de navigate
    window.history.replaceState({}, '', '/noticias');
  };
  
  return (
    <section className="py-16 bg-gray-50">
      {/* Cabecera de la sección */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-2">
            ACTUALIDAD AGRÍCOLA
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
            Noticias del Sector
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mantente actualizado con las últimas innovaciones y desarrollos en agricultura tecnológica
          </p>
        </div>
        
        {/* Barra de búsqueda y filtros */}
        <div className="max-w-4xl mx-auto mb-12">
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
        </div>
        
        {/* Grid de noticias */}
        {noticiasVisibles.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {noticiasVisibles.map((noticia) => (
                <div 
                  id={`noticia-${noticia.id}`}
                  key={noticia.id}
                  className={`transition-all duration-500 ${noticiaSeleccionada?.id === noticia.id ? 'ring-4 ring-green-400 ring-offset-2 scale-105' : ''}`}
                >
                  <NoticiaCard noticia={noticia} />
                </div>
              ))}
            </div>
            
            {/* Botón Ver Más */}
            {!mostrarTodas && noticiasData.length > 12 && (
              <div className="text-center mt-12">
                <button 
                  onClick={handleVerMas}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
                >
                  Ver más noticias
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
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
          </div>
        )}
      </div>
    </section>
  );
};

export default NoticiasSection;