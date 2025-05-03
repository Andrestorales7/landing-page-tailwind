
import Hero from "@/components/sections/Hero";
import NoticeSlider from "@/components/sections/NoticeSlider";
import SolucionesSection from "@/components/sections/Soluciones";
import Nosotros from "@/components/sections/Nosotros";
import Marcas from "@/components/sections/Marcas";
import WhatsappContacts from "@/components/layout/WhatsappContacts";


export default function HomePage() {
  return (
    <>
      <Hero />
      <NoticeSlider
        speed={30}
        notices={[
          { id: 1, text: '🌱 New Organic Fertilizer Line Now Available!' },
          { id: 2, text: '🚜 Harvest Festival: October 15-20, 2024' },
          { id: 3, text: '📢 20% Discount on Seasonal Seeds - Limited Time!' },
        ]}
      />
      <SolucionesSection
        soluciones={[
          {
            image: "/images/Horticultura/invernaderos/foto1.jpg",
            title: "Horticultura",
            description: "",
            link: "/productos/horticultura",
          },
          {
            image: "/images/Almacenamiento-Ensilaje-etc/comederos/comedero2.jpg",
            title: "Ensilajes",
            description: "",
            link: "/productos/semillas",
          },
          {
            image: "/images/Agropecuaria/agropecuaria.png",
            title: "Agropecuaria",
            description: "",
            link: "/productos/riego",
          },
          {
            image: "/images/Envases/big-bags/big-bags-3.png",
            title: "Envases y Embalajes",
            description: "",
            link: "/productos/maquinaria",
          },
          {
            image: "/images/cerradora/cerradora-bolsas.png",
            title: "Maquinas Cerradoras",
            description: "",
            link: "/productos/agroquimicos",
          },
          {
            image: "/images/Almacenamiento-Ensilaje-etc/geomembranas/geomembrana1.jpg",
            title: "Geomembranas",
            description: "",
            link: "/productos/cultivo-vertical",
          },
          {
            image: "/images/tesa/tesa2.jpg",
            title: "Cintas Flexograficas",
            description: "",
            link: "/productos/asesoria",
          },
        ]}
      />
      <Marcas />
      <Nosotros />
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