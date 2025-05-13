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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={rubik.variable}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
