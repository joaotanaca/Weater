/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import CardHour from 'src/components/CardHour';
import { Container, InformationContainer, DaysContainer } from './styles';
import { useLocation } from '../../contexts/location';
import api from '../../services/api';
import {
  WeatherCurrentCityI,
  WeatherResponseI,
} from '../../interfaces/weather';

const Home: React.FC = () => {
  const [weather, setWeather] = useState({} as WeatherCurrentCityI);
  const [oneCall, setOneCall] = useState({} as WeatherResponseI);
  const { location } = useLocation();
  // const days = [
  //   'Domingo',
  //   'Segunda',
  //   'Terça',
  //   'Quarta',
  //   'Quinta',
  //   'Sexta',
  //   'Sabádo',
  // ];
  useEffect(() => {
    if (location.latitude) {
      api
        .get('/weather', {
          params: { lat: location.latitude, lon: location.longitude },
        })
        .then(({ data }) => setWeather(data));
      api
        .get('/onecall', {
          params: { lat: location.latitude, lon: location.longitude },
        })
        .then(({ data }) => setOneCall(data));
    }
  }, [location]);
  return (
    <>
      <Container>
        <InformationContainer>
          {weather.sys && (
            <>
              <h1>
                <IoLocationSharp />
                {`${weather.name}`}
              </h1>
              <div className="temp">
                <div className="left">
                  <img
                    alt="icon tempo"
                    src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  />
                  {`${weather.main?.temp.toFixed()}°`}
                </div>
                <div className="right">
                  {`${weather.main.temp_max.toFixed()}°/ ${weather.main.temp_min.toFixed()}°`}
                  <span>
                    Sensação de
                    {` ${weather.main.feels_like.toFixed()}°`}
                  </span>
                </div>
              </div>
              <div className="hours_container">
                {oneCall.hourly &&
                  oneCall.hourly.map((hour, index) => {
                    const date = new Date();
                    // Setando a hora
                    date.setTime(date.getTime() + (index + 1) * 60 * 60 * 1000);
                    return index < 24 ? (
                      <CardHour
                        hour={date.getHours()}
                        icon={hour.weather[0].icon}
                        temp={hour.temp}
                      />
                    ) : null;
                  })}
              </div>
              <a className="credits" href="https://openweathermap.org/">
                by
                <img
                  alt="logo_openweather"
                  src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png"
                />
                OpenWeather
              </a>
            </>
          )}
        </InformationContainer>
      </Container>
      <DaysContainer>
        <div className="container">aaa</div>
      </DaysContainer>
    </>
  );
};

export default Home;
