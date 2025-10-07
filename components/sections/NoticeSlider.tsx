import React, { useEffect, useState } from 'react';

interface NoticeSliderProps {
  notices: {
    id: number;
    text: string;
    link?: string; // Optional link for notices
  }[];
  speed?: number; // Animation speed in seconds (default: 25)
  className?: string;
}

const NoticeSlider: React.FC<NoticeSliderProps> = ({
  notices,
  speed = 25,
  className = '',
}) => {
  const [weatherNotice, setWeatherNotice] = useState<string | null>(null);
  const [mobileWeatherNotice, setMobileWeatherNotice] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      setIsLoading(true);
      try {
        // Call our internal API route instead of OpenWeather directly
        const response = await fetch('/api/weather');
        
        if (!response.ok) {
          throw new Error(`API returned status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.error) {
          throw new Error(data.error);
        }

        const weatherData = data.weather;
        const airQualityData = data.airQuality;

        if (weatherData && weatherData.weather && weatherData.main && weatherData.wind) {
          const description = weatherData.weather[0].description;
          const temperature = Math.round(weatherData.main.temp);
          const tempMax = Math.round(weatherData.main.temp_max);
          const tempMin = Math.round(weatherData.main.temp_min);
          const windSpeed = weatherData.wind.speed;
          const precipitation = weatherData.rain ? weatherData.rain['1h'] || 0 : 0;

          let airQuality = 'Desconocida';
          if (airQualityData && airQualityData.list && airQualityData.list[0]) {
            const aqi = airQualityData.list[0].main.aqi;
            airQuality = aqi === 1 ? 'Buena' :
                         aqi === 2 ? 'Moderada' :
                         aqi === 3 ? 'Insalubre para grupos sensibles' :
                         aqi === 4 ? 'Insalubre' :
                         aqi === 5 ? 'Muy insalubre' : 'Desconocida';
          }

          // Versión completa para escritorio
          const desktopWeather = `🌤️ Clima: ${description} | 🌡️ Temp: ${temperature}°C (Máx: ${tempMax}°C, Mín: ${tempMin}°C) | 💨 Viento: ${windSpeed} m/s | 🌧️ Precip: ${precipitation} mm | 🏭 Calidad del aire: ${airQuality}`;
          
          // Versión simplificada para móvil
          const mobileWeather = `🌤️ ${description} ${temperature}°C | Calidad aire: ${airQuality}`;
          
          setWeatherNotice(desktopWeather);
          setMobileWeatherNotice(mobileWeather);
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
        // Add fallback notices so component still works even if API fails
        setWeatherNotice("⚠️ Información del clima no disponible");
        setMobileWeatherNotice("⚠️ Clima no disponible");
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeather();

    // Add responsive handling
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check initially and add listener
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    // Clean up
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = styles;
    document.head.appendChild(styleTag);
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  // Usar la versión móvil del clima cuando estamos en dispositivo móvil
  const currentWeatherNotice = isMobile ? mobileWeatherNotice : weatherNotice;
  
  const allNotices = currentWeatherNotice
    ? [{ id: 0, text: currentWeatherNotice }, ...notices]
    : notices;

  if (!allNotices.length) return null;

  return (
    <section 
      className={`notice-slider ${className}`}
      aria-label="Últimas actualizaciones"
    >
      <div 
        className="marquee-container"
      >
        <div 
          className="marquee-content"
          style={{ animationDuration: `${isMobile ? speed * 0.5 : speed}s` }}
        >
          {allNotices.map((notice, index) => (
            <span key={`${notice.id}-1-${index}`} className="notice-item">
              {notice.link ? (
                <a href={notice.link} target="_blank" rel="noopener noreferrer" className="notice-link">
                  {notice.text}
                </a>
              ) : (
                notice.text
              )}
              {index !== allNotices.length - 1 && (
                <span className="separator">•</span>
              )}
            </span>
          ))}
        </div>
        
        {/* Segunda copia para animación continua */}
        <div 
          className="marquee-content"
          style={{ animationDuration: `${isMobile ? speed * 0.5 : speed}s` }}
        >
          {allNotices.map((notice, index) => (
            <span key={`${notice.id}-2-${index}`} className="notice-item">
              {notice.link ? (
                <a href={notice.link} target="_blank" rel="noopener noreferrer" className="notice-link">
                  {notice.text}
                </a>
              ) : (
                notice.text
              )}
              {index !== allNotices.length - 1 && (
                <span className="separator">•</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Región oculta para lectores de pantalla */}
      <div aria-live="polite" className="visually-hidden">
        Últimas actualizaciones: {allNotices.map(n => n.text).join(', ')}
      </div>
    </section>
  );
};

const styles = `
  .notice-slider {
    background: rgba(255, 255, 255, 0.9);
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding: 8px 0;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
    font-size: 0.9rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  .notice-link {
    color: #2d5a27;
    text-decoration: none;
    transition: opacity 0.2s;
  }

  .notice-link:hover {
    opacity: 0.7;
    text-decoration: underline;
  }

  .marquee-container {
    display: flex;
    width: 100%;
    overflow: hidden;
  }

  .marquee-content {
    display: flex;
    white-space: nowrap;
    animation: marquee linear infinite;
  }

  .notice-item {
    display: inline-flex;
    align-items: center;
    margin-right: 40px;
    color: #2d5a27;
    opacity: 0.9;
  }

  .separator {
    margin: 0 20px;
    opacity: 0.3;
  }

  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
  }

  .notice-slider:hover .marquee-content {
    animation-play-state: paused;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  /* Mobile responsiveness */
  @media (max-width: 767px) {
    .notice-slider {
      font-size: 0.75rem;
      padding: 5px 0;
    }
    
    .notice-item {
      margin-right: 15px;
    }
    
    .separator {
      margin: 0 8px;
    }
  }
`;

export default NoticeSlider;

