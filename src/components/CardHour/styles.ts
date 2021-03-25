import { motion } from 'framer-motion';
import mixins from 'src/utils/styles/mixins';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  visibility: visible !important;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-right: 10px;
  padding: 10px 0;
  border-radius: 7px;
  &:hover {
    background-color: rgba(189, 222, 243, 0.7);
  }
  p {
    font-size: calc(8px + 1.5vw);
    font-weight: 600;
    &:last-child {
      font-weight: normal;
    }
  }
  img {
    width: 80px;
    height: 50px;
    object-fit: cover;
  }
  ${mixins.sm`
    margin-right:0;
    p{
      font-size: calc(6px + 1vw);
      img{
        width: 60px;
      }
    }
  `}
`;
