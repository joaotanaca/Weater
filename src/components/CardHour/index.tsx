/* eslint-disable no-empty-pattern */
import React from 'react';
import { Container } from './styles';

interface CardHourProps {
  hour: number;
  icon: string;
  temp: number;
}

const components = ({ icon, hour, temp }: CardHourProps): JSX.Element => {
  return (
    <Container>
      <p>{`${hour}${hour > 12 ? 'pm' : 'am'}`}</p>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={`${hour}-icon`}
      />
      <p>{`${temp.toFixed()}°`}</p>
    </Container>
  );
};

export default components;
