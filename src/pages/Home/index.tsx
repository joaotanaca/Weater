/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import CardDay from 'src/components/CardDay';
import CardHour from 'src/components/CardHour';
import DetailsHour from 'src/components/DetailsHour';
import { useLocation } from 'src/contexts/location';
import api from 'src/services/api';
import { WeatherCurrentCityI, WeatherResponseI } from 'src/interfaces/weather';
import {
  Container,
  InformationContainer,
  DaysContainer,
  DetailtsContainer,
} from './styles';

const Home: React.FC = () => {
  const [weather, setWeather] = useState({} as WeatherCurrentCityI);
  const [oneCall, setOneCall] = useState({} as WeatherResponseI);
  const { location } = useLocation();
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
                    return index < 12 ? (
                      <CardHour
                        key={`${hour.dt}-card_hour`}
                        hour={date.getHours()}
                        icon={hour.weather[0].icon}
                        temp={hour.temp}
                        layoutId={`${index}-${hour.dt}`}
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
          <DaysContainer className="interno">
            {oneCall.daily &&
              oneCall.daily.map((daily, index) => {
                const date = new Date();
                // Setando a hora
                date.setDate(date.getDate() + (index + 1));
                return index < 24 ? (
                  <CardDay
                    key={`${daily.dt}-${index}-card_daily`}
                    day={date.toLocaleDateString('pt-br', {
                      day: '2-digit',
                      month: '2-digit',
                    })}
                    image={daily.weather[0].icon}
                    description={daily.weather[0].description}
                  />
                ) : null;
              })}
          </DaysContainer>
        </InformationContainer>
      </Container>
      <DaysContainer className="externo">
        <div className="container">
          {oneCall.daily &&
            oneCall.daily.map((daily, index) => {
              const date = new Date();
              // Setando a hora
              date.setDate(date.getDate() + (index + 1));
              return index < 24 ? (
                <CardDay
                  day={date.toLocaleDateString('pt-br', {
                    day: '2-digit',
                    month: '2-digit',
                  })}
                  image={daily.weather[0].icon}
                  description={daily.weather[0].description}
                />
              ) : null;
            })}
        </div>
      </DaysContainer>
      <DetailtsContainer>
        <div className="container">
          <h2>Horas detalhadas </h2>
          <div className="hour">
            {oneCall.hourly &&
              oneCall.hourly.map((hour, index) => {
                const date = new Date();
                // Setando a hora
                date.setTime(date.getTime() + (index + 1) * 60 * 60 * 1000);
                return index < 12 ? (
                  <DetailsHour
                    key={`${hour.dt}-details_hour`}
                    id={`${index}-${hour.dt}`}
                    time={date.getHours()}
                    {...hour}
                  />
                ) : null;
              })}
          </div>
        </div>
      </DetailtsContainer>
    </>
  );
};

export default Home;
