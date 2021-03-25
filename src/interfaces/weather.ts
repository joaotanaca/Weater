/* eslint-disable @typescript-eslint/no-explicit-any */
export interface CurrentI {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: WeatherI[];
}

export interface WeatherCurrentCityI {
  coord: {
    lon: number;
    lat: number;
  };
  weather: WeatherI[];
  base: 'stations';
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface WeatherResponseI {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: CurrentI;
  minutely: MinutlyI[];
  hourly: HourI[];
  daily: DailyI[];
}

export interface WeatherI {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface MinutlyI {
  dt: number;
  precipitation: number;
}

export interface HourI extends CurrentI {
  pop: number;
}

export interface DailyI {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: TemperatureI;
  feels_like: FeelsLikeI;
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  weather: WeatherI[];
  clouds: number;
  pop: number;
  rain: number;
  uvi: number;
}

export interface TemperatureI {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}
export interface FeelsLikeI {
  day: number;
  night: number;
  eve: number;
  morn: number;
}
