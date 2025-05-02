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
            <div className="mx-auto flex flex-col lg:flex-row justify-between items-center gap-20 py-67 max-w-[1440px]">
                <div className="max-w-[660px] flex-col justify-center items-start gap-10 flex">
                    <div className="flex-col justify-start items-start gap-5 flex">
                        <h1 className="text-white text-5xl font-bold font-['Roboto'] leading-tight">
                            <span>Revolutionizing Agriculture: </span>
                            <span className="text-[#3e9d26]">Sustainable Solutions for the Future</span>
                        </h1>  
                    </div>
                    <div className="flex-col justify-start items-start gap-5 flex">
                        <p className="text-white text-lg font-semibold font-['Roboto']">
                            Somos líderes en soluciones tecnológicas e innovadoras para potenciar el agronegocio en Paraguay, impulsando eficiencia, crecimiento y sostenibilidad. 🇵🇾
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
