/* eslint-disable no-empty-pattern */
import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './styles';

interface CardHourProps {
  hour: number;
  icon: string;
  temp: number;
  layoutId: string;
}

const components = ({
  icon,
  hour,
  temp,
  ...props
}: CardHourProps): JSX.Element => {
  return (
    <Container {...props}>
      <motion.p>{`${hour}${hour > 12 ? 'pm' : 'am'}`}</motion.p>
      <motion.img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={`${hour}-icon`}
      />
      <motion.p>{`${temp.toFixed()}°`}</motion.p>
    </Container>
  );
};

export default components;
