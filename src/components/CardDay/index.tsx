import React from 'react';
import { Container } from './styles';

interface CardDayProp {
  image: string;
  description: string;
  day: string;
}

const CardDay = ({ day, image, description }: CardDayProp): JSX.Element => {
  return (
    <Container>
      <img
        src={`http://openweathermap.org/img/wn/${image}@2x.png`}
        alt={`${description}-${day}`}
      />
      <div className="informations">
        <p>{day}</p>
        <p>{description}</p>
      </div>
    </Container>
  );
};

export default CardDay;
