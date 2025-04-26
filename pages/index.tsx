import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mi Landing Page</title>
        <meta name="description" content="Landing page creada con Next.js y Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="max-w-4xl w-full space-y-8">
          <div className="text-center">
            <Image
              src="/vercel.svg"
              alt="Logo"
              width={180}
              height={37}
              className="mx-auto"
            />
            <h1 className="mt-6 text-4xl font-bold text-gray-900">
              ¡Bienvenido a Mi Landing Page!
            </h1>
            <p className="mt-3 text-lg text-gray-600">
              Un proyecto creado con Next.js y estilizado con Tailwind CSS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex justify-center">
                <Image src="/file.svg" width={40} height={40} alt="Feature" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-center">Característica 1</h3>
              <p className="mt-2 text-gray-600 text-center">Descripción de la característica 1</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex justify-center">
                <Image src="/globe.svg" width={40} height={40} alt="Feature" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-center">Característica 2</h3>
              <p className="mt-2 text-gray-600 text-center">Descripción de la característica 2</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex justify-center">
                <Image src="/window.svg" width={40} height={40} alt="Feature" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-center">Característica 3</h3>
              <p className="mt-2 text-gray-600 text-center">Descripción de la característica 3</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/api/hello" className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors">
              Ver API
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}