import styled from 'styled-components';

export const Container = styled.div`
  margin-right: 15px;
  img {
    width: 80px;
    background-color: #80b7f6;
    object-fit: contain;
    border-radius: 14px;
  }
  .informations {
    margin-top: 10px;
    p {
      &:last-child {
        margin-top: 5px;
        font-size: calc(10px + 1vw);
        text-transform: capitalize;
      }
    }
  }
`;
