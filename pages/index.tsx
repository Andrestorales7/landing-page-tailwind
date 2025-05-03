import Hero from "@/components/sections/Hero";
import NoticeSlider from "@/components/sections/NoticeSlider";
import SolucionesSection from "@/components/sections/Soluciones";
import Nosotros from "@/components/sections/Nosotros";
import Marcas from "@/components/sections/Marcas";

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

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/1234567890" // Reemplaza con tu número de WhatsApp
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        aria-label="Contactar por WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 6L0 24l6-1.6a11.94 11.94 0 0 0 6 1.6c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.28-1.45l-.38-.22-3.55.95.95-3.55-.22-.38A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.82-1.9-.92-.25-.1-.43-.14-.6.14-.18.28-.7.92-.86 1.1-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.25-1.37-.83-.74-1.4-1.65-1.57-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.1-.18.05-.35-.02-.5-.07-.14-.6-1.43-.82-1.95-.22-.52-.42-.45-.6-.46h-.52c-.18 0-.46.07-.7.35-.24.28-.92.9-.92 2.2s.95 2.55 1.08 2.73c.14.18 1.87 2.85 4.55 3.98.63.27 1.12.43 1.5.55.63.2 1.2.17 1.65.1.5-.07 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32z" />
        </svg>
      </a>
    </>
  );
}