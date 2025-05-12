'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Marcas from '@/components/sections/Marcas';
import NoticeSlider from '@/components/sections/NoticeSlider';
import WhatsappContacts from '@/components/layout/WhatsappContacts';

interface ProductType {
  _id: string;
  name: string;
  image: string;
  description: string;
  category: string;
}

const ProductoDetalle = () => {
  const router = useRouter();
  const { categoria, producto } = router.query;
  const [datos, setDatos] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducto = async () => {
      if (!categoria || typeof categoria !== 'string' || !producto || typeof producto !== 'string') return;

      setLoading(true);
      setError(null);
      setDatos(null);

      try {
        const response = await fetch(`/api/products/${encodeURIComponent(categoria.toLowerCase())}/${encodeURIComponent(producto.toLowerCase())}`);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData?.error || `Error al cargar el producto: ${response.status}`);
        }
        const data = await response.json();
        // La API ahora debería devolver un solo objeto de producto en data.data
        if (data.success && data.data) {
          setDatos(data.data);
        } else {
          setError('Producto no encontrado.');
        }
      } catch (err: any) {
        console.error('Error al obtener el producto:', err);
        setError('Error al cargar el producto.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducto();
  }, [categoria, producto]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <p className="text-2xl text-gray-600">Cargando detalles del producto...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <p className="text-2xl text-red-600">{error}</p>
      </div>
    );
  }

  if (!datos) {
    return null;
  }
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div
          className="relative text-white py-24 px-6 sm:px-12 lg:px-32 text-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${datos.image})`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10">
            <h1 className="text-5xl font-extrabold leading-tight">{datos.name}</h1>
            <p className="mt-6 text-xl max-w-3xl mx-auto">{datos.description}</p>
          </div>
        </div>

        {/* Nueva sección adaptada */}
        <section className="overflow-hidden bg-white py-8 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-emerald-600">
                    Calidad garantizada
                  </h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    {datos.name}
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    {datos.description}
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="absolute left-1 top-1 h-5 w-5 text-emerald-600"
                        >
                          <path d="M3.196 12.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 12.87z" />
                          <path d="M3.196 8.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 8.87z" />
                          <path d="M10.38 1.103a.75.75 0 00-.76 0l-7.25 4.25a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.76 0l7.25-4.25a.75.75 0 000-1.294l-7.25-4.25z" />
                        </svg>
                        Material resistente
                      </dt>
                      <dd className="inline">Fabricado con materiales de alta durabilidad para resistir condiciones exigentes.</dd>
                    </div>

                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="absolute left-1 top-1 h-5 w-5 text-emerald-600"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Uso versátil
                      </dt>
                      <dd className="inline">Ideal para múltiples aplicaciones agrícolas, desde siembra hasta recolección.</dd>
                    </div>

                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="absolute left-1 top-1 h-5 w-5 text-emerald-600"
                        >
                          <path
                            fillRule="evenodd"
                            d="M14.5 10a4.5 4.5 0 004.284-5.882c-.105-.324-.51-.391-.752-.15L15.34 6.66a.454.454 0 01-.493.11 3.01 3.01 0 01-1.618-1.616.455.455 0 01.11-.494l2.694-2.692c.24-.241.174-.647-.15-.752a4.5 4.5 0 00-5.873 4.575c.055.873-.128 1.808-.8 2.368l-7.23 6.024a2.724 2.724 0 103.837 3.837l6.024-7.23c.56-.672 1.495-.855 2.368-.8.096.007.193.01.291.01zM5 16a1 1 0 11-2 0 1 1 0 012 0z"
                            clipRule="evenodd"
                          />
                          <path d="M14.5 11.5c.173 0 .345-.007.514-.022l3.754 3.754a2.5 2.5 0 01-3.536 3.536l-4.41-4.41 2.172-2.607c.052-.063.147-.138.342-.196.202-.06.469-.087.777-.067.128.008.257.012.387.012zM6 4.586l2.33 2.33a.452.452 0 01-.08.09L6.8 8.214 4.586 6H3.309a.5.5 0 01-.447-.276l-1.7-3.402a.5.5 0 01.093-.577l.49-.49a.5.5 0 01.577-.094l3.402 1.7A.5.5 0 016 3.31v1.277z" />
                        </svg>
                        Fácil de usar
                      </dt>
                      <dd className="inline">Su diseño intuitivo permite un uso sencillo, incluso para usuarios sin experiencia técnica.</dd>
                    </div>
                  </dl>

                  <div className="mt-10">
                    <a
                      href={`/fichas/${datos.slug}.pdf`} // Generar enlace dinámico a la ficha
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-md bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
                    >
                      Descargar ficha técnica
                    </a>
                  </div>
                </div>
              </div>

              <Image
                src={datos.image}
                alt={`Imagen de ${datos.name}`}
                width={720} // Ajusta según tus necesidades
                height={480} // Ajusta según tus necesidades
                className="w-full h-96 object-cover rounded-xl shadow-xl ring-1 ring-gray-400/10"
              />
            </div>
          </div>
        </section>

        {/* Espacio para más información futura */}
        <div className="max-w-5xl mx-auto py-16 px-6 sm:px-12 lg:px-20">
          {/* Puedes añadir aquí fichas técnicas, beneficios, o enlaces de contacto específicos */}
        </div>
      </div>

      <Marcas />

      <NoticeSlider
        notices={[
          {
            id: 1,
            text: 'Contáctanos por WhatsApp',
          },
        ]}
      />
      <WhatsappContacts
        contacts={[
          {
            name: 'Juan Pérez',
            profileImage: '/images/perfil1.png',
            whatsappLink: 'https://wa.me/1234567890',
          },
          {
            name: 'María López',
            profileImage: '/images/perfil1.png',
            whatsappLink: 'https://wa.me/0987654321',
          },
        ]}
      />
    </>
  );
};

export default ProductoDetalle;