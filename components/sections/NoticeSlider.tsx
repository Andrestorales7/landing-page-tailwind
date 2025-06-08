import React, { useEffect, useState } from 'react';

interface NoticeSliderProps {
  notices: {
    id: number;
    text: string;
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

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY; // Use the environment variable

        const weatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=-25.52&lon=-54.61&appid=${apiKey}&units=metric&lang=es`
        );
        const weatherData = await weatherResponse.json();
        console.log('Weather API Response:', weatherData); // Debug log

        const airQualityResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/air_pollution?lat=-25.52&lon=-54.61&appid=${apiKey}`
        );
        const airQualityData = await airQualityResponse.json();
        console.log('Air Quality API Response:', airQualityData); // Debug log

        if (weatherData && weatherData.weather && weatherData.main && weatherData.wind) {
          const description = weatherData.weather[0].description; // Ahora en español
          const temperature = weatherData.main.temp;
          const tempMax = weatherData.main.temp_max;
          const tempMin = weatherData.main.temp_min;
          const windSpeed = weatherData.wind.speed;
          const precipitation = weatherData.rain ? weatherData.rain['1h'] || 0 : 0; // Precipitation in mm

          let airQuality = 'Desconocida';
          if (airQualityData && airQualityData.list && airQualityData.list[0]) {
            const aqi = airQualityData.list[0].main.aqi;
            airQuality = aqi === 1 ? 'Buena' :
                         aqi === 2 ? 'Moderada' :
                         aqi === 3 ? 'Insalubre para grupos sensibles' :
                         aqi === 4 ? 'Insalubre' :
                         aqi === 5 ? 'Muy insalubre' : 'Desconocida';
          }

          setWeatherNotice(
            `🌤️ Clima: ${description} | 🌡️ Temp: ${temperature}°C (Máx: ${tempMax}°C, Mín: ${tempMin}°C) | 💨 Viento: ${windSpeed} m/s | 🌧️ Precip: ${precipitation} mm | 🏭 Calidad del aire: ${airQuality}`
          );
        }
      } catch (error) {
        console.error('Error fetching weather or air quality data:', error);
      }
    };

    fetchWeather();
  }, []);

  useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = styles;
    document.head.appendChild(styleTag);
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  const allNotices = weatherNotice
    ? [{ id: 0, text: weatherNotice }, ...notices]
    : notices;

  console.log('All notices:', allNotices); // Debug log

  if (!allNotices.length) return null;

  return (
    <section 
      className={`notice-slider ${className}`}
      aria-label="Últimas actualizaciones"
    >
      <div 
        className="marquee-content"
        style={{ animationDuration: `${speed}s` }}
      >
        {allNotices.map((notice, index) => (
          <span key={notice.id} className="notice-item">
            {notice.text}
            {index !== allNotices.length - 1 && (
              <span className="separator">•</span>
            )}
          </span>
        ))}
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
    border: 2px solid; 
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

  .marquee-content {
    display: inline-block;
    white-space: nowrap;
    animation: marquee linear infinite;
    padding-left: 100%;
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
`;

export default NoticeSlider;

