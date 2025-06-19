import Hero from "@/components/sections/Hero";
import NoticeSlider from "@/components/sections/NoticeSlider";
import SolucionesSection from "@/components/sections/Soluciones";
import Nosotros from "@/components/sections/Nosotros";
import Marcas from "@/components/sections/Marcas";
import WhatsappContacts from "@/components/layout/WhatsappContacts";
import Noticias from "@/components/sections/Noticias";
import SEO from "@/components/SEO";


export default function HomePage() {
  // Schema específico para la homepage
  const homepageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "CMP Agro - Líder en Soluciones Agrícolas",
    "description": "Empresa líder en soluciones agrícolas, ganaderas y agroindustriales en Paraguay. Productos de calidad para horticultura, ensilaje y agropecuaria.",
    "url": "https://www.cmpagro.com.py",
    "mainEntity": {
      "@id": "https://www.cmpagro.com.py/#organization"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": "https://www.cmpagro.com.py"
        }
      ]
    }
  };

  return (
    <>
      <SEO
        title="CMP Agro - Líder en Soluciones Agrícolas, Ganaderas y Agroindustriales"
        description="Empresa líder en Paraguay especializada en productos para horticultura, ensilaje, agropecuaria y agroindustria. Calidad garantizada desde 2010."
        url="https://www.cmpagro.com.py"
        image="https://www.cmpagro.com.py/images/banner.png"
        type="website"
        structuredData={homepageSchema}
      />
      <Hero />
      <NoticeSlider
        speed={30}
        notices={[
          {
            id: 1,
            text: "📅 8va Edición de la Expo COOPROLANDA • Ciudad Dr. Juan Eulogio Estigarribia • 25 al 27 de junio de 2025 • ¡Los esperamos en nuestro stand!"
          }
        ]}
      />
      <SolucionesSection
        soluciones={[
          {
            image: "/images/productos/horticultura/mulching1.jpg",
            title: "Horticultura",
            description: "",
            link: "/productos/horticultura",
          },
          {
            image: "/images/productos/ensilaje/ensilaje1.jpg",
            title: "Ensilajes",
            description: "",
            link: "/productos/ensilaje",
          },
          {
            image: "/images/productos/agropecuaria/agropecuaria.jpg",
            title: "Agropecuaria",
            description: "",
            link: "/productos/agropecuaria",
          },
          {
            image: "/images/productos/inoculantes/SupraSil_portada.jpg",
            title: "Mas Soluciones",
            description: "",
            link: "/productos",
          },
        ]}
      />
      <Noticias />
      <Nosotros />
      <Marcas />
      <WhatsappContacts />
    </>
  );
}