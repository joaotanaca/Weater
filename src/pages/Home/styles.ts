import styled from 'styled-components';
import praia from './praia.webp';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background: #323b48;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;

export const InformationContainer = styled.div`
  background-color: #222831;
  max-width: 600px;
  max-height: 500px;
  width: calc(100% - 20px);
  height: calc(100% - 10px);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
`;

export const LeftContainer = styled.div`
  padding: 20px 30px;
  user-select: none;
  width: calc(50% - 60px);
  height: calc(100% - 40px);
  display: flex;
  flex-flow: row nowrap;
  color: #fff;
  background: linear-gradient(
      to top,
      rgba(0, 91, 234, 0.6) 100%,
      rgba(0, 198, 251, 0.3) 0%
    ),
    url(${praia});
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
    width: calc(100% - 60px);
    .right {
      display: flex;
    }
  }
  .column {
    flex: 1;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
  }
  .left {
    .top {
      h1 {
        font-size: 1.7rem;
        font-weight: 500;
        margin-bottom: 5px;
      }
      p {
        font-size: calc(11px + 0.5vw);
        font-weight: lighter;
        margin-bottom: 7px;
      }
    }
    .bottom {
      .temp {
        font-size: calc(46px + 1vw);
        font-weight: bolder;
        margin: 20px 0;
      }
      p {
        font-size: calc(11px + 1vw);
        text-transform: capitalize;
      }
    }
  }
  .right {
    display: none;
  }
`;
