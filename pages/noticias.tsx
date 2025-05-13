import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/sections/Footer';
import NoticiasSection from '../components/sections/NoticiasSection';

const NoticiasPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Noticias | Agronomía Paraguay</title>
        <meta name="description" content="Últimas noticias del sector agrícola en Paraguay" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main>
        <div className="pt-20">  {/* Añadido para dar espacio bajo el navbar fijo */}
          <NoticiasSection />
        </div>
      </main>
      
    </>
  );
};

export default NoticiasPage;