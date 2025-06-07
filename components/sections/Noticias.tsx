import React from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BookOpenIcon, CalendarIcon } from "@heroicons/react/24/outline";
import { useArticles } from "../../services/newsService"; // importa el hook
import Image from "next/image";

const Noticias: React.FC = () => {
    const { articles, loading, error } = useArticles(3); // solo 3 noticias

    return (
        <section
            id="noticias"
            className="relative bg-gradient-to-b from-white to-emerald-50 py-18 sm:py-4"
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
                    <div className="inline-flex items-center gap-2 mb-1 text-emerald-600">
                        <div className="h-px w-12 bg-emerald-300" />
                        <span className="text-2xl sm:text-3xl font-bold uppercase tracking-wide">Actualidad Agrícola</span>
                        <div className="h-px w-12 bg-emerald-300" />
                    </div>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                        Eventos, actualizaciones y noticias relevantes del sector agrícola. Mantente informado con nosotros aqui en  CMP Agro.
                    </p>
                </motion.div>

                <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {loading && <p>Cargando noticias...</p>}
                    {error && <p>Error al cargar noticias.</p>}
                    {!loading && !error && articles.map((article) => (
                        <AnimatedCard key={article.id} article={article} />
                    ))}
                </div>
                
                {/* Botón para ver todas las noticias */}
                <div className="mt-12 text-center">
                    <Link href="/NoticiasPage">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="px-6 py-3 bg-emerald-600 text-white rounded-lg shadow-md hover:bg-emerald-700 transition-colors font-semibold"
                        >
                            Ver todas las noticias
                        </motion.button>
                    </Link>
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
            className="group relative flex flex-col h-full overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            style={{ minHeight: 440, maxHeight: 510 }}
        >
            {/* Hacemos que toda la tarjeta sea clickeable */}
            <a href={`/NoticiasPage?id=${article.id}`} className="flex flex-col h-full">
                <div className="relative h-56 overflow-hidden flex-shrink-0">
                    <Image
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={article.id === 1}
                    />
                    <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center rounded-full bg-white/80 backdrop-blur-sm px-3 py-1 text-sm font-medium text-emerald-700 border border-emerald-100">
                            {article.category}
                        </span>
                    </div>
                </div>

                <div className="flex flex-col flex-1 justify-between p-6">
                    <div className="flex-1 flex flex-col gap-3">
                        <h3 className="text-xl font-semibold text-gray-900 hover:text-emerald-600 transition-colors">
                            {article.title}
                        </h3>
                        <p className="text-gray-600 line-clamp-3">
                            {article.description}
                        </p>
                    </div>

                    <div className="mt-6 border-t border-emerald-50 pt-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <CalendarIcon className="h-4 w-4 text-emerald-500" />
                                <span>{new Date(article.date).toLocaleDateString()}</span>
                            </div>
                            <motion.div 
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center gap-1 text-emerald-600 hover:text-emerald-700 text-sm font-semibold"
                                onClick={e => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    window.location.href = `/NoticiasPage?id=${article.id}`;
                                }}
                            >
                                <BookOpenIcon className="h-5 w-5" />
                                <span>Leer</span>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </a>
        </motion.div>
    );
};

export default Noticias;