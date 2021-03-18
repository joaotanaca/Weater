/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Container, InformationContainer } from './styles';
import { useLocation } from '../../contexts/location';
import api from '../../services/api';
import { WeatherResponseI } from '../../interfaces/weather';

const Home: React.FC = () => {
  const [weather, setWeather] = useState({} as WeatherResponseI);
  const { location } = useLocation();
  useEffect(() => {
    api
      .get('/weather', {
        params: { lat: location.latitude, lon: location.longitude },
      })
      .then(({ data }) => setWeather(data));
  }, []);
  return (
    <Container>
      <InformationContainer />
    </Container>
  );
};

export default Home;
