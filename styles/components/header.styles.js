import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeaderS = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    display: inline;
  }
`;

export const SocialBox = styled(motion.div)`
  width: 40%;

  margin: 0 15% 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: grey;
`;
