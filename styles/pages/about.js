import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AboutPageS = styled.div`
  width: 100%;
  height: 100%;
`;

export const AboutContent = styled(motion.div)`
  width: 80%;
  height: fit-content;

  margin-top: 8rem;

  line-height: 3.2rem;

  display flex;
  flex-direction: column;

  @media (max-width: 500px) {
    width: 100%;
  } 
`;

export const SmallBoldText = styled.b`
  display: block;
  margin: 15px 0;
`;
