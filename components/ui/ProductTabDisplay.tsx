'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Define types for product information
export type ProductTab = {
  id: string;
  label: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string[];
  technicalSheetUrl: string;
};

interface ProductTabDisplayProps {
  products: ProductTab[];
  initialTab?: string;
  accentColor?: string;
}

const ProductTabDisplay: React.FC<ProductTabDisplayProps> = ({ 
  products, 
  initialTab,
  accentColor = 'green'
}) => {
  const [activeTab, setActiveTab] = useState(initialTab || (products[0]?.id || ''));

  return (
    <>
      {/* Tab buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-8 px-4">
        {products.map((product) => (
          <button
            key={product.id}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              activeTab === product.id
                ? `bg-${accentColor}-800 text-white shadow-lg`
                : `bg-white text-${accentColor}-800 border border-${accentColor}-800`
            }`}
            onClick={() => setActiveTab(product.id)}
          >
            {product.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="max-w-5xl mx-auto px-4 py-16 min-h-[320px]">
        {products.map((product) => (
          activeTab === product.id && (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div>
                <h2 className={`text-2xl font-bold text-${accentColor}-900 mb-4`}>{product.title}</h2>
                <div className="flex flex-col md:flex-row items-center md:items-start min-h-[320px]">
                  {/* Product image */}
                  <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
                    <div className="relative w-full max-w-lg mb-4">
                      <Image
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        width={600}
                        height={400}
                        className="rounded-2xl shadow-2xl w-full object-cover"
                        priority={activeTab === products[0].id}
                      />
                    </div>
                  </div>
                  {/* Product description */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center md:pl-8 mt-4 md:mt-0">
                    <h3 className={`text-xl font-semibold text-${accentColor}-800 mb-2`}>Descripción del Producto</h3>
                    {product.description.map((paragraph, index) => (
                      <p key={index} className="text-gray-700 text-base mb-4">
                        {paragraph}
                      </p>
                    ))}
                    
                    {/* Technical sheet download button */}
                    {product.technicalSheetUrl && (
                      <a 
                        href={product.technicalSheetUrl}
                        download
                        className={`mt-8 flex items-center justify-center px-4 py-2 bg-${accentColor}-700 hover:bg-${accentColor}-800 text-white font-medium rounded-md transition-colors duration-300 w-full sm:w-auto shadow-md`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Descargar Ficha Técnica
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )
        ))}
      </div>
    </>
  );
};

export default ProductTabDisplay;