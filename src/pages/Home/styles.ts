import styled from 'styled-components';

export const Container = styled.div.attrs({ className: 'container' })`
  width: calc(100vw - 40px);
  height: 100%;
  background: #fff;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 20px 20px 0;
`;

export const InformationContainer = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  .temp {
    display: flex;
    align-items: center;
    font-size: calc(20px + 3vw);
    margin: 10px 0;
    div {
      &.left {
        display: flex;
        align-items: center;
        margin-right: 15px;
        img {
          width: 80px;
          height: 100px;
          object-fit: cover;
          margin-right: 10px;
        }
      }
      &.right {
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        font-size: calc(12px + 1.5vw);
        span {
          margin-top: 5px;
          font-size: calc(8px + 1.5vw);
          font-weight: 500;
          color: rgba(0, 0, 0, 0.4);
        }
      }
    }
  }
  .hours_container {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    display: flex;
    flex-flow: row nowrap;
    padding-bottom: 20px;
  }
  .credits {
    display: flex;
    align-items: center;
    color: #000;
    text-decoration: none;
    font-size: calc(10px + 1vw);
    margin-top: 30px;
    img {
      height: 20px;
      background-color: rgba(0, 0, 0, 0.2);
      margin: 0 10px;
      border-radius: 3px;
      padding: 3px;
    }
    &:visited {
      color: inherit;
    }
  }
  h1 {
    width: 100%;
    display: flex;
    align-items: center;
    font-size: calc(12px + 1.5vw);
    svg {
      margin-right: 10px;
    }
  }
`;

export const DaysContainer = styled.div`
  width: 100%;
  background-color: #006fec;
  color: #fff;
  margin-top: 20px;
  padding: 30px 0 15px;
  .container {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 15px;
  }
`;
