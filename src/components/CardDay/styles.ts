import mixins from 'src/utils/styles/mixins';
import styled from 'styled-components';

export const Container = styled.div`
  margin-right: 15px;
  user-select: none;
  ${mixins.sm`
    margin-right: 0px;    
    display:flex;
    flex-flow:column;
    align-items:center;
    text-align:center;
  `}
  img {
    width: 80px;
    background-color: #80b7f6;
    object-fit: contain;
    border-radius: 14px;
    ${mixins.sm`
        width: 50px;
    `}
  }
  .informations {
    margin-top: 10px;

    p {
      &:last-child {
        margin-top: 5px;
        font-size: calc(10px + 1vw);
        ${mixins.sm`
            font-size: unset;
        `}
        text-transform: capitalize;
      }
    }
  }
`;
