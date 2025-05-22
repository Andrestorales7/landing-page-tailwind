import Image from 'next/image';
import React from 'react';

const logos = [
  { src: '/images/logos/agrinpex-logo.png', alt: 'agrinpex' },
  { src: '/images/logos/agroman-logo.png', alt: 'Logo Marca 2' },
  { src: '/images/logos/azulpack-logo.png', alt: 'Logo Marca 3' },
  { src: '/images/logos/biotech-logo.png', alt: 'Logo Marca 4' },
  { src: '/images/logos/exporplas-logo.png', alt: 'Logo Marca 5' },
  { src: '/images/logos/genofeed-logo.png', alt: 'Logo Marca 6' },
  { src: '/images/logos/ginegar-logo.png', alt: 'Logo Marca 7' },
  { src: '/images/logos/klabin-logo.png', alt: 'Logo Marca 8' },
  { src: '/images/logos/magnum-logo.png', alt: 'Logo Marca 9' },
  { src: '/images/logos/mauser-logo.png', alt: 'Logo Marca 10' },
  { src: '/images/logos/nortene-logo.png', alt: 'Logo Marca 11' },
  { src: '/images/logos/rafitec-logo.png', alt: 'Logo Marca 12' },
  { src: '/images/logos/pipiola-logo.png', alt: 'Logo Marca 13' },
  { src: '/images/logos/silox-logo.png', alt: 'Logo Marca 14' },
  { src: '/images/logos/suprasil-logo.png', alt: 'Logo Marca 15' },
  { src: '/images/logos/technipes-logo.png', alt: 'Logo Marca 16' },
  { src: '/images/logos/textil-logo.png', alt: 'Logo Marca 17' },
 
];

const Marcas = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
        <div className="flex items-center gap-10 animate-marcas-slide">
          {logos.concat(logos).map((logo, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                className="object-contain max-h-16"
              />
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marcas-slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marcas-slide {
          width: max-content;
          animation: marcas-slide 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Marcas;