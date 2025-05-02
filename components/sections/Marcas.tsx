import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

interface LogoProps {
  src: string;
  alt: string;
}

const logos: LogoProps[] = [
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
    <section
      className="bg-gradient-to-b from-black/80 via-green-800/60 to-gray-100 py-16"
      style={{
        backgroundImage: `url('/images/background3.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-center mb-12 text-white bg-gradient-to-b from-green-900/20 via-green-800/60 to-black/80 backdrop-blur-sm p-1 rounded-lg shadow-lg">
          Respaldado por marcas líderes en el mercado.
        </h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          autoplay={{ delay: 3000 }}
          loop
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-center h-28">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={140}
                  height={70}
                  className="max-h-16 w-auto object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Marcas;