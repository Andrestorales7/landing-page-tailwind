import React from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

const Hero: React.FC = () => {
    return (
        <section id='Hero'
            className="w-full py-9 px-8"
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 py-20 max-w-[1440px]">
                <div className="max-w-[660px] flex-col justify-center items-start gap-10 flex">
                    <div className="flex-col justify-start items-start gap-5 flex">
                        <h1 className="text-white text-5xl font-bold font-['Roboto'] leading-tight">
                            <span>Revolutionizing Agriculture: </span>
                            <span className="text-[#3e9d26]">Sustainable Solutions for the Future</span>
                        </h1>
                        <p className="text-white text-xl font-normal font-['Roboto']">
                            From precision farming to eco-friendly innovations, discover how we’re changing the way the world grows its food.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-5">
                        <p className="text-white text-sm font-normal font-['Roboto']">Grow with Us</p>
                        <button className="px-8 py-2.5 bg-[#3e9d26] rounded-[10px] text-white text-sm font-semibold font-['Roboto']">
                            Explore Solutions
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
