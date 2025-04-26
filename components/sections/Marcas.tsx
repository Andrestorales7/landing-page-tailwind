import Image from 'next/image';
import React from 'react';

interface LogoProps {
  src: string;
  alt: string;
}

const logos: LogoProps[] = [
  { src: '/logos/marca1.svg', alt: 'Logo Marca 1' },
  { src: '/logos/marca2.svg', alt: 'Logo Marca 2' },
  { src: '/logos/marca3.svg', alt: 'Logo Marca 3' },
  { src: '/logos/marca4.svg', alt: 'Logo Marca 4' },
  { src: '/logos/marca5.svg', alt: 'Logo Marca 5' },
  { src: '/logos/marca6.svg', alt: 'Logo Marca 6' },
];

const Marcas = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-800">
        Con CMP Agro. estás respaldado por marcas líderes en el mercado.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-center h-28 transition-transform transform hover:scale-105"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={70}
                className="max-h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marcas;