/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.cmpagro.com.py',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin', '/private', '/404', '/500'],
  
  // Modifica additionalPaths para garantizar que devuelve las rutas
  additionalPaths: async (config) => {
    const result = [];
    
    // Agregar productos de agropecuaria
    const agropecuariaProducts = [
      'malla-cta-aluminet', 'tejido-aviar', 'comederos-nortene',
      'geomembranas-nortene', 'acquapex', 'georain-cover', 'techazo'
    ];
    
    // Agregar productos de horticultura
    const horticulturaProducts = [
      'peliculas-para-invernadero', 'media-sombra', 'mulching',
      'mantas-para-cultivo', 'hilos-para-tutorado', 'mantas-de-solarizacion'
    ];
    
    // Agregar productos de ensilaje
    const ensilajeProducts = [
      'film-agripower', 'hilos-exporplas', 'mallas-exporplas',
      'silobolsas-agrinpex', 'tech-lona-azul', 'tech-h2o-barrier', 'tech-silo-azul'
    ];
    
    // Agregar productos de envases
    const envasesProducts = [
      'bag-in-box', 'ibc', 'flexitank', 'tambores-metalicos', 
      'tambores-plastico', 'bolsa-rafia', 'bolsa-papel', 'big-bags'
    ];
    
    // Agregar otros productos
    const otrosproductosProducts = [
      'cintas-flexograficas', 'maquinas-cerradoras', 'precintos', 'selladora-silos'
    ];
    
    // Generar URLs para cada categoría de productos
    agropecuariaProducts.forEach(slug => {
      result.push({
        loc: `${config.siteUrl}/productos/agropecuaria/${slug}`,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      });
    });
    
    horticulturaProducts.forEach(slug => {
      result.push({
        loc: `${config.siteUrl}/productos/horticultura/${slug}`,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      });
    });
    
    ensilajeProducts.forEach(slug => {
      result.push({
        loc: `${config.siteUrl}/productos/ensilaje/${slug}`,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      });
    });
    
    envasesProducts.forEach(slug => {
      result.push({
        loc: `${config.siteUrl}/productos/envases/${slug}`,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      });
    });
    
    otrosproductosProducts.forEach(slug => {
      result.push({
        loc: `${config.siteUrl}/productos/otrosproductos/${slug}`,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      });
    });
    
    // Asegúrate de retornar el resultado
    return result;
  },
  
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/private', '/api/*'],
      },
    ],
    // Quita additionalSitemaps que podría estar causando problemas
    // additionalSitemaps: [
    //   'https://www.cmpagro.com.py/sitemap.xml',
    //   'https://www.cmpagro.com.py/server-sitemap.xml',
    // ],
  },
  
  // Simplifica la configuración de sitemaps
  splitting: true,
}
