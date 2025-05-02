import React from 'react';
import Link from 'next/link';
import Marcas from '@/components/sections/Marcas';
import NoticeSlider from '@/components/sections/NoticeSlider';

const HorticulturaProductPage = () => {
    const products = [
        { 
            name: 'Películas para Invernadero', 
            image: 'https://images.unsplash.com/photo-1637987327476-5c77df3cb16d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
            link: '/productos/horticultura/peliculas-para-invernadero' 
        },
        { 
            name: 'Media Sombra', 
            image: 'https://www.greataussiepatios.com.au/sites/greataussiepatioscomau/assets/public/Image/Patio-of-week-blogs/Nursery_with_Shade_Cloth_for_Shade.jpg', 
            link: '/productos/horticultura/media-sombra' 
        },
        { 
            name: 'Mulching', 
            image: '/images/horticultura/mulching/mulching1.jpeg', 
            link: '/productos/horticultura/mulching' 
        },
        { 
            name: 'Mantas para Cultivo', 
            image: '/images/horticultura/mantas-cultivo/mantas-cultivos1.jpg', 
            link: '/productos/horticultura/mantas-para-cultivo' 
        },
        { 
            name: 'Hilos para Tutorado', 
            image: '/images/horticultura/hilos-tutorado/hilo1.jpg', 
            link: '/productos/horticultura/hilos-para-tutorado' 
        },
        { 
            name: 'Mantas de Solarización', 
            image: '/images/horticultura/manta-solarizacion/manta2.jpg', 
            link: '/productos/horticultura/mantas-de-solarizacion' 
        },
    ];

    return (
        <>
            <div id="horticultura" className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <div
                    className="relative text-white py-24 px-6 sm:px-12 lg:px-32 text-center bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1708796705570-33fd29ef67d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="relative z-10">
                        <h1 className="text-5xl font-extrabold leading-tight">Productos de Horticultura</h1>
                        <p className="mt-6 text-xl max-w-3xl mx-auto">
                            Descubre nuestra amplia gama de productos diseñados para mejorar tus cultivos y optimizar tu producción agrícola.
                        </p>
                    </div>
                </div>

                {/* Product List */}
                <div className="max-w-7xl mx-auto py-16 px-6 sm:px-12 lg:px-20">
                    <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
                        {products.map((product, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-60 object-cover"
                                />
                                <div className="p-6 flex flex-col flex-grow">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex-grow">{product.name}</h2>
                                    <Link href={product.link} legacyBehavior>
                                        <a className="mt-auto inline-block bg-green-500 text-white font-medium text-center px-6 py-3 rounded-full hover:bg-green-600 transition-colors duration-300">
                                            Ver producto
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Marcas />
            <NoticeSlider 
                notices={[
                    { 
                        id: 1, // Added an id property
                        text: 'Contáctanos por WhatsApp', 
                        
                    }
                ]} 
            />
        </>
    );
};

export default HorticulturaProductPage;
