import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import WhatsappContacts from '@/components/layout/WhatsappContacts';

const products = [
	{
		name: 'Películas para Invernadero',
		slug: 'peliculas-para-invernadero',
		images: [
			'https://images.unsplash.com/photo-1637987327476-5c77df3cb16d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			'https://images.unsplash.com/photo-1569362945998-36f0ce29978c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			'https://images.unsplash.com/photo-1604660640971-db2432cb2e3a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		],
		description:
			'Películas tricapa de alta performance para invernaderos, con fácil despliegue, excelentes propiedades ópticas y homogeneidad en el espesor. Diseñadas para satisfacer las necesidades de diversos cultivos.',
		details: [
			'Fácil despliegue y alta homogeneidad',
			'Óptimas propiedades ópticas',
			'Variedad de tipos: Tradicionales y Especiales',
			'Diversos espesores y medidas',
			'Resistencia a químicos y radiación UV',
		],
		logo: '/images/logos/agrinpex-logo.png',
		specs: {
			tipos: [
				{
					titulo: 'Tradicionales',
					items: [
						'ALD Estabilizado: Resistente a los químicos de uso común en la producción bajo invernadero.',
						'ALDT 2000: Estabilizado térmico difusor.',
						'ALDT DLX: Estabilizado térmico de alta transmitancia lumínica.',
						'ALDT Plus: Diseñado para estar en contacto con altas dosis de agroquímicos.',
						'Antigoteo: Evita la formación de gotas por condensación.',
						'Lechoso: Disminuye el ingreso de luz en climas extremos.',
					],
				},
				{
					titulo: 'Especiales',
					items: [
						'ALDT AV: Material con efecto antivirus, gracias al bloqueo de la radiación UV.',
						'ALDT AV DLX: Suma a la alta transmitancia del DLX el efecto antivirus.',
						'ALDT AV Plus: Suma a su resistencia el efecto antivirus.',
					],
				},
			],
			medidas: [
				'2,5 x 100 mts. – 100 micras',
				'8 x 50 mts. – 100 micras',
				'7,6 x 105 mts. – 120 micras',
				'8 x 105 mts. – 120 micras',
				'9 x 105 mts. – 105 micras',
				'10 x 105 mts. – 150 micras',
			],
		},
	},
	{
		name: 'Media Sombra',
		slug: 'media-sombra',
		images: [
			
			'/images/productos/horticultura/mediasombra-cultivos.jpg',
			'/images/productos/horticultura/media-sombra-fija-2.jpg',
		],
		description:
			'Mallas de media sombra de alta calidad, ideales para proteger cultivos y áreas específicas del exceso de radiación solar. Perfectas para horticultura, viveros, invernaderos y otros usos agrícolas.',
		details: [
			'Material: Polietileno de alta densidad (HDPE) con estabilización UV',
			'Tejido tipo raschel: resistente y duradero',
			'Colores: negro, blanco, verde y otros a pedido',
			'Porcentaje de sombra: 35% a 95%',
			'Medidas estándar: 2,10 x 100 m y 4,20 x 100 m',
			'Usos: sombreo de cultivos, protección contra heladas, cortaviento, atrapaniebla y control de temperatura',
		],
		logo: '/images/logos/sugrand-logo2.png',
		specs: {
			modelos: [
				{
					nombre: 'Malla Media Sombra 35%',
					descripcion:
						'Ideal para sombreo leve de cultivos y control de temperatura en invernaderos.',
				},
				{
					nombre: 'Malla Media Sombra 50%',
					descripcion:
						'Adecuada para viveros y almácigos, proporcionando una sombra moderada.',
				},
				{
					nombre: 'Malla Media Sombra 65%',
					descripcion:
						'Ofrece una sombra más intensa, adecuada para cultivos más sensibles al calor.',
				},
				{
					nombre: 'Malla Media Sombra 80%',
					descripcion:
						'Utilizada en áreas de trabajo y estacionamientos, proporcionando una sombra significativa.',
				},
				{
					nombre: 'Malla Media Sombra 95%',
					descripcion:
						'Proporciona una sombra casi total, ideal para cultivos que requieren protección máxima contra la radiación solar.',
				},
			],
			beneficios: [
				'Protección UV: Las mallas están estabilizadas para resistir la radiación ultravioleta, prolongando su vida útil.',
				'Versatilidad: Adecuadas para diversos usos, desde horticultura hasta aplicaciones en áreas recreativas.',
				'Fácil instalación: Diseñadas para ser fácilmente instaladas en estructuras simples.',
				'Durabilidad: Resistentes a condiciones climáticas adversas, garantizando una larga duración.',
			],
		},
	},
	{
		name: 'Mulching',
		slug: 'mulching',
		images: [
			
			'/images/productos/horticultura/mulching1.jpg',
			'/images/productos/horticultura/mulching2.png',
		],
		description:
			'Mulching de alta calidad para aplicaciones agrícolas, destacando por su resistencia mecánica, elasticidad y protección eficiente contra condiciones climáticas extremas.',
		details: [
			'Alta reflexión de luz solar: Protege los cultivos del calor excesivo',
			'Excelente protección en veranos extremos',
			'Alta resistencia mecánica y elasticidad superior',
			'Fácil instalación y adaptación al terreno',
			'Composición avanzada: materias primas y tecnología de última generación',
		],
		logo: '/images/logos/agrinpex-logo.png',
		specs: {
			usos: [
				'Frutales (frutilla, pimiento, arándanos)',
				'Hortícolas (tomate, locote)',
			],
			ventajas: [
				'Óptima calidad y mayor elasticidad',
				'Excelente relación costo-beneficio',
				'Durabilidad y resistencia a condiciones adversas',
			],
			medidas: [
				{ tipo: 'Negro', dimensiones: '1,6 x 1000 mts', espesor: '22 micras' },
				{ tipo: 'Negro', dimensiones: '1,4 x 1000 mts', espesor: '25 micras' },
				{ tipo: 'Negro', dimensiones: '1,4 x 1000 mts', espesor: '23 micras' },
				{ tipo: 'Negro', dimensiones: '1,2 x 1000 mts', espesor: '23 micras' },
				{ tipo: 'Blanco/Negro', dimensiones: '1,6 x 1000 mts', espesor: '22 micras' },
				{ tipo: 'Blanco/Negro', dimensiones: '1,4 x 1000 mts', espesor: '25 micras' },
				{ tipo: 'Blanco/Negro', dimensiones: '1,4 x 1000 mts', espesor: '30 micras' },
				{ tipo: 'Blanco/Negro', dimensiones: '1,2 x 1000 mts', espesor: '22 micras' },
				{ tipo: 'ABNUL', dimensiones: '1,6 x 1000 mts', espesor: '22 micras' },
				{ tipo: 'ABNUL Perforado', dimensiones: '1,0 x 1000 mts', espesor: '' },
			],
		},
	},
	{
		name: 'Mantas para Cultivo',
		slug: 'mantas-para-cultivo',
		images: [
			'/images/productos/horticultura/mantas-cultivo.png',
			'/images/productos/horticultura/mantas-cultivos2.jpg',
			
		],
		description:
			'Mantas para cultivo de alta calidad, diseñadas para proteger y mejorar el rendimiento de diversos cultivos. Elaboradas con materiales resistentes y propiedades que favorecen el desarrollo óptimo de las plantas.',
		details: [
			'Protección UV: Ofrecen protección contra la radiación ultravioleta, reduciendo el estrés térmico en las plantas.',
			'Gran resistencia: Fabricadas con materiales de alta resistencia, garantizando durabilidad y rendimiento en condiciones adversas.',
			'Gran durabilidad: Diseñadas para soportar el paso del tiempo y las inclemencias del clima, asegurando una larga vida útil.',
		],
		logo: '/images/logos/agrinpex-logo.png',
		specs: {
			usos: [
				'Viticultura: Protección de viñedos contra condiciones climáticas extremas.',
				'Frutales: Preservación de la calidad y cantidad de la producción frutal.',
				'Hortalizas: Mejora del microclima alrededor de las plantas, favoreciendo su crecimiento.',
			],
			medidas: [
				{ ancho: '4,20 metros', largo: '100 metros' },
			],
		},
	},
	{
		name: 'Hilos para Tutorado',
		slug: 'hilos-para-tutorado',
		images: [
			'/images/productos/horticultura/hilo1.jpg',
			'/images/productos/horticultura/hilo2.jpg',
			'/images/productos/horticultura/hilo3.jpg',
		],
		description:
			'Soporte confiable para el crecimiento de tus cultivos. Ideales para guiado vertical en tomate, pimiento, pepino y más.',
		details: [
			'Alta resistencia mecánica',
			'Estabilización UV para mayor vida útil',
			'Flexibles y fáciles de manipular',
			'Compatibles con ganchos, clips o nudos tradicionales',
			'Opciones biodegradables disponibles',
			'Presentación: Rollos de distintas longitudes y calibres',
			'Usos: Tutorado de cultivos hortícolas, viñedos, viveros, floricultura y jardinería técnica'
		],
		logo: '/images/logos/exporplas-logo.png',
		specs: {
			usos: [
				'Tutorado de cultivos hortícolas como tomate, pimiento, pepino, berenjena',
				'Soporte en viñedos y viveros',
				'Aplicaciones en floricultura y jardinería técnica',
			],
			opciones: [
				'Hilos UV',
				'Hilos biodegradables',
			],
			presentacion: [
				'Rollos de distintas longitudes y calibres',
			],
		},
	},
	{
		name: 'Mantas de Solarización',
		slug: 'mantas-de-solarizacion',
		images: [
			'/images/productos/horticultura/manta1.webp',
			'/images/productos/horticultura/manta2.jpg',
			'/images/productos/horticultura/manta3.webp',
		],
		description:
			'Control natural de plagas, malezas y patógenos del suelo. Solución ecológica y eficiente para la desinfección de suelos agrícolas mediante energía solar.',
		details: [
			'Desinfección natural del suelo con energía solar',
			'Eliminación de malezas y semillas no deseadas',
			'Control de patógenos y nematodos sin agroquímicos',
			'Método amigable con el medio ambiente',
			'Reducción en el uso de herbicidas y fungicidas',
			'Fácil instalación y reutilizables por varias temporadas',
			'Presentación: Rollos de 4,20 m x 100 m, espesor optimizado',
		],
		logo: '/images/logos/agrinpex-logo.png',
		specs: {
			beneficios: [
				'🌞 Desinfección natural del suelo con energía solar',
				'🚫 Eliminación de malezas y semillas no deseadas',
				'🦠 Control de patógenos y nematodos sin agroquímicos',
				'♻️ Método amigable con el medio ambiente',
				'📉 Reducción en el uso de herbicidas y fungicidas',
			],
			aplicaciones: [
				'Preparación de suelos para cultivos hortícolas, florales y viveros',
				'Alternativa ecológica a la fumigación química',
				'Mejora de la estructura del suelo y disponibilidad de nutrientes',
			],
			presentacion: [
				'Rollos de ancho: 4,20 metros – largo: 100 metros',
				'Espesor optimizado para mayor durabilidad y eficiencia térmica',
			],
		},
	},
];

export default function ProductoDetalle() {
	const router = useRouter();
	const { slug } = router.query;
	const product = products.find((p) => p.slug === slug);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	if (!product) {
		return (
			<div className="min-h-screen flex flex-col items-center justify-center">
				<h2 className="text-2xl font-bold mb-4">Producto no encontrado</h2>
				<Link href="/productos/horticultura" className="text-green-700 underline">
					Volver
				</Link>
			</div>
		);
	}

	const nextImage = () => {
		setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
	};

	const prevImage = () => {
		setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
	};

	return (
		<>
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
						<img
							src={product.logo}
							alt="logo"
							className="w-20 h-20 mb-4 bg-white/90 rounded-full p-2 shadow-lg mx-auto"
						/>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
							{product.name}
						</h1>
						<p className="mt-6 text-lg md:text-xl text-white max-w-2xl drop-shadow mx-auto">
							{product.description}
						</p>
					</div>
				</div>
			</div>

			{/* Contenido Principal */}
			<div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
					{/* Breadcrumb */}
					<nav className="flex mb-8">
						<Link
							href="/productos/horticultura"
							className="text-green-700 hover:text-green-900 transition-colors"
						>
							← Volver a productos de horticultura
						</Link>
					</nav>

					{/* Galería de Imágenes con Slider */}
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
						<div className="lg:col-span-2">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">Imágenes</h2>

							{/* Slider Principal */}
							<div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-6">
								<img
									src={product.images[currentImageIndex]}
									alt={`${product.name} imagen ${currentImageIndex + 1}`}
									className="w-full h-full object-cover"
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
										<img
											src={img}
											alt={`${product.name} thumbnail ${idx + 1}`}
											className="w-full h-24 object-cover"
										/>
									</button>
								))}
							</div>
						</div>

						{/* Información del Producto */}
						<div className="lg:col-span-1">
							<div className="sticky top-10">
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
												<span className="text-gray-700 leading-relaxed">{detail}</span>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>

					{/* Descripción Detallada */}
					<div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100">
						<h2 className="text-3xl font-bold text-gray-900 mb-6">Descripción Detallada</h2>
						{product.slug === 'peliculas-para-invernadero' ? (
							<div className="prose prose-lg max-w-none text-gray-700">
								<h3 className="text-2xl font-semibold mb-2">Películas para Invernadero – AgrinPlex</h3>
								<p>
									CMP Agro ofrece una línea de películas tricapa de alta performance, diseñadas para
									satisfacer las necesidades de diversos cultivos en invernaderos. Estas películas se
									caracterizan por su fácil despliegue, excelentes propiedades ópticas y homogeneidad en
									el espesor.
								</p>
								<h4 className="mt-6 mb-2 font-bold text-green-700">Tipos de Películas</h4>
								{product.specs?.tipos?.map((tipo, idx) => (
									<div key={idx} className="mb-4">
										<strong>{tipo.titulo}:</strong>
										<ul className="list-disc pl-6 mt-1">
											{tipo.items.map((item, i) => (
												<li key={i}>{item}</li>
											))}
										</ul>
									</div>
								))}
								<h4 className="mt-6 mb-2 font-bold text-green-700">Medidas y Espesor</h4>
								<ul className="list-disc pl-6">
									{product.specs?.medidas?.map((medida, i) => (
										<li key={i}>
											{typeof medida === 'string' 
												? medida 
												: ('tipo' in medida) 
													? `${medida.tipo} - ${medida.dimensiones}${medida.espesor ? ` - ${medida.espesor}` : ''}` 
													: `${medida.ancho} x ${medida.largo}`
											}
										</li>
									))}
								</ul>
							</div>
						) : product.slug === 'media-sombra' ? (
							<div className="prose prose-lg max-w-none text-gray-700">
								<h3 className="text-2xl font-semibold mb-2">Mallas de Media Sombra – SUGRAND</h3>
								<p>
									CMP Agro ofrece mallas de media sombra de alta calidad, diseñadas para proteger cultivos y áreas específicas del exceso de radiación solar. Estas mallas son ideales para horticultura, viveros, invernaderos y otros usos agrícolas.
								</p>
								<h4 className="mt-6 mb-2 font-bold text-green-700">Características Principales</h4>
								<ul className="list-disc pl-6">
									<li>Material: Polietileno de alta densidad (HDPE) con estabilización UV.</li>
									<li>Tejido: Tipo raschel, que proporciona resistencia y durabilidad.</li>
									<li>Colores Disponibles: Negro, blanco, verde y otros a pedido.</li>
									<li>Porcentaje de Sombra: Varía según el modelo, típicamente entre 35% y 95%.</li>
									<li>Medidas Estándar: 2,10 x 100 m y 4,20 x 100 m.</li>
									<li>Usos Comunes: Sombreo de cultivos, protección contra heladas, cortaviento, atrapaniebla y control de temperatura en invernaderos.</li>
								</ul>
								<h4 className="mt-6 mb-2 font-bold text-green-700">Modelos Destacados</h4>
								<ul className="list-disc pl-6">
									{product.specs?.modelos?.map((modelo, i) => (
										<li key={i}>
											<strong>{modelo.nombre}:</strong> {modelo.descripcion}
										</li>
									))}
								</ul>
								<h4 className="mt-6 mb-2 font-bold text-green-700">Beneficios</h4>
								<ul className="list-disc pl-6">
									{product.specs?.beneficios?.map((beneficio, i) => (
										<li key={i}>{beneficio}</li>
									))}
								</ul>
							</div>
						) : product.slug === 'mulching' ? (
							<div className="prose prose-lg max-w-none text-gray-700">
								<h3 className="text-2xl font-semibold mb-2">Mulching – CMP Agro</h3>
								<p>
									CMP Agro ofrece mulching de alta calidad para diversas aplicaciones agrícolas, destacando por su resistencia mecánica y protección eficiente contra condiciones climáticas extremas.
								</p>
								<h4 className="mt-6 mb-2 font-bold text-green-700">Características Principales</h4>
								<ul className="list-disc pl-6">
									<li>Alta reflexión de luz solar: Ideal para proteger los cultivos del calor excesivo.</li>
									<li>Excelente protección en veranos extremos: Ayuda a mantener la temperatura del suelo estable.</li>
									<li>Alta resistencia mecánica: Duradero y resistente a condiciones adversas.</li>
									<li>Elasticidad superior: Facilita su instalación y adaptación al terreno.</li>
									<li>Composición: Fabricado con materias primas especialmente desarrolladas y tecnología avanzada.</li>
								</ul>
								<h4 className="mt-6 mb-2 font-bold text-green-700">Usos Recomendados</h4>
								<ul className="list-disc pl-6">
									{product.specs?.usos?.map((uso, i) => (
										<li key={i}>{uso}</li>
									))}
								</ul>
								<p className="mt-4">
									Es reconocido por su óptima calidad, mayor elasticidad y excelente relación costo-beneficio en el mercado.
								</p>
								<h4 className="mt-6 mb-2 font-bold text-green-700">Medidas Disponibles</h4>
								<table className="min-w-full border mt-2 text-sm">
									<thead>
										<tr>
											<th className="border px-2 py-1">Tipo</th>
											<th className="border px-2 py-1">Dimensiones</th>
											<th className="border px-2 py-1">Espesor</th>
										</tr>
									</thead>
									<tbody>
										{product.specs?.medidas?.map((m, i) => (
											<tr key={i}>
												<td className="border px-2 py-1">{typeof m === 'string' ? '-' : 'tipo' in m ? m.tipo : '-'}</td>
												<td className="border px-2 py-1">{typeof m === 'string' ? m.split(' – ')[0] : 'dimensiones' in m ? m.dimensiones : m.ancho}</td>
												<td className="border px-2 py-1">{typeof m === 'string' ? m.split(' – ')[1] || '-' : 'espesor' in m ? m.espesor : '-'}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						) : product.slug === 'mantas-para-cultivo' ? (
							<div className="prose prose-lg max-w-none text-gray-700">
								<h3 className="text-2xl font-semibold mb-2">Mantas para Cultivo – CMP Agro</h3>
								<p>
									CMP Agro ofrece mantas para cultivo de alta calidad, diseñadas para proteger y mejorar el rendimiento de diversos cultivos. Estas mantas están elaboradas con materiales resistentes y cuentan con propiedades que favorecen el desarrollo óptimo de las plantas.
								</p>
								<h4 className="mt-6 mb-2 font-bold text-green-700">Características Principales</h4>
								<ul className="list-disc pl-6">
									<li>Protección UV: Las mantas ofrecen protección contra la radiación ultravioleta, reduciendo el estrés térmico en las plantas.</li>
									<li>Gran Resistencia: Fabricadas con materiales de alta resistencia, garantizando durabilidad y rendimiento en condiciones adversas.</li>
									<li>Gran Durabilidad: Diseñadas para soportar el paso del tiempo y las inclemencias del clima, asegurando una larga vida útil.</li>
								</ul>
								<h4 className="mt-6 mb-2 font-bold text-green-700">Usos Recomendados</h4>
								<ul className="list-disc pl-6">
									{product.specs?.usos?.map((uso, i) => (
										<li key={i}>{uso}</li>
									))}
								</ul>
								<p className="mt-4">
									Originalmente diseñadas para cultivos vitícolas, estas mantas han demostrado ser efectivas en una amplia gama de aplicaciones agrícolas.
								</p>
								<h4 className="mt-6 mb-2 font-bold text-green-700">Medidas Disponibles</h4>
								<ul className="list-disc pl-6">
									{product.specs?.medidas?.map((m, i) => (
										<li key={i}>
											{typeof m === 'string' ? (
												m
											) : 'ancho' in m ? (
												<>Ancho: {m.ancho} &nbsp;|&nbsp; Largo: {m.largo}</>
											) : (
												`${m.tipo} - ${m.dimensiones}${m.espesor ? ` - ${m.espesor}` : ''}`
											)}
										</li>
									))}
								</ul>
							</div>
						) : product.slug === 'hilos-para-tutorado' ? (
							<div className="prose prose-lg max-w-none text-gray-700">
								<h3 className="text-2xl font-semibold mb-2">Hilos para Tutorado</h3>
								<p>
									Soporte confiable para el crecimiento de tus cultivos.
								</p>
								<p>
									Nuestros Hilos para Tutorado están diseñados para brindar un soporte eficiente y duradero a cultivos que requieren guiado vertical, como tomate, pimiento, pepino, entre otros. Son ideales para su uso en invernaderos y cultivos a campo abierto, permitiendo un crecimiento ordenado y saludable de las plantas.
								</p>
								<p>
									Fabricados con materiales resistentes y estabilizados contra los rayos UV, ofrecen alta durabilidad y excelente comportamiento frente a las condiciones climáticas más exigentes. Su elasticidad y flexibilidad garantizan un amarre seguro sin dañar los tallos, acompañando el desarrollo natural de las plantas.
								</p>
								<h4 className="mt-6 mb-2 font-bold text-green-700">Características destacadas</h4>
								<ul className="list-disc pl-6">
									<li>Alta resistencia mecánica</li>
									<li>Estabilización UV para mayor vida útil</li>
									<li>Flexibles y fáciles de manipular</li>
									<li>Compatibles con ganchos, clips o nudos tradicionales</li>
									<li>Opciones biodegradables disponibles para una agricultura más sustentable</li>
								</ul>
								<h4 className="mt-6 mb-2 font-bold text-green-700">Usos recomendados</h4>
								<ul className="list-disc pl-6">
									{product.specs?.usos?.map((uso, i) => (
										<li key={i}>{uso}</li>
									))}
								</ul>
								<p className="mt-4">
									Aumentá la productividad y sanidad de tus cultivos con un sistema de tutorado confiable, seguro y eficiente.
								</p>
								<h4 className="mt-6 mb-2 font-bold text-green-700">Presentación y Opciones</h4>
								<ul className="list-disc pl-6">
									{product.specs?.presentacion?.map((p, i) => (
										<li key={i}>📦 {p}</li>
									))}
									{product.specs?.opciones?.map((o, i) => (
										<li key={i}>🌿 {o}</li>
									))}
								</ul>
							</div>
						) : product.slug === 'mantas-de-solarizacion' ? (
							<div className="prose prose-lg max-w-none text-gray-700">
								<h3 className="text-2xl font-semibold mb-2">Mantas de Solarización</h3>
								<p>
									Control natural de plagas, malezas y patógenos del suelo.
								</p>
								<p>
									Nuestras Mantas de Solarización están diseñadas para ofrecer una solución efectiva, ecológica y libre de químicos al manejo de suelos agrícolas. Utilizando la energía del sol, estas mantas permiten elevar la temperatura del suelo a niveles letales para malezas, hongos, bacterias, nematodos y otros patógenos, preparando el terreno para una producción más sana y productiva.
								</p>
								<p>
									Fabricadas con polietileno de alta resistencia y excelente transparencia, nuestras mantas maximizan la acumulación de calor bajo la superficie, favoreciendo una desinfección profunda y uniforme del suelo.
								</p>
								<h4 className="mt-6 mb-2 font-bold text-green-700">Beneficios clave</h4>
								<ul className="list-disc pl-6">
									{product.specs?.beneficios?.map((b, i) => (
										<li key={i}>{b}</li>
									))}
								</ul>
								<h4 className="mt-6 mb-2 font-bold text-green-700">Aplicaciones recomendadas</h4>
								<ul className="list-disc pl-6">
									{product.specs?.aplicaciones?.map((a, i) => (
										<li key={i}>{a}</li>
									))}
								</ul>
								<h4 className="mt-6 mb-2 font-bold text-green-700">Presentación</h4>
								<ul className="list-disc pl-6">
									{product.specs?.presentacion?.map((p, i) => (
										<li key={i}>{p}</li>
									))}
								</ul>
								<p className="mt-4">
									Nuestras mantas son fáciles de instalar y reutilizables por varias temporadas, lo que las convierte en una inversión inteligente para productores que buscan eficiencia, sostenibilidad y rendimiento agronómico superior.
								</p>
								<p className="mt-2 font-semibold text-green-700">
									🌿 Manejo agrícola responsable empieza desde el suelo.
								</p>
							</div>
						) : (
							<div className="prose prose-lg max-w-none text-gray-700">
								<p className="text-xl leading-relaxed mb-6">{product.description}</p>
								<p className="leading-relajada mt-4">
									Con años de experiencia en el sector, ofrecemos soluciones innovadoras que se adaptan a
									las necesidades específicas de cada cultivo, optimizando tanto la productividad como la
									sostenibilidad de tu operación agrícola.
								</p>
							</div>
						)}
					</div>

					{/* Call to Action */}
					<div className="mt-12 text-center">
						<div className="bg-gradient-to-r from-green-600 to-lime-600 rounded-2xl p-8 text-white">
							<h3 className="text-2xl font-bold mb-4">¿Interesado en este producto?</h3>
							<p className="text-lg mb-6 opacity-90">
								Contáctanos para más información y asesoría personalizada
							</p>
							<button className="bg-white text-green-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
								Contactar ahora
							</button>
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