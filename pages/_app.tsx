import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
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
      <SolucionesSection soluciones={[]} />
      <Nosotros image1={""} image2={""}/>
      <Footer />
      
    </>
  );
}
