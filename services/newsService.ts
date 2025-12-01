import { useState, useEffect } from 'react';

export interface Article {
  id: number;
  title: string;
  description: string;
  category: string;
  author: string;
  date: string;
  image: string;
  authorImage: string;
  content: string; // Puede contener HTML o Markdown
}

// Esta función podría conectarse a una API real en el futuro
export const fetchArticles = async (): Promise<Article[]> => {
  const articles = [
    {
      id: 13,
      title: "CMP Agro presente en la Expo Feria San Pedro 2025",
      description: "Un espacio de encuentro real con el productor paraguayo, donde confirmamos la búsqueda de soluciones duraderas y adaptadas al clima local.",
      category: "Eventos",
      author: "CMP Noticias",
      date: "2025-11-15",
      image: "/images/eventos/feria-sanpedro/feria-hero.webp",
      authorImage: "/images/eventos/noticias-logo.webp",
      content: `
        <article class="news-content">
          <h2 class="text-2xl font-bold mb-4">Un encuentro auténtico con el productor paraguayo</h2>
          <p class="mb-4">
            La <strong>Expo Feria de San Pedro 2025</strong>, realizada del <strong>12 al 15 de noviembre en Santa Rosa del Aguaray</strong>, fue mucho más que un evento ganadero: fue un espacio de encuentro real con el productor paraguayo, donde entendimos de primera mano sus desafíos, necesidades y esperanzas para esta nueva temporada de calor.
          </p>

          <p class="mb-4">
            Para CMP Agro, participar de esta edición significó confirmar algo que escuchamos una y otra vez en cada charla: <strong>el productor paraguayo busca soluciones duraderas, confiables y adaptadas al clima que enfrenta en el día a día.</strong>
          </p>

          <figure class="my-8">
            <img src="/images/eventos/feria-sanpedro/feria-content1.webp" alt="Stand de CMP Agro en la Expo Feria San Pedro 2025" class="rounded-xl w-full shadow-lg" />
          </figure>

          <h3 class="text-xl font-semibold mt-8 mb-4">Conexión directa con el campo paraguayo</h3>
          <p class="mb-4">
            Durante todos los días de feria, nuestro stand recibió a productores, ganaderos, técnicos y amigos del campo que se acercaron para conversar, compartir experiencias y conocer más sobre las tecnologías que ponemos al servicio del agro nacional.
          </p>

          <p class="mb-4">
            Cada intercambio reforzó nuestro compromiso de seguir acompañando al sector con productos que realmente marcan la diferencia en el rendimiento y bienestar del campo.
          </p>

          <h3 class="text-xl font-semibold mt-8 mb-4">Desafíos y necesidades del productor</h3>
          <p class="mb-4">
            Muchos productores nos contaron sus preocupaciones por:
          </p>
          <ul class="list-none space-y-3 mb-6">
            <li>🌡️ <span class="ml-2"><strong>La sequía y el calor extremo</strong> que afecta la productividad</span></li>
            <li>🐄 <span class="ml-2"><strong>El manejo del ganado</strong> en condiciones adversas</span></li>
            <li>⚡ <span class="ml-2"><strong>La necesidad de soluciones prácticas</strong> para hacer más eficiente su trabajo</span></li>
          </ul>

          <p class="mb-4">
            Otros productores compartieron cómo las herramientas de CMP Agro ya les están ayudando en sus sistemas productivos. Estas conversaciones fueron valiosas y nos impulsan a seguir innovando para brindar un respaldo cada vez más fuerte.
          </p>

          <figure class="my-8">
            <img src="/images/eventos/feria-sanpedro/feria-content2.webp" alt="Interacción con productores en la Expo Feria San Pedro 2025" class="rounded-xl w-full shadow-lg" />
          </figure>

          <h3 class="text-xl font-semibold mt-8 mb-4">Compromiso renovado con el agro paraguayo</h3>
          <p class="mb-4">
            La Expo Feria San Pedro 2025 nos recordó algo fundamental: <strong>cuando el productor gana, el campo paraguayo avanza.</strong>
          </p>

          <p class="mb-4">
            Y nuestro compromiso es estar a su lado, en cada campaña, con tecnología internacional y soluciones pensadas para los desafíos reales del país.
          </p>

          <blockquote class="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 my-6">
            <p class="font-semibold mb-2 text-green-800">💚 Cuando el productor gana, el campo paraguayo avanza.</p>
            <p class="text-green-700">Nuestro compromiso es estar a su lado, en cada campaña, con tecnología internacional y soluciones pensadas para los desafíos reales del país.</p>
          </blockquote>

          <p class="mb-4">
            Cerramos esta edición con la satisfacción de haber compartido cuatro días de conexión, aprendizaje y crecimiento conjunto.
          </p>

          <h3 class="text-xl font-semibold mt-8 mb-4">Agradecimiento y compromiso futuro</h3>
          <p class="mb-4">
            Gracias a todos los que nos visitaron. En CMP Agro seguiremos trabajando para ofrecer soluciones que impulsen la productividad, el bienestar y la sostenibilidad del campo paraguayo.
          </p>

          <blockquote class="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500 my-6">
            <p class="font-semibold mb-2">CMP Agro – Soluciones duraderas para tu campo</p>
            <p>Para conocer más sobre nuestras tecnologías y soluciones, contáctenos a través de nuestros canales oficiales.</p>
          </blockquote>
        </article>
      `,
    },
    {
      id: 12,
      title: "CMP se presentó en el CEA 2025: Acompañamos al productor paraguayo con innovación y compromiso ",
      description: "Durante el CEA 2025, la especialista Janaina Martuscello compartió su visión sobre la importancia de las pasturas tropicales en el futuro de la ganadería.",
      category: "Eventos",
      author: "CMP Noticias",
      date: "2025-11-10",
      image: "/images/eventos/CEA2025/portada-cea.webp",
      authorImage: "/images/eventos/noticias-logo.webp",
      content: `
        <article class="news-content">
          <h2 class="text-2xl font-bold mb-4">CMP Agro presente en el CEA 2025</h2>
          <p class="mb-4">
            <strong>Acompañamos al productor paraguayo con innovación y compromiso</strong>
          </p>

          <p class="mb-4">
            En CMP Agro participamos del <strong>Congreso de Exposición de la Asociación Rural del Paraguay (CEA 2025)</strong>, el evento ganadero más importante del país, donde presentamos nuestras tecnologías y soluciones diseñadas para impulsar la productividad y el bienestar del sector.
          </p>

          <h3 class="text-xl font-semibold mt-8 mb-4">Soluciones innovadoras presentadas:</h3>
          <ul class="list-none space-y-3 mb-6">
            <li>🔹 <span class="ml-2"><strong>Inoculantes SupraSil:</strong> optimizan el silo y mejoran el aprovechamiento del alimento, generando mayor producción de carne y leche.</span></li>
            <li>🔹 <span class="ml-2"><strong>Biosales Genofeed:</strong> innovación en bionutrición ruminal que mejora digestibilidad y rendimiento.</span></li>
            <li>🔹 <span class="ml-2"><strong>Comederos resistentes:</strong> facilitan la alimentación diaria del ganado.</span></li>
            <li>🔹 <span class="ml-2"><strong>Geomembranas y reservorios:</strong> soluciones eficientes para el almacenamiento de agua y efluentes.</span></li>
            <li>🔹 <span class="ml-2"><strong>Medias sombras:</strong> diseñadas para mejorar el confort animal y la productividad en condiciones extremas.</span></li>
          </ul>

          <figure class="my-8">
            <img src="/images/eventos/CEA2025/CEA-BIOSALES.webp" alt="Productos Biosales presentados en CEA 2025" class="rounded-xl w-full shadow-lg" />
          </figure>

          <p class="mb-4">
            Con más de 25 años de trayectoria, en CMP Agro reafirmamos nuestro compromiso con el desarrollo del sector ganadero paraguayo, acercando innovación y tecnología internacional al productor local.
          </p>

          <p class="mb-4">
            Nuestra participación en el CEA 2025 refuerza nuestro propósito de seguir acompañando al productor con soluciones reales, duraderas y adaptadas al campo paraguayo.
          </p>

          <h2 class="text-2xl font-bold mt-12 mb-4">El buen establecimiento de pasturas: una inversión para el futuro de la ganadería paraguaya</h2>
          
          <p class="mb-4">
            El establecimiento adecuado de pasturas es una de las bases más importantes para garantizar una ganadería eficiente, rentable y sostenible. En un contexto donde el productor enfrenta el desafío de producir más en menos espacio, la planificación y el manejo responsable del suelo se vuelven esenciales para mejorar la alimentación del ganado y cuidar el ambiente.
          </p>

          <figure class="my-8">
            <img src="/images/eventos/CEA2025/janina-martuscello.webp" alt="Janaina Martuscello en el CEA 2025" class="rounded-xl w-full shadow-lg" />
          </figure>

          <p class="mb-4">
            Durante el <strong>33° Congreso CEA 2025</strong>, la especialista <strong>Janaina Martuscello</strong> compartió su visión sobre la importancia de las pasturas tropicales en el futuro de la ganadería, destacando la necesidad de una correcta planificación, análisis del suelo y reposición constante de nutrientes.
          </p>

          <blockquote class="bg-gray-50 p-6 rounded-lg border-l-4 border-green-500 my-6">
            <p class="font-semibold mb-2">"El suelo no es un recurso infinito; necesitamos reponer los nutrientes que el sistema extrae para sostener la productividad"</p>
            <p class="text-sm">- Janaina Martuscello, especialista en pasturas tropicales</p>
          </blockquote>

          <p class="mb-4">
            Martuscello resaltó que un buen manejo de pasturas incrementa la capacidad forrajera, la carga animal y la sostenibilidad del sistema ganadero.
          </p>

          <h3 class="text-xl font-semibold mt-8 mb-4">Compromiso con el futuro ganadero</h3>
          <p class="mb-4">
            En CMP Agro, coincidimos plenamente con esta visión: <strong>cada buen pasto establecido hoy es una inversión en el futuro de la producción ganadera paraguaya</strong>.
          </p>

          <p class="mb-4">
            Por eso seguimos trabajando junto al productor, acercando soluciones que potencien la eficiencia del campo y el cuidado del suelo.
          </p>

          <blockquote class="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500 my-6">
            <p class="font-semibold mb-2">¡Juntos construimos el futuro del agro paraguayo!</p>
            <p>Para más información sobre nuestras soluciones y participación en eventos, contáctenos a través de nuestros canales oficiales.</p>
          </blockquote>
        </article>
      `,
    },
    {
      id: 11,
      title: "CMP Agro Estará presente en el CEA 2025",
      description: "Participamos en el evento ganadero más importante del país, presentando soluciones innovadoras para el sector productivo.",
      category: "Eventos",
      author: "CMP Noticias",
      date: "2025-10-02",
      image: "/images/eventos/congreso-ganaderia2025/portada2.webp",
      authorImage: "/images/eventos/noticias-logo.webp",
      content: `
        <article class="news-content">
          <h2 class="text-2xl font-bold mb-4">CMP Agro presente en el Congreso de Exposición de la Asociación Rural del Paraguay</h2>
          <p class="mb-4">
            Nos enorgullece anunciar nuestra participación en el <strong>Congreso de Exposición de la Asociación Rural del Paraguay (CEA)</strong>, el evento ganadero más importante del país, donde presentaremos nuestras soluciones y tecnologías de vanguardia para el sector productivo.
          </p>
          <p class="mb-4">
            Con más de 25 años de trayectoria, en CMP Agro reafirmamos nuestro compromiso de brindar soluciones reales al productor paraguayo, representando marcas líderes y tecnologías innovadoras que marcan la diferencia en el campo.
          </p>

          <h3 class="text-xl font-semibold mt-8 mb-4">Soluciones innovadoras que presentaremos</h3>
          <ul class="list-none space-y-3 mb-6">
            <li>🔹 <span class="ml-2"><strong>Inoculantes SupraSil:</strong> Optimizan el silo para un mejor aprovechamiento del alimento, resultando en mayor producción de carne y leche.</span></li>
            <li>🔹 <span class="ml-2"><strong>Biosales Genofeed:</strong> Innovación en bionutrición ruminal que aporta minerales, enzimas y microorganismos específicos para mejorar la digestibilidad y el rendimiento.</span></li>
            <li>🔹 <span class="ml-2"><strong>Comederos:</strong> Soluciones prácticas y resistentes que facilitan la alimentación diaria.</span></li>
            <li>🔹 <span class="ml-2"><strong>Geomembranas y reservorios:</strong> Ideales para el almacenamiento eficiente de agua y efluentes.</span></li>
            <li>🔹 <span class="ml-2"><strong>Medias sombras:</strong> Diseñadas para mejorar el confort animal, incrementando el bienestar y la productividad en condiciones extremas.</span></li>
          </ul>

          <div class="my-8 flex justify-center">
            <video controls class="rounded-xl w-3/4 md:w-2/3 lg:w-1/2">
              <source src="/images/eventos/congreso-ganaderia2025/congreso-ganaderia1.mp4" type="video/mp4" />
              Tu navegador no soporta la reproducción de videos.
            </video>
          </div>

          <h3 class="text-xl font-semibold mt-8 mb-4">Compromiso con el sector productivo</h3>
          <p class="mb-4">
            Nuestra participación en el CEA 2025 reafirma nuestro compromiso continuo con el desarrollo del sector ganadero paraguayo, acercando tecnologías de vanguardia que impulsan la productividad y eficiencia en el campo.
          </p>
          
          <blockquote class="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500 my-6">
            <p class="font-semibold mb-2">¡Los esperamos en nuestro stand!</p>
            <p>Para más información sobre el congreso, visite la web oficial: <a href="https://congresocea.com.py/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">congresocea.com.py</a></p>
          </blockquote>
        </article>
      `,
    },
    {
      id: 10,
      title: "CMP Agro presente en la Expo Norte Concepción 2025",
      description: "La vidriera de Concepción reunió a productores, empresas y amigos en una semana de innovación, negocios y actividades para el agro.",
      category: "Eventos",
      author: "CMP Noticias",
      date: "2025-09-09",
      image: "/images/eventos/expo-norte/expo-portada.webp",
      authorImage: "/images/eventos/noticias-logo.webp",
      content: `
        <article class="news-content">
          <h2 class="text-2xl font-bold mb-4">CMP Agro presente en la Expo Norte Concepción 2025</h2>
          <p class="mb-4">
            Del <strong>2 al 9 de septiembre</strong>, en la ciudad de Concepción, CMP Agro acompañó una vez más a la <strong>Expo Norte Concepción</strong>, la gran vidriera del norte del país que reúne a productores, empresas y protagonistas del agro nacional.
          </p>
          <p class="mb-4">
            Durante la feria, presentamos nuestras soluciones para las distintas necesidades de los productores, acercándonos un año más a nuestros clientes y amigos de la zona.
          </p>
          <figure class="my-8">
            <img src="/images/eventos/expo-norte/expo-1.webp" alt="Stand de CMP Agro en la Expo Norte Concepción 2025" class="rounded-xl w-full shadow-lg" />
          </figure>

          <h3 class="text-xl font-semibold mt-8 mb-4">Una semana de innovación y negocios</h3>
          <p class="mb-4">
            Fue una oportunidad para realizar negocios, intercambiar ideas, compartir conocimientos y disfrutar de un ambiente único, con música, competencias y diversas actividades que caracterizan a este gran evento.
          </p>
          <p class="mb-4">
            Durante los días de exposición, nuestro equipo tuvo la oportunidad de interactuar directamente con productores de la región, conocer sus necesidades específicas y presentar las mejores soluciones tecnológicas para optimizar sus procesos productivos.
          </p>
          <figure class="my-8">
            <img src="/images/eventos/expo-norte/expo-2.webp" alt="Interacción con productores en la Expo Norte Concepción" class="rounded-xl w-full shadow-lg" />
          </figure>

          <h3 class="text-xl font-semibold mt-8 mb-4">Fortaleciendo vínculos en el norte del país</h3>
          <p class="mb-4">
            Desde CMP Agro seguimos apostando a este tipo de encuentros para estar siempre cerca de nuestros clientes y fortalecer los vínculos que impulsan el desarrollo del campo paraguayo.
          </p>
          <p class="mb-4">
            La Expo Norte Concepción se consolida año tras año como un evento fundamental para el sector agropecuario del norte del país, y nuestra participación reafirma el compromiso de acompañar a los productores con soluciones innovadoras y de calidad.
          </p>
          <figure class="my-8">
            <img src="/images/eventos/expo-norte/expo-3.webp" alt="Actividades y presentaciones en la Expo Norte Concepción 2025" class="rounded-xl w-full shadow-lg" />
          </figure>

          <p class="mb-4">
            Agradecemos a todos los que se acercaron a compartir con nosotros durante esta importante semana agropecuaria.
          </p>
          
          <blockquote class="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500 my-6">
            <p class="font-semibold mb-2">¡Nos vemos en la próxima edición!</p>
            <p>Para conocer más sobre nuestras soluciones y servicios, contáctenos a través de nuestros canales oficiales.</p>
          </blockquote>
        </article>
      `,
    },
    {
      id: 9,
      title: "Inauguración de renovada sucursal en Minga Guazú",
      description: "Soluciones eficientes para el campo, más cerca del productor paraguayo.",
      category: "Institucional",
      author: "CMP Noticias",
      date: "2025-08-08",
      image: "/images/eventos/sucursal-minga/portada-sucursal.webp",

      authorImage: "/images/eventos/noticias-logo.webp",
      content: `
        <article class="news-content">
          <h2 class="text-2xl font-bold mb-4">Expansión estratégica para estar más cerca del productor</h2>
          <p class="mb-4">
            CMP Agro continúa expandiendo su presencia en Paraguay con la inauguración de su tercera sucursal, ubicada en la ciudad de Minga Guazú, departamento de Alto Paraná.
          </p>
          <p class="mb-4">
            Este nuevo punto de atención reafirma nuestro compromiso con los trabajadores del campo, acercando soluciones más eficientes, innovadoras y sustentables para el productor paraguayo.
          </p>
          <figure class="my-8">
            <img src="/images/eventos/sucursal-minga/portada-sucursal.webp" alt="Fachada de la nueva sucursal de CMP Agro en Minga Guazú" class="rounded-xl w-full shadow-lg" />
          </figure>

          <h3 class="text-xl font-semibold mt-8 mb-4">Ubicación estratégica</h3>
          <p class="mb-4">
            Con una sucursal renovada y equipada para ofrecer la mejor experiencia, invitamos a todos nuestros clientes y amigos a visitarnos en:
          </p>
          <div class="bg-green-50 p-5 rounded-lg border-l-4 border-green-500 my-5 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <p class="font-bold text-lg text-green-800">Km 16 Lado Monday – Sobre Ruta Internacional PY02</p>
          </div>
         

          <h3 class="text-xl font-semibold mt-8 mb-4">Compromiso con el desarrollo local</h3>
          <p class="mb-4">
            Seguimos trabajando para estar más cerca, brindar atención personalizada y garantizar el acceso a productos y tecnologías que impulsan el desarrollo del agro en todo el país.
          </p>
          <p class="mb-4">
            Esta nueva sucursal se suma a nuestra red de atención, ofreciendo toda la gama de productos y servicios que caracterizan a CMP Agro, con el respaldo técnico y la calidad que nos distingue.
          </p>
        
          
          <blockquote class="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500 my-6">
            <p class="font-semibold mb-2">¡Los esperamos en nuestra nueva sucursal!</p>
            <p>Horarios de atención: Lunes a viernes de 07:30 a 17:30 hs.</p>
          </blockquote>
        </article>
      `,
    },
    {
      id: 8,
      title: "CMP Agro presenta en Paraguay las nuevas bolsas de rafia Rafitec",
      description: "Tecnología única en envases diseñados para productos que merecen ser vistos.",
      category: "Productos",
      author: "CMP Noticias",
      date: "2025-08-08",
      image: "/images/eventos/rafitec/lateral-view.webp",
      authorImage: "/images/eventos/noticias-logo.webp",
      content: `
        <article class="news-content">
          <h2 class="text-2xl font-bold mb-4">Innovación en soluciones de empaque premium</h2>
          <p class="mb-4">
            Nuevos lanzamientos de Rafitec llegan al mercado paraguayo de la mano de CMP Agro, ofreciendo soluciones de empaque que combinan resistencia, presentación premium y tecnología de última generación.
          </p>

          <h3 class="text-xl font-semibold mt-8 mb-4">Sacaria Lateral View</h3>
          <p class="mb-4">
            Como parte de la línea Premium Sack de Rafitec, la <strong>Sacaria Lateral View</strong> se destaca por su resistencia, seguridad y apariencia impecable. Su laminación de polipropileno garantiza la protección del contenido y elimina la necesidad de recubrimientos internos.
          </p>
          <p class="mb-4">
            Gracias a su tecnología de impresión y laminación interna, asegura la seguridad alimentaria, mientras que el diseño de vista lateral permite mostrar el producto real, generando un fuerte impacto visual y aumentando la efectividad del marketing en el punto de venta.
          </p>
          <figure class="my-8 flex justify-center">
            <img src="/images/eventos/rafitec/portada-rafitec.webp" alt="Bolsas Sacaria Lateral View de Rafitec" class="rounded-xl w-3/4 md:w-2/3 lg:w-1/2" />
          </figure>

          <h3 class="text-xl font-semibold mt-8 mb-4">Sacaria Special Coating</h3>
          <p class="mb-4">
            Desarrollados para quienes buscan protección extra, rendimiento técnico y una presentación llamativa, los sacos con recubrimiento metalizado ofrecen un acabado premium que resalta la marca y protege el producto.
          </p>
          <p class="mb-4">
            El efecto metálico impide que la luz degrade la materia prima, asegurando su integridad y calidad durante más tiempo, además de ofrecer una imagen diferenciadora en el mercado.
          </p>
          <figure class="my-8">
            <img src="/images/eventos/rafitec/special-coating.webp" alt="Bolsas Sacaria Special Coating con efecto metalizado" class="rounded-xl w-full" />
          </figure>

          <h3 class="text-xl font-semibold mt-8 mb-4">Disponibles en Paraguay</h3>
          <p class="mb-4">
            Ambos modelos ya están disponibles en el mercado paraguayo, con calidad garantizada y el respaldo de CMP Agro como representante y distribuidor oficial de Rafitec. Realizamos envíos a todo el país.
          </p>
          <p class="mb-4">
            Estas soluciones innovadoras están diseñadas para empresas que buscan destacar la calidad de sus productos a través de un envase que comunica valor y distinción.
          </p>
          
          <blockquote class="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500 my-6">
            <p class="font-semibold mb-2">¡Eleve la presentación de sus productos con Rafitec!</p>
            <p>Para más información y pedidos, visite nuestras sucursales o contacte con nuestros asesores a través de nuestros canales oficiales.</p>
          </blockquote>
        </article>
      `,
    },
    {
      id: 7,
      title: "CMP Agro y Rafitec en el VI Congreso Paraguayo de Semillas",
      description: "Innovación y soluciones para el sector semillero en un evento que reunió a los protagonistas del agro nacional.",
      category: "Eventos",
      author: "CMP Noticias",
      date: "2025-08-07",
      image: "/images/eventos/congreso-semillas/portada-congreso.webp",
      authorImage: "/images/eventos/noticias-logo.webp",
      content: `
        <article class="news-content">
          <h2 class="text-2xl font-bold mb-4">CMP Agro y Rafitec: Protagonistas en el VI Congreso Paraguayo de Semillas</h2>
          <p class="mb-4">
            CMP Agro, en conjunto con Rafitec, participó exitosamente del <strong>VI Congreso Paraguayo de Semillas</strong>, realizado los días 6 y 7 de agosto en el Gran Nobile Hotel & Convention de Ciudad del Este.
          </p>
          <p class="mb-4">
            El evento, organizado por la <strong>Asociación de Productores de Semillas del Paraguay (APROSEMP)</strong>, el <strong>Servicio Nacional de Calidad y Sanidad Vegetal y de Semillas (SENAVE)</strong> y la <strong>Asociación Paraguaya de Obtentores Vegetales (PARPOV)</strong>, reunió a productores, técnicos, investigadores, empresas y referentes de la industria semillera nacional e internacional.
          </p>
          

          <h3 class="text-xl font-semibold mt-8 mb-4">Soluciones innovadoras para el sector semillero</h3>
          <p class="mb-4">
            Durante las dos jornadas, nuestro equipo recibió a clientes, amigos y visitantes en el stand, presentando soluciones únicas para conservación, almacenamiento y empaque de semillas, destacando la calidad y durabilidad de las bolsas y big bags Rafitec, así como otras tecnologías que ofrecemos para el sector.
          </p>
          <p class="mb-4">
            Nuestra propuesta se centró en productos específicamente diseñados para garantizar la integridad y calidad de las semillas durante todo el proceso de almacenamiento y distribución, factor clave para el éxito de los productores semilleros.
          </p>
          <figure class="my-2 flex justify-center">
            <video controls class="rounded-xl w-3/4 md:w-2/3 lg:w-1/2">
              <source src="/images/eventos/congreso-semillas/video-semillas.mp4" type="video/mp4" />
              Tu navegador no soporta la reproducción de videos.
            </video>
          </figure>

          <h3 class="text-xl font-semibold mt-8 mb-4">Networking e intercambio de conocimientos</h3>
          <p class="mb-4">
            Además de presentar nuestras soluciones, escuchamos activamente en espacios de networking e intercambio de conocimientos, fortaleciendo vínculos y generando nuevas oportunidades de colaboración para seguir aportando al desarrollo del agro paraguayo.
          </p>
          <p class="mb-4">
            El congreso también sirvió como plataforma para conocer las últimas tendencias e innovaciones en el sector semillero, permitiéndonos alinear nuestras soluciones con las necesidades actuales y futuras de los productores.
          </p>
          <figure class="my-8">
            <img src="/images/eventos/congreso-semillas/congreso3.webp" alt="Equipo de CMP Agro y Rafitec interactuando con visitantes" class="rounded-xl w-full" />
          </figure>

          <p class="mb-4">
            Agradecemos a todos los que se acercaron a nuestro stand y fueron parte de esta experiencia. Nos despedimos con el compromiso de seguir sembrando innovación y de reencontrarnos en la próxima edición.
          </p>
          <blockquote class="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500 my-6">
            <p class="font-semibold mb-2">¡Gracias por acompañarnos en este importante evento!</p>
            <p>Para conocer más sobre nuestras soluciones para el sector semillero, contáctenos a través de nuestros canales oficiales.</p>
          </blockquote>
        </article>
      `,
    },
    {
      id: 6,
      title: "CMP Agro estará presente en Cooprolanda 2025",
      description: "Participaremos en la Expo-Feria Lechera más importante del país, presentando soluciones innovadoras.",
      category: "Eventos",
      author: "CMP Noticias",
      date: "2025-06-20",
      image: "/images/eventos/cooprolanda025/portadacoopro1.webp",
      authorImage: "/images/eventos/noticias-logo.webp",
      content: `
  <article class="news-content">
    <h2 class="text-2xl font-bold mb-4">CMP Agro dice presente en Cooprolanda 2025</h2>
    <p class="mb-4">
      Del <strong>25 al 27 de junio</strong>, en el km 222 de la Ruta PY02, Juan Eulogio Estigarribia (ex Campo 9), se celebrará una nueva edición de <strong>Cooprolanda</strong>, la Expo-Feria Lechera más importante del país.
    </p>
    <p class="mb-4">
      Este evento se consolida como un punto de encuentro clave para productores, técnicos, empresas y todos los protagonistas de la industria lechera nacional, con un enfoque en <strong>innovación, genética, eficiencia y sostenibilidad</strong>.
    </p>
    <p class="mb-4">
      En esta edición 2025, se esperan niveles récord de participación, tanto en expositores como en público, con un programa que incluye muestras de animales de alto rendimiento genético, lideradas por el reconocido Dr. Anastacio Invernizzi, y una amplia exposición de tecnología de punta aplicada al sector lechero.
    </p>

    <!-- En vez del iframe, pon esto: -->
    <div class="my-8 flex flex-col items-center">
      <a
        href="https://www.youtube.com/watch?v=YWD_aIaIaMY&t=79s"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
      >
        ▶️ Ver video en YouTube
      </a>
      <p class="mt-2 text-sm text-gray-500">El video se abrirá en una nueva pestaña.</p>
    </div>
    
    <h3 class="text-xl font-semibold mt-8 mb-4">📍 CMP Agro estará presente una vez más</h3>
    <p class="mb-4">
      Compartiremos con clientes, amigos y productores soluciones concretas para mejorar la eficiencia y conservación en el agro. En nuestro stand podrán conocer de cerca tecnologías como:
    </p>
    <ul class="list-none space-y-2 mb-6">
      <li>🔹 <span class="ml-2"><strong>Silobolsas</strong> para almacenamiento seguro y eficiente.</span></li>
      <li>🔹 <span class="ml-2"><strong>Inoculación de reservas forrajeras</strong> para optimizar el rendimiento.</span></li>
      <li>🔹 <span class="ml-2"><strong>Mantas, redes, hilos y films para fardos</strong> de alta calidad y resistencia.</span></li>
      <li>🔹 <span class="ml-2"><strong>Máquinas costuradoras y selladoras de bolsas</strong> para facilitar el trabajo.</span></li>
      <li>🔹 <span class="ml-2"><strong>Soluciones para almacenamiento y transporte de líquidos</strong> con la mejor tecnología.</span></li>
      <li>🔹 <span class="ml-2"><strong>Y mucho más</strong> para potenciar su producción.</span></li>
    </ul>
    
    <figure class="my-8">
      <img src="/images/eventos/cooprolanda025/fieldcoopro.webp" alt="Stand de CMP AGRO en Cooprolanda 2025" class="rounded-xl w-full" />
    </figure>

    <p class="mb-4">
      Los esperamos para conversar, asesorarles y seguir apostando juntos a una agroindustria más productiva, sostenible y preparada para el futuro.
    </p>
    <blockquote class="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500 my-6">
      <p class="font-semibold mb-2">¡Nos vemos en Cooprolanda 2025!</p>
      <p>Para más información sobre nuestros productos y servicios, contáctenos a través de nuestros canales oficiales.</p>
    </blockquote>
  </article>
`,
    },
    {
      id: 5,
      title: "CMP Agro dijo presente en la Expo Pioneros 2025",
      description: "Participamos del evento agropecuario más relevante del Chaco paraguayo, presentando nuestras soluciones innovadoras para el sector productivo.",
      category: "Eventos",
      author: "CMP Noticias",
      date: "2025-05-28",
      image: "/images/eventos/pioneros2025/portada-pioneros.webp",
      authorImage: "/images/eventos/noticias-logo.webp",
      content: `
        <article class="news-content">
          <h2 class="text-2xl font-bold mb-4">Exitosa participación en la Expo Pioneros 2025</h2>
          <p class="mb-4">
            Del <strong>28 al 31 de mayo</strong>, tuvimos el honor de participar en una nueva edición de la <strong>Expo Pioneros</strong>, uno de los eventos agropecuarios más relevantes del país, que congrega año tras año a los principales referentes del sector productivo nacional e internacional.
          </p>
          <p class="mb-4">
            Durante los cuatro días de exposición, nuestro stand se convirtió en un espacio de encuentro e intercambio con <strong>productores, técnicos, asesores y aliados estratégicos</strong>, quienes se acercaron para conocer de cerca nuestras propuestas orientadas a la <strong>eficiencia, sustentabilidad y rentabilidad</strong> del trabajo en el campo.
          </p>
          <figure class="my-8">
            <img src="/images/eventos/pioneros2025/content1.webp" alt="Stand de CMP AGRO en la Expo Pioneros 2025" class="rounded-xl w-full" />
          </figure>

          <h3 class="text-xl font-semibold mt-8 mb-4">Soluciones innovadoras presentadas</h3>
          <p class="mb-4">
            Presentamos nuestras principales líneas de productos:
          </p>
          <ul class="list-none space-y-2 mb-6">
            <li>✅ <span class="ml-2"><strong>Silobolsas</strong> para el almacenamiento seguro de granos.</span></li>
            <li>✅ <span class="ml-2"><strong>Inoculantes</strong> de alta calidad para mejorar el rendimiento de los cultivos.</span></li>
            <li>✅ <span class="ml-2"><strong>Mallas para fardos</strong> y <strong>films para ensilaje</strong> que garantizan una óptima conservación forrajera.</span></li>
            <li>✅ <span class="ml-2"><strong>Comederos</strong> resistentes y funcionales.</span></li>
            <li>✅ <span class="ml-2"><strong>Costuradoras</strong> diseñadas para facilitar el cierre y manipulación de envases agrícolas.</span></li>
          </ul>
          <p class="mb-4">
            Además, compartimos información sobre las <strong>últimas tecnologías aplicadas al agro</strong>, destacando cómo estas soluciones pueden integrarse eficazmente en los procesos productivos para lograr mejores resultados con un enfoque sostenible.
          </p>

          <h3 class="text-xl font-semibold mt-8 mb-4">Compromiso con el desarrollo agropecuario</h3>
          <p class="mb-4">
            Nuestra participación reafirma el compromiso de CMP Agro con el <strong>desarrollo productivo del Chaco y del Paraguay</strong>, promoviendo el uso de herramientas innovadoras que acompañan y potencian la labor del productor.
          </p>
          <p class="mb-4">
            Agradecemos profundamente a todos los que se acercaron a conocernos, intercambiar ideas y construir juntos un futuro más prometedor para el agro paraguayo.
          </p>
          <blockquote class="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500 my-6">
            <p class="font-semibold mb-2">¡Nos reencontramos en la próxima edición de la Expo Pioneros!</p>
            <p>Para más información sobre nuestros productos presentados en la exposición, contáctenos a través de nuestros canales oficiales.</p>
          </blockquote>
        </article>
      `,
    },
    {
      id: 1,
      title: "Feria Innovar 2025",
      description: "Descubre cómo las nuevas tecnologías están revolucionando los cultivos y mejorando la eficiencia en el campo.",
      category: "Innovación",
      author: "CMP Noticias",
      date: "2025-03-18",
      image: "/images/eventos/innovar2025/innovar1.webp",
      authorImage: "/images/eventos/noticias-logo.webp",
      content: `
        <article class="news-content">
          <h2 class="text-2xl font-bold mb-4">INNOVAR: La feria que impulsa el futuro del agro</h2>
          <p class="mb-4">
            INNOVAR es mucho más que una feria; es el punto de encuentro donde el conocimiento, la innovación y la tecnología se fusionan para transformar la agroganadería.
          </p>
          <p class="mb-4">
            Un evento diseñado para quienes buscan estar a la vanguardia con las herramientas, maquinarias y nuevas tecnologías que optimizan la producción y potencian los negocios en el ámbito nacional, regional e internacional.
          </p>
          <p class="mb-4">
            Este evento de gran relevancia para el sector contará con la destacada presencia de <strong>CMP AGRO</strong>, líder en soluciones para horticultura, ganadería, ensilaje, confinamiento y transporte. Nuestro compromiso es brindar soluciones eficientes e innovadoras que optimicen cada eslabón de la cadena agropecuaria.
          </p>
          <figure class="my-8">
            <img src="/images/eventos/innovar2025/innovar2.webp" alt="Vista general del stand de CMP AGRO en Innovar 2025" class="rounded-xl w-full" />
          </figure>

          <h3 class="text-xl font-semibold mt-8 mb-4">¿Cuál es el objetivo de INNOVAR?</h3>
          <p class="mb-4">
            Ser el epicentro del intercambio de conocimientos, lanzamientos y avances tecnológicos que revolucionan el agro, fortaleciendo el crecimiento del sector y facilitando oportunidades de negocio que trascienden fronteras.
          </p>
          <h3 class="text-xl font-semibold mt-8 mb-4">¿Qué logra la feria?</h3>
          <ul class="list-none space-y-2 mb-6">
            <li>✅ <span class="ml-2">Conectar todos los eslabones de la comunidad agroindustrial, desde la semilla hasta la postcosecha.</span></li>
            <li>✅ <span class="ml-2">Demostrar el enorme potencial productivo del sector agropecuario paraguayo.</span></li>
            <li>✅ <span class="ml-2">Posicionar a Paraguay entre los países más competitivos del mundo en producción agropecuaria.</span></li>
          </ul>
          <figure class="my-8">
            <img src="/images/eventos/innovar2025/innovar1.webp" alt="Equipos en exhibición y demostración práctica" class="rounded-xl w-full" />
          </figure>

          <h3 class="text-xl font-semibold mt-8 mb-4">¡Visítanos en INNOVAR!</h3>
          <p class="mb-4">
            Te esperamos en el stand de CMP AGRO, donde nuestro equipo de expertos estará listo para asesorarte y mostrarte de primera mano nuestras soluciones diseñadas para maximizar tu productividad.
          </p>
          <figure class="my-8">
            <img src="/images/eventos/innovar2025/innovar3.webp" alt="Personal de CMP AGRO asesorando a productores" class="rounded-xl w-full" />
          </figure>
        </article>
      `,
    },
    {
      id: 2,
      title: "LA SOLUCIÓN #1 PARA REDUCIR LA TEMPERATURA EN CORRALES Y ESTABLOS",
      description: "Descubra la Malla CTA Aluminet. La innovadora tecnología israelí que ya ha transformado la producción agropecuaria de miles de agroganaderos en Paraguay.",
      category: "Tendencias",
      author: "CMP Noticias",
      date: "2025-02-21",
      image: "/images/eventos/cta/cta1.webp",
      authorImage: "/images/eventos/noticias-logo.webp",
      content: `
        <article class="news-content">
          <h2 class="text-2xl font-bold mb-4">Malla CTA Aluminet: La clave para un entorno saludable y productivo</h2>
          <p class="mb-4">
            El estrés calórico es uno de los mayores desafíos en la agroindustria, afectando directamente la salud, el bienestar y el rendimiento de los animales. La <strong>Malla CTA Aluminet</strong> de CMP AGRO ofrece una solución eficaz y comprobada para reducir significativamente la temperatura en corrales y establos, optimizando la producción ganadera.
          </p>
          <figure class="my-8">
            <img src="/images/eventos/cta/cta2.webp" alt="Malla CTA Aluminet instalada en corral" class="rounded-xl w-full" />
          </figure>

          <h3 class="text-xl font-semibold mt-8 mb-4">¿Cómo funciona?</h3>
          <p class="mb-4">
            A diferencia de una simple media sombra, la Malla CTA Aluminet actúa reflejando las ondas térmicas, logrando:
          </p>
          <ul class="list-none space-y-2 mb-6">
            <li>✅ <span class="ml-2"><strong>Reducción de hasta 5°C</strong> en la temperatura del ambiente.</span></li>
            <li>✅ <span class="ml-2"><strong>Disminución del estrés calórico</strong>, lo que mejora la salud y el bienestar de los animales.</span></li>
            <li>✅ <span class="ml-2"><strong>Menor consumo de agua</strong>, optimizando los recursos y reduciendo costos.</span></li>
            <li>✅ <span class="ml-2"><strong>Reducción de la frecuencia respiratoria</strong>, favoreciendo el confort animal.</span></li>
            <li>✅ <span class="ml-2"><strong>Mayor eficiencia reproductiva</strong>, impactando positivamente en la producción ganadera.</span></li>
          </ul>
         

          <p class="mb-6">
            Miles de agroganaderos en Paraguay ya han implementado esta tecnología, logrando una mayor eficiencia y rentabilidad en sus establecimientos.
          </p>
          <blockquote class="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500 my-6">
            Obtenga más información y una cotización personalizada. Contacte con nuestros asesores a través del botón de WhatsApp en la esquina inferior derecha de su dispositivo y descubra cómo la Malla CTA Aluminet puede marcar la diferencia en su producción.
          </blockquote>
        </article>
      `,
    },
    {
      id: 3,
      title: "CMP AGRO REVOLUCIONA EL MERCADO CON NUEVAS MEDIA SOMBRAS",
      description: "Innovación en protección agrícola. Descubra las nuevas media sombras de última generación, diseñadas para ofrecer máxima resistencia y eficiencia en la protección de cultivos en Paraguay.",
      category: "Tendencias",
      author: "CMP Noticias",
      date: "2025-01-05",
      image: "/images/eventos/cta/mediasombra.webp",
      authorImage: "/images/eventos/noticias-logo.webp",
      content: `
        <article class="news-content">
          <h2 class="text-2xl font-bold mb-4">Nuevas soluciones para la protección de cultivos</h2>
          <p class="mb-4">
            La exposición prolongada a los rayos solares es un desafío constante para los horticultores, afectando el rendimiento y la calidad de los cultivos.
          </p>
          <p class="mb-6">
            Para responder a esta necesidad, CMP AGRO introduce al mercado una nueva línea de media sombras diseñadas para brindar protección superior en las horas más críticas del día.
          </p>
          <h3 class="text-xl font-semibold mt-8 mb-4">¿Qué hace únicas a estas nuevas media sombras?</h3>
          <p class="mb-4">
            Hemos desarrollado cuatro versiones innovadoras que incorporan:
          </p>
          <ul class="list-none space-y-2 mb-6">
            <li>✅ <span class="ml-2"><strong>Bordes reforzados</strong> &rarr; Mayor resistencia ante condiciones climáticas adversas.</span></li>
            <li>✅ <span class="ml-2"><strong>Alta durabilidad</strong> &rarr; Material de calidad superior que soporta los embates del clima.</span></li>
            <li>✅ <span class="ml-2"><strong>Ojales de alta calidad</strong> &rarr; Instalación fácil, segura y eficiente.</span></li>
            <li>✅ <span class="ml-2"><strong>Protección adaptable</strong> &rarr; Diferentes niveles de translucidez, con opciones de 35% hasta 50% de sombra para un control preciso de la radiación solar.</span></li>
          </ul>
          <p class="mb-4">
            Optimice su producción agrícola con la mejor tecnología en protección de cultivos.
          </p>
          <blockquote class="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500 my-6">
            Solicite más información y una cotización personalizada a través de nuestro equipo de asesores.
          </blockquote>
        </article>
      `,
    },
    {
      id: 4,
      title: "SILOBOLSAS. LA CLAVE PARA AHORRAR Y OPTIMIZAR LA COSECHA DE GRANOS Y FORRAJES.",
      description: "Más capacidad, más protección, más rendimiento. Descubra cómo las Silobolsas de CMP AGRO pueden transformar su producción, ofreciendo almacenamiento eficiente, seguro y de bajo costo.",
      category: "Tecnología",
      author: "CMP Noticias",
      date: "2024-12-28",
      image: "/images/eventos/cta/silobolsas.webp",
      authorImage: "/images/eventos/noticias-logo.webp",
      content: `
        <article class="news-content">
          <h2 class="text-2xl font-bold mb-4">Nuevas soluciones para la conservación y almacenamiento de cultivos</h2>
          <p class="mb-4">
            El crecimiento de los modelos agroganaderos de alta eficiencia ha convertido a la plasticultura en un pilar fundamental para la producción.
          </p>
          <p class="mb-4">
            En respuesta a esta necesidad, CMP AGRO ha establecido alianzas estratégicas con los mayores fabricantes de silobolsas de la región, brindando una solución de almacenamiento optimizado para granos y forrajes.
          </p>
          <figure class="my-8">
            <img src="/images/eventos/cta/silobolsas2.webp" alt="Silobolsas CMP AGRO en campo" class="rounded-xl w-full" />
          </figure>

          <h3 class="text-xl font-semibold mt-8 mb-4">Ventajas de las silobolsas en la cosecha de granos</h3>
          <p class="mb-4">
            Este innovador sistema permite almacenar maíz, girasol, soja, trigo, arroz y más con los siguientes beneficios:
          </p>
          <ul class="list-none space-y-2 mb-6">
            <li>✅ <span class="ml-2"><strong>Almacenamiento eficiente y de bajo costo</strong>, con una operación sencilla y segura.</span></li>
            <li>✅ <span class="ml-2"><strong>Ubicación estratégica en el mismo potrero</strong>, reduciendo costos de flete y logística.</span></li>
            <li>✅ <span class="ml-2"><strong>Clasificación por calidad</strong>, evitando la mezcla de granos de diferentes potreros.</span></li>
            <li>✅ <span class="ml-2"><strong>Posibilidad de almacenar con mayor humedad</strong>, optimizando la conservación.</span></li>
            <li>✅ <span class="ml-2"><strong>Mejores oportunidades de comercialización</strong>, permitiendo diferir la venta para maximizar ganancias.</span></li>
          </ul>
          <h3 class="text-xl font-semibold mt-8 mb-4">Beneficios en la conservación de granos húmedos y forrajes</h3>
          <p class="mb-4">
            El uso de silobolsas en granos húmedos y forrajes permite:
          </p>
          <ul class="list-none space-y-2 mb-6">
            <li>✅ <span class="ml-2"><strong>Aumentar la producción de carne y leche</strong>, reduciendo costos por unidad de producto.</span></li>
            <li>✅ <span class="ml-2"><strong>Mayor producción individual y carga animal</strong>, gracias a forrajes de alta calidad.</span></li>
            <li>✅ <span class="ml-2"><strong>Ubicación estratégica del silo</strong>, facilitando la suplementación y minimizando pérdidas de materia seca.</span></li>
          </ul>
          <p class="mb-4">
            Optimice su producción con la mejor tecnología en almacenamiento agropecuario.
          </p>
          <blockquote class="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500 my-6">
            Solicite más información y una cotización personalizada con nuestro equipo de asesores.
          </blockquote>
        </article>
      `,
    },
  ];
  
  // Ordenar por fecha (más reciente primero)
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// Hook personalizado para obtener artículos
export const useArticles = (limit?: number) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getArticles = async () => {
      try {
        setLoading(true);
        const data = await fetchArticles();
        setArticles(limit ? data.slice(0, limit) : data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Error desconocido'));
      } finally {
        setLoading(false);
      }
    };

    getArticles();
  }, [limit]);

  return { articles, loading, error };
};