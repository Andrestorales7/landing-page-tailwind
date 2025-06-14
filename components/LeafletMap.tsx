// Corrige la declaración global y el manejo de eventos

declare global {
  interface Window {
    L: any;
  }
}

import React, { useEffect } from 'react';
import Script from 'next/script';

export default function LeafletMap() {
  useEffect(() => {
    // Verificar si estamos en el cliente
    if (typeof window !== 'undefined') {
      // Función para inicializar el mapa
      const loadMap = () => {
        // Comprobar si Leaflet está disponible y si el elemento del mapa existe
        if (window.L && document.getElementById('map')) {
          try {
            // Coordenadas de la oficina principal (Asunción)
            const asuncion = [-25.2535112, -57.5831796];
            
            // Crear el mapa centrado en Asunción
            const map = window.L.map('map').setView(asuncion, 6); // Zoom más alejado para ver todos los puntos
            
            // Agregar capa de OpenStreetMap
            window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
            
            // Marcador para Asunción con popup
            window.L.marker(asuncion)
              .addTo(map)
              .bindPopup('<b>CMP Agro - Asunción</b><br>Avda. Artigas 4145 c/ Gral. Delgado')
              .openPopup();
            
            // Marcador para Minga Guazú
            window.L.marker([-25.5167, -54.6167])
              .addTo(map)
              .bindPopup('<b>CMP Agro - Minga Guazú</b><br>Ruta 2 - Km.16');
            
            // Marcador para Loma Plata
            window.L.marker([-22.3, -60.0])
              .addTo(map)
              .bindPopup('<b>CMP Agro - Loma Plata</b><br>Oficina 4 - Predio Plasti Chaco');
              
            // Asegurar que el mapa se redimensione cuando cambie el tamaño de la ventana
            window.addEventListener('resize', function() {
              map.invalidateSize();
            });

            console.log('Mapa inicializado correctamente');
          } catch (error) {
            console.error('Error al inicializar el mapa:', error);
            const mapElement = document.getElementById('map');
            const fallbackElement = document.getElementById('static-map-fallback');
            if (mapElement) mapElement.style.display = 'none';
            if (fallbackElement) fallbackElement.style.display = 'block';
          }
        } else {
          console.warn('Leaflet o el elemento del mapa no están disponibles');
        }
      };
      
      // Intentar cargar el mapa después de un breve retraso para asegurar que el DOM esté listo
      setTimeout(() => {
        if (window.L) {
          loadMap();
        } else {
          console.log('Esperando a que Leaflet se cargue...');
          window.addEventListener('leaflet-loaded', loadMap);
        }
      }, 1000);
    }
    
    // Limpieza al desmontar el componente
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('leaflet-loaded', () => {});
        window.removeEventListener('resize', () => {});
      }
    };
  }, []);

  return (
    <>
      {/* Contenedor para Leaflet */}
      <div id="map" style={{ height: "450px", width: "100%" }} className="rounded-lg"></div>
      
      {/* Fallback para cuando JavaScript está desactivado */}
      <div className="hidden" id="static-map-fallback">
        <img 
          src="https://staticmap.openstreetmap.de/staticmap.php?center=-24.0,-57.0&zoom=6&size=800x450&markers=-25.2535112,-57.5831796,green-25.5167,-54.6167,green-22.3,-60.0,green" 
          alt="Mapa de ubicaciones CMP Agro en Paraguay"
          className="w-full h-[450px] object-cover rounded-lg"
        />
      </div>

      {/* Cargar Leaflet CSS */}
      <link 
        rel="stylesheet" 
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      />
      
      {/* Cargar Leaflet JS con Next/Script para mejor control */}
      <Script 
        src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log('Script de Leaflet cargado');
          if (typeof window !== 'undefined') {
            window.dispatchEvent(new Event('leaflet-loaded'));
          }
        }}
        onError={(e) => {
          console.error('Error al cargar Leaflet:', e);
        }}
      />
      
      {/* Fallback para cuando JavaScript está desactivado */}
      <noscript>
        <div className="text-center py-16 bg-gray-100 mt-4 rounded-lg">
          <p className="mb-4">El mapa interactivo requiere JavaScript activado.</p>
          <a 
            href="https://www.openstreetmap.org/?mlat=-25.2535112&mlon=-57.5831796#map=8/-25.2535112/-57.5831796" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Ver en OpenStreetMap
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </noscript>
    </>
  );
}