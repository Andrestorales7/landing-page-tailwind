import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface HeroSectionProps {
  images?: string[];
  title: React.ReactNode;
  description?: string;
  quote?: string;
  autoSlideInterval?: number;
  imageOverlayClass?: string;
  height?: string;
  children?: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  images = [],
  title,
  description,
  quote,
  autoSlideInterval = 4000,
  imageOverlayClass = "bg-gradient-to-r from-black/60 to-transparent",
  height = "h-screen",
  children
}) => {
  const [current, setCurrent] = useState(0);
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    if (!hasMultipleImages) return;
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, autoSlideInterval);
    
    return () => clearInterval(interval);
  }, [autoSlideInterval, images.length, hasMultipleImages]);

  return (
    <section className={`relative w-full ${height} flex items-center overflow-hidden`}>
      {/* Slide Images */}
      {images.length > 0 && (
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 w-full h-full"
            >
              <div className="w-full h-full relative">
                <Image
                  src={images[current]}
                  alt={`Background image ${current + 1}`}
                  fill
                  priority
                  className="object-cover"
                  sizes="100vw"
                />
                <div className={`absolute inset-0 ${imageOverlayClass}`}></div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
      
      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main headline */}
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {title}
          </motion.h1>
          
          {/* Description */}
          {description && (
            <motion.p 
              className="text-lg sm:text-xl text-white/90 mb-8 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {description}
            </motion.p>
          )}
          
          {/* Quote with decorative elements */}
          {quote && (
            <motion.div 
              className="relative pl-4 border-l-4 border-green-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <p className="text-white italic font-medium">
                {quote}
              </p>
            </motion.div>
          )}

          {/* Custom content */}
          {children}
        </motion.div>
      </div>
      
      {/* Slide indicators */}
      {hasMultipleImages && (
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`block w-4 h-1 rounded-full transition-all duration-300 focus:outline-none ${current === idx ? 'bg-white/90' : 'bg-white/40'}`}
              aria-label={`Go to image ${idx + 1}`}
              tabIndex={0}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default HeroSection;