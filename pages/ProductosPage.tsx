import React from 'react';
import Link from 'next/link';
import Marcas from '@/components/sections/Marcas';
import WhatsappContacts from '@/components/layout/WhatsappContacts';
import { motion } from 'framer-motion';

const categorias = [
    {
        name: 'Horticultura',
        image: '/images/productos/horticultura/hilo1.jpg',
        link: '/productos/horticultura'
    },
    {
        name: 'Ensilaje',
        image: '/images/productos/ensilaje/hilos.jpg',
        link: '/productos/ensilaje'
    },
    {
        name: 'Agropecuaria',
        image: '/images/productos/agropecuaria/geomembrana.jpeg',
        link: '/productos/agropecuaria'
    },
    {
        name: 'Tanques',
        image: '/images/productos/tanques/tanque-1500lt.jpg',
        link: '/productos/tanques'
    },
    {
        name: 'Envases',
        image: '/images/productos/envases/envase2.jpg',
        link: '/productos/envases'
    },
    {
        name: 'Inoculantes',
        image: '/images/productos/inoculantes/SupraSil_portada.jpg',
        link: '/productos/inoculantes'
    },
    {
        name: 'Otros Productos',
        image: '/images/productos/otros/costuradoras/cost1.png',
        link: '/productos/otros-productos'
    },
];

const ProductosPage = () => {
    return (
        <>
            <div id="ProductosPage" className="min-h-screen bg-gradient-to-b from-green-50 to-gray-50">
                {/* Hero Section Mejorado con imagen y divisoria estilizada - tamaño reducido */}
                <div className="relative min-h-[52vh] bg-gradient-to-br from-green-900/70 via-green-800/60 to-green-700/50 overflow-hidden">
                    {/* Imagen de fondo con mejor visibilidad */}
                    <div 
                        className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-100"
                        style={{
                            backgroundImage: "url('/images/hero/productpagehero.jpg')",
                        }}
                    >
                    </div>
                    
                    {/* Overlay gradient para mejorar legibilidad sin tapar la foto */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent pointer-events-none"></div>
                    
                    {/* Contenido del Hero */}
                    <div className="relative z-10 pt-28 pb-12 px-6 sm:px-12 lg:px-18 max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center"
                        >
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
                                Soluciones agrícolas hechas para el productor.
                            </h1>
                            <p className="mt-4 text-base md:text-lg text-white max-w-2xl drop-shadow mx-auto">
                                Soluciones de calidad para la agricultura moderna, diseñadas para maximizar tu productividad y eficiencia.
                            </p>
                        </motion.div>
                    </div>
                    {/* Divisoria estilizada con forma orgánica que deja ver parte de la imagen */}
                    <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
                        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[10vw] min-h-[60px] max-h-[120px]">
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

                {/* Sección de destacados flotante que se superpone entre hero y categorías */}
                <div className="relative z-10 max-w-6xl mx-auto px-4 -mt-16 mb-12">
                    <div className="bg-white rounded-2xl shadow-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'Productos Destacados', icon: '🌱', description: 'Soluciones innovadoras para agricultura de precisión' },
                            { title: 'Envíos Nacionales', icon: '🚚', description: 'Entrega rápida a todo el país y soporte constante' },
                            { title: 'Asesoría Técnica', icon: '👨‍🌾', description: 'Expertos disponibles para resolver todas tus dudas' }
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

                {/* Grid de Categorías */}
                <div id="categorias" className="max-w-7xl mx-auto pt-8 pb-16 px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {categorias.map((cat, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl overflow-hidden group hover:ring-2 hover:ring-green-400 transition-all duration-300 flex flex-col shadow-md hover:shadow-xl"
                            >
                                <div className="relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <img
                                        src={cat.image}
                                        alt={cat.name}
                                        className="h-56 w-full object-cover group-hover:scale-105 transition duration-500"
                                    />
                                    <div className="absolute top-3 right-3 z-10">
                                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                            {cat.name}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-5 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors">
                                        {cat.name}
                                    </h3>
                                    
                                    <div className="mt-3 flex-grow">
                                        <div className="flex items-center mb-2">
                                            <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                                            <p className="text-sm text-gray-600">Productos certificados</p>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                                            <p className="text-sm text-gray-600">Información detallada</p>
                                        </div>
                                    </div>
                                    
                                    <Link
                                        href={cat.link}
                                        className="mt-5 w-full inline-flex justify-center items-center py-2.5 px-4 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:ring-green-300 transition-all duration-300"
                                    >
                                        Explorar
                                        <svg className="ml-2 w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            <Marcas />
            <WhatsappContacts
                
            />
        </>
    );
};

export default ProductosPage;
