import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import WhatsappContacts from '@/components/layout/WhatsappContacts';
import Image from "next/image";
import type { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

const products = [
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
    }
];

// Añade estos tipos para mejorar el tipado
interface ProductSpecs {
  usos?: string[];
  presentacion?: string[];
  tipos?: string[];
  ventajas?: string[];
  caracteristicas?: { titulo: string; detalles: string[] }[];
  tabla?: { titulo: string; columnas: string[]; filas: string[][] };
  cuandoUtilizar?: string[];
}

interface ProductPageProps {
  product: typeof products[0] & { specs: ProductSpecs };
}

// Añade estas funciones antes de la definición de tu componente
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
export default function ProductoDetalle({ product }: ProductPageProps) {
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

  const handleThumbnailClick = (idx: number) => {
    setCurrentImageIndex(idx);
  };

  // Añade metadatos SEO para mejorar la indexación
  const pageTitle = `${product.name} | Otros Productos | CMP Agro`;
  const pageDescription = `${product.name}: ${product.description.substring(0, 120)}... Distribuido por CMP Agro Paraguay.`;
  const canonicalUrl = `https://www.cmpagro.com.py/productos/otrosproductos/${product.slug}`;

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
                        {product.specs?.caracteristicas && (
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
                        {product.specs?.tabla && (
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
                        {product.specs?.cuandoUtilizar && (
    <div className="mt-8 bg-green-700 text-white rounded-xl p-5">
      <h4 className="text-xl font-bold mb-3 flex items-center">
        <span className="mr-2 text-xl">✅</span>
        ¿Cómo elegir el precinto correcto?
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