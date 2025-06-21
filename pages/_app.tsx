import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Rubik } from "next/font/google";

// Configura la fuente Rubik
const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-rubik',
  display: 'swap',
});

// Importación optimizada de Material Icons
const materialIcons = () => {
  return (
    <style jsx global>{`
      /* Cargar Material Icons de forma óptima */
      @font-face {
        font-family: 'Material Icons';
        font-style: normal;
        font-weight: 400;
        src: url(https://fonts.gstatic.com/s/materialicons/v140/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2) format('woff2');
        font-display: block; /* Importante: cambia a block para evitar FOUT */
      }
      
      .material-icons {
        font-family: 'Material Icons';
        font-weight: normal;
        font-style: normal;
        font-size: 24px;
        line-height: 1;
        letter-spacing: normal;
        text-transform: none;
        display: inline-block;
        white-space: nowrap;
        word-wrap: normal;
        direction: ltr;
        -webkit-font-feature-settings: 'liga';
        -webkit-font-smoothing: antialiased;
      }
    `}</style>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={rubik.variable}>
      {materialIcons()}
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
