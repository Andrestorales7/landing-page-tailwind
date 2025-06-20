import React, { useState } from 'react';
import Link from 'next/link';
import Marcas from '@/components/sections/Marcas';
import WhatsappContacts from '@/components/layout/WhatsappContacts';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SEO from '@/components/SEO';

// Datos enriquecidos de categorías con productos destacados
const categorias = [
    {
        name: 'Horticultura',
        image: '/images/productos/horticultura/hilo1.jpg',
        link: '/productos/horticultura',
        productos: [
            { nombre: 'Media sombra', imagen: '/images/productos/horticultura/media-sombra1.jpeg' },
            { nombre: 'Mulching', imagen: '/images/productos/horticultura/mulching1.jpg' },
            { nombre: 'Películas para Invernaderos', imagen: '/images/productos/horticultura/pelicula-invernadero.jpg' }
        ],
        showMultipleProducts: true
    },
    {
        name: 'Ensilaje',
        image: '/images/productos/ensilaje/hilos.jpg',
        link: '/productos/ensilaje',
        productos: [
            { nombre: 'Film para fardos', imagen: '/images/productos/ensilaje/film-fardos.jpg' },
            { nombre: 'Hilos para fardos', imagen: '/images/productos/ensilaje/hilos.jpg' },
            { nombre: 'Mallas para fardos', imagen: '/images/productos/ensilaje/malla-fardos.png' }
        ],
        showMultipleProducts: true
    },
    {
        name: 'Agropecuaria',
        image: '/images/productos/agropecuaria/geomembrana.jpeg',
        link: '/productos/agropecuaria',
        productos: [
            { nombre: 'CTA Aluminet', imagen: '/images/productos/agropecuaria/cta2.jpg' },
            { nombre: 'Tejido Aviar', imagen: '/images/productos/agropecuaria/tejido-aviar.jpg' },
            { nombre: 'Comederos', imagen: '/images/productos/agropecuaria/comedero.jpg' }
        ],
        showMultipleProducts: true
    },
    {
        name: 'Tanques',
        image: '/images/productos/tanques/tanque-1500lt.jpg',
        link: '/productos/tanques',
        showMultipleProducts: false
    },
    {
        name: 'Envases',
        image: '/images/productos/envases/envase2.jpg',
        link: '/productos/envases',
        productos: [
            { nombre: 'Bag in box', imagen: '/images/productos/envases/baginbox.jpg' },
            { nombre: 'IBC', imagen: '/images/productos/envases/ibc2.webp' },
            { nombre: 'Flexitank', imagen: '/images/productos/envases/flexi-tank3.png' }
        ],
        showMultipleProducts: true
    },
    {
        name: 'Inoculantes',
        image: '/images/productos/inoculantes/SupraSil_portada.jpg',
        link: '/productos/inoculantes',
        showMultipleProducts: false
    },
    {
        name: 'Otros Productos',
        image: '/images/productos/otros/costuradoras/cost1.png',
        link: '/productos/otrosproductos',
        showMultipleProducts: false
    },
];

