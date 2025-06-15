// NoticiaCard.tsx
import React from 'react';
import { Clock, Calendar, BookOpen } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/router';

// Define the Noticia interface here
interface Noticia {
  id: string | number;
  titulo: string;
  descripcion: string;
  autor: string;
  fecha: string;
  tiempoLectura: number;
  categoria: string;
  image: string;
}

interface NoticiaCardProps {
  noticia: Noticia;
}

const NoticiaCard: React.FC<NoticiaCardProps> = ({ noticia }) => {
  const router = useRouter();

  // Función para obtener la clase CSS según la categoría
  const getCategoryClass = (categoria: string) => {
    switch (categoria) {
      case 'Innovación':
        return 'bg-blue-100 text-blue-800';
      case 'Sostenibilidad':
        return 'bg-green-100 text-green-800';
      case 'Tendencias':
        return 'bg-purple-100 text-purple-800';
      case 'Ganadería':
        return 'bg-red-100 text-red-800';
      case 'Horticultura':
        return 'bg-orange-100 text-orange-800';
      case 'Agricultura':
        return 'bg-yellow-100 text-yellow-800';
      case 'Eventos':
        return 'bg-indigo-100 text-indigo-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Si la imagen proporcionada no existe, usamos un placeholder
  const imageSrc = noticia.image.startsWith('/')
    ? noticia.image
    : `/api/placeholder/400/250`;

  // Función para manejar el clic en la tarjeta - CORREGIDO a /noticias/
  const handleCardClick = () => {
    router.push(`/noticias/${noticia.id}`);
  };

  // Función para manejar el clic en el botón Leer - CORREGIDO a /noticias/
  const handleReadClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Evitar que el clic se propague a la tarjeta completa
    router.push(`/noticias/${noticia.id}`);
  };

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full group cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Imagen de la noticia */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={noticia.titulo}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 400px"
          priority
        />
        
        {/* Categoría como badge en la esquina superior */}
        <div className="absolute top-4 right-4">
          <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${getCategoryClass(noticia.categoria)} shadow-sm`}>
            {noticia.categoria}
          </span>
        </div>
      </div>
      
      {/* Contenido de la noticia */}
      <div className="p-6">
        {/* Título */}
        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors duration-300">
          {noticia.titulo}
        </h3>
        
        {/* Descripción */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {noticia.descripcion}
        </p>
        
        {/* Pie de la tarjeta con autor y tiempo de lectura */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold text-xs">
              {noticia.autor.split(' ').map(name => name[0]).join('')}
            </div>
            <span className="ml-2 text-sm text-gray-600">{noticia.autor}</span>
          </div>
          
          <div className="flex items-center gap-3 text-gray-500 text-xs">
            <div className="flex items-center">
              <Calendar size={14} className="mr-1 text-green-500" />
              <span>{noticia.fecha}</span>
            </div>
            <div className="flex items-center">
              <Clock size={14} className="mr-1 text-green-500" />
              <span>{noticia.tiempoLectura} min</span>
            </div>
          </div>
        </div>
        
        {/* Botón Leer */}
        <button 
          onClick={handleReadClick}
          className="mt-5 inline-flex items-center text-green-600 hover:text-green-800 font-medium text-sm transition-colors duration-300"
        >
          <BookOpen size={16} className="mr-1" />
          Leer más
        </button>
      </div>
    </div>
  );
};

export default NoticiaCard;