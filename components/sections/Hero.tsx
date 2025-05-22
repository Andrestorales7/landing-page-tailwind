import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    "https://images.unsplash.com/photo-1717702576954-c07131c54169?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1515276427842-f85802d514a2?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1581615760599-bbfa598a0b88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const Hero: React.FC = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="Hero" className="relative w-full h-screen flex items-center overflow-hidden">
            {/* Slide Images */}
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
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{
                                backgroundImage: `url('${images[current]}')`,
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
            
            {/* Content container */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
                <motion.div 
                    className="max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Logo row */}
                    <div className="flex items-center mb-6">
                        <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                            <span className="text-red-600">C</span>
                            <span className="text-white">M</span>
                            <span className="text-blue-600">P</span>
                        </span>
                        <span className="ml-3 text-2xl sm:text-3xl md:text-4xl font-bold text-white border-l-2 border-white/30 pl-3">
                            Agro
                        </span>
                    </div>
                    
                    {/* Main headline */}
                    <motion.h1 
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <span className="text-green-500">Soluciones Tecnologicas</span> Inteligentes para el Agro-negocio de hoy
                    </motion.h1>
                    
                    {/* Description */}
                    <motion.p 
                        className="text-lg sm:text-xl text-white/90 mb-8 max-w-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        Más de 25 años siendo aliados del trabajador del campo.  Productos que potencian la producción de miles de productores del país.

                    </motion.p>
                    
                    {/* Quote with decorative elements */}
                    <motion.div 
                        className="relative pl-4 border-l-4 border-green-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                    >
                        <p className="text-white italic font-medium">
                            "Representante de las mayores marcas internacionales."
                        </p>
                    </motion.div>
                </motion.div>
            </div>
            
            {/* Slide indicators */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`block w-4 h-1 rounded-full transition-all duration-300 focus:outline-none ${current === idx ? 'bg-white/90' : 'bg-white/40'}`}
                        aria-label={`Ir a la imagen ${idx + 1}`}
                        tabIndex={0}
                    />
                ))}
            </div>
            {/* Scroll indicator eliminado */}
        </section>
    );
};

export default Hero;
