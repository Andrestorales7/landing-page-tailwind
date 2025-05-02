import React from 'react';
import Link from 'next/link';
import Marcas from '@/components/sections/Marcas';

const categorias = [
    {
        name: 'Horticultura',
        image: '/images/horticultura/hilos-tutorado/hilo1.jpg',
        link: '/productos/horticultura'
    },
    {
        name: 'Ensilaje',
        image: '/images/Almacenamiento-Ensilaje-etc/comederos/comedero2.jpg',
        link: '/productos/ensilaje'
    },
    {
        name: 'Agropecuaria',
        image: '/images/Agropecuaria/agropecuaria.png',
        link: '/productos/agropecuaria'
    },
    {
        name: 'Envases',
        image: '/images/Envases/big-bags/big-bags-3.png',
        link: '/productos/envases'
    },
    {
        name: 'Maquinas Cerradoras',
        image: '/images/cerradora/cerradora-bolsas.png',
        link: '/productos/maquinas-cerradoras'
    },
    {
        name: 'Geomembranas',
        image: '/images/Almacenamiento-Ensilaje-etc/geomembranas/geomembrana1.jpg',
        link: '/productos/geomembranas'
    },
    {
        name: 'Tesa',
        image: '/images/tesa/tesa2.jpg',
        link: '/productos/tesa'
    },
];

const ProductosPage = () => {
    return (
        <><div id="ProductosPage" className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div
                className="relative text-white py-24 px-6 sm:px-12 lg:px-32 text-center bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1708796705570-33fd29ef67d0?q=80&w=2070&auto=format&fit=crop')",
                }}
            >
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10">
                    <h1 className="text-5xl font-extrabold leading-tight">Nuestros Productos</h1>
                    <p className="mt-6 text-xl max-w-3xl mx-auto">
                        Explora nuestras líneas de productos organizadas por categoría.
                    </p>
                </div>
            </div>

            {/* Grid de Categorías */}
            <div className="max-w-7xl mx-auto py-16 px-6 sm:px-12 lg:px-20">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {categorias.map((cat, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/5 border border-green-600/30 rounded-2xl p-5 shadow-md hover:shadow-2xl backdrop-blur-md transition-all duration-500 ease-in-out transform hover:scale-[1.03] flex flex-col h-full"
                        >
                            <div className="h-48 rounded-xl overflow-hidden relative">
                                <Link href={cat.link}>
                                    <img
                                        src={cat.image}
                                        alt={cat.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                                </Link>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mt-4 group-hover:text-green-600 transition-colors">
                                <Link href={cat.link} className="hover:text-lime-400 transition-colors">
                                    {cat.name}
                                </Link>
                            </h3>
                            <div className="mt-4">
                                <Link
                                    href={cat.link}
                                    className="text-lime-400 text-sm font-medium hover:underline"
                                >
                                    Ver categoría
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div><Marcas /></>
    );
};

export default ProductosPage;
