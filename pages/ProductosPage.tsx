import React from 'react';
import Link from 'next/link';
import Marcas from '@/components/sections/Marcas';
import WhatsappContacts from '@/components/layout/WhatsappContacts';

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
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {categorias.map((cat, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition duration-300 flex flex-col overflow-hidden"
                        >
                            <Link href={cat.link}>
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="h-48 w-full object-cover"
                                />
                            </Link>

                            <div className="p-4 flex flex-col flex-grow">
                                <h3 className="text-lg font-semibold text-gray-800 hover:text-green-600 transition-colors">
                                    <Link href={cat.link}>{cat.name}</Link>
                                </h3>
                                <p className="text-sm text-gray-600 mb-3">
                                    Explora más sobre esta categoría.
                                </p>
                                <ul className="text-sm text-gray-700 space-y-1 flex-grow">
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">•</span>
                                        <span>Productos de alta calidad</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">•</span>
                                        <span>Variedad de opciones</span>
                                    </li>
                                </ul>
                                <Link
                                    href={cat.link}
                                    className="mt-4 text-lime-400 text-sm font-medium hover:underline"
                                >
                                    Ver categoría
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div><Marcas />
        <WhatsappContacts
        contacts={[
          {
            name: "Juan Pérez",
            profileImage: "/images/perfil1.png",
            whatsappLink: "https://wa.me/1234567890",
          },
          {
            name: "María López",
            profileImage: "/images/perfil1.png",
            whatsappLink: "https://wa.me/0987654321",
          },
        ]}
      
      
      />
        </>
        
    );
};

export default ProductosPage;
