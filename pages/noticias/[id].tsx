import { useRouter } from 'next/router';
import { useArticles } from '../../services/newsService';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from "next/image";

const NoticiaDetalle = () => {
  const router = useRouter();
  const { id } = router.query;
  const { articles, loading, error } = useArticles();

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <span className="text-gray-800 text-lg font-medium">Cargando noticia...</span>
      </div>
    </div>
  );
  if (error) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <span className="text-red-600 text-xl font-semibold">Error al cargar la noticia.</span>
    </div>
  );

  const article = articles.find(a => a.id === Number(id));
  if (!article) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <span className="text-gray-800 text-xl font-semibold">Noticia no encontrada.</span>
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
                <Image
                  src={article.authorImage}
                  alt={article.author}
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-full border-2 border-white shadow object-cover"
                />
                <span>{article.author}</span>
              </div>
              <span className="hidden sm:inline">|</span>
              <span>
                {new Date(article.date).toLocaleDateString("es-ES", { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            </div>
          </motion.div>
        </div>
        {/* SVG Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px]">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V56.44Z"
              className="fill-white opacity-90"
            ></path>
          </svg>
        </div>
      </section>

      {/* Navigation breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <nav className="flex items-center space-x-2 text-sm text-black font-medium">
            <Link href="/" className="hover:text-green-600 transition-colors">Inicio</Link>
            <span className="text-gray-500">/</span>
            <Link href="/NoticiasPage" className="hover:text-green-600 transition-colors">Noticias</Link>
            <span className="text-gray-500">/</span>
            <span className="text-black font-semibold truncate">{article.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Content */}
      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Article Meta Info */}
            <div className="flex items-center justify-between border-b border-gray-300 pb-8 mb-8">
              <div className="flex items-center space-x-4">
                <Image
                  src={article.authorImage}
                  alt={article.author}
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gray-200"
                />
                <div>
                  <p className="font-bold text-black text-lg">{article.author}</p>
                  <p className="text-sm text-black font-medium">Redactor especializado</p>
                </div>
              </div>
              <div className="text-right text-sm text-black font-medium">
                <p className="font-semibold">{new Date(article.date).toLocaleDateString("es-ES", {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-xl md:text-2xl text-black leading-relaxed mb-8 font-medium">
              {article.description}
            </p>

            {/* Featured Image */}
            <div className="mb-12">
              <Image
                src={article.image}
                alt={article.title}
                width={1200}
                height={500}
                className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-xl border border-gray-200"
              />
            </div>

            {/* Article Content */}
            <div
              className="prose prose-xl max-w-none antialiased
                prose-headings:text-black prose-headings:font-bold prose-headings:tracking-tight
                prose-p:text-black prose-p:leading-relaxed prose-p:text-lg prose-p:font-medium
                prose-a:text-green-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                prose-blockquote:border-l-green-600 prose-blockquote:bg-green-50 prose-blockquote:rounded-r-lg
                prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:text-black prose-blockquote:font-medium
                prose-img:rounded-lg prose-img:shadow-md prose-img:border prose-img:border-gray-200
                prose-strong:text-black prose-strong:font-bold
                prose-em:text-black prose-em:font-medium
                prose-li:text-black prose-li:font-medium prose-li:text-lg
                prose-ul:text-black prose-ol:text-black
                !text-black"
            >
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>

            {/* Article Footer */}
            <footer className="mt-16 pt-8 border-t border-gray-300">
              {/* Redes sociales */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-black text-gray-900 mb-2">¡Síguenos!</h3>
                  <p className="text-gray-600 text-sm font-medium">Mantente al día con las últimas noticias del agro</p>
                </div>

                <div className="flex justify-center gap-6">
                  <a
                    href="https://www.instagram.com/cmpagro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 text-white hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg hover:shadow-xl"
                    aria-label="Instagram"
                  >
                    {/* Efecto de brillo */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Instagram icon modernizado */}
                    <svg className="w-7 h-7 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>

                  <a
                    href="https://www.facebook.com/cmpagropy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white hover:scale-110 hover:-rotate-3 transition-all duration-300 shadow-lg hover:shadow-xl"
                    aria-label="Facebook"
                  >
                    {/* Efecto de brillo */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Facebook icon modernizado */}
                    <svg className="w-7 h-7 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>

                {/* Texto adicional */}
                <div className="text-center mt-4">
                  <p className="text-xs text-gray-500 font-medium">
                    📱 Conecta con nosotros y no te pierdas ninguna novedad
                  </p>
                </div>
              </div>
            </footer>
          </motion.div>
        </div>
      </article>

      {/* Related Articles Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-black mb-8">Noticias relacionadas</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {articles.filter(a => a.id !== Number(id)).slice(0, 2).map((relatedArticle) => (
              <Link key={relatedArticle.id} href={`/noticias/${relatedArticle.id}`} className="group">
                <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-200">
                  <Image
                    src={relatedArticle.image}
                    alt={relatedArticle.title}
                    width={600}
                    height={192}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <span className="inline-block bg-green-100 text-green-800 px-3 py-2 rounded text-sm font-bold mb-3">
                      {relatedArticle.category}
                    </span>
                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-green-600 transition-colors leading-tight">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-black text-base mb-4 line-clamp-2 font-medium leading-relaxed">
                      {relatedArticle.description}
                    </p>
                    <div className="flex items-center text-sm text-black font-medium">
                      <span>{new Date(relatedArticle.date).toLocaleDateString("es-ES")}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default NoticiaDetalle;