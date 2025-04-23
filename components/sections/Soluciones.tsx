import React, { useEffect } from 'react';

interface SolucionesProps {
  soluciones: Array<{
    image: string;
    title: string;
    description: string;
    link: string;
  }>;
}

const SolucionesSection: React.FC<SolucionesProps> = ({ soluciones }) => {
  useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = styles;
    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return (
    <section id="soluciones" className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
            Soluciones
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Nuestros Productos Destacados
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Explora nuestra selección de productos diseñados para optimizar tu producción
            agropecuaria.
          </p>
        </div>

        <div className="mt-10">
          <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8">
            {soluciones.slice(0, 4).map((solucion, index) => (
              <a key={index} href={solucion.link} className="group relative block bg-black rounded-lg overflow-hidden">
                <img
                  alt={solucion.title}
                  src={solucion.image}
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">Producto</p>

                  <p className="text-xl font-bold text-white sm:text-2xl">{solucion.title}</p>

                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div
                      className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      <p className="text-sm text-white">
                        {solucion.description}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 lg:text-center">
          <a
            href="/productos"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
          >
            Ver Todos los Productos
          </a>
        </div>
      </div>
    </section>
  );
};

const styles = `
  /* Elimina los estilos anteriores */
`;

export default SolucionesSection;