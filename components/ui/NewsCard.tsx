import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface CardProps {
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  badge?: {
    text: string;
    className?: string;
  };
  date?: string;
  title: string;
  description?: string;
  href: string;
  author?: {
    name: string;
    image?: string;
  };
  className?: string;
  index?: number;
}

const NewsCard = ({
  image,
  badge,
  date,
  title,
  description,
  href,
  author,
  className = '',
  index = 0
}: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1]
      }}
      className={`group relative bg-white overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full ${className}`}
    >
      {badge && (
        <div className="absolute top-4 right-4 z-10">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-600/90 text-white backdrop-blur-sm ${badge.className}`}>
            {badge.text}
          </span>
        </div>
      )}
      
      {image && (
        <Link href={href} className="block overflow-hidden h-56">
          <div className="h-full w-full overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width || 400}
              height={image.height || 300}
              className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </Link>
      )}
      
      <div className="p-6 flex-grow flex flex-col">
        {date && (
          <div className="flex items-center gap-2 text-emerald-600 text-sm mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{date}</span>
          </div>
        )}
        
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors">
          <Link href={href}>
            {title}
          </Link>
        </h3>
        
        {description && (
          <p className="text-gray-600 line-clamp-3 mb-4 flex-grow">
            {description}
          </p>
        )}
        
        {author && (
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-3">
              <Image 
                src={author.image || "https://via.placeholder.com/40"}
                alt={author.name}
                width={40}
                height={40}
                className="h-8 w-8 rounded-full object-cover border-2 border-white shadow-sm" 
              />
              <span className="text-sm text-black font-medium">{author.name}</span>
            </div>
          </div>
        )}
      </div>
      
      <div className="px-6 pb-6">
        <Link 
          href={href}
          className="block w-full text-center py-3 bg-gray-50 hover:bg-emerald-50 border border-gray-200 hover:border-emerald-200 rounded-lg text-emerald-600 text-sm font-medium transition-all duration-300"
        >
          Leer más
        </Link>
      </div>
    </motion.div>
  );
};

export default NewsCard;