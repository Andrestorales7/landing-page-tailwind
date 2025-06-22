'use client';

import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import WhatsappContacts from '@/components/layout/WhatsappContacts';
import Image from "next/image";
import type { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

const products = [
	{
		name: 'Malla CTA Aluminet',
		slug: 'malla-cta-aluminet',
		images: [
			'/images/productos/agropecuaria/cta2.jpg',
			'/images/productos/agropecuaria/malla-cta1.jpg',
			'/images/productos/agropecuaria/malla-cta2.png',
		],
		description: `
    <h2 class="text-2xl font-bold mb-2">🌱 Malla CTA Aluminet – Protección y rendimiento para tu cultivo</h2>
    <p>
      La <strong>Malla CTA Aluminet</strong> es una solución innovadora diseñada especialmente para el sector agrícola que busca optimizar el microclima, proteger los cultivos y mejorar la productividad. Fabricada con hilos de polietileno aluminizados de alta calidad, esta malla reflectante proporciona un balance ideal entre sombra y luminosidad, ayudando a reducir el estrés térmico en las plantas.
    </p>
    <h3 class="text-xl font-semibold mt-6 mb-2">✅ Beneficios principales:</h3>
    <ul class="list-disc pl-6 mb-4">
      <li><strong>Regulación térmica eficiente:</strong> Refleja los rayos solares, manteniendo temperaturas óptimas dentro del invernadero o cultivo a campo abierto.</li>
      <li><strong>Protección contra condiciones extremas:</strong> Disminuye el impacto del calor excesivo, heladas ligeras y radiación UV.</li>
      <li><strong>Mejora en el desarrollo vegetal:</strong> Favorece la fotosíntesis gracias a la distribución uniforme de la luz difusa.</li>
      <li><strong>Alta durabilidad:</strong> Resistente a los rayos UV, con una vida útil prolongada incluso en condiciones exigentes.</li>
    </ul>
    <h3 class="text-xl font-semibold mt-6 mb-2">📍 Usos recomendados:</h3>
    <ul class="list-disc pl-6 mb-4">
      <li>Invernaderos</li>
      <li>Sombras para viveros</li>
      <li>Coberturas de cultivos sensibles</li>
      <li>Áreas de propagación vegetal</li>
    </ul>
    <p class="mt-4">
      Aumenta la calidad y rendimiento de tus cosechas con una solución confiable y eficiente.<br/>
      <strong>¡Invierte en tecnología agrícola con la Malla CTA Aluminet!</strong>
    </p>
    <hr class="my-6"/>
    <h3 class="text-xl font-semibold mt-6 mb-2">Información técnica adicional</h3>
    <ul class="list-disc pl-6 mb-4">
      <li>Reduce la temperatura ambiente y protege contra la radiación UV.</li>
      <li>Ideal para galpones, establos, invernaderos y áreas de cría.</li>
      <li>Fácil de instalar y de larga vida útil.</li>
      <li>Disponible en varias medidas y porcentajes de sombra, adaptándose a las necesidades de cada proyecto agropecuario.</li>
    </ul>
  `,
		details: [
			'<span class="font-semibold">Material:</span> Polietileno aluminizado',
			'<span class="font-semibold">Aplicación:</span> Sombra y protección térmica',
			'<span class="font-semibold">Medidas:</span> 4.2 x 100 m, 6 x 50 m, 8 x 50 m',
		],
		logo: '/images/logos/sugrand.png',
	},
	{
		name: 'Tejido Aviar',
		slug: 'tejido-aviar',
		images: [
			'/images/productos/agropecuaria/tejido-aviar.jpg',
			'/images/productos/agropecuaria/tejido-aviar2.jpg',
			'/images/productos/agropecuaria/tejido-amarillo.jpg',
		],
		description: `
    <h2 class="text-2xl font-bold mb-2">Tejido Aviar – Control climático eficiente para galpones avícolas y porcinos</h2>
    <p>
      El <strong>Tejido Aviar de CMP Agro</strong> es una solución especializada diseñada para optimizar las condiciones ambientales en instalaciones de cría avícola y porcina. Fabricado con polipropileno de alta resistencia y aditivos UV, este tejido garantiza durabilidad y eficacia en el control de luminosidad y temperatura, elementos clave para el bienestar animal y la eficiencia productiva.
    </p>
    <h3 class="text-xl font-semibold mt-6 mb-2">🔧 Características destacadas:</h3>
    <ul class="list-disc pl-6 mb-4">
      <li><strong>Alta resistencia a la tracción:</strong> Soporta condiciones exigentes sin deformarse, asegurando una larga vida útil.</li>
      <li><strong>Protección UV:</strong> Incorpora aditivos que protegen contra la degradación por rayos ultravioleta, prolongando su durabilidad.</li>
      <li><strong>Control de luminosidad y temperatura:</strong> Regula eficazmente la entrada de luz y el calor, creando un ambiente óptimo para los animales.</li>
      <li><strong>Versatilidad de uso:</strong> Adecuado para sistemas de cría tradicionales y dark house, tanto en avicultura como en porcicultura.</li>
    </ul>
    <h3 class="text-xl font-semibold mt-6 mb-2">📏 Especificaciones disponibles:</h3>
    <ul class="list-disc pl-6 mb-4">
      <li>Tejido PP Aviario Amarillo N/G: 2,6 m de ancho | 120 g/m²</li>
      <li>Tejido PP Aviario Azul N/G: 2,6 m de ancho | 120 g/m²</li>
      <li>Tejido PP Aviario Blackout N/G: 2,6 m de ancho | 230 g/m²</li>
    </ul>
  `,
		details: [
			'<span class="font-semibold">Material:</span> Polipropileno de alta resistencia con aditivos UV',
			'<span class="font-semibold">Usos:</span> Galpones avícolas y porcinos, sistemas tradicionales y dark house',
			'<span class="font-semibold">Presentaciones:</span> Amarillo N/G 120g/m², Azul N/G 120g/m², Blackout N/G 230g/m² (ancho 2,6 m)',
		],
		logo: '/images/logos/rafitec-logo.png',
	},
	{
		name: 'Comederos',
		slug: 'comederos-nortene',
		images: [
			'/images/productos/agropecuaria/comedero.jpg',
			'/images/productos/agropecuaria/comedero2.jpg',
			
		],
		description: `
    <h2 class="text-2xl font-bold mb-2">Comederos Agrinplex – Eficiencia y durabilidad para la alimentación ganadera</h2>
    <p>
      Los <strong>Comederos Agrinplex de CMP Agro</strong> están diseñados para satisfacer las exigencias del sector ganadero, ofreciendo una solución práctica, económica y de alta resistencia para la alimentación de bovinos y porcinos. Fabricados con geomembranas de 1.000 micrones, estos comederos garantizan una larga vida útil y un rendimiento óptimo en diversas condiciones climáticas.
    </p>
    <h3 class="text-xl font-semibold mt-6 mb-2">🔍 Características destacadas:</h3>
    <ul class="list-disc pl-6 mb-4">
      <li><strong>Material de alta resistencia:</strong> Elaborados con geomembranas de 1.000 micrones, resistentes a ácidos, álcalis, sales y a la saliva de los animales, asegurando durabilidad y seguridad en la alimentación.</li>
      <li><strong>Protección UV:</strong> Incorporan aditivos que protegen contra la degradación por rayos ultravioleta, permitiendo su uso a la intemperie sin comprometer su integridad.</li>
      <li><strong>Diseño práctico y adaptable:</strong> Su estructura ligera facilita el armado y la instalación, permitiendo configuraciones en línea o en cuadrado según las necesidades del corral.</li>
      <li><strong>Versatilidad de uso:</strong> Aptos para raciones sólidas, semisólidas y líquidas, adaptándose a diferentes sistemas de alimentación.</li>
    </ul>
    <h3 class="text-xl font-semibold mt-6 mb-2">📐 Especificaciones técnicas:</h3>
    <ul class="list-disc pl-6 mb-4">
      <li><strong>Medidas estándar:</strong> 1,18 m de ancho x 25 o 50 m de largo.</li>
      <li><strong>Peso:</strong> Varía según la longitud seleccionada.</li>
      <li><strong>Color:</strong> Negro.</li>
    </ul>
  `,
		details: [
			'<span class="font-semibold">Material:</span> Geomembrana de 1.000 micrones, resistente a químicos y rayos UV',
			'<span class="font-semibold">Medidas estándar:</span> 1,18 m de ancho x 25 o 50 m de largo',
			'<span class="font-semibold">Color:</span> Negro',
			'<span class="font-semibold">Usos:</span> Alimentación de bovinos y porcinos, raciones sólidas, semisólidas y líquidas',
			'<span class="font-semibold">Diseño:</span> Estructura ligera y adaptable, fácil de instalar',
		],
		logo: '/images/logos/agrinpex-logo.png',
	},
	{
		name: 'Geomembranas',
		slug: 'geomembranas-nortene',
		images: [
			'/images/productos/agropecuaria/geomembrana.jpeg',
			'/images/productos/agropecuaria/geomembrana2.jpg',
			'/images/productos/agropecuaria/geomembrana3.jpg',
		],
		description: `
    <h2 class="text-2xl font-bold mb-2">Geomembrana Nortène – Solución confiable para impermeabilización y protección ambiental</h2>
    <p>
      La <strong>Geomembrana Nortène</strong> es una lámina de polietileno de alta densidad (HDPE) diseñada para aplicaciones que requieren alta resistencia química, mecánica y a la intemperie. Es ideal para la contención y almacenamiento de líquidos y sólidos, ofreciendo una barrera efectiva contra la contaminación del suelo y las aguas subterráneas.
    </p>
    <h3 class="text-xl font-semibold mt-6 mb-2">🔍 Características destacadas:</h3>
    <ul class="list-disc pl-6 mb-4">
      <li><strong>Alta resistencia química y mecánica:</strong> Soporta una amplia gama de sustancias químicas, incluidos ácidos, álcalis y solventes, así como esfuerzos mecánicos significativos.</li>
      <li><strong>Resistencia a los rayos UV y a la intemperie:</strong> Estabilizada con aditivos que la protegen de la degradación por exposición prolongada al sol y condiciones climáticas adversas.</li>
      <li><strong>Impermeabilidad superior:</strong> Ofrece una barrera eficaz contra líquidos y gases, evitando filtraciones y protegiendo el medio ambiente.</li>
      <li><strong>Larga vida útil:</strong> Diseñada para mantener sus propiedades durante décadas, reduciendo costos de mantenimiento y reemplazo.</li>
      <li><strong>Fácil instalación:</strong> Su flexibilidad y ligereza facilitan el transporte y la colocación en obra.</li>
    </ul>
    <h3 class="text-xl font-semibold mt-6 mb-2">📏 Especificaciones disponibles:</h3>
    <ul class="list-disc pl-6 mb-4">
      <li><strong>Espesores:</strong> 500 mm, 800 mm y 1000 micras.</li>
      <li><strong>Ancho de rollo:</strong> 7 metros.</li>
      <li><strong>Longitudes estándar:</strong> 200 metros (0.75 mm y 1.00 mm) y 140 metros (1.50 mm).</li>
    </ul>
    <h3 class="text-xl font-semibold mt-6 mb-2">🛠️ Aplicaciones recomendadas:</h3>
    <ul class="list-disc pl-6 mb-4">
      <li>Reservorios para riego y consumo animal.</li>
      <li>Lagos artificiales y estanques de piscicultura.</li>
      <li>Lagunas de tratamiento de efluentes industriales y agrícolas.</li>
      <li>Sistemas de contención en minería y rellenos sanitarios.</li>
      <li>Proyectos de impermeabilización en construcción civil.</li>
    </ul>
    <h3 class="text-xl font-semibold mt-6 mb-2">🌿 Compromiso con el medio ambiente:</h3>
    <p>
      La Geomembrana Nortène es un producto atóxico que no contamina el agua ni el suelo, contribuyendo a la protección del entorno natural.
    </p>
  `,
		details: [
			'<span class="font-semibold">Material:</span> Polietileno de alta densidad (HDPE), atóxico',
			'<span class="font-semibold">Espesores:</span> 500 mm, 800 mm, 1000 micras',
			'<span class="font-semibold">Ancho de rollo:</span> 7 metros',
			'<span class="font-semibold">Longitudes estándar:</span> 200 m (0.75 mm y 1.00 mm), 140 m (1.50 mm)',
			'<span class="font-semibold">Aplicaciones:</span> Reservorios, lagos, estanques, lagunas de tratamiento, minería, rellenos sanitarios, construcción civil',
			'<span class="font-semibold">Propiedades:</span> Alta resistencia química, mecánica y a la intemperie, impermeabilidad superior, larga vida útil',
		],
		logo: '/images/logos/nortene-logo.png',
	},
	{
		name: 'Acquapex',
		slug: 'acquapex',
		images: [
			'/images/productos/agropecuaria/acquapex.png',
			'/images/productos/agropecuaria/acquapex2.png',
			'/images/productos/agropecuaria/acquapex3.png',
		],
		description: `
    <h2 class="text-2xl font-bold mb-2">Acquapex: Lámina de Polietileno Multipropósito para el Sector Agropecuario</h2>
    <p>
      <strong>Acquapex</strong> es una lámina de polietileno de alta resistencia, desarrollada para ofrecer una solución práctica, económica y duradera en diversas aplicaciones agroindustriales. Gracias a su versatilidad, se ha convertido en una herramienta indispensable en actividades agrícolas, ganaderas e industriales.
    </p>
    <h3 class="text-xl font-semibold mt-6 mb-2">🔧 Características Técnicas</h3>
    <ul class="list-disc pl-6 mb-4">
      <li><strong>Material:</strong> Polietileno de baja densidad (LDPE), flexible y resistente.</li>
      <li><strong>Colores disponibles:</strong> Azul, negro y verde, adaptables según el uso y entorno.</li>
      <li><strong>Medidas estándar:</strong> 2 x 50 m, 4 x 50 m, y otras dimensiones bajo pedido.</li>
      <li><strong>Resistencia:</strong> Alta resistencia mecánica a la tracción, desgarro y condiciones climáticas extremas.</li>
      <li><strong>Durabilidad:</strong> Aditivada para soportar exposición prolongada al sol y la intemperie.</li>
    </ul>
    <h3 class="text-xl font-semibold mt-6 mb-2">🌾 Aplicaciones Principales</h3>
    <ul class="list-disc pl-6 mb-4">
      <li><strong>Cobertura de suelos y superficies:</strong> Ideal para proteger áreas de trabajo, cultivos o instalaciones temporales.</li>
      <li><strong>Control de malezas:</strong> Funciona como barrera física que inhibe el crecimiento de vegetación indeseada, reduciendo el uso de herbicidas.</li>
      <li><strong>Almacenamiento y transporte:</strong> Protege insumos, maquinaria o productos agrícolas frente al polvo, la humedad o la lluvia.</li>
      <li><strong>Encapsulamiento y aislamiento:</strong> Útil en tareas de construcción rural, invernaderos o silos improvisados.</li>
    </ul>
    <h3 class="text-xl font-semibold mt-6 mb-2">✅ Beneficios</h3>
    <ul class="list-disc pl-6 mb-4">
      <li><strong>Eficiencia operativa:</strong> Su fácil instalación y manipulación optimizan tiempos y recursos en campo.</li>
      <li><strong>Rentabilidad:</strong> Una solución de bajo costo con alto rendimiento y larga vida útil.</li>
      <li><strong>Versatilidad:</strong> Apta para múltiples usos en diferentes etapas del proceso productivo agropecuario.</li>
    </ul>
  `,
		details: [
			'<span class="font-semibold">Material:</span> Polietileno de baja densidad (LDPE)',
			'<span class="font-semibold">Colores:</span> Azul, negro, verde',
			'<span class="font-semibold">Medidas estándar:</span> 2 x 50 m, 4 x 50 m (otras bajo pedido)',
			'<span class="font-semibold">Resistencia:</span> Alta resistencia mecánica y a la intemperie',
			'<span class="font-semibold">Usos:</span> Cobertura de suelos, control de malezas, almacenamiento, encapsulamiento, aislamiento',
			'<span class="font-semibold">Beneficios:</span> Fácil instalación, bajo costo, versatilidad y durabilidad',
		],
		logo: '/images/logos/rafitec-logo.png',
	},
	{
		name: 'GeoRain Cover',
		slug: 'georain-cover',
		images: [
			'/images/productos/agropecuaria/geo-rain.jpg',
			'/images/productos/agropecuaria/georain2.jpg',
			'/images/productos/agropecuaria/georain3.jpg',
		],
		description: `
    <h2 class="text-2xl font-bold mb-2">GeoRain Cover – Protección avanzada contra lluvias y erosión</h2>
    <p>
      <strong>GeoRain Cover</strong> es una manta geotextil diseñada para ofrecer una protección superior contra la erosión y el exceso de agua en suelos agrícolas, obras civiles y áreas verdes. Su estructura permeable permite el paso controlado del agua, evitando el arrastre de partículas y mejorando la estabilidad del terreno.
    </p>
    <h3 class="text-xl font-semibold mt-6 mb-2">🔧 Características principales:</h3>
    <ul class="list-disc pl-6 mb-4">
      <li><strong>Alta resistencia:</strong> Fabricada con fibras sintéticas de gran durabilidad y resistencia a la intemperie.</li>
      <li><strong>Permeabilidad controlada:</strong> Permite el drenaje del agua, evitando encharcamientos y erosión superficial.</li>
      <li><strong>Fácil instalación:</strong> Ligera y flexible, se adapta a diferentes superficies y pendientes.</li>
      <li><strong>Protección ecológica:</strong> Reduce la pérdida de suelo fértil y favorece la revegetación.</li>
    </ul>
    <h3 class="text-xl font-semibold mt-6 mb-2">🌱 Usos recomendados:</h3>
    <ul class="list-disc pl-6 mb-4">
      <li>Protección de taludes y laderas</li>
      <li>Cobertura de suelos agrícolas</li>
      <li>Obras viales y de infraestructura</li>
      <li>Jardinería y paisajismo</li>
    </ul>
  `,
		details: [
			'<span class="font-semibold">Material:</span> Fibras sintéticas de alta resistencia',
			'<span class="font-semibold">Presentación:</span> Rollos de 2 x 50 m y 4 x 50 m',
			'<span class="font-semibold">Aplicaciones:</span> Control de erosión, protección de suelos, drenaje y paisajismo',
			'<span class="font-semibold">Ventajas:</span> Permeable, resistente, fácil de instalar y ecológica',
		],
		logo: '/images/logos/agrinpex-logo.png',
	},
	{
		name: 'Techazo',
		slug: 'techazo',
		images: [
			'/images/productos/agropecuaria/techazo.jpg',
			'/images/productos/agropecuaria/techazo2.JPG',
			'/images/productos/agropecuaria/techazo3.jpeg',
		],
		description: `
    <h2 class="text-2xl font-bold mb-2">Techazo – Lámina plástica multipropósito para techos y coberturas</h2>
    <p>
      <strong>Techazo</strong> es una lámina plástica de alta resistencia, ideal para la construcción de techos temporales o permanentes en instalaciones agrícolas, industriales y residenciales. Su composición especial la hace resistente a los rayos UV, la lluvia y el viento, garantizando protección y durabilidad.
    </p>
    <h3 class="text-xl font-semibold mt-6 mb-2">🔧 Características principales:</h3>
    <ul class="list-disc pl-6 mb-4">
      <li><strong>Resistencia UV:</strong> Protege contra la degradación solar y mantiene su integridad por más tiempo.</li>
      <li><strong>Impermeabilidad total:</strong> Evita filtraciones y protege los espacios cubiertos.</li>
      <li><strong>Fácil de manipular:</strong> Ligera y flexible, se corta y adapta fácilmente a cualquier estructura.</li>
      <li><strong>Versatilidad:</strong> Apta para techos, cobertizos, galpones y cerramientos.</li>
    </ul>
    <h3 class="text-xl font-semibold mt-6 mb-2">🏠 Usos recomendados:</h3>
    <ul class="list-disc pl-6 mb-4">
      <li>Techos de galpones y establos</li>
      <li>Cubiertas temporales para obras</li>
      <li>Cerramientos y divisiones</li>
      <li>Protección de maquinaria y materiales</li>
    </ul>
  `,
		details: [
			'<span class="font-semibold">Material:</span> Polietileno de alta resistencia con aditivos UV',
			'<span class="font-semibold">Presentación:</span> Rollos de 2 x 50 m y 4 x 50 m',
			'<span class="font-semibold">Colores:</span> Blanco, verde y azul',
			'<span class="font-semibold">Aplicaciones:</span> Techos, cobertizos, cerramientos y protección de materiales',
		],
		logo: '/images/logos/agrinpex-logo.png',
	},
];

// Añade estos tipos para mejorar el tipado
interface ProductPageProps {
  product: typeof products[0];
}

// Añade estas funciones antes de la función del componente
export const getStaticPaths: GetStaticPaths = async () => {
  // Define las rutas que se generarán en tiempo de compilación
  const paths = products.map((product) => ({
    params: { slug: product.slug },
  }));

  return {
    paths,
    fallback: false, // Si intentas acceder a un slug que no existe, mostrará 404
  };
};

export const getStaticProps: GetStaticProps<ProductPageProps> = async ({ params }) => {
  // Obtener datos para la página específica
  const product = products.find((p) => p.slug === params?.slug);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
};

// Modifica la firma de tu componente para recibir props
export default function ProductoAgropecuarioDetalle({ product }: ProductPageProps) {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mantén la lógica por si se accede a la página mediante navegación del lado del cliente
  if (router.isFallback) {
    return <div className="min-h-screen flex items-center justify-center">Cargando...</div>;
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  // Añade metadatos SEO para mejorar la indexación
  const pageTitle = `${product.name} | Productos Agropecuarios | CMP Agro`;
  const pageDescription = `${product.name}: solución especializada para el sector agropecuario. Calidad y durabilidad garantizada. Distribuido por CMP Agro Paraguay.`;
  const canonicalUrl = `https://www.cmpagro.com.py/productos/agropecuaria/${product.slug}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={`https://www.cmpagro.com.py${product.images[0]}`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>

			{/* Hero Section */}
			<div className="relative min-h-[40vh] bg-green-900 overflow-hidden">
				{/* Imagen de fondo */}
				<div
					className="absolute inset-0 bg-cover bg-center opacity-80"
					style={{
						backgroundImage: `url(${product.images[0]})`,
					}}
				></div>
				{/* Overlay simple */}
				<div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
				{/* Contenido del Hero */}
				<div className="relative z-10 pt-32 pb-16 px-6 sm:px-12 lg:px-18 max-w-6xl mx-auto">
					<div className="text-center">
						{/* Logo eliminado del Hero */}
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
							{product.name}
						</h1>
					</div>
				</div>
			</div>

			{/* Contenido Principal */}
			<div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
					{/* Breadcrumb */}
					<nav className="flex mb-8">
						<Link
							href="/productos/agropecuaria"
							className="text-green-700 hover:text-green-900 transition-colors"
						>
							← Volver a productos agropecuarios
						</Link>
					</nav>

					{/* Galería de Imágenes con Slider */}
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
						<div className="lg:col-span-2">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">Imágenes</h2>

							{/* Slider Principal */}
							<div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-6">
								<Image
									src={product.images[currentImageIndex]}
									alt={`${product.name} imagen ${currentImageIndex + 1}`}
									fill
									className="w-full h-full object-cover"
									sizes="(max-width: 768px) 100vw, 66vw"
									priority
								/>

								{/* Botones de navegación */}
								<button
									onClick={prevImage}
									className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200"
								>
									<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
									</svg>
								</button>

								<button
									onClick={nextImage}
									className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200"
								>
									<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
									</svg>
								</button>

								{/* Indicadores */}
								<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
									{product.images.map((_, idx) => (
										<button
											key={idx}
											onClick={() => setCurrentImageIndex(idx)}
											className={`w-3 h-3 rounded-full transition-all duration-200 ${
												idx === currentImageIndex ? 'bg-white' : 'bg-white/50'
											}`}
										/>
									))}
								</div>
							</div>

							{/* Thumbnails */}
							<div className="grid grid-cols-3 gap-4">
								{product.images.map((img, idx) => (
									<button
										key={idx}
										onClick={() => setCurrentImageIndex(idx)}
										className={`relative overflow-hidden rounded-lg shadow-md transition-all duration-200 ${
											idx === currentImageIndex
												? 'ring-2 ring-green-500 ring-offset-2'
												: 'hover:shadow-lg'
										}`}
									>
										<Image
											src={img}
											alt={`${product.name} thumbnail ${idx + 1}`}
											width={200}
											height={96}
											className="w-full h-24 object-cover"
										/>
									</button>
								))}
							</div>
						</div>

						{/* Información del Producto */}
						<div className="lg:col-span-1">
							<div className="sticky top-10">
								{/* Logo del producto arriba de las características */}
								{product.logo && (
                                    <div className="flex justify-center mb-6">
                                        <Image
                                            src={product.logo}
                                            alt={`${product.name} logo`}
                                            width={80}
                                            height={80}
                                            className="w-20 h-20 bg-white/90 rounded-full p-2 shadow-lg"
                                        />
                                    </div>
                                )}
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                    Características del Producto
                                </h2>
                                <div className="bg-white rounded-2xl shadow-lg p-6 border border-green-100">
                                    <ul className="space-y-4">
                                        {product.details.map((detail, i) => (
                                            <li key={i} className="flex items-start">
                                                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                                                    <span className="text-green-600 text-sm font-bold">✓</span>
                                                </div>
                                                <span
                                                    className="text-gray-700 leading-relaxed"
                                                    dangerouslySetInnerHTML={{ __html: detail }}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
					</div>

					{/* Descripción Detallada */}
					<div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100 prose prose-lg max-w-none text-gray-700">
						<div dangerouslySetInnerHTML={{ __html: product.description }} />
					</div>

					{/* Call to Action */}
					<div className="mt-12 text-center">
    <div className="bg-gradient-to-r from-green-600 to-lime-600 rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">¿Interesado en este producto?</h3>
        <p className="text-lg mb-6 opacity-90">
            Contáctanos para más información y asesoría personalizada
        </p>
        <Link
            href="/contacto"
            className="bg-white text-green-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block"
        >
            Contactar ahora
        </Link>
    </div>
</div>
				</div>
			</div>

			{/* Botón flotante de WhatsApp siempre visible */}
			<div className="fixed bottom-6 right-6 z-50">
				<WhatsappContacts />
			</div>
		</>
	);
}