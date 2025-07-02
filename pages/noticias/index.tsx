// NoticiasSection.tsx
import React, { useState, useEffect } from 'react';
import { useArticles, Article } from '../../services/newsService'; // Fixed import path
import { motion } from 'framer-motion';
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';
import SEO from '@/components/SEO';
import NewsCard from '@/components/ui/NewsCard';

const NoticiasPage: React.FC = () => {
    const { articles, loading, error } = useArticles();
    const [, setIsLoaded] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Todas');
    const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);

    const categories = ['Todas', 'Tecnología', 'Sostenibilidad', 'Innovación', 'Tendencias', 'Eventos'];

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        // Filtrar artículos por categoría y búsqueda
        const filtered = articles.filter((article) => {
            const matchesCategory =
                selectedCategory === 'Todas' || article.category === selectedCategory;
            const matchesSearch =
                article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
        setFilteredArticles(filtered);
    }, [articles, searchQuery, selectedCategory]);

    if (loading) {
        return (
            <>
                <SEO 
                    title="Noticias y Artículos | CMP Agro"
                    description="Mantente informado con las últimas noticias y tendencias del sector agrícola en Paraguay. Artículos sobre tecnología, sostenibilidad e innovación en agricultura."
                    url="https://www.cmpagro.com.py/noticias"
                    image="/images/hero/hero-noticias.webp"
                />
                <div className="min-h-screen bg-emerald-50 flex justify-center items-center">
                    <div className="animate-pulse text-emerald-600 text-xl">Cargando noticias...</div>
                </div>
            </>
        );
    }

    if (error) {
        return (
            <>
                <SEO 
                    title="Noticias y Artículos | CMP Agro"
                    description="Mantente informado con las últimas noticias y tendencias del sector agrícola en Paraguay. Artículos sobre tecnología, sostenibilidad e innovación en agricultura."
                    url="https://www.cmpagro.com.py/noticias"
                    image="/images/hero/hero-noticias.webp"
                />
                <div className="min-h-screen bg-emerald-50 flex justify-center items-center">
                    <div className="text-red-500 text-xl">Error al cargar las noticias. Intente más tarde.</div>
                </div>
            </>
        );
    }

    return (
        <>
            <SEO 
                title="Noticias y Artículos | CMP Agro"
                description="Mantente informado con las últimas noticias y tendencias del sector agrícola en Paraguay. Artículos sobre tecnología, sostenibilidad e innovación en agricultura."
                url="https://www.cmpagro.com.py/noticias"
                image="/images/hero/hero-noticias.webp"
            />
            <div id="noticias" className="min-h-screen bg-gradient-to-b from-green-50 to-gray-50">
                {/* Hero Section */}
                <div className="relative min-h-[52vh] bg-gradient-to-br from-green-900/70 via-green-800/60 to-green-700/50 overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-100"
                        style={{
                            backgroundImage:
                                "url('/images/hero/hero-noticias.webp')",
                        }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent pointer-events-none"></div>
                    <div className="relative z-10 pt-42 pb-22 px-6 sm:px-12 lg:px-18 max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center"
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
                                Noticias y Artículos
                            </h1>
                            <p className="mt-6 text-lg md:text-xl text-white max-w-2xl drop-shadow mx-auto">
                                Mantente informado con las últimas noticias del sector.
                            </p>
                        </motion.div>
                    </div>
                    {/* Wave SVG para una transición suave */}
                    <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
                        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[10vw] min-h-[60px] max-h-[120px]">
                            <path
                                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V56.44Z"
                                className="fill-gray-50 relative opacity-90"
                            ></path>
                        </svg>
                    </div>
                </div>

                {/* Filtros - Diseño Mejorado */}
                <div className="max-w-7xl mx-auto -mt-10 px-4 sm:px-6 lg:px-8 relative z-20">
                    <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100/50 backdrop-blur-sm">
                        <div className="flex flex-col md:flex-row gap-6 items-center">
                            {/* Título de filtros */}
                            <div className="flex items-center gap-2 text-emerald-700">
                                <FunnelIcon className="h-5 w-5" />
                                <h3 className="font-medium">Filtrar noticias</h3>
                            </div>
                            
                            {/* Buscador con diseño mejorado */}
                            <div className="relative flex-grow">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Buscar por título o contenido..."
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-200"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            
                            {/* Filtro de categorías con botones */}
                            <div className="flex flex-wrap gap-2 justify-center w-full md:w-auto">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                                            ${selectedCategory === category
                                                ? 'bg-emerald-600 text-white shadow-md'
                                                : 'bg-gray-100 text-gray-700 hover:bg-emerald-100 hover:text-emerald-700'
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                        
                        {/* Indicador de resultados */}
                        <div className="mt-4 text-sm text-gray-500">
                            {filteredArticles.length} artículos encontrados
                            {selectedCategory !== 'Todas' && ` en ${selectedCategory}`}
                            {searchQuery && ` que contienen "${searchQuery}"`}
                        </div>
                    </div>
                </div>

                {/* Noticias Grid - Usando el Componente NewsCard */}
                <div className="max-w-7xl mx-auto pt-12 pb-16 px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredArticles.map((article, index) => (
                            <NewsCard
                                key={article.id}
                                href={`/noticias/${article.id}`}
                                image={{
                                    src: article.image,
                                    alt: article.title,
                                    width: 400,
                                    height: 300
                                }}
                                badge={{
                                    text: article.category
                                }}
                                date={new Date(article.date).toLocaleDateString("es-ES", { 
                                    year: 'numeric', 
                                    month: 'long', 
                                    day: 'numeric' 
                                })}
                                title={article.title}
                                description={article.description}
                                author={{
                                    name: article.author,
                                    image: article.authorImage
                                }}
                                index={index}
                            />
                        ))}
                    </div>
                    
                    {/* Mensaje cuando no hay resultados */}
                    {filteredArticles.length === 0 && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="py-16 text-center"
                        >
                            <div className="mx-auto w-24 h-24 mb-4 text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-medium text-gray-700 mb-2">No hay resultados</h3>
                            <p className="text-gray-500">
                                No se encontraron noticias que coincidan con los filtros seleccionados.
                            </p>
                            <button 
                                onClick={() => {
                                    setSearchQuery('');
                                    setSelectedCategory('Todas');
                                }}
                                className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                            >
                                Limpiar filtros
                            </button>
                        </motion.div>
                    )}
                </div>
            </div>
        </>
    );
};

export default NoticiasPage;