import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Marcas from "@/components/sections/Marcas";
import Nosotros from "@/components/sections/Nosotros";
import NoticeSlider from "@/components/sections/NoticeSlider";
import SolucionesSection from "@/components/sections/Soluciones";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Hero />
      <NoticeSlider
        speed={30}
        notices={[
          { id: 1, text: '🌱 New Organic Fertilizer Line Now Available!' },
          { id: 2, text: '🚜 Harvest Festival: October 15-20, 2024' },
          { id: 3, text: '📢 20% Discount on Seasonal Seeds - Limited Time!' },
        ]}
      />
      <SolucionesSection soluciones={[
        {
          image: "/images/Horticultura/invernaderos/foto1.jpg", 
          title: "Horticultura",
          description: "Mejore la salud del suelo con nuestra línea de fertilizantes 100% orgánicos",
          link: "/productos/fertilizantes"
        },
        {
          image: "/images/Almacenamiento-Ensilaje-etc/comederos/comedero2.jpg",
          title: "Ensilajes",
          description: "Variedad de semillas de alta calidad y rendimiento garantizado",
          link: "/productos/semillas"
        },
        {
          image: "/images/Agropecuaria/agropecuaria.png",
          title: "Agropecuaria",
          description: "Soluciones eficientes para optimizar el uso del agua en sus cultivos",
          link: "/productos/riego"
        },
        {
          image: "/images/Envases/big-bags/big-bags-3.png",
          title: "Envases y Embalajes",
          description: "Equipos de última tecnología para todo tipo de cultivos y terrenos",
          link: "/productos/maquinaria"
        },
        {
          image: "/images/cerradora/cerradora-bolsas.png",
          title: "Maquinas Cerradoras",
          description: "Productos seguros y efectivos para la protección de sus cultivos",
          link: "/productos/agroquimicos"
        },
        {
          image: "/images/Almacenamiento-Ensilaje-etc/geomembranas/geomembrana1.jpg",
          title: "Geomembranas",
          description: "Soluciones innovadoras para maximizar el espacio de producción",
          link: "/productos/cultivo-vertical"
        },
        {
          image: "/images/tesa/tesa2.jpg",
          title: "Cintas Flexograficas",
          description: "Expertos agrícolas a su disposición para optimizar su producción",
          link: "/productos/asesoria"
        }
      ]}/>
      
      <Nosotros />
      <Marcas />
      <Footer />
    </>
  );
}
