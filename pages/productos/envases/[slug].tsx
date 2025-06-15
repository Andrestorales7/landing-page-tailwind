'use client';

import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import WhatsappContacts from '@/components/layout/WhatsappContacts';
import Image from "next/image";

// Lista de productos de envases
const products = [
	{
		name: 'Bag in Box',
		slug: 'bag-in-box',
		images: [
			'/images/productos/envases/baginbox.jpg',
			'/images/productos/envases/baginbox2.jpg',
			'/images/productos/envases/baginbox3.png',
		],
		description: `
      <h2 class="text-2xl font-bold mb-2">Bag in Box – Envase flexible para líquidos a granel</h2>
      <p>
        El <strong>Bag in Box</strong> es un sistema innovador de envasado flexible diseñado para el almacenamiento y transporte eficiente de líquidos a granel. Su estructura permite una manipulación sencilla, reduce el desperdicio y optimiza el espacio durante el transporte. Ideal para industrias alimentarias, químicas y farmacéuticas que requieren máxima higiene y seguridad.
      </p>
      <ul class="list-disc pl-6 mb-4">
        <li>Fabricado con materiales de alta resistencia y calidad alimentaria.</li>
        <li>Minimiza el riesgo de contaminación y prolonga la vida útil del producto.</li>
        <li>Fácil de llenar, vaciar y desechar, contribuyendo a la sostenibilidad ambiental.</li>
      </ul>
    `,
		details: [
			'<span class="font-semibold">Capacidad:</span> 1000 litros',
			'<span class="font-semibold">Aplicación:</span> Líquidos a granel',
		],
		logo: '/images/logos/embaquim-logo.png',
	},
	{
		name: 'IBC',
		slug: 'ibc',
		images: [
            '/images/productos/envases/ibc2.webp',
            '/images/productos/envases/ibc-img.png',
        ],
		description: `
      <h2 class="text-2xl font-bold mb-2">IBC – Contenedor rígido intermedio</h2>
      <p>
        El <strong>IBC (Intermediate Bulk Container)</strong> es un contenedor robusto y reutilizable, ideal para el almacenamiento y transporte seguro de líquidos y productos a granel. Su diseño modular facilita la manipulación con montacargas y su estructura apilable optimiza el espacio en bodegas y transporte.
      </p>
      <ul class="list-disc pl-6 mb-4">
        <li>Alta durabilidad y resistencia a impactos y productos químicos.</li>
        <li>Válvula de descarga para vaciado controlado y seguro.</li>
        <li>Amplia compatibilidad con diferentes industrias: alimentaria, química, agrícola e industrial.</li>
      </ul>
    `,
		details: [
			'<span class="font-semibold">Capacidad:</span> 1000 litros',
			'<span class="font-semibold">Material:</span> Plástico reforzado',
		],
		logo: '/images/logos/mauser-logo1.png',
	},
	{
		name: 'Flexitank',
		slug: 'flexitank',
		images: ['/images/productos/envases/flexi-tank3.png',
            '/images/productos/envases/flexitank1.jpg',
        ],
		description: `
      <h2 class="text-2xl font-bold mb-2">Flexitank – Transporte flexible de líquidos</h2>
      <p>
        El <strong>Flexitank</strong> es una solución eficiente y económica para el transporte internacional de líquidos no peligrosos en contenedores marítimos estándar. Su diseño flexible permite maximizar la capacidad de carga y reducir los costos logísticos, garantizando la integridad del producto durante todo el trayecto.
      </p>
      <ul class="list-disc pl-6 mb-4">
        <li>Fabricado con materiales multicapa de alta resistencia y calidad alimentaria.</li>
        <li>Instalación rápida y sencilla en contenedores de 20 pies.</li>
        <li>Ideal para aceites, jugos, vinos, productos químicos y más.</li>
      </ul>
    `,
		details: [
			'<span class="font-semibold">Capacidades:</span> 1000, 18.000, 20.000, 24.000 litros',
			'<span class="font-semibold">Aplicación:</span> Líquidos no peligrosos',
		],
		logo: '/images/logos/magnum-logo.png',
	},
	{
		name: 'Tambores Metálicos',
		slug: 'tambores-metalicos',
		images: ['/images/productos/envases/envase2.jpg',
            '/images/productos/envases/envase1.jpg',
            '/images/productos/envases/envase3.webp',
        ],
		description: `
      <h2 class="text-2xl font-bold mb-2">Tambores Metálicos – Almacenamiento industrial seguro</h2>
      <p>
        Los <strong>tambores metálicos</strong> ofrecen una solución robusta y confiable para el almacenamiento y transporte de líquidos y sólidos industriales. Disponibles en diferentes capacidades y modelos, garantizan la máxima protección del contenido frente a impactos, fugas y contaminación externa.
      </p>
      <ul class="list-disc pl-6 mb-4">
        <li>Construcción en acero de alta resistencia, apto para uso industrial.</li>
        <li>Opciones de tapa fija o removible según la necesidad del producto.</li>
        <li>Cumplen con normativas internacionales de seguridad y transporte.</li>
      </ul>
    `,
		details: [
			'<span class="font-semibold">Capacidades:</span> 50, 100, 200, 210, 220 litros',
			'<span class="font-semibold">Modelos:</span> Tapa fija, tapa removible',
		],
		logo: '/images/logos/greif-logo.png',
	},
	{
		name: 'Tambores de Plástico',
		slug: 'tambores-plastico',
		images: ['/images/productos/envases/tambor1.jpg',
            '/images/productos/envases/envase-plastico.jpg',
            '/images/productos/envases/tambor2.avif',
        ],
		description: `
      <h2 class="text-2xl font-bold mb-2">Tambores de Plástico – Versatilidad y resistencia</h2>
      <p>
        Los <strong>tambores de plástico</strong> son ideales para el almacenamiento y transporte de productos líquidos y sólidos, tanto alimenticios como industriales. Su material resistente y ligero facilita la manipulación y asegura la protección del contenido frente a agentes externos.
      </p>
      <ul class="list-disc pl-6 mb-4">
        <li>Fabricados en polietileno de alta densidad (HDPE), atóxicos y reciclables.</li>
        <li>Resistentes a la corrosión, impactos y variaciones de temperatura.</li>
        <li>Disponibles en diferentes capacidades y diseños según la aplicación.</li>
      </ul>
    `,
		details: [
			'<span class="font-semibold">Capacidades:</span> 100, 200, 250 litros',
			'<span class="font-semibold">Aplicación:</span> Líquidos y sólidos',
		],
		logo: '/images/logos/mauser-logo1.png',
	},
	{
		name: 'Bolsa de Rafia',
		slug: 'bolsa-rafia',
		images: ['/images/productos/envases/bolsarafia.jpg'],
		description: `
      <h2 class="text-2xl font-bold mb-2">Bolsa de Rafia – Solución versátil para empaque</h2>
      <p>
        Las <strong>bolsas de rafia</strong> son una opción económica y resistente para el empaque y transporte de productos agrícolas, industriales y alimenticios. Permiten personalización en tamaño, color y tipo de cierre, adaptándose a diversas necesidades logísticas.
      </p>
      <ul class="list-disc pl-6 mb-4">
        <li>Fabricadas en polipropileno tejido de alta resistencia.</li>
        <li>Disponibles en versiones valvuladas o de boca abierta, laminadas o convencionales.</li>
        <li>Posibilidad de impresión personalizada para identificación de marca.</li>
      </ul>
    `,
		details: [
			'<span class="font-semibold">Tipos:</span> Valvulado o boca abierta',
			'<span class="font-semibold">Opciones:</span> Laminada o convencional',
		],
		logo: '/images/logos/textil-logo.png',
	},
	{
		name: 'Bolsas de Papel',
		slug: 'bolsa-papel',
		images: ['/images/productos/envases/bolsadepapel.jpeg'],
		description: `
      <h2 class="text-2xl font-bold mb-2">Bolsas de Papel – Empaque ecológico y resistente</h2>
      <p>
        Las <strong>bolsas de papel</strong> ofrecen una alternativa ecológica y segura para el empaque de productos alimenticios, harinas, químicos y más. Su estructura multicapa y posibilidad de linner interno aseguran resistencia y protección contra la humedad.
      </p>
      <ul class="list-disc pl-6 mb-4">
        <li>Fabricadas en papel kraft de alta calidad, blanco o marrón.</li>
        <li>Opciones de boca abierta o valvulado, con o sin fuelle.</li>
        <li>Impresión personalizada y linner interno para mayor protección.</li>
      </ul>
    `,
		details: [
			'<span class="font-semibold">Tipos:</span> Valvulado o boca abierta',
			'<span class="font-semibold">Colores:</span> Blanca o marrón',
		],
		logo: '/images/logos/klabin-logo.png',
	},
	{
		name: 'Big Bags',
		slug: 'big-bags',
		images: ['/images/productos/envases/bigbags.jpg'],
		description: `
      <h2 class="text-2xl font-bold mb-2">Big Bags – Sacos de gran tamaño para cargas a granel</h2>
      <p>
        Los <strong>Big Bags</strong> son sacos flexibles de gran capacidad, diseñados para el manejo, almacenamiento y transporte de materiales a granel en la industria agrícola, minera y de la construcción. Su diseño permite una carga y descarga eficiente, optimizando los procesos logísticos.
      </p>
      <ul class="list-disc pl-6 mb-4">
        <li>Fabricados en polipropileno tejido de alta resistencia y durabilidad.</li>
        <li>Disponibles en diferentes capacidades y modelos: tubular, maparado, con o sin liner.</li>
        <li>Personalizables en dimensiones, colores y sistemas de carga/descarga.</li>
      </ul>
    `,
		details: [
			'<span class="font-semibold">Capacidades:</span> 500kg, 800kg, 1000kg, 1200kg, 1500kg',
			'<span class="font-semibold">Modelos:</span> Tubular (blanco), maparado (blanco o transparente)',
		],
		logo: '/images/logos/rafitec-logo.png',
	},
];

