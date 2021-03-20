/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Container, InformationContainer, LeftContainer } from './styles';
import { useLocation } from '../../contexts/location';
import api from '../../services/api';
import { WeatherResponseI } from '../../interfaces/weather';

const Home: React.FC = () => {
  const [weather, setWeather] = useState({} as WeatherResponseI);
  const { location } = useLocation();
  const date = new Date();
  const days = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sabádo',
  ];
  useEffect(() => {
    if (location.latitude) {
      api
        .get('/weather', {
          params: { lat: location.latitude, lon: location.longitude },
        })
        .then(({ data }) => setWeather(data));
    }
  }, [location]);
  return (
    <Container>
      <InformationContainer>
        <LeftContainer>
          <div className="left column">
            {weather.sys && (
              <>
                <div className="top">
                  <h1>{days[date.getDay()]}</h1>
                  <p>
                    {date.toLocaleDateString('pt-br', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                  <p>{`${weather.name}, ${weather.sys?.country}`}</p>
                </div>
                <div className="bottom">
                  <div className="temp">
                    {weather.main?.temp.toFixed()}
                    °C
                  </div>
                  <p>
                    <b>{weather.weather[0]?.description}</b>
                  </p>
                </div>
              </>
            )}
          </div>
          <div className="right column" />
        </LeftContainer>
      </InformationContainer>
    </Container>
  );
};

export default Home;
