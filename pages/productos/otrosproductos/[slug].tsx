import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import WhatsappContacts from '@/components/layout/WhatsappContacts';
import Image from "next/image";

const products = [
    {
        name: 'Cintas Flexográficas',
        slug: 'cintas-flexograficas',
        images: ['/images/productos/otros/cintasflex/cintas1.jpg',
			'/images/productos/otros/cintasflex/cintas2.jpg',
			
		],
        description: 'Cintas impresas de alta calidad para embalaje y seguridad. Certificadas con Full HD Flexo por Esko, ofrecen una resolución muy alta en impresión flexográfica con reproducción precisa de puntos finos y semitonos.',
        details: [
            'Soporte de espuma de alta calidad',
            'Certificación Full HD Flexo (Esko)',
            'Adhesivo doble cara para fotopolímero y hule',
            'Remoción limpia sin residuos',
            'Transferencia uniforme de tinta'
        ],
        logo: '/images/logos/tesa-logo.svg',
        specs: {
            usos: [
                'Embalaje de cajas y paquetes',
                'Identificación y seguridad',
                'Etiquetas de alta definición',
                'Packaging y envases exigentes'
            ],
            presentacion: [
                'Rollos de diferentes anchos y largos',
                'Impresión personalizada disponible',
            ],
            caracteristicas: [
                {
                    titulo: 'Soporte y estructura',
                    detalles: [
                        'Espuma de alta calidad diseñada específicamente para soportar clichés de impresión flexográfica',
                        'Excelente estabilidad y planitud durante el proceso de impresión',
                        'Compensa irregularidades menores y garantiza un contacto óptimo entre cliché y cilindro'
                    ]
                },
                {
                    titulo: 'Rendimiento de impresión',
                    detalles: [
                        'Certificada con Full HD Flexo por Esko para ofrecer resolución muy alta',
                        'Mantiene nitidez y contraste de motivos impresos',
                        'Ideal para trabajos exigentes como packaging, etiquetas y gráficos de alta definición'
                    ]
                },
                {
                    titulo: 'Adhesividad y flexibilidad',
                    detalles: [
                        'Adhesivo doble cara que fija firmemente el cliché al cilindro o manga',
                        'Compatible con clichés de fotopolímero y de hule (látex)',
                        'Permite retirar el cliché de manera limpia sin dejar residuos'
                    ]
                },
                {
                    titulo: 'Eficiencia operativa',
                    detalles: [
                        'Garantiza transferencia uniforme de tinta, ideal para tirajes continuos',
                        'Reducido riesgo de "lifting" o despegue del borde del cliché',
                        'Mejora la fiabilidad y reduce desperdicios'
                    ]
                },
                {
                    titulo: 'Disponibilidad y logística',
                    detalles: [
                        'Envíos a todo el país',
                        'Sucursales en Asunción, Minga Guazú y Loma Plata',
                        'Variedad de modelos para diferentes necesidades de impresión'
                    ]
                }
            ],
            tabla: {
                titulo: 'Especificaciones técnicas',
                columnas: ['Característica', 'Detalle'],
                filas: [
                    ['Soporte', 'Espuma de alta calidad'],
                    ['Adhesivo', 'Doble cara, para fotopolímero y hule'],
                    ['Calidad', 'Certificación Full HD Flexo (Esko)'],
                    ['Remoción', 'Limpia, sin residuos'],
                    ['Aplicaciones', 'Etiquetas, envases, packaging de alta definición'],
                    ['Logística', 'Sucursales en Asunción, Minga Guazú, Loma Plata']
                ]
            },
            cuandoUtilizar: [
                'Procesos de flexografía que exigen alta resolución',
                'Trabajos que requieren consistencia en semitonos',
                'Impresiones Full HD con clichés de fotopolímero',
                'Trabajos con frecuentes cambios de cliché'
            ]
        },
    },
    {
        name: 'Máquinas Cerradoras',
        slug: 'maquinas-cerradoras',
        images: [
            '/images/productos/otros/costuradoras/union1.png',
            '/images/productos/otros/costuradoras/union2.png',
            '/images/productos/otros/costuradoras/union3.png',
            '/images/productos/otros/costuradoras/union4.png',
        ],
        description: 'Máquinas Union Special para cerrar bolsas y sacos de forma eficiente. Representamos oficialmente esta reconocida marca estadounidense en Paraguay, ofreciendo diversos modelos para distintas necesidades industriales.',
        details: [
            'Estructura completamente cerrada que reduce ruido y vibración',
            'Sistemas de lubricación automática o manual según modelo', 
            'Corte de hilo integrado que facilita y acelera el trabajo',
            'Soporte técnico y repuestos disponibles en todo el país'
        ],
        logo: '/images/productos/otros/costuradoras/union-logo.jpg',
        specs: {
            tipos: [
                'Cerradoras para productos pesados',
                'Cerradoras portátiles para bolsas livianas',
                'Cerradoras para geotextiles',
                'Cerradoras de alta resistencia'
            ],
            ventajas: [
                'Reducción de ruido y vibraciones en el entorno de trabajo',
                'Cambio rápido de bobina minimizando tiempos muertos',
                'Corte automático o manual según el modelo',
                'Respaldo postventa con técnicos especializados'
            ],
            caracteristicas: [
                {
                    titulo: 'Variedad de modelos Union Special',
                    detalles: [
                        'Representamos en Paraguay la reconocida marca estadounidense Union Special, líder en maquinaria para cierre de bolsas industrial',
                        'Todos los modelos están diseñados con estructura completamente cerrada, garantizando bajos niveles de ruido y vibración',
                        'Sistemas de lubricación automática o manual, según el modelo específico',
                        'Corte de hilo integrado que facilita y acelera el trabajo diario'
                    ]
                },
                {
                    titulo: 'Modelos destacados',
                    detalles: [
                        'Union Special 80800™: Especial para cierre de bolsas con productos pesados (ráfia, plástico, papel). Velocidad de hasta 1800 rpm. Lubricación manual, costura de 1 o 2 hilos, con diseño robusto y sencillo',
                        'Union Special 4000A™: Modelo portátil (solo 5,5 kg) para bolsas livianas de rafia, algodón, lino o papel. Reduce el ruido al mínimo, ideal para ambientes acústicamente sensibles. Costura de tipo simple (1 hilo), lubricación manual',
                        'Union Special 2200AA™: Diseñada para geotextiles, con excelente eficiencia, flexibilidad y confiabilidad. Uso de 1 o 2 hilos, lubricación manual, preparada para uso intenso',
                        'Union Special BC200™: Versión de alta resistencia con corona cerrada y piezas anticorrosión, ideal para entornos con químicos. Lubricación automática, costura de hasta 2750 rpm y opción de corte de cadeneta automático o manual'
                    ]
                },
                {
                    titulo: 'Beneficios operativos',
                    detalles: [
                        'Reducción de ruido y vibraciones, mejorando el confort en el puesto de trabajo',
                        'Cambio rápido de bobina y corte automático/manual, disminuyendo tiempos muertos',
                        'Soporte técnico y stock de repuestos disponible en Asunción, Minga Guazú y Loma Plata',
                        'Envíos a todo el país, respaldo postventa con técnicos especializados'
                    ]
                }
            ],
            tabla: {
                titulo: 'Comparativo de modelos',
                columnas: ['Modelo', 'Aplicación principal', 'Peso', 'Velocidad', 'Lubricación', 'Corte hilo'],
                filas: [
                    ['80800™', 'Bolsas pesadas (ráfia/plástico)', 'Pesada', '1800 rpm', 'Manual', '1-2 hilos'],
                    ['4000A™', 'Bolsas livianas, portátil', '5,5 kg', '–', 'Manual', '1 hilo'],
                    ['2200AA™', 'Geotextiles, trabajos industriales', 'Moderada', '–', 'Manual', '1-2 hilos'],
                    ['BC200™', 'Industrias químicas, alta resistencia', 'Pesada', '2750 rpm', 'Automática', '1 hilo / cadeneta']
                ]
            },
            cuandoUtilizar: [
                'Para envases pesados (productos agro o químicos): elige la 80800™ o la BC200™',
                'Si necesitas movilidad y cierre de bolsas livianas: la 4000A™ es ideal',
                'Para trabajos con geotextiles: la 2200AA™ ofrece balance entre productividad y flexibilidad'
            ],
            presentacion: [
                'Máquinas completas listas para operar',
                'Kits de repuestos disponibles',
                'Opciones de capacitación para operadores'
            ]
        }
    },
    {
        name: 'Precintos',
        slug: 'precintos',
        images: [
            '/images/productos/otros/precintos/precinto-altaseguridad.jpg',
            '/images/productos/otros/precintos/precinto-indicativo.jpg',
            '/images/productos/otros/precintos/precinto-seguridad.jpg',
        ],
        description: 'Precintos de seguridad para embalaje y transporte con diferentes niveles de resistencia según las necesidades de cada aplicación. Desde modelos básicos para identificación visual hasta soluciones de alta seguridad para contenedores marítimos.',
        details: [
            'Variedad de tamaños y materiales (plástico y metal)',
            'Diferentes niveles de seguridad según necesidad',
            'Opciones personalizables con logos y numeración',
            'Modelos con resistencia de hasta 1500 kgf'
        ],
        logo: '/images/logos/cmp-logo.png',
        specs: {
            usos: [
                'Cierre de bolsas y paquetes',
                'Control de acceso y seguridad',
                'Contenedores y transporte de mercancías',
                'Seguridad industrial y logística'
            ],
            presentacion: [
                'Precintos plásticos indicativos',
                'Precintos metálicos con cable',
                'Precintos de alta seguridad',
                'Colores y tamaños variados'
            ],
            caracteristicas: [
                {
                    titulo: 'Precintos Indicativos (plásticos)',
                    detalles: [
                        'Diseñados principalmente para identificación visual, con resistencia moderada (≤ 231 kgf)',
                        'ERPS300: Material de polipropileno con candado interno de acero inoxidable, longitud de 300 mm y resistencia de 25 kgf. Personalizable con logo, número, código de barras/QR. Ideal para contenedores, puertas, bolsas y envíos postales',
                        'ERPS400T: Igual que ERPS300, pero con 400 mm de largo y resistencia aumentada a 39,25 kgf. Cuenta con sistema de bloqueo hermético y exclusivo sello desechable',
                        'Otros modelos indicativos incluyen ROTO TWIST, GP415 PULL-UP, y los alambres de acero inoxidable, útiles donde se busque mayor durabilidad y resistencia a la corrosión'
                    ]
                },
                {
                    titulo: 'Precintos de Seguridad (metálicos con cable)',
                    detalles: [
                        'Ofrecen mayor resistencia (231–1000 kgf) y se utilizan cuando se requiere mayor integridad del sello',
                        'Modelo TSS-PCF1.5: Cuerpo en fundición de zinc con recubrimiento en ABS. Cable trenzado de acero aeronáutico con diámetro de 1.5 mm y resistencia a tracción de 191,7 kgf. Anti-corrosión/UV, requiere cortador para extracción. Ideal para puertas de contenedores/remolques y tambores',
                        'Otros modelos de la categoría incluyen TSS-CF1.5C (346,7 kgf) y TSS-CF2.0T (495,6 kgf)'
                    ]
                },
                {
                    titulo: 'Precintos de Alta Seguridad',
                    detalles: [
                        'Destinados a aplicaciones que requieren máxima protección, con resistencia superior a 1019 kgf',
                        'Modelo Klicker: Perno de acero alto carbono con revestimiento en ABS. Resistencia a tracción de 1500 kgf, con sistema anti-giro y anti-cierre forzado. Diseño robusto para contenedores marítimos, puertas de vagones o áreas de alto valor',
                        'Otros modelos de esta categoría incluyen RFID-BOLT y TSS-CF4.0 (1000 kgf)'
                    ]
                }
            ],
            tabla: {
                titulo: 'Guía de selección por nivel de seguridad',
                columnas: ['Nivel de seguridad', 'Rango de resistencia', 'Uso recomendado'],
                filas: [
                    ['Indicativo', '≤ 231 kgf', 'Envíos postales, bolsas, contenedores sencillos, aplicaciones visuales'],
                    ['Seguridad', '231–1000 kgf', 'Puertas de contenedores/remolques, tambores, carga con riesgo medio'],
                    ['Alta seguridad', '> 1000 kgf', 'Contenedores marítimos, vagones, instalaciones de alto valor']
                ]
            },
            cuandoUtilizar: [
                'Para envíos postales o identificación visual: elige precintos indicativos como ERPS300',
                'Para protección intermedia de contenedores: usa precintos de seguridad con cable como TSS-PCF1.5',
                'Para máxima protección en transporte marítimo o ferroviario: opta por precintos de alta seguridad como el Klicker'
            ]
        }
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
							{/* Galería de imágenes principal (reemplaza <img> por <Image />) */}
							<div className="relative w-full h-96 md:h-[400px] rounded-2xl overflow-hidden shadow-2xl mb-4 bg-gray-200 flex items-center justify-center">
								<Image
									src={product.images[currentImageIndex]}
									alt={`${product.name} imagen ${currentImageIndex + 1}`}
									fill
									className="w-full h-full object-contain object-center transition-all duration-300"
									style={{ background: '#fff' }}
									sizes="(max-width: 768px) 100vw, 66vw"
									priority
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
											<Image
												src={img}
												alt={`Miniatura ${idx + 1}`}
												width={64}
												height={64}
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
								{/* Logo del producto movido aquí */}
								<div className="flex justify-center mb-6">
									<Image
										src={product.logo}
										alt={`Logo ${product.name}`}
										width={150}
										height={80}
										className="h-auto max-h-16 object-contain bg-white shadow-sm border border-gray-100 rounded-md p-2"
									/>
								</div>
								
								<h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
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
                        
                        {/* Características detalladas específicas */}
                        {(product.slug === 'cintas-flexograficas' || product.slug === 'maquinas-cerradoras' || product.slug === 'precintos') && product.specs?.caracteristicas && (
                            <div className="mt-8 space-y-6">
                                <h4 className="text-xl font-bold text-green-800 mb-4">Características Detalladas</h4>
                                {product.specs.caracteristicas.map((caracteristica, i) => (
                                    <div key={i} className="bg-green-50 rounded-xl p-4">
                                        <div className="mb-2">
                                            <h5 className="font-bold text-green-700">{caracteristica.titulo}</h5>
                                        </div>
                                        <ul className="list-disc pl-8 text-gray-700 space-y-1">
                                            {caracteristica.detalles.map((detalle, j) => (
                                                <li key={j}>{detalle}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}
                        
                        {/* Tabla de especificaciones */}
                        {(product.slug === 'cintas-flexograficas' || product.slug === 'maquinas-cerradoras' || product.slug === 'precintos') && product.specs?.tabla && (
                            <div className="mt-8">
                                <h4 className="text-xl font-bold text-green-800 mb-4">{product.specs.tabla.titulo}</h4>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full border-collapse">
                                        <thead>
                                            <tr className="bg-green-100">
                                                {product.specs.tabla.columnas.map((col, i) => (
                                                    <th key={i} className="border border-green-200 px-4 py-2 text-left text-green-900 font-bold">
                                                        {col}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {product.specs.tabla.filas.map((fila, i) => (
                                                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-green-50'}>
                                                    {fila.map((celda, j) => (
                                                        <td key={j} className="border border-green-200 px-4 py-2 text-gray-900">
                                                            {celda}
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                        
                        {/* Cuándo utilizar */}
                        {(product.slug === 'cintas-flexograficas' || product.slug === 'maquinas-cerradoras' || product.slug === 'precintos') && product.specs?.cuandoUtilizar && (
                            <div className="mt-8 bg-green-700 text-white rounded-xl p-5">
                                <h4 className="text-xl font-bold mb-3 flex items-center">
                                    <span className="mr-2 text-xl">✅</span>
                                    {product.slug === 'precintos' ? '¿Cómo elegir el precinto correcto?' : 
                                     product.slug === 'maquinas-cerradoras' ? '¿Cuál se adapta mejor a tu caso?' :
                                     '¿Cuándo utilizar este producto?'}
                                </h4>
                                <ul className="list-disc pl-8 space-y-1">
                                    {product.specs.cuandoUtilizar.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
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
        <Link href="/contacto" className="inline-block bg-white text-green-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
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