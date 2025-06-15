import type { NextApiRequest, NextApiResponse } from 'next';

type WeatherData = {
  weather: any;
  airQuality: any;
} | {
  error: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<WeatherData>
) {
  try {
    const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
    
    if (!apiKey) {
      return res.status(500).json({ error: 'API key is missing' });
    }

    // Fetch weather data
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=-25.52&lon=-54.61&appid=${apiKey}&units=metric&lang=es`
    );
    
    if (!weatherResponse.ok) {
      return res.status(weatherResponse.status).json({ 
        error: `Weather API responded with status: ${weatherResponse.status}` 
      });
    }
    
    const weatherData = await weatherResponse.json();

    // Fetch air quality data
    const airQualityResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=-25.52&lon=-54.61&appid=${apiKey}`
    );
    
    if (!airQualityResponse.ok) {
      return res.status(airQualityResponse.status).json({ 
        error: `Air quality API responded with status: ${airQualityResponse.status}` 
      });
    }
    
    const airQualityData = await airQualityResponse.json();

    // Return combined data
    res.status(200).json({ 
      weather: weatherData,
      airQuality: airQualityData
    });
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
}