import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface ProductCardProps {
  name: string;
  slug: string;
  image: string;
  description: string;
  details?: string[];
  logo?: string;
  category?: string;
  baseUrl: string;
  index?: number;
}

const ProductCard: FC<ProductCardProps> = ({
  name,
  slug,
  image,
  description,
  details,
  logo,
  baseUrl,
  index = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative h-52 overflow-hidden rounded-t-xl">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={index === 0}
        />
        {logo && (
          <div className="absolute top-3 right-3">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow">
              <Image
                src={logo}
                alt={`${name} logo`}
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-grow p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-green-700 transition-colors">
          {name}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {description}
        </p>

        {details && details.length > 0 && (
          <ul className="mb-4 space-y-1">
            {details.map((detail, idx) => (
              <li key={idx} className="flex items-start text-sm text-gray-700">
                <svg
                  className="w-4 h-4 text-green-500 mt-0.5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414L9 14.414 5.293 10.707a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span
                  dangerouslySetInnerHTML={{ __html: detail }}
                  className="leading-snug"
                />
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-3">
          <Link
            href={`${baseUrl}/${slug}`}
            className="inline-flex items-center justify-center w-full rounded-md bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-3 transition-colors"
          >
            Ver detalles
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
