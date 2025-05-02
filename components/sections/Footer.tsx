import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <footer id="footer" className="bg-[#545855] text-gray-300">
            <div className="container mx-auto p-4 md:p-6 xl:px-0">
                <div className="mx-auto max-w-7xl px-4 pb-6 pt-8">
                    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                        {/* Logo y descripción */}
                        <div className="space-y-4">
                            <div>
                                <a href="/">
                                    <div className="flex items-center space-x-2 text-xl font-medium">
                                        <span>
                                            <Image
                                                src="/images/logos/cmp-logo8.png"
                                                alt="CMP Agro"
                                                width={100}
                                                height={100}
                                                className="w-20 h-20"
                                                priority
                                            />
                                        </span>
                                        <span className="text-white">CMP Agro</span>
                                    </div>
                                </a>
                            </div>
                            <div className="max-w-md text-sm text-gray-400">
                                Enhance productivity and efficiency with cutting-edge artificial intelligence solutions for your business operations.
                            </div>
                            <div className="flex space-x-3">
                                <a href="https://wa.me/1234567890" target="_blank" className="text-gray-400 hover:text-white">
                                    <span className="sr-only">WhatsApp</span>
                                    <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                                        <path d="M16.988 14.012c-.278-.139-1.646-.812-1.9-.905-.254-.093-.439-.139-.625.14-.186.278-.719.905-.88 1.09-.162.186-.324.209-.602.07-.278-.14-1.174-.433-2.235-1.38-.826-.735-1.384-1.64-1.547-1.918-.162-.278-.017-.43.122-.57.126-.126.278-.325.417-.488.14-.162.186-.278.278-.464.093-.186.046-.35-.023-.488-.07-.139-.625-1.507-.857-2.07-.226-.544-.457-.47-.625-.478h-.535c-.186 0-.488.07-.744.35-.256.278-.977.953-.977 2.325s1 2.697 1.14 2.88c.14.186 1.95 2.98 4.73 4.18.662.286 1.178.457 1.58.585.662.21 1.265.18 1.74.109.53-.079 1.646-.67 1.88-1.316.233-.646.233-1.2.163-1.316-.07-.116-.256-.186-.535-.325z"></path>
                                        <path fillRule="evenodd" d="M12.04 1.998c-5.523 0-10.002 4.48-10.002 10.002 0 1.765.46 3.42 1.26 4.86L1.5 22.5l5.64-1.78c1.38.76 2.96 1.22 4.66 1.22 5.523 0 10.002-4.48 10.002-10.002S17.563 1.998 12.04 1.998zm-8.002 10.002c0-4.418 3.584-8.002 8.002-8.002s8.002 3.584 8.002 8.002-3.584 8.002-8.002 8.002c-1.48 0-2.86-.4-4.06-1.1l-3.3 1.04 1.04-3.3c-.7-1.2-1.1-2.58-1.1-4.06z" clipRule="evenodd"></path>
                                    </svg>
                                </a>
                                <a href="https://instagram.com" target="_blank" className="text-gray-400 hover:text-white">
                                    <span className="sr-only">Instagram</span>
                                    <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.756 0 8.332.014 7.052.072 5.772.13 4.548.39 3.5 1.438c-1.048 1.048-1.308 2.272-1.366 3.552C2.014 6.332 2 6.756 2 12s.014 5.668.072 6.948c.058 1.28.318 2.504 1.366 3.552 1.048 1.048 2.272 1.308 3.552 1.366C8.332 23.986 8.756 24 12 24s3.668-.014 4.948-.072c1.28-.058 2.504-.318 3.552-1.366 1.048-1.048 1.308-2.272 1.366-3.552.058-1.28.072-1.704.072-6.948s-.014-5.668-.072-6.948c-.058-1.28-.318-2.504-1.366-3.552C19.452.39 18.228.13 16.948.072 15.668.014 15.244 0 12 0z"></path>
                                        <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"></path>
                                    </svg>
                                </a>
                                <a href="https://facebook.com" target="_blank" className="text-gray-400 hover:text-white">
                                    <span className="sr-only">Facebook</span>
                                    <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                                        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.917c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.407 0 22.675 0z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Ubicaciones */}
                        <div className="mt-8 grid grid-cols-3 gap-4 xl:col-span-2 xl:mt-0">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Asunción</h3>
                                <p className="text-sm text-gray-400 mt-1">
                                    Avda. Artigas 4145 c/ Gral. Delgado<br />
                                    (0981) 176 060<br />
                                    (0983) 352 029<br />
                                    (0982) 163 262
                                </p>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Minga Guazú</h3>
                                <p className="text-sm text-gray-400 mt-1">
                                    Ruta 2 Km. 14<br />
                                    (0981) 253 081<br />
                                    (0983) 846 825
                                </p>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Loma Plata</h3>
                                <p className="text-sm text-gray-400 mt-1">
                                    Oficina 4 - Predio Plasti Chaco<br />
                                    (0986) 289 494
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-8 border-t border-gray-600 pt-4">
                        <div className="text-sm text-center text-gray-400">
                            Copyright © 2024. Crafted  by Andres.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;