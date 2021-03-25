import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useLocation } from 'src/contexts/location';
import { Container } from './styles';

const Preload: React.FC = () => {
  const { location } = useLocation();
  return !location.latitude ? (
    <Container>
      <AiOutlineLoading3Quarters size={40} />
    </Container>
  ) : (
    <></>
  );
};

export default Preload;
