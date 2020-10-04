import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Cursor = styled(motion.div)`
  position: fixed;
  top: 5%;
  left: 15%;

  background: #343333;
  background-blend-mode: difference;

  border-radius: 50%;

  transform: translate(-50%, -50%);

  transition: all 0.4s ease-out;
  transition-property: width, height, transform, border;
  will-change: width, height, transform, border;

  pointer-events: none;
  z-index: 1000;

`;
