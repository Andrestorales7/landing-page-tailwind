import React from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

const Hero: React.FC = () => {
    return (
        <section id='Hero'
            className="w-full py-9"
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="mx-auto w-full flex flex-col lg:flex-row justify-start items-start gap-20 py-63 max-w-[1440px]">
                <div className="max-w-[660px] flex-col justify-center items-start gap-20 flex">
                    <div className="flex-col justify-start items-start gap-5 flex">
                        <h1
                            className="text-5xl font-bold font-['Roboto'] leading-tight"
                            style={{
                                color: '#ffffff', // Blanco
                                textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)', // Sombra para contraste
                            }}
                        >
                            <span style={{ color: '#ff0000' }}>C</span>
                            <span style={{ color: '#ffffff' }}>M</span>
                            <span style={{ color: '#0000ff' }}>P</span> Agro: 
                            <span style={{ color: '#3e9d26' }}> Cultivando Soluciones para un Futuro Sostenible</span>
                        </h1>
                        <p
                            className="text-xl font-normal font-['Roboto']"
                            style={{
                                color: '#ffffff', // Blanco
                                textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)', // Sombra para contraste
                            }}
                        >
                            Desde la agricultura de precisión hasta innovaciones ecológicas, explore cómo transformamos el futuro del campo.
                        </p>
                        <p
                            className="text-lg font-semibold italic font-['Roboto']"
                            style={{
                                color: '#ffffff', // Blanco
                                textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)', // Sombra para contraste
                            }}
                        >
                            "Sembramos innovación, cosechamos sostenibilidad."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
