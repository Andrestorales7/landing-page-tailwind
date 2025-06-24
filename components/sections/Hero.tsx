import React from 'react';
import HeroSection from '../ui/HeroSection';

const images = [
    "https://images.unsplash.com/photo-1717702576954-c07131c54169?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1515276427842-f85802d514a2?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1581615760599-bbfa598a0b88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const Hero: React.FC = () => {
    return (
        <HeroSection
            images={images}
            title={
                <>
                    <span className="text-green-500">Soluciones Tecnologicas</span> Inteligentes para el Agro-negocio de hoy
                </>
            }
            description="Más de 25 años siendo aliados del trabajador del campo. Productos que potencian la producción de miles de productores del país."
            quote="Representante de las mayores marcas internacionales."
            autoSlideInterval={4000}
            imageOverlayClass="bg-gradient-to-r from-black/60 to-transparent"
        />
    );
};

export default Hero;
