import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BookOpenIcon, CalendarIcon, ClockIcon } from "@heroicons/react/24/outline";

const Noticias: React.FC = () => {
    const articles = [
        {
            title: "Tecnología en Agricultura de Precisión",
            description: "Descubre cómo las nuevas tecnologías están revolucionando los cultivos y mejorando la eficiencia en el campo.",
            category: "Innovación",
            author: "Juan Pérez",
            date: "2023-11-15",
            readTime: "5 min",
            image: "https://images.unsplash.com/photo-1581090700227-3a9b7c8c6c91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            authorImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=256",
        },
        {
            title: "Cultivos Orgánicos Sostenibles",
            description: "Conoce las técnicas líderes en producción orgánica y su impacto positivo en el medio ambiente.",
            category: "Sostenibilidad",
            author: "María Gómez",
            date: "2023-11-10",
            readTime: "7 min",
            image: "https://images.unsplash.com/photo-1598514983023-58e6e3e6f8b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            authorImage: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=256",
        },
        {
            title: "Nuevas Tendencias en Agroindustria",
            description: "Análisis de las últimas tendencias tecnológicas aplicadas a la producción agrícola a gran escala.",
            category: "Tendencias",
            author: "Carlos Rojas",
            date: "2023-11-05",
            readTime: "6 min",
            image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            authorImage: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=256",
        },
    ];

    return (
        <section
            id="noticias"
            className="relative bg-gradient-to-b from-white to-emerald-50 py-20 sm:py-28"
        >
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="h-full w-full opacity-10 [background-image:linear-gradient(#d1fae5_1px,transparent_1px),linear-gradient(to_right,#d1fae5_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            </div>
            
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-2 mb-4 text-emerald-600">
                        <div className="h-px w-8 bg-emerald-300" />
                        <span className="text-sm font-semibold uppercase tracking-wide">Actualidad Agrícola</span>
                        <div className="h-px w-8 bg-emerald-300" />
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                            Noticias del Sector
                        </span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                        Mantente actualizado con las últimas innovaciones y desarrollos en agricultura tecnológica
                    </p>
                </motion.div>

                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article, index) => (
                        <AnimatedCard key={index} article={article} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const AnimatedCard: React.FC<{ article: any }> = ({ article }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    React.useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const cardVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { 
                duration: 0.5, 
                ease: "easeOut",
                staggerChildren: 0.1
            } 
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={cardVariants}
            className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
        >
            <div className="relative h-56 overflow-hidden">
                <img
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={article.image}
                    alt={article.title}
                />
                <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center rounded-full bg-white/80 backdrop-blur-sm px-3 py-1 text-sm font-medium text-emerald-700 border border-emerald-100">
                        {article.category}
                    </span>
                </div>
            </div>

            <div className="p-6">
                <div className="flex-1 space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 hover:text-emerald-600 transition-colors">
                        {article.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3">
                        {article.description}
                    </p>
                </div>

                <div className="mt-6 border-t border-emerald-50 pt-4">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <img
                                className="h-10 w-10 rounded-full border-2 border-white shadow-lg"
                                src={article.authorImage}
                                alt={article.author}
                            />
                            <div className="absolute -right-1 -bottom-1 h-4 w-4 rounded-full bg-emerald-500 border-2 border-white" />
                        </div>
                        
                        <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">{article.author}</p>
                            <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                                <div className="flex items-center gap-1">
                                    <CalendarIcon className="h-4 w-4 text-emerald-500" />
                                    <span>{new Date(article.date).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <ClockIcon className="h-4 w-4 text-emerald-500" />
                                    <span>{article.readTime}</span>
                                </div>
                            </div>
                        </div>

                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-1 text-emerald-600 hover:text-emerald-700 text-sm font-semibold"
                        >
                            <BookOpenIcon className="h-5 w-5" />
                            <span>Leer</span>
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Noticias;