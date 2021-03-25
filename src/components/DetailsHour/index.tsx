/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { HourI } from 'src/interfaces/weather';
import {
  WiThermometer,
  WiThermometerExterior,
  WiStrongWind,
  WiWindDeg,
  WiCloud,
  WiHumidity,
  WiStars,
} from 'react-icons/wi';
import { GiDew } from 'react-icons/gi';
import { Container } from './styles';

interface DetailsHourI extends HourI {
  id: string;
  time: number;
}

const DetailsHour = ({ id, ...hour }: DetailsHourI): JSX.Element => {
  return (
    <Container id={id}>
      <div>
        <p className="hour-card">
          {`${hour.time}${hour.time > 12 ? 'pm' : 'am'}`}
        </p>
        <img
          alt="icon tempo"
          src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
        />
      </div>

      <div>
        <p title="Temperatura">
          <WiThermometerExterior size={20} /> {`${hour.temp.toFixed()}C°`}
        </p>
        <p title="Sensação termica">
          <WiThermometer size={20} />
          {`${hour.feels_like.toFixed()}C°`}
        </p>
      </div>
      <div>
        <p title="Velocidade do vento">
          <WiStrongWind size={20} />
          {hour.wind_speed} m/s
        </p>
        <p title="Angulo do vento">
          <WiWindDeg size={20} />
          {`${hour.wind_deg}°`}
        </p>
      </div>
      <div>
        <p title="Nuvens">
          <WiCloud size={20} /> {`${hour.clouds}%`}
        </p>
        <p title="Ponto de condensação">
          <GiDew size={20} /> {`${hour.dew_point.toFixed()}°`}
        </p>
      </div>
      <div>
        <p title="Humidade">
          <WiHumidity size={20} /> {`${hour.humidity}%`}
        </p>
        <p title="UVI">
          <WiStars size={20} /> {hour.uvi}
        </p>
      </div>
    </Container>
  );
};

export default DetailsHour;
