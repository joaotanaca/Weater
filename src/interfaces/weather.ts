export interface WeatherResponseI {
  coord: Coordenadas;
  weather: WeatherI[];
  base: string;
  main: TemperatureI;
  visibility: number;
  wind: WindI;
  rain: { '1h'?: number; '3h'?: number };
  clouds: { all: number };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface WindI {
  speed: number;
  deg: number;
  gust: number;
}
export interface WeatherI {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface TemperatureI {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface Coordenadas {
  lon: number;
  lat: number;
}
