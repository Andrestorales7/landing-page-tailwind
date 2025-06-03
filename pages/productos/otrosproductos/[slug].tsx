import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import WhatsappContacts from '@/components/layout/WhatsappContacts';

const products = [
	{
		name: 'Cintas Flexográficas',
		slug: 'cintas-flexograficas',
		images: ['/images/productos/otros/cintas-flexograficas.jpg'],
		description: 'Cintas impresas de alta calidad para embalaje y seguridad.',
		details: ['Personalizables', 'Alta resistencia', 'Impresión nítida'],
		logo: '/images/logos/cintas-logo.png',
		specs: {
			usos: [
				'Embalaje de cajas y paquetes',
				'Identificación y seguridad',
			],
			presentacion: [
				'Rollos de diferentes anchos y largos',
				'Impresión personalizada disponible',
			],
		},
	},
	{
		name: 'Máquinas Cerradoras',
		slug: 'maquinas-cerradoras',
		images: [
			'/images/productos/otros/costuradoras/cost1.png',
			'/images/productos/otros/costuradoras/cost2.png',
			'/images/productos/otros/costuradoras/cost3.png',
		],
		description: 'Máquinas para cerrar cajas y paquetes de forma eficiente.',
		details: ['Automáticas y manuales', 'Fácil mantenimiento'],
		logo: '/images/logos/maquinas-logo.png',
		specs: {
			tipos: [
				'Cerradoras automáticas',
				'Cerradoras manuales',
			],
			ventajas: [
				'Ahorro de tiempo y esfuerzo',
				'Resultados profesionales',
			],
		},
	},
	{
		name: 'Precintos',
		slug: 'precintos',
		images: [
			'/images/productos/otros/precintos/precinto-altaseguridad.jpg',
            '/images/productos/otros/precintos/precinto-indicativo.jpg',
            '/images/productos/otros/precintos/precinto-seguridad.jpg',
		],
		description: 'Precintos de seguridad para embalaje y transporte.',
		details: [
			'Variedad de tamaños',
			'Alta seguridad',
		],
		logo: '/images/logos/precintos-logo.png',
		specs: {
			usos: [
				'Cierre de bolsas y paquetes',
				'Control de acceso y seguridad',
			],
			presentacion: [
				'Precintos plásticos y metálicos',
				'Colores y tamaños variados',
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
				<Link href="/productos/otrosproductos" className="text-green-700 underline">
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

	const handleThumbnailClick = (idx: number) => {
		setCurrentImageIndex(idx);
	};

	return (
		<>
			{/* Hero Section */}
			<div className="relative min-h-[40vh] bg-green-900 overflow-hidden">
				{/* Imagen de fondo */}
				<div
					className="absolute inset-0 bg-cover bg-center opacity-70 blur-[2px] scale-105"
					style={{
						backgroundImage: `url(${product.images[0]})`,
					}}
				></div>
				{/* Overlay simple */}
				<div className="absolute inset-0 bg-black/60 pointer-events-none"></div>
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
						<p className="mt-6 text-lg md:text-xl text-white max-w-2xl drop-shadow-lg mx-auto bg-black/40 rounded-xl px-4 py-2">
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
							href="/productos/otrosproductos"
							className="text-green-700 hover:text-green-900 transition-colors"
						>
							← Volver a otros productos
						</Link>
					</nav>

					{/* Galería de Imágenes */}
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
						<div className="lg:col-span-2">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">Imágenes</h2>
							<div className="relative w-full h-96 md:h-[400px] rounded-2xl overflow-hidden shadow-2xl mb-4 bg-gray-200 flex items-center justify-center">
								<img
									src={product.images[currentImageIndex]}
									alt={`${product.name} imagen ${currentImageIndex + 1}`}
									className="w-full h-full object-contain object-center transition-all duration-300"
									style={{ background: '#fff' }}
								/>
								{/* Botones de navegación */}
								{product.images.length > 1 && (
									<>
										<button
											onClick={prevImage}
											className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200"
										>
											<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
											</svg>
										</button>
										<button
											onClick={nextImage}
											className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200"
										>
											<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
											</svg>
										</button>
									</>
								)}
							</div>
							{/* Miniaturas */}
							{product.images.length > 1 && (
								<div className="flex space-x-3 justify-center mt-2">
									{product.images.map((img, idx) => (
										<button
											key={img}
											onClick={() => handleThumbnailClick(idx)}
											className={`border-2 rounded-lg overflow-hidden w-16 h-16 transition-all duration-200 ${
												idx === currentImageIndex
													? 'border-green-600 ring-2 ring-green-300'
													: 'border-gray-200 opacity-70 hover:opacity-100'
											}`}
											aria-label={`Ver imagen ${idx + 1}`}
										>
											<img
												src={img}
												alt={`Miniatura ${idx + 1}`}
												className="w-full h-full object-cover"
											/>
										</button>
									))}
								</div>
							)}
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
													<span className="text-green-600 text-base font-bold">✓</span>
												</div>
												<span className="text-gray-800 leading-relaxed font-medium">{detail}</span>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>

					{/* Descripción Detallada */}
					<div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100">
						<h3 className="text-2xl font-semibold mb-2 text-green-800">{product.name}</h3>
						<p className="mb-4 text-gray-800 text-lg leading-relaxed">{product.description}</p>
						{/* Especificaciones según producto */}
						{product.specs?.usos && (
							<>
								<h4 className="mt-6 mb-2 font-bold text-green-700">Usos</h4>
								<ul className="list-disc pl-6 text-gray-700">
									{product.specs.usos.map((uso, i) => (
										<li key={i}>{uso}</li>
									))}
								</ul>
							</>
						)}
						{product.specs?.tipos && (
							<>
								<h4 className="mt-6 mb-2 font-bold text-green-700">Tipos</h4>
								<ul className="list-disc pl-6 text-gray-700">
									{product.specs.tipos.map((tipo, i) => (
										<li key={i}>{tipo}</li>
									))}
								</ul>
							</>
						)}
						{product.specs?.ventajas && (
							<>
								<h4 className="mt-6 mb-2 font-bold text-green-700">Ventajas</h4>
								<ul className="list-disc pl-6 text-gray-700">
									{product.specs.ventajas.map((v, i) => (
										<li key={i}>{v}</li>
									))}
								</ul>
							</>
						)}
						{product.specs?.presentacion && (
							<>
								<h4 className="mt-6 mb-2 font-bold text-green-700">Presentación</h4>
								<ul className="list-disc pl-6 text-gray-700">
									{product.specs.presentacion.map((p, i) => (
										<li key={i}>{p}</li>
									))}
								</ul>
							</>
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