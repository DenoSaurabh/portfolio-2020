import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HomePageS = styled.div`
  width: 100%;
  height: 100%;

  display: grid;

  grid-template-rows: minmax(min-content, auto) 1fr minmax(min-content, auto);
  grid-template-columns: 1fr;

  overflow: hidden;
`;

export const ContentS = styled(motion.div)`
  grid-row: 2 / 3;
  grid-column: 1 / 2;

  .black-hole,
  h3 {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  & > p {
    width: 100%;

    text-align: center;

    position: absolute;
    top: 70%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);

    @media (max-width: 900px) {
      top: 64%;
    }
  }

  .black-hole {
    min-width: 1000px;

    user-select: none;
    -moz-user-select: none;
  }

  h3 {
    color: white;

    user-select: none;
    -moz-user-select: none;
  }
`;