export default function ProductoEnvaseDetalle() {
	const router = useRouter();
	const { slug } = router.query;
	const product = products.find((p) => p.slug === slug);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	if (!product) {
		return (
			<div className="min-h-screen flex flex-col items-center justify-center">
				<h2 className="text-2xl font-bold mb-4">Producto no encontrado</h2>
				<Link href="/productos/envases" className="text-green-700 underline">
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
				<div
					className="absolute inset-0 bg-cover bg-center opacity-80"
					style={{
						backgroundImage: `url(${product.images[0]})`,
					}}
				></div>
				<div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
				<div className="relative z-10 pt-32 pb-16 px-6 sm:px-12 lg:px-18 max-w-6xl mx-auto">
					<div className="text-center">
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
							href="/productos/envases"
							className="text-green-700 hover:text-green-900 transition-colors"
						>
							← Volver a productos de envases
						</Link>
					</nav>

					{/* Galería de Imágenes con Slider */}
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
						<div className="lg:col-span-2">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">Imágenes</h2>
							<div className="relative w-full h-72 md:h-80 rounded-2xl overflow-hidden shadow-2xl mb-6 bg-gray-100">
								<Image
									src={product.images[currentImageIndex]}
									alt={`${product.name} imagen ${currentImageIndex + 1}`}
									fill
									className="w-full h-full object-contain object-center bg-gray-100 rounded-2xl"
									sizes="(max-width: 768px) 100vw, 66vw"
									priority
								/>
								{/* Botones de navegación */}
								{product.images.length > 1 && (
									<>
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
									</>
								)}
								{/* Indicadores */}
								{product.images.length > 1 && (
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
								)}
							</div>
							{/* Thumbnails */}
							{product.images.length > 1 && (
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
												className="w-full h-24 object-cover object-center bg-gray-100 rounded-lg"
											/>
										</button>
									))}
								</div>
							)}
						</div>

						{/* Información del Producto */}
						<div className="lg:col-span-1">
							<div className="sticky top-10">
								{product.logo && (
									<div className="flex justify-center mb-8">
										<div className="w-28 h-28 flex items-center justify-center bg-white rounded-full border border-green-100 shadow-xl p-3">
											<Image
												src={product.logo}
												alt={`${product.name} logo`}
												width={80}
												height={80}
												className="max-w-[80%] max-h-[80%] object-contain"
											/>
										</div>
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