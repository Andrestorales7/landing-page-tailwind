import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
    const [isMobileProductMenuOpen, setIsMobileProductMenuOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [mobileActiveCategory, setMobileActiveCategory] = useState<string | null>(null);
    const router = useRouter();
    const productMenuRef = useRef<HTMLLIElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const categoryTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    // Manejo de menú basado en clics
    const toggleProductMenu = () => {
        setIsProductMenuOpen(!isProductMenuOpen);
        if (isProductMenuOpen) {
            setActiveCategory(null);
        }
    };

    const toggleCategoryMenu = (categoryId: string) => {
        if (activeCategory === categoryId) {
            setActiveCategory(null);
        } else {
            setActiveCategory(categoryId);
        }
    };

    // Cierra el menú al hacer clic fuera de él
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (productMenuRef.current && 
                !productMenuRef.current.contains(event.target as Node) &&
                isProductMenuOpen) {
                setIsProductMenuOpen(false);
                setActiveCategory(null);
            }
        };
        
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isProductMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleRouteChange = () => {
            setIsMobileMenuOpen(false);
            setIsProductMenuOpen(false);
            setIsMobileProductMenuOpen(false);
            setActiveCategory(null);
            setMobileActiveCategory(null);
        };
        
        router.events.on("routeChangeComplete", handleRouteChange);
        return () => router.events.off("routeChangeComplete", handleRouteChange);
    }, [router]);

    // Limpiar timeouts al desmontar
    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            if (categoryTimeoutRef.current) clearTimeout(categoryTimeoutRef.current);
        };
    }, []);

    const scrollToSection = (sectionId: string) => {
        if (router.pathname !== "/") {
            router.push(`/#${sectionId}`).then(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    const yOffset = -100;
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                }
            });
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                const yOffset = -100;
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
            }
        }
    };

    const productCategories = [
        { 
            name: "Agricultura y Ganadería", 
            id: "agricultura",
            subcategories: [
                { name: "Horticultura", id: "horticultura", path: "/productos/horticultura" },
                { name: "Ensilaje", id: "ensilaje", path: "/productos/ensilaje" },
                { name: "Agropecuaria", id: "agropecuaria", path: "/productos/agropecuaria" },
            ]
        },
        { 
            name: "Sistemas de Almacenamiento", 
            id: "almacenamiento",
            subcategories: [
                { name: "Envases", id: "envases", path: "/productos/envases" },
                { name: "Tanques", id: "tanques", path: "/productos/tanques" },
            ]
        },
        { 
            name: "Bio-insumos", 
            id: "bioinsumos",
            subcategories: [
                { name: "Inoculantes", id: "inoculantes", path: "/productos/inoculantes" },
                { name: "Biosales", id: "biosales", path: "/productos/biosales" },
            ]
        },
        { 
            name: "Ver más", 
            id: "otros",
            subcategories: [
                { name: "Ver todos", id: "soluciones", path: "/productos/otrosproductos" },
                { name: "Cerradoras de Bolsas", id: "maquinas-cerradoras", path: "/productos/maquinas-cerradoras" },
                { name: "Cintas Industriales", id: "cintas-industriales", path: "/productos/cintas-industriales" }
            ]
        }
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-white/95 text-gray-800 backdrop-blur-md shadow-lg"
                    : "bg-transparent text-white"
            }`}
        >
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <Link href="/" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                            <span className="sr-only">Home</span>
                            <div className="flex items-center space-x-2">
                                <Image 
                                    src="/images/logos/cmp-logo3.png" 
                                    alt="Company Logo" 
                                    width={124}
                                    height={124}
                                    className="h-22 w-22 object-contain"
                                    priority
                                    quality={100}
                                />
                            </div>
                        </Link>
                    </div>

                    <div className="md:flex md:items-center md:gap-12">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-10 text-lg">
                                <li>
                                    <Link 
                                        href="/" 
                                        className="font-medium tracking-wide transition-colors hover:text-green-500"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Inicio
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="/#productSect"
                                        className="font-medium tracking-wide transition-colors hover:text-green-500"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection("productSect");
                                        }}
                                    >
                                        Soluciones
                                    </Link>
                                </li>

                                <li
                                    className="relative"
                                    ref={productMenuRef}
                                >
                                    <div className="flex flex-col">
                                        <button
                                            onClick={toggleProductMenu}
                                            className="flex items-center font-medium tracking-wide transition-colors hover:text-green-500 bg-transparent text-inherit"
                                            aria-haspopup="true"
                                            aria-expanded={isProductMenuOpen}
                                        >
                                            Productos
                                            <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${isProductMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        
                                        {isProductMenuOpen && (
                                            <div 
                                                className="absolute left-0 top-full bg-white shadow-xl rounded-lg p-3 min-w-[320px] z-10 border-t-2 border-green-500 text-gray-800 animate-fadeIn"
                                                aria-label="Submenú de productos"
                                            >
                                                <div className="grid grid-cols-1 gap-2">
                                                    {productCategories.map((category) => (
                                                        <div 
                                                            key={category.id}
                                                            className="relative"
                                                        >
                                                            <div
                                                                onClick={() => toggleCategoryMenu(category.id)}
                                                                className={`w-full text-left px-4 py-2.5 text-base text-gray-700 hover:bg-gray-50 hover:text-green-500 rounded-md transition-colors flex items-center justify-between cursor-pointer group ${activeCategory === category.id ? 'bg-gray-50 text-green-500' : ''}`}
                                                            >
                                                                <span>{category.name}</span>
                                                                <svg 
                                                                    className={`w-4 h-4 transition-transform duration-200 text-gray-400 group-hover:text-green-500 ${activeCategory === category.id ? 'rotate-180 text-green-500' : ''}`} 
                                                                    fill="none" 
                                                                    stroke="currentColor" 
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                                </svg>
                                                            </div>
                                                            
                                                            <div 
                                                                id={`subcategory-${category.id}`}
                                                                className={`overflow-hidden transition-all duration-300 ease-in-out ${activeCategory === category.id ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}
                                                            >
                                                                <div className="bg-gray-50 rounded-md mt-1 mb-2 py-1.5 px-2">
                                                                    {category.subcategories.map((subcategory) => (
                                                                        <Link
                                                                            key={subcategory.id}
                                                                            href={subcategory.path}
                                                                            className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-green-500 hover:bg-white rounded-md transition-all duration-150 border-l-2 border-transparent hover:border-green-400 group"
                                                                        >
                                                                            <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-2 group-hover:bg-green-400 transition-colors duration-200"></span>
                                                                            {subcategory.name}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </li>

                                <li>
                                    <Link
                                        href="/#nosotros"
                                        className="font-medium tracking-wide transition-colors hover:text-green-500"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection("nosotros");
                                        }}
                                    >
                                        Nosotros
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/noticias"
                                        className="font-medium tracking-wide transition-colors hover:text-green-500"
                                    >
                                        Noticias
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <Link
                                    href="/contacto"
                                    className="rounded-full bg-green-600 px-7 py-3 text-base font-medium text-white shadow hover:bg-green-500 transition-colors"
                                >
                                    Contacto
                                </Link>
                            </div>

                            <div className="block md:hidden">
                                <button 
                                    onClick={toggleMobileMenu}
                                    className="rounded-full bg-gray-100 p-2 text-gray-700 hover:text-green-500 hover:bg-gray-200 transition-colors"
                                    aria-label="Toggle menu"
                                    aria-expanded={isMobileMenuOpen}
                                >
                                    {isMobileMenuOpen ? (
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    ) : (
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div 
                        className="md:hidden bg-white border-t border-gray-100 rounded-b-lg shadow-lg animate-fadeIn" 
                        role="dialog" 
                        aria-modal="true"
                    >
                        <div className="pt-4 pb-6 space-y-3 px-4">
                            <Link
                                href="/"
                                className="block text-gray-800 py-2 hover:text-green-500"
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                Inicio
                            </Link>
                            <Link
                                href="/#productSect"
                                className="block w-full text-left text-gray-800 py-2 hover:text-green-500"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsMobileMenuOpen(false);
                                    scrollToSection("productSect");
                                }}
                            >
                                Soluciones
                            </Link>
                            
                            {/* Productos con acordeón para móvil */}
                            <div className="space-y-2">
                                <button
                                    onClick={() => setIsMobileProductMenuOpen(!isMobileProductMenuOpen)}
                                    className="w-full text-left text-gray-800 py-2 hover:text-green-500 flex items-center justify-between"
                                    aria-expanded={isMobileProductMenuOpen}
                                >
                                    Productos
                                    <svg className={`w-4 h-4 transition-transform duration-200 ${isMobileProductMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                
                                <div 
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileProductMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="pl-4 space-y-2 mt-1">
                                        {productCategories.map((category) => (
                                            <div key={category.id} className="space-y-1">
                                                <div 
                                                    className={`w-full text-left text-gray-700 py-2 flex items-center justify-between cursor-pointer group rounded-md hover:bg-gray-50 px-2 ${mobileActiveCategory === category.id ? 'bg-gray-50 text-green-500' : ''}`}
                                                    onClick={() => setMobileActiveCategory(mobileActiveCategory === category.id ? null : category.id)}
                                                >
                                                    <span>{category.name}</span>
                                                    <svg 
                                                        className={`w-4 h-4 transition-transform duration-200 text-gray-400 group-hover:text-green-500 ${mobileActiveCategory === category.id ? 'rotate-180 text-green-500' : ''}`} 
                                                        fill="none" 
                                                        stroke="currentColor" 
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </div>
                                                
                                                <div 
                                                    id={`mobile-subcategory-${category.id}`}
                                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileActiveCategory === category.id ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}
                                                >
                                                    <div className="pl-6 space-y-1 bg-gray-50 rounded-md py-2 px-1">
                                                        {category.subcategories.map((subcategory) => (
                                                            <Link
                                                                key={subcategory.id}
                                                                href={subcategory.path}
                                                                className="flex items-center w-full text-left py-2 text-sm text-gray-600 hover:text-green-500 rounded-md hover:bg-white px-2 transition-all duration-150 group"
                                                                onClick={() => {
                                                                    setIsMobileMenuOpen(false);
                                                                }}
                                                            >
                                                                <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-2 group-hover:bg-green-400 transition-colors duration-200"></span>
                                                                {subcategory.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            
                            <Link
                                href="/#nosotros"
                                className="block w-full text-left text-gray-800 py-2 hover:text-green-500"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsMobileMenuOpen(false);
                                    scrollToSection("nosotros");
                                }}
                            >
                                Nosotros
                            </Link>
                            <Link
                                href="/noticias"
                                className="block w-full text-left text-gray-800 py-2 hover:text-green-500"
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                Noticias
                            </Link>
                            <Link
                                href="/contacto"
                                className="block w-full text-center rounded-full bg-green-600 px-7 py-3 text-base font-medium text-white shadow hover:bg-green-500 transition-colors mt-4"
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                Contacto
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
