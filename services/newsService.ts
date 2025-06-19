import { useState, useEffect } from 'react';

export interface Article {
  id: number;
  title: string;
  description: string;
  category: string;
  author: string;
  date: string;
  image: string;
  authorImage: string;
  content: string; // Puede contener HTML o Markdown
}

// Esta función podría conectarse a una API real en el futuro
export const fetchArticles = async (): Promise<Article[]> => {
  const articles = [
    {
      id: 5,
      title: "CMP Agro dijo presente en la Expo Pioneros 2025",
      description: "Participamos del evento agropecuario más relevante del Chaco paraguayo, presentando nuestras soluciones innovadoras para el sector productivo.",
      category: "Eventos",
      author: "CMP Noticias",
      date: "2025-05-28",
      image: "/images/eventos/pioneros2025/portada-pioneros.JPG",
      authorImage: "/images/eventos/noticias-logo.png",
      content: `
        <article class="news-content">
          <h2 class="text-2xl font-bold mb-4">Exitosa participación en la Expo Pioneros 2025</h2>
          
          <p class="mb-4">
            Del <strong>28 al 31 de mayo</strong>, tuvimos el honor de participar en una nueva edición de la <strong>Expo Pioneros</strong>, uno de los eventos agropecuarios más relevantes del país, que congrega año tras año a los principales referentes del sector productivo nacional e internacional.
          </p>
          
          <p class="mb-4">
            Durante los cuatro días de exposición, nuestro stand se convirtió en un espacio de encuentro e intercambio con <strong>productores, técnicos, asesores y aliados estratégicos</strong>, quienes se acercaron para conocer de cerca nuestras propuestas orientadas a la <strong>eficiencia, sustentabilidad y rentabilidad</strong> del trabajo en el campo.
          </p>
          
          <figure class="my-8">
            <img src="/images/eventos/pioneros2025/content1.JPG" alt="Stand de CMP AGRO en la Expo Pioneros 2025" class="rounded-xl w-full" />
          </figure>

          <h3 class="text-xl font-semibold mt-8 mb-4">Soluciones innovadoras presentadas</h3>
          
          <p class="mb-4">
            Presentamos nuestras principales líneas de productos:
          </p>
          
          <ul class="list-none space-y-2 mb-6">
            <li>✅ <span class="ml-2"><strong>Silobolsas</strong> para el almacenamiento seguro de granos.</span></li>
            <li>✅ <span class="ml-2"><strong>Inoculantes</strong> de alta calidad para mejorar el rendimiento de los cultivos.</span></li>
            <li>✅ <span class="ml-2"><strong>Mallas para fardos</strong> y <strong>films para ensilaje</strong> que garantizan una óptima conservación forrajera.</span></li>
            <li>✅ <span class="ml-2"><strong>Comederos</strong> resistentes y funcionales.</span></li>
            <li>✅ <span class="ml-2"><strong>Costuradoras</strong> diseñadas para facilitar el cierre y manipulación de envases agrícolas.</span></li>
          </ul>
          
          <p class="mb-4">
            Además, compartimos información sobre las <strong>últimas tecnologías aplicadas al agro</strong>, destacando cómo estas soluciones pueden integrarse eficazmente en los procesos productivos para lograr mejores resultados con un enfoque sostenible.
          </p>

          <h3 class="text-xl font-semibold mt-8 mb-4">Compromiso con el desarrollo agropecuario</h3>
          
          <p class="mb-4">
            Nuestra participación reafirma el compromiso de CMP Agro con el <strong>desarrollo productivo del Chaco y del Paraguay</strong>, promoviendo el uso de herramientas innovadoras que acompañan y potencian la labor del productor.
          </p>
          
          <p class="mb-4">
            Agradecemos profundamente a todos los que se acercaron a conocernos, intercambiar ideas y construir juntos un futuro más prometedor para el agro paraguayo.
          </p>
          
          <blockquote class="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500 my-6">
            <p class="font-semibold mb-2">¡Nos reencontramos en la próxima edición de la Expo Pioneros!</p>
            <p>Para más información sobre nuestros productos presentados en la exposición, contáctenos a través de nuestros canales oficiales.</p>
          </blockquote>
        </article>
      `
    },
    {
      id: 1,
      title: "Feria Innovar 2025",
      description: "Descubre cómo las nuevas tecnologías están revolucionando los cultivos y mejorando la eficiencia en el campo.",
      category: "Innovación",
      author: "CMP Noticias",
      date: "2025-03-18",
      image: "/images/eventos/innovar2025/innovar1.jpg",
      authorImage: "/images/eventos/noticias-logo.png",
      content: `
        <article class="news-content">
          <h2 class="text-2xl font-bold mb-4">INNOVAR: La Feria que Impulsa el Futuro del Agro</h2>
          
          <p class="mb-4">
            INNOVAR es mucho más que una feria; es el punto de encuentro donde el conocimiento, la innovación y la tecnología se fusionan para transformar la agroganadería.
          </p>
          
          <p class="mb-4">
            Un evento diseñado para quienes buscan estar a la vanguardia con las herramientas, maquinarias y nuevas tecnologías que optimizan la producción y potencian los negocios en el ámbito nacional, regional e internacional.
          </p>
          
          <p class="mb-4">
            Este evento de gran relevancia para el sector contará con la destacada presencia de <strong>CMP AGRO</strong>, líder en soluciones para horticultura, ganadería, ensilaje, confinamiento y transporte. Nuestro compromiso es brindar soluciones eficientes e innovadoras que optimicen cada eslabón de la cadena agropecuaria.
          </p>
          
          <figure class="my-8">
            <img src="/images/eventos/innovar2025/innovar2.jpg" alt="Vista general del stand de CMP AGRO en Innovar 2025" class="rounded-xl w-full" />
          </figure>

          <h3 class="text-xl font-semibold mt-8 mb-4">¿Cuál es el objetivo de INNOVAR?</h3>
          
          <p class="mb-4">
            Ser el epicentro del intercambio de conocimientos, lanzamientos y avances tecnológicos que revolucionan el agro, fortaleciendo el crecimiento del sector y facilitando oportunidades de negocio que trascienden fronteras.
          </p>

          <h3 class="text-xl font-semibold mt-8 mb-4">¿Qué logra la feria?</h3>
          
          <ul class="list-none space-y-2 mb-6">
            <li>✅ <span class="ml-2">Conectar todos los eslabones de la comunidad agroindustrial, desde la semilla hasta la postcosecha.</span></li>
            <li>✅ <span class="ml-2">Demostrar el enorme potencial productivo del sector agropecuario paraguayo.</span></li>
            <li>✅ <span class="ml-2">Posicionar a Paraguay entre los países más competitivos del mundo en producción agropecuaria.</span></li>
          </ul>
          
          <figure class="my-8">
            <img src="/images/eventos/innovar2025/innovar1.jpeg" alt="Equipos en exhibición y demostración práctica" class="rounded-xl w-full" />
          </figure>

          <h3 class="text-xl font-semibold mt-8 mb-4">¡Visítanos en INNOVAR!</h3>
          
          <p class="mb-4">
            Te esperamos en el stand de CMP AGRO, donde nuestro equipo de expertos estará listo para asesorarte y mostrarte de primera mano nuestras soluciones diseñadas para maximizar tu productividad.
          </p>
          
          <figure class="my-8">
            <img src="/images/eventos/innovar2025/innovar3.jpg" alt="Personal de CMP AGRO asesorando a productores" class="rounded-xl w-full" />
          </figure>
        </article>
      `
    },
    {
      id: 2,
      title: "LA SOLUCIÓN #1 PARA REDUCIR LA TEMPERATURA EN CORRALES Y ESTABLOS",
      description: "Descubra la Malla CTA Aluminet. La innovadora tecnología israelí que ya ha transformado la producción agropecuaria de miles de agroganaderos en Paraguay.",
      category: "Tendencias",
      author: "CMP Noticias",
      date: "2025-02-21",
      image: "/images/eventos/cta/cta1.jpg",
      authorImage: "/images/eventos/noticias-logo.png",
      content: `
        <article class="news-content">
          <h2 class="text-2xl font-bold mb-4">Malla CTA Aluminet: La Clave para un Entorno Saludable y Productivo</h2>
          
          <p class="mb-4">
            El estrés calórico es uno de los mayores desafíos en la agroindustria, afectando directamente la salud, el bienestar y el rendimiento de los animales. La <strong>Malla CTA Aluminet</strong> de CMP AGRO ofrece una solución eficaz y comprobada para reducir significativamente la temperatura en corrales y establos, optimizando la producción ganadera.
          </p>
          
          <figure class="my-8">
            <img src="/images/eventos/cta/cta2.jpg" alt="Malla CTA Aluminet instalada en corral" class="rounded-xl w-full" />
          </figure>

          <h3 class="text-xl font-semibold mt-8 mb-4">¿Cómo funciona?</h3>
          
          <p class="mb-4">
            A diferencia de una simple media sombra, la Malla CTA Aluminet actúa reflejando las ondas térmicas, logrando:
          </p>
          
          <ul class="list-none space-y-2 mb-6">
            <li>✅ <span class="ml-2"><strong>Reducción de hasta 5°C</strong> en la temperatura del ambiente.</span></li>
            <li>✅ <span class="ml-2"><strong>Disminución del estrés calórico</strong>, lo que mejora la salud y el bienestar de los animales.</span></li>
            <li>✅ <span class="ml-2"><strong>Menor consumo de agua</strong>, optimizando los recursos y reduciendo costos.</span></li>
            <li>✅ <span class="ml-2"><strong>Reducción de la frecuencia respiratoria</strong>, favoreciendo el confort animal.</span></li>
            <li>✅ <span class="ml-2"><strong>Mayor eficiencia reproductiva</strong>, impactando positivamente en la producción ganadera.</span></li>
          </ul>
          
          <figure class="my-8">
            <img src="/images/eventos/cta/cta2.jpg" alt="Ganado bajo Malla CTA Aluminet" class="rounded-xl w-full" />
          </figure>

          <p class="mb-6">
            Miles de agroganaderos en Paraguay ya han implementado esta tecnología, logrando una mayor eficiencia y rentabilidad en sus establecimientos.
          </p>

          <blockquote class="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500 my-6">
            Obtenga más información y una cotización personalizada. Contacte con nuestros asesores a través del botón de WhatsApp en la esquina inferior derecha de su dispositivo y descubra cómo la Malla CTA Aluminet puede marcar la diferencia en su producción.
          </blockquote>
        </article>
      `
    },
    {
      id: 3,
      title: "CMP AGRO REVOLUCIONA EL MERCADO CON NUEVAS MEDIA SOMBRAS",
      description: "Innovación en protección agrícola. Descubra las nuevas media sombras de última generación, diseñadas para ofrecer máxima resistencia y eficiencia en la protección de cultivos en Paraguay.",
      category: "Tendencias",
      author: "CMP Noticias",
      date: "2025-01-05",
      image: "/images/eventos/cta/mediasombra.jpeg",
      authorImage: "/images/eventos/noticias-logo.png",
      content: `
        <article class="news-content">
          <h2 class="text-2xl font-bold mb-4">NUEVAS SOLUCIONES PARA LA PROTECCIÓN DE CULTIVOS</h2>
          
          <p class="mb-4">
            La exposición prolongada a los rayos solares es un desafío constante para los horticultores, afectando el rendimiento y la calidad de los cultivos.
          </p>
          
          <p class="mb-6">
            Para responder a esta necesidad, CMP AGRO introduce al mercado una nueva línea de media sombras diseñadas para brindar protección superior en las horas más críticas del día.
          </p>
          
          <h3 class="text-xl font-semibold mt-8 mb-4">¿Qué hace únicas a estas nuevas media sombras?</h3>
          
          <p class="mb-4">
            Hemos desarrollado cuatro versiones innovadoras que incorporan:
          </p>
          
          <ul class="list-none space-y-2 mb-6">
            <li>✅ <span class="ml-2"><strong>Bordes Reforzados</strong> &rarr; Mayor resistencia ante condiciones climáticas adversas.</span></li>
            <li>✅ <span class="ml-2"><strong>Alta Durabilidad</strong> &rarr; Material de calidad superior que soporta los embates del clima.</span></li>
            <li>✅ <span class="ml-2"><strong>Ojales de Alta Calidad</strong> &rarr; Instalación fácil, segura y eficiente.</span></li>
            <li>✅ <span class="ml-2"><strong>Protección Adaptable</strong> &rarr; Diferentes niveles de translucidez, con opciones de 35% hasta 50% de sombra para un control preciso de la radiación solar.</span></li>
          </ul>
          
          <p class="mb-4">
            Optimice su producción agrícola con la mejor tecnología en protección de cultivos.
          </p>
          
          <blockquote class="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500 my-6">
            Solicite más información y una cotización personalizada a través de nuestro equipo de asesores.
          </blockquote>
        </article>
      `
    },
    {
      id: 4,
      title: "SILOBOLSAS. LA CLAVE PARA AHORRAR Y OPTIMIZAR LA COSECHA DE GRANOS Y FORRAJES.",
      description: "Más capacidad, más protección, más rendimiento. Descubra cómo las Silobolsas de CMP AGRO pueden transformar su producción, ofreciendo almacenamiento eficiente, seguro y de bajo costo.",
      category: "Tecnología",
      author: "CMP Noticias",
      date: "2024-12-28",
      image: "/images/eventos/cta/silobolsas.jpeg",
      authorImage: "/images/eventos/noticias-logo.png",
      content: `
        <article class="news-content">
          <h2 class="text-2xl font-bold mb-4">NUEVAS SOLUCIONES PARA LA CONSERVACIÓN Y ALMACENAMIENTO DE CULTIVOS</h2>
          
          <p class="mb-4">
            El crecimiento de los modelos agroganaderos de alta eficiencia ha convertido a la plasticultura en un pilar fundamental para la producción.
          </p>
          
          <p class="mb-4">
            En respuesta a esta necesidad, CMP AGRO ha establecido alianzas estratégicas con los mayores fabricantes de Silobolsas de la región, brindando una solución de almacenamiento optimizado para granos y forrajes.
          </p>
          
          <figure class="my-8">
            <img src="/images/eventos/cta/silobolsas2.jpeg" alt="Silobolsas CMP AGRO en campo" class="rounded-xl w-full" />
          </figure>

          <h3 class="text-xl font-semibold mt-8 mb-4">Ventajas de las Silobolsas en la Cosecha de Granos</h3>
          
          <p class="mb-4">
            Este innovador sistema permite almacenar maíz, girasol, soja, trigo, arroz y más con los siguientes beneficios:
          </p>
          
          <ul class="list-none space-y-2 mb-6">
            <li>✅ <span class="ml-2"><strong>Almacenamiento eficiente y de bajo costo</strong>, con una operación sencilla y segura.</span></li>
            <li>✅ <span class="ml-2"><strong>Ubicación estratégica en el mismo potrero</strong>, reduciendo costos de flete y logística.</span></li>
            <li>✅ <span class="ml-2"><strong>Clasificación por calidad</strong>, evitando la mezcla de granos de diferentes potreros.</span></li>
            <li>✅ <span class="ml-2"><strong>Posibilidad de almacenar con mayor humedad</strong>, optimizando la conservación.</span></li>
            <li>✅ <span class="ml-2"><strong>Mejores oportunidades de comercialización</strong>, permitiendo diferir la venta para maximizar ganancias.</span></li>
          </ul>
          
          <h3 class="text-xl font-semibold mt-8 mb-4">Beneficios en la Conservación de Granos Húmedos y Forrajes</h3>
          
          <p class="mb-4">
            El uso de Silobolsas en granos húmedos y forrajes permite:
          </p>
          
          <ul class="list-none space-y-2 mb-6">
            <li>✅ <span class="ml-2"><strong>Aumentar la producción de carne y leche</strong>, reduciendo costos por unidad de producto.</span></li>
            <li>✅ <span class="ml-2"><strong>Mayor producción individual y carga animal</strong>, gracias a forrajes de alta calidad.</span></li>
            <li>✅ <span class="ml-2"><strong>Ubicación estratégica del silo</strong>, facilitando la suplementación y minimizando pérdidas de materia seca.</span></li>
          </ul>
          
          <p class="mb-4">
            Optimice su producción con la mejor tecnología en almacenamiento agropecuario.
          </p>
          
          <blockquote class="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500 my-6">
            Solicite más información y una cotización personalizada con nuestro equipo de asesores.
          </blockquote>
        </article>
      `
    },
  ];
  
  // Ordenar por fecha (más reciente primero)
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// Hook personalizado para obtener artículos
export const useArticles = (limit?: number) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getArticles = async () => {
      try {
        setLoading(true);
        const data = await fetchArticles();
        setArticles(limit ? data.slice(0, limit) : data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Error desconocido'));
      } finally {
        setLoading(false);
      }
    };

    getArticles();
  }, [limit]);

  return { articles, loading, error };
};