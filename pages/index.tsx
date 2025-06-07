
import Hero from "@/components/sections/Hero";
import NoticeSlider from "@/components/sections/NoticeSlider";
import SolucionesSection from "@/components/sections/Soluciones";
import Nosotros from "@/components/sections/Nosotros";
import Marcas from "@/components/sections/Marcas";
import WhatsappContacts from "@/components/layout/WhatsappContacts";
import Noticias from "@/components/sections/Noticias";


export default function HomePage() {
  return (
    <>
      <Hero />
      <NoticeSlider
        speed={30}
        notices={[
          { id: 1, text: '🌱 EXPO PIONEROS DEL CHACO!' },
          { id: 2, text: '📅 Del 28 al 31 de Mayo' },
          { id: 3, text: '📢 La Feria Agropecuaria mas importante!' },
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
            link: "/ProductosPage",
          },
      
        ]}
      />
      
      <Noticias/>
      <Nosotros />
      <Marcas />
      
      
      <WhatsappContacts
      />
    </>
  );
}