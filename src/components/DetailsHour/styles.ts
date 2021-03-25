import mixins from 'src/utils/styles/mixins';
import styled from 'styled-components';

export const Container = styled.div`
  border: 3px solid transparent;
  background-color: #80b7f6;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-right: 20px;
  border-radius: 10px;
  margin-bottom: 15px;
  font-size: calc(8px + 1.5vw);
  ${mixins.sm`
    font-size: calc(4px + 1vw);
    margin-bottom:0;
  `}
  &:target {
    border-color: #006fec;
  }
  img {
    width: 50px;
  }
  p {
    display: flex;
    align-items: center;
    &.hour-card {
      justify-content: center;
      margin-top: 10px;
    }
  }
`;
