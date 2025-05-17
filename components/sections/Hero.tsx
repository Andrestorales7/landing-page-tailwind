import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <section id="Hero" className="relative w-full h-screen flex items-center">
            {/* Background with gradient overlay for better text visibility */}
            <div 
                className="absolute inset-0 z-0 bg-cover bg-center" 
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
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
                        <span className="text-green-500">Cultivando Soluciones</span> para un Futuro Sostenible
                    </motion.h1>
                    
                    {/* Description */}
                    <motion.p 
                        className="text-lg sm:text-xl text-white/90 mb-8 max-w-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        Desde la agricultura de precisión hasta innovaciones ecológicas, explore cómo transformamos el futuro del campo.
                    </motion.p>
                    
                    {/* Quote with decorative elements */}
                    <motion.div 
                        className="relative pl-4 border-l-4 border-green-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                    >
                        <p className="text-white italic font-medium">
                            "Sembramos innovación, cosechamos sostenibilidad."
                        </p>
                    </motion.div>
                </motion.div>
            </div>
            
            {/* Scroll indicator */}
            <motion.div 
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                animate={{ 
                    y: [0, 10, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 2
                }}
            >
                
                {/* Arrow icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5L12 19M12 19L18 13M12 19L6 13" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </motion.div>
        </section>
    );
};

export default Hero;
