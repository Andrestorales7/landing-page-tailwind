import Image from 'next/image';
import React from 'react';

const logos = [
  { src: '/images/logos/logo1.png', alt: 'Logo Marca 1' },
  { src: '/images/logos/logo2.png', alt: 'Logo Marca 2' },
  { src: '/images/logos/logo3.png', alt: 'Logo Marca 3' },
  { src: '/images/logos/logo4.png', alt: 'Logo Marca 4' },
  { src: '/images/logos/logo5.png', alt: 'Logo Marca 5' },
  { src: '/images/logos/logo6.png', alt: 'Logo Marca 6' },
  { src: '/images/logos/logo7.png', alt: 'Logo Marca 7' },
  { src: '/images/logos/logo20.png', alt: 'Logo Marca 8' },
  { src: '/images/logos/logo9.png', alt: 'Logo Marca 9' },
  { src: '/images/logos/logo10.png', alt: 'Logo Marca 10' },
  { src: '/images/logos/logo11.png', alt: 'Logo Marca 11' },
  { src: '/images/logos/logo12.png', alt: 'Logo Marca 12' },
  { src: '/images/logos/logo13.png', alt: 'Logo Marca 13' },
  { src: '/images/logos/logo14.png', alt: 'Logo Marca 14' },
  { src: '/images/logos/logo15.png', alt: 'Logo Marca 15' },
  { src: '/images/logos/logo16.png', alt: 'Logo Marca 16' },
  { src: '/images/logos/logo17.png', alt: 'Logo Marca 17' },
  { src: '/images/logos/logo18.png', alt: 'Logo Marca 18' },
  { src: '/images/logos/logo19.png', alt: 'Logo Marca 19' },
];

const Marcas = () => {
  return (
    <section className="bg-gray-50 py-16">
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