import type { NextApiRequest, NextApiResponse } from 'next';

// Properly typed response structures
type WeatherResponse = {
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
    deg: number;
  };
  name: string;
  dt: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
}

type AirQualityResponse = {
  list: Array<{
    main: {
      aqi: number;
    };
    components: {
      co: number;
      no: number;
      no2: number;
      o3: number;
      so2: number;
      pm2_5: number;
      pm10: number;
      nh3: number;
    };
    dt: number;
  }>;
}

type WeatherData = {
  weather: WeatherResponse;
  airQuality: AirQualityResponse;
  lastUpdated: number;
} | {
  error: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<WeatherData>
) {
  // Add CORS headers for production API usage from other domains
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');
  
  // Coordinates for Ciudad del Este, Paraguay
  const lat = -25.52;
  const lon = -54.61;
  
  try {
    const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
    
    if (!apiKey) {
      return res.status(500).json({ error: 'API key is missing' });
    }

    // Fetch weather data with timeout and error handling
    const weatherPromise = fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=es`,
      { signal: AbortSignal.timeout(5000) }
    );
    
    // Fetch air quality data with timeout
    const airQualityPromise = fetch(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`,
      { signal: AbortSignal.timeout(5000) }
    );
    
    // Fetch data in parallel
    const [weatherResponse, airQualityResponse] = await Promise.all([
      weatherPromise, 
      airQualityPromise
    ]);
    
    if (!weatherResponse.ok) {
      throw new Error(`Weather API responded with status: ${weatherResponse.status}`);
    }
    
    if (!airQualityResponse.ok) {
      throw new Error(`Air quality API responded with status: ${airQualityResponse.status}`);
    }
    
    const weatherData = await weatherResponse.json() as WeatherResponse;
    const airQualityData = await airQualityResponse.json() as AirQualityResponse;

    // Return combined data with timestamp
    return res.status(200).json({
      weather: weatherData,
      airQuality: airQualityData,
      lastUpdated: Date.now()
    });
  } catch (error) {
    console.error('Error fetching weather data:', error);
    
    // Handle different error types
    if (error instanceof TypeError && error.message.includes('AbortError')) {
      return res.status(504).json({ error: 'Request timeout while fetching weather data' });
    }
    
    return res.status(500).json({ 
      error: error instanceof Error ? error.message : 'Failed to fetch weather data'
    });
  }
}