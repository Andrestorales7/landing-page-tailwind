import React from 'react';

// Definimos la interfaz para las propiedades
interface AboutUsProps {
  image1: string;
  image2: string;
}

// Componente funcional que acepta las propiedades
const AboutUs: React.FC<AboutUsProps> = ({ image1, image2 }) => {
  return (
    <section id="Nosotros" className="relative bg-white py-16 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Contenido */}
        <div className="text-center lg:text-left">
          <h2 className="text-4xl font-extrabold text-green-700 mb-6">
            Bienvenidos a CMP AGRO
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            En CMP AGRO, nos dedicamos a seleccionar las mejores marcas internacionales para ofrecer un portafolio de productos de alta calidad. Nuestro compromiso es brindar soluciones innovadoras y tecnológicas que impulsen el desarrollo del agronegocio en Paraguay.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Con un equipo técnico altamente capacitado, estamos aquí para asesorarte y garantizar que encuentres las herramientas adecuadas para tus necesidades agrícolas.
          </p>
          <button className="mt-4 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700">
            Conoce más
          </button>
        </div>

        {/* Imágenes */}
        <div className="relative flex justify-center items-center">
          <div
            className="rounded-lg w-80 h-80 bg-cover bg-center shadow-lg transform translate-y-4 lg:translate-y-0 lg:translate-x-4"
            style={{ backgroundImage: `url(${image1})` }}
            role="img"
            aria-label="Campos de cultivo"
          ></div>
          <div
            className="rounded-lg w-64 h-64 bg-cover bg-center shadow-md absolute top-0 left-0 transform -translate-x-6 -translate-y-6"
            style={{ backgroundImage: `url(${image2})` }}
            role="img"
            aria-label="Cosecha de productos frescos"
          ></div>
        </div>
      </div>
    </section>
  );
};

// Componente principal que pasa las imágenes como propiedades
const Nosotros = () => {
  return (
    <AboutUs
      image1="https://images.unsplash.com/photo-1587502536263-929f8300a1a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
      image2="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    />
  );
};

export default Nosotros;
