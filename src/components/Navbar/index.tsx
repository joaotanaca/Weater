import React from 'react';
import { RiMoonCloudyFill } from 'react-icons/ri';
import { Container } from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <div className="logo">
          <RiMoonCloudyFill color="#fff" size={24} />
        </div>
        Weather
      </div>
    </Container>
  );
};

export default Navbar;
