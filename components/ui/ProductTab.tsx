'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Define types for product information
export type ProductTabItem = {
  id: string;
  label: string;
  title: string;
  imageSrc: string | string[];  // Now accepts a single string or array of strings
  imageAlt: string | string[];  // Now accepts a single string or array of strings
  description: string[];  // Array of HTML strings for rich content
  technicalSheetUrl?: string;
};

interface ProductTabProps {
  products: ProductTabItem[];
  initialTab?: string;
  accentColor?: string;
}

const ProductTab: React.FC<ProductTabProps> = ({ 
  products, 
  initialTab,
  accentColor = 'green'
}) => {
  const [activeTab, setActiveTab] = useState(initialTab || (products[0]?.id || ''));
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Tab navigation - simplified design */}
      <div className="flex justify-start overflow-x-auto gap-3 py-4">
        {products.map((product) => (
          <button
            key={product.id}
            className={`whitespace-nowrap px-4 py-2 font-medium transition-all rounded-md ${
              activeTab === product.id
                ? `bg-${accentColor}-600 text-white shadow-sm`
                : `text-gray-700 hover:text-${accentColor}-700 hover:bg-${accentColor}-50 border border-gray-200`
            }`}
            onClick={() => setActiveTab(product.id)}
            aria-selected={activeTab === product.id}
            role="tab"
          >
            {product.label}
          </button>
        ))}
      </div>

      {/* Tab content - simplified layout */}
      <div className="py-8">
        {products.map((product) => (
          activeTab === product.id && (
            <motion.div
              key={product.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              role="tabpanel"
            >
              <h2 className={`text-2xl font-semibold text-${accentColor}-900 mb-6`}>{product.title}</h2>
              
              {/* Product image grid */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(Array.isArray(product.imageSrc) ? product.imageSrc : [product.imageSrc]).map((src, index) => (
                    <div 
                      key={index}
                      className={`relative aspect-square bg-gray-50 cursor-pointer rounded-lg overflow-hidden ${
                        Array.isArray(product.imageSrc) && product.imageSrc.length === 1 ? 'md:col-span-2' : ''
                      }`}
                      onClick={() => handleImageClick(src)}
                    >
                      <Image
                        src={src}
                        alt={Array.isArray(product.imageAlt) ? product.imageAlt[index] || '' : product.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain p-4 transition-transform duration-300 hover:scale-[1.02]"
                        priority={activeTab === products[0].id && index === 0}
                      />
                    </div>
                  ))}
                </div>

                {/* Technical sheet button - simplified */}
                {product.technicalSheetUrl && (
                  <a 
                    href={product.technicalSheetUrl}
                    download
                    className={`inline-flex items-center text-${accentColor}-600 hover:text-${accentColor}-700`}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 mr-2" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Ficha Técnica
                  </a>
                )}

                {/* Description content */}
                <div className="rich-content-wrapper prose max-w-none">
                  {product.description.map((content, index) => (
                    <div 
                      key={index}
                      dangerouslySetInnerHTML={{ __html: content }}
                      className="mb-4 last:mb-0"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )
        ))}
      </div>
      
      {/* Simplified table styles */}
      <style jsx global>{`
        .rich-content-wrapper table {
          width: 100%;
          border-collapse: collapse;
          margin: 1rem 0;
        }
        
        .rich-content-wrapper th {
          background-color: var(--accent-color, #166534);
          color: white;
          text-align: left;
          padding: 0.75rem;
          font-weight: 500;
        }
        
        .rich-content-wrapper td {
          padding: 0.75rem;
          border-bottom: 1px solid #e5e7eb;
        }
        
        .rich-content-wrapper tr:last-child td {
          border-bottom: none;
        }
      `}</style>

      {/* Simplified modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 p-4 flex items-center justify-center"
          onClick={handleCloseModal}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white"
            onClick={handleCloseModal}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <Image
            src={selectedImage}
            alt="Vista ampliada"
            className="max-h-[90vh] w-auto object-contain"
            width={1920}
            height={1080}
            priority
            quality={100}
          />
        </div>
      )}
    </div>
  );
};

export default ProductTab;