'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Marcas from '@/components/sections/Marcas';
import NoticeSlider from '@/components/sections/NoticeSlider';
import WhatsappContacts from '@/components/layout/WhatsappContacts';

interface ProductType {
  _id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
}

const CategoriaProductosPage = () => {
  const router = useRouter();
  const { categoria } = router.query;
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [categoryName, setCategoryName] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      if (!categoria) return;

      setLoading(true);
      setError(null);
      setProducts([]);
      setCategoryName(null);

      try {
        const response = await fetch(`/api/products/${encodeURIComponent(categoria as string)}`);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData?.error || `Error al cargar productos de la categoría: ${response.status}`);
        }
        const data = await response.json();

        const adaptedProducts: ProductType[] = data.data.map(product => ({
          _id: product._id,
          name: product.name,
          slug: product.name.toLowerCase().replace(/ /g, '-'),
          image: product.image,
          description: product.description,
        }));
        setProducts(adaptedProducts);
        setCategoryName(categoria as string); // Usar el nombre de la categoría de la URL
      } catch (err: any) {
        console.error('Error al obtener productos:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoria]);

  if (loading) {
    return <p className="text-center py-8">Cargando productos...</p>;
  }

  if (error) {
    return <p className="text-center py-8 text-red-500">Error al cargar los productos: {error}</p>;
  }

  if (!categoryName) {
    return <p className="text-center py-8">Cargando nombre de la categoría...</p>;
  }

  return (
    <>
      <div id={categoryName?.toLowerCase()} className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div
          className="relative text-white py-24 px-6 sm:px-12 lg:px-32 text-center bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1708796705570-33fd29ef67d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10">
            <h1 className="text-5xl font-extrabold leading-tight">Productos de {categoryName}</h1>
            <p className="mt-6 text-xl max-w-3xl mx-auto">
              Descubre nuestra amplia gama de productos diseñados para la categoría de {categoryName}.
            </p>
          </div>
        </div>

        {/* Product List */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition duration-300 flex flex-col overflow-hidden"
              >
                <Link href={`/productos/${categoryName?.toLowerCase()}/${product.slug}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-48 w-full object-cover"
                  />
                </Link>

                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800 hover:text-green-600 transition-colors">
                    <Link href={`/productos/${categoryName?.toLowerCase()}/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {product.description}
                  </p>
                  <div className="mt-4">
                    <Link
                      href={`/productos/${categoryName?.toLowerCase()}/${product.slug}`}
                      className="block text-center text-lime-500 text-sm font-medium hover:underline bg-gray-100 px-3 py-2 rounded transition-colors hover:bg-gray-200"
                    >
                      Ver producto
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            {products.length === 0 && <p className="col-span-full text-center py-8">No hay productos en esta categoría.</p>}
          </div>
        </div>
      </div>

      {/* Secciones adicionales */}
      <Marcas />
      <NoticeSlider notices={[{ id: 1, text: 'Contáctanos por WhatsApp' }]} />
      <WhatsappContacts contacts={[{ name: 'Juan Pérez', profileImage: '/images/perfil1.png', whatsappLink: 'https://wa.me/1234567890' }, { name: 'María López', profileImage: '/images/perfil1.png', whatsappLink: 'https://wa.me/0987654321' }]} />
    </>
  );
};

export default CategoriaProductosPage;