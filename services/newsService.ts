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
  content: string;
}

// Esta función podría conectarse a una API real en el futuro
export const fetchArticles = async (): Promise<Article[]> => {
  // Por ahora, estos son los mismos datos, pero podrían venir de una API
  const articles = [
    {
      id: 1,
      title: "Tecnología en Agricultura de Precisión",
      description: "Descubre cómo las nuevas tecnologías están revolucionando los cultivos y mejorando la eficiencia en el campo.",
      category: "Innovación",
      author: "Juan Pérez",
      date: "2023-11-15",
      readTime: "5 min",
      image: "/images/noticias/id4.jpg",
      authorImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=256",
      content: `La agricultura de precisión utiliza tecnologías como sensores, drones y análisis de datos para optimizar el uso de recursos y maximizar el rendimiento de los cultivos. Estas innovaciones permiten a los agricultores tomar decisiones informadas y reducir el impacto ambiental.`
    },
    {
      id: 2,
      title: "Cultivos Orgánicos Sostenibles",
      description: "Conoce las técnicas líderes en producción orgánica y su impacto positivo en el medio ambiente.",
      category: "Sostenibilidad",
      author: "María Gómez",
      date: "2023-11-10",
      readTime: "7 min",
      image: "/images/noticias/id5.jpg",
      authorImage: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=256",
      content: `La producción orgánica sostenible se basa en prácticas agrícolas que respetan el medio ambiente, como el uso de compost y la rotación de cultivos. Estas técnicas ayudan a preservar la biodiversidad y mejorar la calidad del suelo.`
    },
    {
      id: 3,
      title: "Nuevas Tendencias en Agroindustria",
      description: "Análisis de las últimas tendencias tecnológicas aplicadas a la producción agrícola a gran escala.",
      category: "Tendencias",
      author: "Carlos Rojas",
      date: "2023-11-05",
      readTime: "6 min",
      image: "/images/noticias/id6.jpg",
      authorImage: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=256",
      content: `La agroindustria está adoptando tecnologías como la automatización y el análisis de datos para mejorar la eficiencia y reducir costos. Estas tendencias están transformando la manera en que se producen y distribuyen los alimentos.`
    },
    {
      id: 4,
      title: "Innovaciones en Riego Eficiente",
      description: "Descubre los últimos sistemas de riego que ahorran agua y mejoran la productividad.",
      category: "Tecnología",
      author: "Ana Torres",
      date: "2023-10-28",
      readTime: "4 min",
      image: "/images/noticias/id7.jpg",
      authorImage: "https://images.unsplash.com/photo-1569913486515-b74bf7751574?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=256",
      content: `Los sistemas de riego eficiente, como el riego por goteo y la irrigación automatizada, están ayudando a los agricultores a ahorrar agua y aumentar la productividad. Estas tecnologías son esenciales para enfrentar los desafíos del cambio climático.`
    },
    {
      id: 5,
      title: "Biotecnología para Mejorar Semillas",
      description: "La biotecnología está revolucionando la calidad y resistencia de las semillas agrícolas.",
      category: "Innovación",
      author: "Laura Méndez",
      date: "2023-10-20",
      readTime: "6 min",
      image: "/images/noticias/id8.jpg",
      authorImage: "https://images.unsplash.com/photo-1519340333755-c2f6c58f5c4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=256",
      content: `El desarrollo de semillas genéticamente mejoradas permite obtener cultivos más resistentes a plagas y condiciones climáticas adversas, incrementando el rendimiento y la seguridad alimentaria.`
    },
    {
      id: 6,
      title: "Agricultura Urbana: Huertos en la Ciudad",
      description: "Los huertos urbanos están ganando terreno como alternativa sostenible en las grandes ciudades.",
      category: "Sostenibilidad",
      author: "Pedro Salazar",
      date: "2023-10-12",
      readTime: "5 min",
      image: "/images/noticias/id9.jpg",
      authorImage: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=256",
      content: `La agricultura urbana fomenta la producción local de alimentos, reduce la huella de carbono y mejora la calidad de vida en las ciudades mediante espacios verdes productivos.`
    },
    {
      id: 7,
      title: "Drones para el Monitoreo de Cultivos",
      description: "El uso de drones facilita la supervisión y el análisis de grandes extensiones agrícolas.",
      category: "Tecnología",
      author: "Sofía Ramírez",
      date: "2023-09-30",
      readTime: "4 min",
      image: "/images/noticias/id11a.jpg",
      authorImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=256",
      content: `Los drones permiten obtener imágenes aéreas de alta resolución, detectar problemas en los cultivos y optimizar el uso de insumos agrícolas de manera precisa y eficiente.`
    },
    {
      id: 8,
      title: "Energía Solar en el Agro",
      description: "Paneles solares y sistemas fotovoltaicos impulsan la sostenibilidad en el campo.",
      category: "Sostenibilidad",
      author: "Ricardo Díaz",
      date: "2023-09-18",
      readTime: "5 min",
      image: "/images/noticias/id11.jpg",
      authorImage: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=256",
      content: `La implementación de energía solar en explotaciones agrícolas reduce costos energéticos y contribuye a la protección del medio ambiente, haciendo más sostenible la producción.`
    },
    {
      id: 9,
      title: "Manejo Integrado de Plagas",
      description: "Estrategias modernas para el control eficiente y ecológico de plagas agrícolas.",
      category: "Tendencias",
      author: "Gabriela Paredes",
      date: "2023-09-10",
      readTime: "6 min",
      image: "/images/noticias/id12.jpg",
      authorImage: "https://images.unsplash.com/photo-1464983953574-0892a716854b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=256",
      content: `El manejo integrado de plagas combina métodos biológicos, culturales y químicos para minimizar el impacto ambiental y proteger los cultivos de manera sostenible.`
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