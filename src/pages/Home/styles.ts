import styled from 'styled-components';
import mixins from '../../utils/styles/mixins';

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
  ${mixins.sm`
    display:grid;
    flex-flow:row wrap;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas: "city temp"
                         "days days"
                         "hours hours"
                         "credits credits";
    h1{
      grid-area:city;
      font-size: calc(15px + 1vw)!important;
    }
  `}
  .temp {
    display: flex;
    align-items: center;
    font-size: calc(20px + 2vw);
    margin: 10px 0;
    ${mixins.sm`
      grid-area: temp;
      font-size: calc(20px + 2vw);
      justify-content:  flex-end;
      font-size: calc(20px + 1vw);
    `}
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
        ${mixins.sm`
          font-size: calc(10px + 1vw);
        `}
        span {
          margin-top: 5px;
          font-size: calc(8px + 1.5vw);
          font-weight: 500;
          color: rgba(0, 0, 0, 0.4);
          ${mixins.sm`
            font-size: calc(8px + 1vw);
          `}
        }
      }
    }
  }
  .hours_container {
    display: flex;
    flex-flow: row nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 20px;
    ${mixins.sm`
      grid-area:hours;
      display: flex;
      flex-flow: row wrap;
      margin-top:10px;
    `}
  }
  .credits {
    display: flex;
    align-items: center;
    color: #000;
    text-decoration: none;
    font-size: calc(10px + 1vw);
    margin-top: 30px;
    ${mixins.sm`
      grid-area:credits;
      align-self:flex-end;
    `}
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
  ${mixins.sm`
    grid-area: days;
    margin-top: 0;
    padding: 0 !important;
    &.interno {
        display: grid !important;
        grid-template-columns: repeat(8, 1fr);
        gap: 20px;
        margin: 0 !important;
        border-radius: 14px;
        padding: 15px 0 !important;
    }
    &.externo{
      display: none;
    }
  `}
  .container {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 15px;
  }
  &.interno {
    display: none;
  }
`;
