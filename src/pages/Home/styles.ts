import styled from 'styled-components';
import cold_weather from './cold_weather.jpg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      to top,
      rgba(0, 198, 251, 0.2) 0%,
      rgba(0, 91, 234, 0.5) 100%
    ),
    url(${cold_weather});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;

export const InformationContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: max-content;
  height: calc(100% - 100px);
  padding: 50px 25px;
  position: absolute;
  top: 0;
  right: 0;
`;
