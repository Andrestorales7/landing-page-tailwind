import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const router = useRouter();

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        const handleRouteChange = () => setIsMobileMenuOpen(false);
        router.events.on("routeChangeComplete", handleRouteChange);
        return () => router.events.off("routeChangeComplete", handleRouteChange);
    }, [router]);

    // Scroll to section with offset for fixed header
    const scrollToSection = (sectionId: string) => {
        if (router.pathname !== "/") {
            router.push(`/#${sectionId}`).then(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    const yOffset = -100; // Adjust for fixed header height
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

    const productSubcategories = [
        { name: "Horticultura", id: "horticultura" },
        { name: "Ensilaje", id: "ensilaje" },
        { name: "Agropecuaria", id: "agropecuaria" },
        { name: "Envases", id: "envases" },
        { name: "Maquinas Cerradoras", id: "maquinas-cerradoras" },
        { name: "Geomembranas", id: "geomembranas" },
        { name: "Tesa", id: "tesa" }
    ];

    // Check if link is active
    const isActive = (path: string) => {
        return router.pathname === path || 
               (router.pathname === "/next/link" && router.asPath.includes(`#${path}`));
    };

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-white/90 text-gray-700 backdrop-blur-md shadow-md"
                    : "bg-transparent text-white"
            }`}
        >
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <Link href="/Hero" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                            <span className="sr-only">Home</span>
                            <div className="flex items-center space-x-2">
                                <img 
                                    src="/images/logo2.png" 
                                    alt="Company Logo" 
                                    className="h-16 w-auto object-contain" 
                                />
                            </div>
                        </Link>
                    </div>

                    <div className="md:flex md:items-center md:gap-12">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-8 text-sm">
                                <li>
                                    <Link 
                                        href="/" 
                                        className={`transition-colors font-medium ${
                                            isActive("/") ? "text-teal-600" : "hover:text-teal-600"
                                        }`}
                                        onClick={() => scrollToSection("hero")}
                                    >
                                        Inicio
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        onClick={() => scrollToSection("soluciones")}
                                        className={`transition-colors font-medium ${
                                            isActive("soluciones") ? "text-teal-600" : "hover:text-teal-600"
                                        }`}
                                    >
                                        Soluciones
                                    </button>
                                </li>

                                <li className="relative group">
                                    <button className="flex items-center hover:text-teal-600 font-medium transition-colors">
                                        Productos
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-2 min-w-[220px] z-10 border border-gray-100 text-gray-700">
                                        {productSubcategories.map((subcategory) => (
                                            <button
                                                key={subcategory.id}
                                                onClick={() => scrollToSection(subcategory.id)}
                                                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 hover:text-teal-600"
                                            >
                                                {subcategory.name}
                                            </button>
                                        ))}
                                    </div>
                                </li>

                                <li>
                                    <button
                                        onClick={() => scrollToSection("Nosotros")}
                                        className={`transition-colors font-medium ${
                                            isActive("nosotros") ? "text-teal-600" : "hover:text-teal-600"
                                        }`}
                                    >
                                        Nosotros
                                    </button>
                                </li>
                                <li>
                                    <Link 
                                        href="/blog" 
                                        className={`transition-colors font-medium ${
                                            isActive("/blog") ? "text-teal-600" : "hover:text-teal-600"
                                        }`}
                                    >
                                        Blog
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <button
                                    onClick={() => scrollToSection("footer")}
                                    className="rounded-md bg-teal-600 px-6 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 transition-colors"
                                >
                                    Contacto
                                </button>
                            </div>

                            <div className="block md:hidden">
                                <button 
                                    onClick={toggleMobileMenu}
                                    className="rounded bg-gray-100 p-2 text-gray-700 hover:text-teal-600 transition-colors"
                                    aria-label="Toggle menu"
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
                    <div className="md:hidden bg-white border-t border-gray-200">
                        <div className="pt-4 pb-6 space-y-4 px-4">
                            <button
                                onClick={() => {
                                    scrollToSection("hero");
                                    setIsMobileMenuOpen(false);
                                }}
                                className="block w-full text-left text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md px-4 py-3"
                            >
                                Inicio
                            </button>
                            
                            <div className="px-4 py-3">
                                <button className="w-full text-left text-base font-medium text-gray-700 hover:text-teal-600 flex justify-between items-center">
                                    Productos
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div className="mt-3 pl-5 space-y-3">
                                    {productSubcategories.map((subcategory) => (
                                        <button
                                            key={subcategory.id}
                                            onClick={() => {
                                                scrollToSection(subcategory.id);
                                                setIsMobileMenuOpen(false);
                                            }}
                                            className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-teal-600 hover:bg-gray-50 rounded-md"
                                        >
                                            {subcategory.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            
                            <button
                                onClick={() => {
                                    scrollToSection("nosotros");
                                    setIsMobileMenuOpen(false);
                                }}
                                className="block w-full text-left px-4 py-3 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md"
                            >
                                Nosotros
                            </button>
                            
                            <Link 
                                href="/blog" 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md"
                            >
                                Blog
                            </Link>
                            
                            <button
                                onClick={() => {
                                    scrollToSection("contacto");
                                    setIsMobileMenuOpen(false);
                                }}
                                className="block w-full text-center px-4 py-3 text-base font-medium text-white bg-teal-600 rounded-md hover:bg-teal-700"
                            >
                                Contacto
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;