const ProductosPage = () => {
    // Estado para controlar qué imagen se muestra en cada tarjeta
    const [activeSlides, setActiveSlides] = useState<Record<number, number>>({});
    
    // Función para navegar al siguiente slide
    const nextSlide = (categoryIndex: number, totalSlides: number) => {
        setActiveSlides(prev => ({
            ...prev,
            [categoryIndex]: ((prev[categoryIndex] || 0) + 1) % totalSlides
        }));
    };
    
    // Función para navegar al slide anterior
    const prevSlide = (categoryIndex: number, totalSlides: number) => {
        setActiveSlides(prev => ({
            ...prev,
            [categoryIndex]: ((prev[categoryIndex] || 0) - 1 + totalSlides) % totalSlides
        }));
    };

    return (
        <>
            <SEO 
                title="Productos CMP Agro | Soluciones Agrícolas Completas"
                description="Descubre nuestra amplia gama de productos para horticultura, ensilaje, agropecuaria, tanques, envases e inoculantes. Soluciones agrícolas de calidad diseñadas para el productor paraguayo."
                url="https://www.cmpagro.com.py/productos"
                image="/images/hero/productpagehero.webp"
            />
            <div id="ProductosPage" className="min-h-screen bg-gradient-to-b from-green-50 to-gray-50">
                {/* Hero Section - código existente */}
                <div className="relative min-h-[52vh] bg-gradient-to-br from-green-900/70 via-green-800/60 to-green-700/50 overflow-hidden">
                    <div 
                        className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-100"
                        style={{
                            backgroundImage: "url('/images/hero/productpagehero.webp')",
                        }}
                    >
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent pointer-events-none"></div>
                    
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

                {/* Sección de destacados flotante - código existente */}
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

                {/* NUEVO DISEÑO: Grid de Categorías con slide */}
                <div id="categorias" className="max-w-7xl mx-auto pt-8 pb-16 px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                        {categorias.map((cat, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
                            >
                                {/* Encabezado de la categoría */}
                                <div className="relative bg-gradient-to-r from-green-700 to-green-600 p-5 text-white">
                                    <h3 className="text-xl font-bold">{cat.name}</h3>
                                    <div className="absolute -bottom-3 right-5 w-8 h-8 bg-green-500 rotate-45 transform"></div>
                                </div>
                                
                                {/* Contenido de la tarjeta */}
                                <div className="p-5 flex-grow">
                                    {cat.showMultipleProducts ? (
                                        <>
                                            {/* Carousel con flechas de navegación */}
                                            <div className="relative mb-6">
                                                <div className="rounded-xl overflow-hidden h-48">
                                                    <Image
                                                        src={cat.productos?.[activeSlides[index] || 0]?.imagen || cat.image}
                                                        alt={cat.productos?.[activeSlides[index] || 0]?.nombre || cat.name}
                                                        width={400}
                                                        height={300}
                                                        className="h-full w-full object-cover transition-opacity duration-300"
                                                    />
                                                    
                                                    {/* Título de la imagen actual */}
                                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                                                        <p className="text-white font-medium">
                                                            {cat.productos && cat.productos[activeSlides[index] || 0]?.nombre}
                                                        </p>
                                                    </div>
                                                </div>
                                                
                                                {/* Botones de navegación */}
                                                <button 
                                                    onClick={() => prevSlide(index, cat.productos?.length || 0)}
                                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all duration-200"
                                                    aria-label="Imagen anterior"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                                                    </svg>
                                                </button>
                                                
                                                <button 
                                                    onClick={() => nextSlide(index, cat.productos?.length || 0)}
                                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all duration-200"
                                                    aria-label="Siguiente imagen"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                    </svg>
                                                </button>
                                                
                                                {/* Indicadores de posición */}
                                                <div className="absolute -bottom-4 left-0 right-0 flex justify-center space-x-2">
                                                    {cat.productos?.map((_, idx) => (
                                                        <span 
                                                            key={idx} 
                                                            className={`block w-2 h-2 rounded-full ${
                                                                (activeSlides[index] || 0) === idx 
                                                                ? 'bg-green-600' 
                                                                : 'bg-gray-300'
                                                            }`}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                            
                                            {/* Lista de productos */}
                                            <div className="mt-6">
                                                <h4 className="font-semibold text-gray-800 mb-2">Productos destacados:</h4>
                                                <ul className="space-y-1.5">
                                                    {cat.productos?.map((producto, idx) => (
                                                        <li key={idx} className="flex items-center text-gray-700">
                                                            <svg className="w-4 h-4 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                                            </svg>
                                                            <span className="text-sm">{producto.nombre}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                
                                                <p className="text-sm text-gray-600 italic mt-2">Y más productos...</p>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            {/* Para categorías que no muestran múltiples productos */}
                                            <div className="overflow-hidden rounded-xl mb-4">
                                                <Image
                                                    src={cat.image}
                                                    alt={cat.name}
                                                    width={400}
                                                    height={240}
                                                    className="h-48 w-full object-cover hover:scale-105 transition duration-500"
                                                />
                                            </div>
                                            
                                            <p className="text-gray-600 mb-3">
                                                {cat.name === 'Tanques' && "Tanques de agua y otros líquidos en diferentes capacidades."}
                                                {cat.name === 'Inoculantes' && "Productos para mejorar la calidad y conservación del ensilaje."}
                                                {cat.name === 'Otros Productos' && "Herramientas, accesorios y soluciones complementarias."}
                                            </p>
                                            
                                            <div className="space-y-1 mb-3">
                                                <div className="flex items-center">
                                                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                                                    <p className="text-sm text-gray-600">Productos de alta calidad</p>
                                                </div>
                                                <div className="flex items-center">
                                                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                                                    <p className="text-sm text-gray-600">Marcas reconocidas</p>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                                
                                {/* Botón de explorar */}
                                <div className="mt-auto p-5 pt-0">
                                    <Link
                                        href={cat.link}
                                        className="w-full inline-flex justify-center items-center py-3 px-5 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:ring-green-300 transition-all duration-300"
                                    >
                                        Ver todos los productos
                                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            <Marcas />
            <WhatsappContacts />
        </>
    );
};

export default ProductosPage;
