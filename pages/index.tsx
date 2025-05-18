
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
            image: "/images/horticultura/mulching/mulching1.jpeg",
            title: "Horticultura",
            description: "",
            link: "/productos/horticultura",
          },
          {
            image: "/images/Almacenamiento-Ensilaje-etc/comederos/comedero2.jpg",
            title: "Ensilajes",
            description: "",
            link: "/productos/ensilaje",
          },
          {
            image: "/images/Agropecuaria/agropecuaria.png",
            title: "Agropecuaria",
            description: "",
            link: "/productos/agropecuaria",
          },
          {
            image: "/images/Envases/big-bags/big-bags-3.png",
            title: "Otros",
            description: "",
            link: "/ProductosPage",
          },
      
        ]}
      />
      
      <Noticias/>
      <Nosotros />
      <Marcas />
      
      
      <WhatsappContacts
        contacts={[
          {
            name: "Juan Pérez",
            profileImage: "/images/perfil1.png",
            whatsappLink: "https://wa.me/1234567890",
          },
          {
            name: "María López",
            profileImage: "/images/perfil1.png",
            whatsappLink: "https://wa.me/0987654321",
          },
        ]}
      
      
      />
    </>
  );
}