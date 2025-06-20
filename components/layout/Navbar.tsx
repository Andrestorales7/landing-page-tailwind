import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
    const router = useRouter();

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleRouteChange = () => setIsMobileMenuOpen(false);
        router.events.on("routeChangeComplete", handleRouteChange);
        return () => router.events.off("routeChangeComplete", handleRouteChange);
    }, [router]);

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

    const productSubcategories = [
        { name: "Horticultura", id: "horticultura", path: "/productos/horticultura" },
        { name: "Ensilaje", id: "ensilaje", path: "/productos/ensilaje" },
        { name: "Agropecuaria", id: "agropecuaria", path: "/productos/agropecuaria" },
        { name: "Tanques", id: "tanques", path: "/productos/tanques" },
        { name: "Envases", id: "envases", path: "/productos/envases" },
        { name: "Inoculantes", id: "inoculantes", path: "/productos/inoculantes" },
        { name: "Otros...", id: "soluciones", path: "/productos/otrosproductos" }
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
                                    width={124} // Doble del tamaño mostrado
                                    height={124}
                                    className="h-22 w-22 object-contain" // h-22 = 88px
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
                                    onMouseEnter={() => setIsProductMenuOpen(true)}
                                    onMouseLeave={() => setIsProductMenuOpen(false)}
                                >
                                    <div className="flex flex-col">
                                        <Link
                                            href="/productos"
                                            className="flex items-center font-medium tracking-wide transition-colors hover:text-green-500"
                                            aria-haspopup="true"
                                            aria-expanded={isProductMenuOpen}
                                            onClick={() => setIsProductMenuOpen(false)}
                                        >
                                            Productos
                                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </Link>
                                        <div
                                            className={`absolute left-0 top-full bg-white shadow-xl rounded-lg p-3 min-w-[220px] z-10 border-t-2 border-green-500 text-gray-800 transition-all duration-200 ${
                                                isProductMenuOpen ? "block" : "hidden"
                                            }`}
                                        >
                                            <Link
                                                href="/productos"
                                                className="block w-full text-left px-4 py-2.5 text-base font-semibold text-green-600 hover:bg-gray-50 hover:text-green-700 rounded-md transition-colors mb-1 border-b border-gray-200"
                                                onClick={() => setIsProductMenuOpen(false)}
                                            >
                                                Categorias
                                            </Link>
                                            {productSubcategories.map((subcategory) => (
                                                <Link
                                                    key={subcategory.id}
                                                    href={subcategory.path}
                                                    className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:text-green-500 rounded-md transition-colors"
                                                    onClick={() => {
                                                        setIsProductMenuOpen(false);
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                >
                                                    {subcategory.name}
                                                </Link>
                                            ))}
                                        </div>
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
                    <div className="md:hidden bg-white border-t border-gray-100 rounded-b-lg shadow-lg animate-fadeIn">
                        <div className="pt-4 pb-6 space-y-3 px-4">
                            <Link
                                href="/"
                                className="block font-medium text-gray-800 py-2 hover:text-green-500"
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                Inicio
                            </Link>
                            <Link
                                href="/#productSect"
                                className="block w-full text-left font-medium text-gray-800 py-2 hover:text-green-500"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsMobileMenuOpen(false);
                                    scrollToSection("productSect");
                                }}
                            >
                                Soluciones
                            </Link>
                            <div className="relative">
                                <Link
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsProductMenuOpen((open) => !open);
                                    }}
                                    className="block w-full text-left font-medium text-gray-800 py-2 hover:text-green-500 flex items-center justify-between"
                                >
                                    Productos
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </Link>
                                {isProductMenuOpen && (
                                    <div className="bg-white border rounded-lg shadow-lg mt-2">
                                        <Link
                                            href="/productos"
                                            className="block w-full text-left px-4 py-2.5 text-base font-semibold text-green-600 hover:bg-gray-50 hover:text-green-700 rounded-md transition-colors mb-1 border-b border-gray-200"
                                            onClick={() => setIsProductMenuOpen(false)}
                                        >
                                            Categorias
                                        </Link>
                                        {productSubcategories.map((subcategory) => (
                                            <Link
                                                key={subcategory.id}
                                                href={subcategory.path}
                                                className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:text-green-500 rounded-md transition-colors"
                                                onClick={() => {
                                                    setIsProductMenuOpen(false);
                                                    setIsMobileMenuOpen(false);
                                                }}
                                            >
                                                {subcategory.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <Link
                                href="/#nosotros"
                                className="block w-full text-left font-medium text-gray-800 py-2 hover:text-green-500"
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
                                className="block w-full text-left font-medium text-gray-800 py-2 hover:text-green-500"
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                Noticias
                            </Link>
                            <Link
                                href="/contacto"
                                className="block w-full text-left rounded-full bg-green-600 px-7 py-3 text-base font-medium text-white shadow hover:bg-green-500 transition-colors mt-2"
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
