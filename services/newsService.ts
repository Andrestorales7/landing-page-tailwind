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
      image: "/images/eventos/innovar2025/equipo.jpg",
      authorImage: "/images/eventos/agenciaparle.jpg",
      content: `
        <p>
          🚜 <strong>CMP AGRO brilló en Innovar 2025 con tecnología, innovación y conexión con el productor</strong> 🌱
        </p>
        <p>
          <strong>Yguazú, marzo de 2025 —</strong> Con un balance más que positivo, CMP AGRO concluyó su participación en Innovar 2025, uno de los eventos agropecuarios más importantes del Paraguay, reafirmando su compromiso con la innovación y el acompañamiento al productor del campo.
        </p>
        <p>
          Durante los cuatro días de feria, el stand de CMP AGRO fue punto de encuentro de productores, técnicos y visitantes interesados en conocer las últimas soluciones tecnológicas aplicadas al agro. Con una amplia exhibición de productos, demostraciones en vivo y atención personalizada, la marca logró una destacada presencia entre las empresas del rubro.
        </p>
        <!-- Foto destacada: Vista general del stand de CMP AGRO con visitantes durante la feria. -->
      

        <strong>🤝 Un espacio de conexión con el productor</strong>
        <p>
          El evento fue una excelente oportunidad para intercambiar experiencias con clientes actuales y potenciales, quienes se acercaron a conocer en profundidad la propuesta integral de CMP AGRO. Nuestro equipo técnico y comercial brindó asesoramiento personalizado, resolviendo dudas y compartiendo información clave sobre el uso y beneficios de nuestros productos.
        </p>
        <!-- Foto sugerida: Personal de CMP AGRO asesorando a productores. -->
        <img src="/images/eventos/innovar2025/asesoramiento.jpg" alt="Personal de CMP AGRO asesorando a productores" style="margin: 2rem 0; border-radius: 12px;" />

        <strong>🐄 Tecnología para cada etapa de la producción</strong>
        <ul>
          <li>
            <strong>Ganadería:</strong> Se presentaron soluciones para el manejo eficiente del hato, incluyendo equipos para alimentación, sanidad y control.
          </li>
          <li>
            <strong>Ensilaje:</strong> Los visitantes pudieron observar en detalle maquinaria especializada para corte, recolección y conservación de forrajes, vitales para la alimentación animal.
          </li>
          <li>
            <strong>Horticultura:</strong> Destacamos herramientas tecnológicas enfocadas en optimizar la producción hortícola, como sistemas de riego, protección de cultivos e infraestructura productiva.
          </li>
          <li>
            <strong>Cierre y embolsado:</strong> Equipos robustos y de alta precisión fueron parte de las demostraciones que captaron la atención de los visitantes.
          </li>
        </ul>
        <!-- Foto sugerida: Equipos en exhibición y en demostración práctica. -->
        <img src="/images/eventos/innovar2025/innovar1.jpeg" alt="Equipos en exhibición y demostración práctica" style="margin: 2rem 0; border-radius: 12px;" />

        <strong>🔍 Demostraciones en vivo y alto interés del público</strong>
        <p>
          Una de las grandes atracciones del stand fueron las demostraciones en vivo, donde los asistentes pudieron ver el funcionamiento real de varios de nuestros equipos. Estas actividades despertaron gran interés, generando espacios de conversación técnica y permitiendo a los productores visualizar cómo aplicar nuestras soluciones en sus propias explotaciones.
        </p>
        

        <strong>🌟 Una experiencia que fortalece vínculos</strong>
        <p>
          Además del aspecto técnico, CMP AGRO aprovechó el espacio de Innovar 2025 para fortalecer su vínculo con el sector agropecuario paraguayo, compartiendo experiencias, escuchando necesidades y reafirmando su compromiso con el desarrollo sostenible del campo.
        </p>
        <blockquote>
          Agradecemos a todos los que nos visitaron y confiaron en nuestra propuesta. Este evento nos impulsa a seguir trabajando para ofrecer tecnología de calidad, soluciones integrales y un acompañamiento real al productor.
        </blockquote>
        

      `
    },
    {
      id: 2,
      title: "Cultivos Orgánicos Sostenibles",
      description: "Conoce las técnicas líderes en producción orgánica y su impacto positivo en el medio ambiente.",
      category: "Sostenibilidad",
      author: "agenciaparle",
      date: "2023-11-10",
      readTime: "7 min",
      image: "/images/noticias/id5.jpg",
      authorImage: "/images/eventos/agenciaparle.jpg",
      content: `
        <p>La producción orgánica sostenible se basa en prácticas agrícolas que respetan el medio ambiente, como el uso de compost y la rotación de cultivos. Estas técnicas ayudan a preservar la biodiversidad y mejorar la calidad del suelo.</p>
        <h2>Principios de la agricultura orgánica</h2>
        <ul>
          <li>No uso de pesticidas ni fertilizantes químicos</li>
          <li>Rotación de cultivos para mantener la fertilidad del suelo</li>
          <li>Promoción de la biodiversidad</li>
        </ul>
        <img src="/images/noticias/organico.jpg" alt="Cultivo orgánico" style="margin: 2rem 0; border-radius: 12px;" />
        <h3>Impacto ambiental</h3>
        <p>Los cultivos orgánicos contribuyen a la reducción de la contaminación y al uso responsable de los recursos naturales.</p>
      `
    },
    {
      id: 3,
      title: "Nuevas Tendencias en Agroindustria",
      description: "Análisis de las últimas tendencias tecnológicas aplicadas a la producción agrícola a gran escala.",
      category: "Tendencias",
      author: "agenciaparle",
      date: "2023-11-05",
      readTime: "6 min",
      image: "/images/noticias/id6.jpg",
      authorImage: "/images/eventos/agenciaparle.jpg",
      content: `
        <p>La agroindustria está adoptando tecnologías como la automatización y el análisis de datos para mejorar la eficiencia y reducir costos. Estas tendencias están transformando la manera en que se producen y distribuyen los alimentos.</p>
        <h2>Tendencias destacadas</h2>
        <ul>
          <li>Robótica y automatización en la cosecha</li>
          <li>Big Data para la gestión de cultivos</li>
          <li>Blockchain para la trazabilidad alimentaria</li>
        </ul>
        <img src="/images/noticias/agroindustria.jpg" alt="Agroindustria moderna" style="margin: 2rem 0; border-radius: 12px;" />
        <h3>El futuro de la agroindustria</h3>
        <p>La integración de estas tecnologías permitirá una producción más sostenible y eficiente, beneficiando tanto a productores como a consumidores.</p>
      `
    },
    {
      id: 4,
      title: "Innovaciones en Riego Eficiente",
      description: "Descubre los últimos sistemas de riego que ahorran agua y mejoran la productividad.",
      category: "Tecnología",
      author: "agenciaparle",
      date: "2023-10-28",
      readTime: "4 min",
      image: "/images/noticias/id7.jpg",
      authorImage: "/images/eventos/agenciaparle.jpg",
      content: `Los sistemas de riego eficiente, como el riego por goteo y la irrigación automatizada, están ayudando a los agricultores a ahorrar agua y aumentar la productividad. Estas tecnologías son esenciales para enfrentar los desafíos del cambio climático.`
    },
    {
      id: 5,
      title: "Biotecnología para Mejorar Semillas",
      description: "La biotecnología está revolucionando la calidad y resistencia de las semillas agrícolas.",
      category: "Innovación",
      author: "agenciaparle",
      date: "2023-10-20",
      readTime: "6 min",
      image: "/images/noticias/id8.jpg",
      authorImage: "/images/eventos/agenciaparle.jpg",
      content: `El desarrollo de semillas genéticamente mejoradas permite obtener cultivos más resistentes a plagas y condiciones climáticas adversas, incrementando el rendimiento y la seguridad alimentaria.`
    },
    {
      id: 6,
      title: "Agricultura Urbana: Huertos en la Ciudad",
      description: "Los huertos urbanos están ganando terreno como alternativa sostenible en las grandes ciudades.",
      category: "Sostenibilidad",
      author: "agenciaparle",
      date: "2023-10-12",
      readTime: "5 min",
      image: "/images/noticias/id9.jpg",
      authorImage: "/images/eventos/agenciaparle.jpg",
      content: `La agricultura urbana fomenta la producción local de alimentos, reduce la huella de carbono y mejora la calidad de vida en las ciudades mediante espacios verdes productivos.`
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