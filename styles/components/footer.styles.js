import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FooterS = styled(motion.div)`
  width: 100%;
  height: fit-content;

  padding: 0 4rem;

  display: flex;
  justify-content: space-between;

  @media (max-width: 460px) {
    padding: 0;
  }
`;
