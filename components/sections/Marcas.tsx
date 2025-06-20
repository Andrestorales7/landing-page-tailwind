import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const logos = [
  { src: '/images/logos/agrinpex-logo.webp', alt: 'Agrinpex', link: 'https://www.instagram.com/agrinplex' },
  { src: '/images/logos/rotor-logo.png', alt: 'Rotor', link: 'https://www.rotortanques.com/' },
  { src: '/images/logos/azulpack-logo.png', alt: 'Azulpack', link: 'https://www.azulpack.com.br/es/' },
  { src: '/images/logos/biotech-logo.png', alt: 'Biotech', link: 'https://www.instagram.com/biotechpar_paraguay/' },
  { src: '/images/logos/exporplas-logo.png', alt: 'Exporplas', link: 'https://exporplas.pt/es/' },
  { src: '/images/logos/genofeed-logo.png', alt: 'Genofeed', link: 'https://genofeed.com.ar/' },
  { src: '/images/logos/ginegar-logo.png', alt: 'Ginegar', link: 'https://ginegar.com/' },
  { src: '/images/logos/klabin-logo.png', alt: 'Klabin', link: 'https://klabin.com.br/es/' },
  { src: '/images/logos/mauser-logo.png', alt: 'Mauser', link: 'https://mauserpackaging.com/' },
  { src: '/images/logos/nortene-logo.png', alt: 'Nortene', link: 'https://nortene.com.br/es/' },
  { src: '/images/logos/rafitec-logo.webp', alt: 'Rafitec', link: 'https://rafitec.com.br/' },
  { src: '/images/logos/pipiola-logo.png', alt: 'Pipiola', link: 'http://www.selladorasilobolsa.com.ar/' },
  { src: '/images/logos/silox-logo.png', alt: 'Silox', link: '' },
  { src: '/images/logos/technipes-logo.png', alt: 'Technipes', link: 'https://technipes.com/es/' },
  { src: '/images/logos/sugrand-logo2.png', alt: 'Sugrand', link: 'https://es.grandnets.com/' },
];

const Marcas = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
        <div className="flex items-center gap-10 animate-marcas-slide">
          {logos.concat(logos).map((logo, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 flex items-center justify-center transition duration-300"
            >
              {logo.link ? (
                <Link href={logo.link} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={60}
                    className="object-contain max-h-16"
                  />
                </Link>
              ) : (
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  className="object-contain max-h-16"
                />
              )}
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