import Hero from "@/components/sections/Hero";
import NoticeSlider from "@/components/sections/NoticeSlider";
import SolucionesSection from "@/components/sections/Soluciones";
import Nosotros from "@/components/sections/Nosotros";
import Marcas from "@/components/sections/Marcas";
import WhatsappContacts from "@/components/layout/WhatsappContacts";
import Noticias from "@/components/sections/Noticias";
import SEO from "@/components/SEO";


export default function HomePage() {
  return (
    <>
      <SEO
        title="CMP Agro - Soluciones para el Agro"
        description="Líder en soluciones agrícolas, ganaderas y agroindustriales en Paraguay."
        image="https://www.cmpagro.com.py/images/banner.png"
      />
      <Hero />
      <NoticeSlider
        speed={30}
        notices={[]} // Array vacío - solo mostrará el clima sin noticias adicionales
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
            link: "/ProductosPage",
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