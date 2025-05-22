import { useState, useEffect } from 'react';

export interface Article {
  id: number;
  title: string;
  description: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  authorImage: string;
  content: string; // Puede contener HTML o Markdown
}

// Esta función podría conectarse a una API real en el futuro
export const fetchArticles = async (): Promise<Article[]> => {
  const articles = [
    {
      id: 1,
      title: "Feria Innovar 2025",
      description: "Descubre cómo las nuevas tecnologías están revolucionando los cultivos y mejorando la eficiencia en el campo.",
      category: "Innovación",
      author: "agenciaparle",
      date: "2025-03-18",
      readTime: "5 min",
      image: "/images/eventos/innovar2025/innovar1.jpg",
      authorImage: "/images/eventos/agenciaparle.jpg",
      content: `
        <h2 class="text-2xl font-bold mb-4">INNOVAR: La Feria que Impulsa el Futuro del Agro</h2>
        <p>
          INNOVAR es mucho más que una feria; es el punto de encuentro donde el conocimiento, la innovación y la tecnología se fusionan para transformar la agroganadería.
        </p>
        <p>
          Un evento diseñado para quienes buscan estar a la vanguardia con las herramientas, maquinarias y nuevas tecnologías que optimizan la producción y potencian los negocios en el ámbito nacional, regional e internacional.
        </p>
        <p>
          Este evento de gran relevancia para el sector contará con la destacada presencia de <strong>CMP AGRO</strong>, líder en soluciones para horticultura, ganadería, ensilaje, confinamiento y transporte. Nuestro compromiso es brindar soluciones eficientes e innovadoras que optimicen cada eslabón de la cadena agropecuaria.
        </p>
        <img src="/images/eventos/innovar2025/innovar2.jpg" alt="Vista general del stand de CMP AGRO en Innovar 2025" style="margin: 2rem 0; border-radius: 12px;" />

        <h3 class="text-xl font-semibold mt-8 mb-2">¿Cuál es el objetivo de INNOVAR?</h3>
        <p>
          Ser el epicentro del intercambio de conocimientos, lanzamientos y avances tecnológicos que revolucionan el agro, fortaleciendo el crecimiento del sector y facilitando oportunidades de negocio que trascienden fronteras.
        </p>

        <h3 class="text-xl font-semibold mt-8 mb-2">¿Qué logra la feria?</h3>
        <ul>
          <li>✅ Conectar todos los eslabones de la comunidad agroindustrial, desde la semilla hasta la postcosecha.</li>
          <li>✅ Demostrar el enorme potencial productivo del sector agropecuario paraguayo.</li>
          <li>✅ Posicionar a Paraguay entre los países más competitivos del mundo en producción agropecuaria.</li>
        </ul>
        <img src="/images/eventos/innovar2025/innovar1.jpeg" alt="Equipos en exhibición y demostración práctica" style="margin: 2rem 0; border-radius: 12px;" />

        <h3 class="text-xl font-semibold mt-8 mb-2">¡Visítanos en INNOVAR!</h3>
        <p>
          Te esperamos en el stand de CMP AGRO, donde nuestro equipo de expertos estará listo para asesorarte y mostrarte de primera mano nuestras soluciones diseñadas para maximizar tu productividad.
        </p>
        <img src="/images/eventos/innovar2025/innovar3.jpg" alt="Personal de CMP AGRO asesorando a productores" style="margin: 2rem 0; border-radius: 12px;" />
      `
    },
    {
      id: 2,
      title: "LA SOLUCIÓN #1 PARA REDUCIR LA TEMPERATURA EN CORRALES Y ESTABLOS",
      description: "Descubra la Malla CTA Aluminet. La innovadora tecnología israelí que ya ha transformado la producción agropecuaria de miles de agroganaderos en Paraguay.",
      category: "Tendencias",
      author: "agenciaparle",
      date: "2025-02-21",
      readTime: "7 min",
      image: "/images/eventos/cta/cta1.jpg",
      authorImage: "/images/eventos/agenciaparle.jpg",
      content: `
        <h2 class="text-2xl font-bold mb-4">Malla CTA Aluminet: La Clave para un Entorno Saludable y Productivo</h2>
        <p>
          El estrés calórico es uno de los mayores desafíos en la agroindustria, afectando directamente la salud, el bienestar y el rendimiento de los animales. La <strong>Malla CTA Aluminet</strong> de CMP AGRO ofrece una solución eficaz y comprobada para reducir significativamente la temperatura en corrales y establos, optimizando la producción ganadera.
        </p>
        <img src="/images/eventos/cta/cta2.jpg" alt="Malla CTA Aluminet instalada en corral" style="margin: 2rem 0; border-radius: 12px;" />

        <h3 class="text-xl font-semibold mt-8 mb-2">¿Cómo funciona?</h3>
        <p>
          A diferencia de una simple media sombra, la Malla CTA Aluminet actúa reflejando las ondas térmicas, logrando:
        </p>
        <ul>
          <li>✅ <strong>Reducción de hasta 5°C</strong> en la temperatura del ambiente.</li>
          <li>✅ <strong>Disminución del estrés calórico</strong>, lo que mejora la salud y el bienestar de los animales.</li>
          <li>✅ <strong>Menor consumo de agua</strong>, optimizando los recursos y reduciendo costos.</li>
          <li>✅ <strong>Reducción de la frecuencia respiratoria</strong>, favoreciendo el confort animal.</li>
          <li>✅ <strong>Mayor eficiencia reproductiva</strong>, impactando positivamente en la producción ganadera.</li>
        </ul>
        <img src="/images/eventos/cta/cta2.jpg" alt="Ganado bajo Malla CTA Aluminet" style="margin: 2rem 0; border-radius: 12px;" />

        <p>
          Miles de agroganaderos en Paraguay ya han implementado esta tecnología, logrando una mayor eficiencia y rentabilidad en sus establecimientos.
        </p>

        <blockquote>
          Obtenga más información y una cotización personalizada. Contacte con nuestros asesores a través del botón de WhatsApp en la esquina inferior derecha de su dispositivo y descubra cómo la Malla CTA Aluminet puede marcar la diferencia en su producción.
        </blockquote>
        
      `
    },
    {
      id: 3,
      title: "CMP AGRO REVOLUCIONA EL MERCADO CON NUEVAS MEDIA SOMBRAS",
      description: "Innovación en protección agrícola. Descubra las nuevas media sombras de última generación, diseñadas para ofrecer máxima resistencia y eficiencia en la protección de cultivos en Paraguay.",
      category: "Tendencias",
      author: "agenciaparle",
      date: "2025-01-05",
      readTime: "6 min",
      image: "/images/eventos/cta/mediasombra.jpeg",
      authorImage: "/images/eventos/agenciaparle.jpg",
      content: `
        <h2 class="text-2xl font-bold mb-4">NUEVAS SOLUCIONES PARA LA PROTECCIÓN DE CULTIVOS</h2>
        <p>
          La exposición prolongada a los rayos solares es un desafío constante para los horticultores, afectando el rendimiento y la calidad de los cultivos.
        </p>
        <p>
          Para responder a esta necesidad, CMP AGRO introduce al mercado una nueva línea de media sombras diseñadas para brindar protección superior en las horas más críticas del día.
        </p>
        

        <h3 class="text-xl font-semibold mt-8 mb-2">¿Qué hace únicas a estas nuevas media sombras?</h3>
        <p>
          Hemos desarrollado cuatro versiones innovadoras que incorporan:
        </p>
        <ul>
          <li>✅ <strong>Bordes Reforzados</strong> &rarr; Mayor resistencia ante condiciones climáticas adversas.</li>
          <li>✅ <strong>Alta Durabilidad</strong> &rarr; Material de calidad superior que soporta los embates del clima.</li>
          <li>✅ <strong>Ojales de Alta Calidad</strong> &rarr; Instalación fácil, segura y eficiente.</li>
          <li>✅ <strong>Protección Adaptable</strong> &rarr; Diferentes niveles de translucidez, con opciones de 35% hasta 50% de sombra para un control preciso de la radiación solar.</li>
        </ul>
        

        <p>
          Optimice su producción agrícola con la mejor tecnología en protección de cultivos.
        </p>
        <blockquote>
          Solicite más información y una cotización personalizada a través de nuestro equipo de asesores.
        </blockquote>
      `
    },
    {
      id: 4,
      title: "SILOBOLSAS. LA CLAVE PARA AHORRAR Y OPTIMIZAR LA COSECHA DE GRANOS Y FORRAJES.",
      description: "Más capacidad, más protección, más rendimiento. Descubra cómo las Silobolsas de CMP AGRO pueden transformar su producción, ofreciendo almacenamiento eficiente, seguro y de bajo costo.",
      category: "Tecnología",
      author: "agenciaparle",
      date: "2024-12-28",
      readTime: "4 min",
      image: "/images/eventos/cta/silobolsas.jpeg",
      authorImage: "/images/eventos/agenciaparle.jpg",
      content: `
        <h2 class="text-2xl font-bold mb-4">NUEVAS SOLUCIONES PARA LA CONSERVACIÓN Y ALMACENAMIENTO DE CULTIVOS</h2>
        <p>
          El crecimiento de los modelos agroganaderos de alta eficiencia ha convertido a la plasticultura en un pilar fundamental para la producción.
        </p>
        <p>
          En respuesta a esta necesidad, CMP AGRO ha establecido alianzas estratégicas con los mayores fabricantes de Silobolsas de la región, brindando una solución de almacenamiento optimizado para granos y forrajes.
        </p>
        <img src="/images/eventos/cta/silobolsas2.jpeg" alt="Silobolsas CMP AGRO en campo" style="margin: 2rem 0; border-radius: 12px;" />

        <h3 class="text-xl font-semibold mt-8 mb-2">Ventajas de las Silobolsas en la Cosecha de Granos</h3>
        <p>
          Este innovador sistema permite almacenar maíz, girasol, soja, trigo, arroz y más con los siguientes beneficios:
        </p>
        <ul>
          <li>✅ <strong>Almacenamiento eficiente y de bajo costo</strong>, con una operación sencilla y segura.</li>
          <li>✅ <strong>Ubicación estratégica en el mismo potrero</strong>, reduciendo costos de flete y logística.</li>
          <li>✅ <strong>Clasificación por calidad</strong>, evitando la mezcla de granos de diferentes potreros.</li>
          <li>✅ <strong>Posibilidad de almacenar con mayor humedad</strong>, optimizando la conservación.</li>
          <li>✅ <strong>Mejores oportunidades de comercialización</strong>, permitiendo diferir la venta para maximizar ganancias.</li>
        </ul>
        

        <h3 class="text-xl font-semibold mt-8 mb-2">Beneficios en la Conservación de Granos Húmedos y Forrajes</h3>
        <p>
          El uso de Silobolsas en granos húmedos y forrajes permite:
        </p>
        <ul>
          <li>✅ <strong>Aumentar la producción de carne y leche</strong>, reduciendo costos por unidad de producto.</li>
          <li>✅ <strong>Mayor producción individual y carga animal</strong>, gracias a forrajes de alta calidad.</li>
          <li>✅ <strong>Ubicación estratégica del silo</strong>, facilitando la suplementación y minimizando pérdidas de materia seca.</li>
        </ul>
        

        <p>
          Optimice su producción con la mejor tecnología en almacenamiento agropecuario.
        </p>
        <blockquote>
          Solicite más información y una cotización personalizada con nuestro equipo de asesores.
        </blockquote>
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