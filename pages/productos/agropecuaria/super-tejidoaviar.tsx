'use client';

import React, { useState, useEffect } from 'react';
import Marcas from '@/components/sections/Marcas';
import NoticeSlider from '@/components/sections/NoticeSlider';
import WhatsappContacts from '@/components/layout/WhatsappContacts';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import ProductTab, { ProductTabItem } from '@/components/ui/ProductTab';

const TejidoAviarPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Enhanced product data with structured information
  const tejidoAviarProducts: ProductTabItem[] = [
    {
      id: 'info',
      label: 'Tejido Aviar',
      title: 'Tejido Aviar – Control climático eficiente',
      imageSrc: ['/images/productos/agropecuaria/tejido-aviar2.jpg',
        '/images/productos/agropecuaria/tejido-aviar.jpg',
        '/images/productos/agropecuaria/tejido-amarillo.jpg'
      ],

      imageAlt: 'Tejido Aviar para control climático',
      description: [
        '<div class="bg-green-50 p-4 rounded-lg border border-green-200 mb-6">' +
          '<h4 class="text-lg font-semibold text-green-800 mb-2">Solución especializada para instalaciones avícolas y porcinas</h4>' +
          '<p class="text-gray-900">El Tejido Aviar de CMP Agro es una solución especializada diseñada para optimizar las condiciones ambientales en instalaciones de cría avícola y porcina. Fabricado con polipropileno de alta resistencia y aditivos UV, este tejido garantiza durabilidad y eficacia en el control de luminosidad y temperatura, elementos clave para el bienestar animal y la eficiencia productiva.</p>' +
        '</div>',
        
        '<div class="bg-white p-5 rounded-lg shadow-md mb-6 border border-gray-100">' +
          '<h5 class="flex items-center text-xl font-bold text-green-800 mb-4">' +
            '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">' +
              '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />' +
            '</svg>' +
            'Características destacadas' +
          '</h5>' +
          '<ul class="space-y-3">' +
            '<li class="flex items-start">' +
              '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">' +
                '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />' +
              '</svg>' +
              '<div>' +
                '<span class="font-medium text-gray-900">Alta resistencia a la tracción:</span> ' +
                '<span class="text-gray-900">Soporta condiciones exigentes sin deformarse, asegurando una larga vida útil.</span>' +
              '</div>' +
            '</li>' +
            '<li class="flex items-start">' +
              '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">' +
                '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />' +
              '</svg>' +
              '<div>' +
                '<span class="font-medium text-gray-900">Protección UV:</span> ' +
                '<span class="text-gray-900">Incorpora aditivos que protegen contra la degradación por rayos ultravioleta, prolongando su durabilidad.</span>' +
              '</div>' +
            '</li>' +
            '<li class="flex items-start">' +
              '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">' +
                '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />' +
              '</svg>' +
              '<div>' +
                '<span class="font-medium text-gray-900">Control de luminosidad y temperatura:</span> ' +
                '<span class="text-gray-900">Regula eficazmente la entrada de luz y el calor, creando un ambiente óptimo para los animales.</span>' +
              '</div>' +
            '</li>' +
            '<li class="flex items-start">' +
              '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">' +
                '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />' +
              '</svg>' +
              '<div>' +
                '<span class="font-medium text-gray-900">Versatilidad de uso:</span> ' +
                '<span class="text-gray-900">Adecuado para sistemas de cría tradicionales y dark house, tanto en avicultura como en porcicultura.</span>' +
              '</div>' +
            '</li>' +
          '</ul>' +
        '</div>',
        
        '<div class="bg-white rounded-lg shadow-md overflow-hidden mb-6">' +
          '<div class="bg-green-700 text-white py-3 px-4">' +
            '<h5 class="font-semibold text-lg flex items-center">' +
              '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">' +
                '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />' +
              '</svg>' +
              'Especificaciones disponibles' +
            '</h5>' +
          '</div>' +
          '<div class="p-4">' +
            '<div class="overflow-x-auto">' +
              '<table class="min-w-full divide-y divide-gray-200">' +
                '<thead>' +
                  '<tr>' +
                    '<th class="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">Tipo</th>' +
                    '<th class="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">Ancho</th>' +
                    '<th class="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">Gramaje</th>' +
                  '</tr>' +
                '</thead>' +
                '<tbody class="bg-white divide-y divide-gray-200">' +
                  '<tr class="hover:bg-green-50">' +
                    '<td class="px-4 py-3 whitespace-nowrap text-gray-900 font-medium">Tejido PP Aviario Amarillo N/G</td>' +
                    '<td class="px-4 py-3 whitespace-nowrap text-gray-900">2,6 m</td>' +
                    '<td class="px-4 py-3 whitespace-nowrap text-gray-900">120 g/m²</td>' +
                  '</tr>' +
                  '<tr class="hover:bg-green-50">' +
                    '<td class="px-4 py-3 whitespace-nowrap text-gray-900 font-medium">Tejido PP Aviario Azul N/G</td>' +
                    '<td class="px-4 py-3 whitespace-nowrap text-gray-900">2,6 m</td>' +
                    '<td class="px-4 py-3 whitespace-nowrap text-gray-900">120 g/m²</td>' +
                  '</tr>' +
                  '<tr class="hover:bg-green-50">' +
                    '<td class="px-4 py-3 whitespace-nowrap text-gray-900 font-medium">Tejido PP Aviario Blackout N/G</td>' +
                    '<td class="px-4 py-3 whitespace-nowrap text-gray-900">2,6 m</td>' +
                    '<td class="px-4 py-3 whitespace-nowrap text-gray-900">230 g/m²</td>' +
                  '</tr>' +
                '</tbody>' +
              '</table>' +
            '</div>' +
          '</div>' +
        '</div>'
      ],
      technicalSheetUrl: ''
    },
    {
      id: 'laterales',
      label: 'Laterales',
      title: 'Laterales para Galpones Avícolas',
      imageSrc: '/images/productos/agropecuaria/tejido-aviar-laterales.jpg',
      imageAlt: 'Tejido Aviar para Laterales',
      description: [
        '<div class="bg-green-50 p-4 rounded-lg border border-green-200 mb-6">' +
          '<h4 class="text-lg font-semibold text-green-800 mb-2">Tejidos de alta resistencia para laterales de galpones</h4>' +
          '<p class="text-green-700">Diseñados específicamente para soportar las exigencias del entorno avícola, ofreciendo durabilidad y funcionalidad superior.</p>' +
        '</div>',
        
        '<div class="overflow-x-auto mb-6">' +
          '<table class="min-w-full bg-white rounded-lg overflow-hidden border-collapse shadow-md">' +
            '<thead class="bg-green-700 text-white">' +
              '<tr>' +
                '<th class="py-3 px-4 text-left font-semibold">Color</th>' +
                '<th class="py-3 px-4 text-left font-semibold">Características</th>' +
                '<th class="py-3 px-4 text-left font-semibold">Aplicación Ideal</th>' +
              '</tr>' +
            '</thead>' +
            '<tbody>' +
              '<tr class="border-b border-gray-200 hover:bg-green-50">' +
                '<td class="py-3 px-4 font-medium flex items-center gap-2 text-gray-900">' +
                  '<span class="inline-block w-5 h-5 bg-blue-500 rounded-full border border-gray-300 shadow-sm"></span>' +
                  '<span class="font-medium">Azul</span>' +
                '</td>' +
                '<td class="py-3 px-4 text-gray-900">Control eficiente de temperatura y luminosidad</td>' +
                '<td class="py-3 px-4 text-gray-900">Climas cálidos que requieren regulación térmica</td>' +
              '</tr>' +
              '<tr class="border-b border-gray-200 hover:bg-green-50">' +
                '<td class="py-3 px-4 font-medium flex items-center gap-2 text-gray-900">' +
                  '<span class="inline-block w-5 h-5 bg-yellow-400 rounded-full border border-gray-300 shadow-sm"></span>' +
                  '<span class="font-medium">Amarillo</span>' +
                '</td>' +
                '<td class="py-3 px-4 text-gray-900">Alta visibilidad y aporte de calidez ambiental</td>' +
                '<td class="py-3 px-4 text-gray-900">Regiones con temperaturas bajas o variables</td>' +
              '</tr>' +
              '<tr class="border-b border-gray-200 hover:bg-green-50">' +
                '<td class="py-3 px-4 font-medium flex items-center gap-2 text-gray-900">' +
                  '<span class="inline-block w-5 h-5 bg-black rounded-full border border-gray-300 shadow-sm"></span>' +
                  '<span class="font-medium">Negro</span>' +
                '</td>' +
                '<td class="py-3 px-4 text-gray-900">Máximo control de luz y protección UV avanzada</td>' +
                '<td class="py-3 px-4 text-gray-900">Zonas con alta radiación solar</td>' +
              '</tr>' +
              '<tr class="hover:bg-green-50">' +
                '<td class="py-3 px-4 font-medium flex items-center gap-2 text-gray-900">' +
                  '<span class="inline-block w-5 h-5 bg-gray-300 rounded-full border border-gray-300 shadow-sm"></span>' +
                  '<span class="font-medium">Plata</span>' +
                '</td>' +
                '<td class="py-3 px-4 text-gray-900">Refleja el calor y estabiliza la temperatura interna</td>' +
                '<td class="py-3 px-4 text-gray-900">Áreas con altas temperaturas o fuertes fluctuaciones</td>' +
              '</tr>' +
            '</tbody>' +
          '</table>' +
        '</div>',
        
        '<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">' +
          '<div class="bg-gray-50 p-4 rounded-lg border border-gray-200">' +
            '<h5 class="font-semibold text-green-700 mb-2">Durabilidad Superior</h5>' +
            '<p class="text-gray-700">Fabricados con materiales que resisten condiciones climáticas extremas y exposición UV prolongada.</p>' +
          '</div>' +
          '<div class="bg-gray-50 p-4 rounded-lg border border-gray-200">' +
            '<h5 class="font-semibold text-green-700 mb-2">Fácil Mantenimiento</h5>' +
            '<p class="text-gray-700">Diseñados para limpieza sencilla y alta resistencia a productos desinfectantes.</p>' +
          '</div>' +
        '</div>'
      ],
      technicalSheetUrl: ''
    },
    {
      id: 'cieloraso',
      label: 'Cielo Raso',
      title: 'Cielo Raso para Control Ambiental',
      imageSrc: '/images/productos/agropecuaria/tejido-aviar-cieloraso.jpeg',
      imageAlt: 'Tejido Aviar para Cielo Raso',
      description: [
        '<div class="bg-green-50 p-4 rounded-lg border border-green-200 mb-6">' +
          '<h4 class="text-lg font-semibold text-green-800 mb-2">Sistema de cielo raso especializado</h4>' +
          '<p class="text-green-700">Solución técnica para optimizar las condiciones ambientales internas del galpón y mejorar la eficiencia energética.</p>' +
        '</div>',
        
        '<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">' +
          '<div class="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">' +
            '<div class="bg-green-700 text-white py-2 px-4">' +
              '<h5 class="font-semibold">Control Térmico</h5>' +
            '</div>' +
            '<div class="p-4">' +
              '<ul class="space-y-2">' +
                '<li class="flex items-start">' +
                  '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">' +
                    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />' +
                  '</svg>' +
                  '<span class="text-gray-900 font-medium">Reduce la temperatura interna hasta 4°C en días calurosos</span>' +
                '</li>' +
                '<li class="flex items-start">' +
                  '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">' +
                    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />' +
                  '</svg>' +
                  '<span class="text-gray-900">Conserva el calor durante noches frías</span>' +
                '</li>' +
                '<li class="flex items-start">' +
                  '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">' +
                    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />' +
                  '</svg>' +
                  '<span class="text-gray-900">Estabiliza la temperatura para condiciones óptimas</span>' +
                '</li>' +
              '</ul>' +
            '</div>' +
          '</div>' +
          
          '<div class="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">' +
            '<div class="bg-green-700 text-white py-2 px-4">' +
              '<h5 class="font-semibold">Control de Luz</h5>' +
            '</div>' +
            '<div class="p-4">' +
              '<ul class="space-y-2">' +
                '<li class="flex items-start">' +
                  '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">' +
                    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />' +
                  '</svg>' +
                  '<span class="text-gray-900 font-medium">Bloqueo superior de luz para programas de iluminación precisos</span>' +
                '</li>' +
                '<li class="flex items-start">' +
                  '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">' +
                    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />' +
                  '</svg>' +
                  '<span class="text-gray-900">Elimina filtraciones de luz indeseada</span>' +
                '</li>' +
                '<li class="flex items-start">' +
                  '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">' +
                    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />' +
                  '</svg>' +
                  '<span class="text-gray-900 font-medium">Mejora el rendimiento de los programas de manejo de luz</span>' +
                '</li>' +
              '</ul>' +
            '</div>' +
          '</div>' +
        '</div>',
        
        '<div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">' +
          '<h5 class="font-semibold text-green-700 mb-2">Especificaciones Técnicas</h5>' +
          '<div class="grid grid-cols-2 gap-4">' +
            '<div class="border-r border-gray-300 pr-4">' +
              '<p class="text-sm font-medium text-gray-700">Material</p>' +
              '<p class="text-gray-900 font-medium">Polipropileno de alta densidad</p>' +
            '</div>' +
            '<div>' +
              '<p class="text-sm font-medium text-gray-700">Duración estimada</p>' +
              '<p class="text-gray-900 font-medium">5+ años con mantenimiento adecuado</p>' +
            '</div>' +
          '</div>' +
        '</div>'
      ],
      technicalSheetUrl: ''
    },
    {
      id: 'accesorios',
      label: 'Accesorios de Levantamiento',
      title: 'Accesorios de Levantamiento para Cortinas',
      imageSrc: [
        '/images/productos/agropecuaria/catraca.png',
        '/images/productos/agropecuaria/roldana22mm.png',
        '/images/productos/agropecuaria/roldana70mm.png',
        '/images/productos/agropecuaria/soporte.png'
      ],
      imageAlt: [
        'Molinete para levantamiento de cortinas',
        'Roldanas y poleas del sistema',
        'Base de molinete instalada',
        'Sistema completo en funcionamiento'
      ],
      description: [
        '<div class="bg-green-50 p-4 rounded-lg border border-green-200 mb-6">' +
          '<h4 class="text-lg font-semibold text-green-800 mb-2">Sistema completo de accesorios para levantamiento</h4>' +
          '<p class="text-green-700">Componentes industriales de alta calidad diseñados para garantizar un funcionamiento suave y confiable de las cortinas avícolas.</p>' +
        '</div>',
        
        '<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">' +
          '<div class="bg-white p-5 rounded-lg shadow-md border border-gray-200">' +
            '<h5 class="text-xl font-bold text-green-800 mb-4">Componentes del Sistema</h5>' +
            '<ul class="space-y-4">' +
              '<li class="flex items-start bg-gray-50 p-3 rounded-lg">' +
                '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">' +
                  '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />' +
                '</svg>' +
                '<div>' +
                  '<span class="font-medium text-gray-900 block">Catraca Tipo Molinete:</span> ' +
                  '<span class="text-gray-700">Capacidad de carga hasta 500 kg, ideal para cortinas de gran tamaño</span>' +
                '</div>' +
              '</li>' +
              '<li class="flex items-start bg-gray-50 p-3 rounded-lg">' +
                '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">' +
                  '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />' +
                '</svg>' +
                '<div>' +
                  '<span class="font-medium text-gray-900 block">Roldana Industrial 70mm:</span> ' +
                  '<span class="text-gray-700">Polea principal para manejo de cargas pesadas</span>' +
                '</div>' +
              '</li>' +
              '<li class="flex items-start bg-gray-50 p-3 rounded-lg">' +
                '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">' +
                  '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />' +
                '</svg>' +
                '<div>' +
                  '<span class="font-medium text-gray-900 block">Roldana Guía 22mm:</span> ' +
                  '<span class="text-gray-700">Poleas auxiliares para guiado preciso del cable</span>' +
                '</div>' +
              '</li>' +
              '<li class="flex items-start bg-gray-50 p-3 rounded-lg">' +
                '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">' +
                  '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />' +
                '</svg>' +
                '<div>' +
                  '<span class="font-medium text-gray-900 block">Base del Molinete:</span> ' +
                  '<span class="text-gray-700">Soporte reforzado para montaje seguro y estable</span>' +
                '</div>' +
              '</li>' +
            '</ul>' +
          '</div>' +
          
          '<div class="bg-white p-5 rounded-lg shadow-md border border-gray-200">' +
            '<h5 class="text-xl font-bold text-green-800 mb-4">Ventajas del Sistema</h5>' +
            '<ul class="space-y-3">' +
              '<li class="flex items-start">' +
                '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">' +
                  '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />' +
                '</svg>' +
                '<div>' +
                  '<span class="font-medium text-gray-900">Alta Capacidad:</span> ' +
                  '<span class="text-gray-700">Sistema dimensionado para manejar cortinas pesadas con facilidad</span>' +
                '</div>' +
              '</li>' +
              '<li class="flex items-start">' +
                '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">' +
                  '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />' +
                '</svg>' +
                '<div>' +
                  '<span class="font-medium text-gray-900">Durabilidad:</span> ' +
                  '<span class="text-gray-700">Componentes industriales diseñados para uso intensivo</span>' +
                '</div>' +
              '</li>' +
              '<li class="flex items-start">' +
                '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">' +
                  '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />' +
                '</svg>' +
                '<div>' +
                  '<span class="font-medium text-gray-900">Operación Suave:</span> ' +
                  '<span class="text-gray-700">Movimiento fluido y controlado de las cortinas</span>' +
                '</div>' +
              '</li>' +
            '</ul>' +
          '</div>' +
        '</div>'
      ],
      technicalSheetUrl: '/files/ficha-tecnica-accesorios.pdf'
    },
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Define structured data for SEO
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://www.cmpagro.com.py/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Productos",
        "item": "https://www.cmpagro.com.py/productos"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Agropecuaria",
        "item": "https://www.cmpagro.com.py/productos/agropecuaria"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Tejido Aviar",
        "item": "https://www.cmpagro.com.py/productos/agropecuaria/super-tejidoaviar"
      }
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Tejido Aviar",
    "description": "Soluciones completas en tejidos para galpones avícolas. Laterales en varios colores, cielo raso y accesorios de levantamiento de alta calidad.",
    "image": "https://www.cmpagro.com.py/images/productos/agropecuaria/hero-tejidoaviar.jpg",
    "brand": {
      "@type": "Brand",
      "name": "CMP Agro"
    }
  };

  return (
    <>
      <SEO 
        title="Tejido Aviar | Sistemas para Galpones | CMP Agro"
        description="Soluciones completas en tejidos para galpones avícolas. Laterales en varios colores, cielo raso y accesorios de levantamiento de alta calidad."
        url="https://www.cmpagro.com.py/productos/agropecuaria/super-tejidoaviar"
        image="/images/productos/agropecuaria/hero-tejidoaviar.jpg"
        type="product"
        keywords="tejido aviar, cortinas para galpones, sistema de ventilación avícola, cielo raso para galpones, cortinas laterales, control climático avícola, accesorios para cortinas, tejido blackout, tejido aviario azul, tejido aviario amarillo, roldanas industriales, catraca tipo molinete, control de temperatura galpones, equipamiento avícola Paraguay, CMP Agro"
        structuredData={[breadcrumbSchema, productSchema]}
      />
      
      <div id="tejido-aviar" className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        {/* Hero Section mejorado */}
        <div className="relative min-h-[60vh] bg-gradient-to-br from-green-900/80 via-green-800/70 to-green-700/60 overflow-hidden">
          {/* Imagen de fondo */}
          <div
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-100"
            style={{
              backgroundImage:
                "url('/images/productos/agropecuaria/hero-tejidoaviar.jpg')",
            }}
          ></div>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent pointer-events-none"></div>
          {/* Contenido del Hero */}
          <div className="relative z-10 pt-42 pb-22 px-6 sm:px-12 lg:px-18 max-w-6xl mx-auto h-full flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center w-full py-16 md:py-24"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
                Tejido Aviar
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white max-w-2xl drop-shadow mx-auto">
                Soluciones completas en tejidos para galpones avícolas con máxima durabilidad y eficiencia.
              </p>
            </motion.div>
          </div>
          {/* Divisoria SVG igual que otras páginas */}
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[10vw] min-h-[60px] max-h-[120px]">
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V56.44Z"
                className="fill-[#f9fafb] relative opacity-90"
              ></path>
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3"
                className="fill-none stroke-white stroke-[2px] opacity-50 relative z-10"
              ></path>
            </svg>
          </div>
        </div>

        {/* Contenedor principal con sombra y mejor espaciado */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
            {/* ProductTab Component */}
            <div className="py-8">
              <ProductTab
                products={tejidoAviarProducts}
                initialTab="info"
                accentColor="green"
              />
            </div>
          </div>
        </div>
        
        {/* Additional Sections */}
        <div className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
             style={{ transitionDelay: '500ms' }}>
          <Marcas />
        </div>

        <div className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
             style={{ transitionDelay: '600ms' }}>
          <NoticeSlider
            notices={[
              { id: 1, text: 'Solicita asesoramiento para la instalación de tu sistema de cortinas' },
              { id: 2, text: 'Entrega en todo el país con servicio de instalación disponible' },
            ]}
          />
        </div>

        {/* Botón flotante de WhatsApp siempre visible */}
        <div className="fixed bottom-6 right-6 z-50">
          <WhatsappContacts />
        </div>
      </div>
    </>
  );
};

export default TejidoAviarPage;