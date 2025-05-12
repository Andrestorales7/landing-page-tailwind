import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Marcas from '@/components/sections/Marcas';
import WhatsappContacts from '@/components/layout/WhatsappContacts';

interface Category {
  _id: string;
  name: string;
  image: string;
  // Puedes agregar más propiedades si tu modelo de categoría tiene más campos
}

const productos = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch('/api/categories');
        if (!response.ok) {
          throw new Error(`Error al obtener categorías: ${response.status}`);
        }
        const data = await response.json();
        setCategories(data.data); // Asumiendo que tu API devuelve { success: true, data: [...] }
      } catch (err: any) {
        console.error('Error al obtener categorías:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <p className="text-center py-8">Cargando categorías...</p>;
  }

  if (error) {
    return <p className="text-center py-8 text-red-500">Error al cargar las categorías: {error}</p>;
  }

  return (
    <>
      <div id="productos" className="min-h-screen bg-gray-50">
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
            {categories.map((cat) => (
              <div
                key={cat._id}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition duration-300 flex flex-col overflow-hidden"
              >
                <Link href={`/productos/${encodeURIComponent(cat.name.toLowerCase())}`}> {/* Modifica el link según tu estructura */}
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="h-48 w-full object-cover"
                  />
                </Link>

                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800 hover:text-green-600 transition-colors">
                    <Link href={`/productos/${encodeURIComponent(cat.name.toLowerCase())}`}>{cat.name}</Link>
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
                    href={`/productos/${encodeURIComponent(cat.name.toLowerCase())}`}
                    className="mt-4 text-lime-400 text-sm font-medium hover:underline"
                  >
                    Ver categoría
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Marcas />
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

export default productos;