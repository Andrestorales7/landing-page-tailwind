import { useRouter } from 'next/router';
import { useArticles } from '../../services/newsService';
import { motion } from 'framer-motion';

const NoticiaDetalle = () => {
  const router = useRouter();
  const { id } = router.query;
  const { articles, loading, error } = useArticles();

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-50">
      <span className="text-emerald-600 text-xl">Cargando noticia...</span>
    </div>
  );
  if (error) return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-50">
      <span className="text-red-500 text-xl">Error al cargar la noticia.</span>
    </div>
  );

  const article = articles.find(a => a.id === Number(id));
  if (!article) return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-50">
      <span className="text-gray-500 text-xl">Noticia no encontrada.</span>
    </div>
  );

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] bg-gradient-to-br from-green-200/30 via-green-100/20 to-green-50/10 overflow-hidden flex items-end">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-100"
          style={{
            backgroundImage: `url('/images/hero/heronoticias.jpg')`,
          }}
        ></div>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent pointer-events-none"></div>
        {/* Contenido del Hero */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block bg-emerald-600/90 text-white px-4 py-1 rounded-full text-xs font-semibold mb-4">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg mb-4">
              {article.title}
            </h1>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <img src={article.authorImage} alt={article.author} className="h-16 w-16 rounded-full border-2 border-white shadow" />
                <span>{article.author}</span>
              </div>
              <span className="hidden sm:inline">|</span>
              <span>
                {new Date(article.date).toLocaleDateString("es-ES", { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <span className="hidden sm:inline">|</span>
              <span>{article.readTime}</span>
            </div>
          </motion.div>
        </div>
        {/* SVG Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px]">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V56.44Z"
              className="fill-emerald-50 opacity-90"
            ></path>
          </svg>
        </div>
      </section>

      {/* Contenido principal estilo revista */}
      <section className="bg-emerald-50 min-h-[40vh] py-12">
        <div className="max-w-3xl mx-auto">
          {/* Imagen de portada con título superpuesto */}
          <div className="relative mb-8">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-80 md:h-[28rem] object-cover rounded-3xl shadow-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-b-3xl px-8 py-6">
              <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">{article.title}</h1>
              <div className="flex items-center gap-4 mt-2 text-white/90 text-sm">
                <img src={article.authorImage} alt={article.author} className="h-10 w-10 rounded-full border-2 border-white shadow" />
                <span className="font-semibold">{article.author}</span>
                <span>· {new Date(article.date).toLocaleDateString("es-ES", { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                <span>· {article.readTime}</span>
              </div>
            </div>
          </div>
          {/* Descripción destacada */}
          <p className="text-xl text-emerald-900 font-medium mb-8 px-2">{article.description}</p>
          {/* Contenido completo con imágenes grandes y bloques amplios */}
          <article className="prose prose-lg max-w-none prose-neutral prose-img:rounded-2xl prose-img:shadow-lg prose-headings:text-emerald-700 prose-blockquote:border-emerald-300 prose-blockquote:bg-emerald-100/40 text-gray-800 bg-white rounded-3xl shadow-xl px-8 py-10">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </article>
          {/* Botón para volver */}
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => window.history.back()}
              className="inline-block px-6 py-2 bg-emerald-600 text-white rounded-lg shadow hover:bg-emerald-700 transition"
            >
              ← Volver a noticias
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NoticiaDetalle;