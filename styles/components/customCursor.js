import styled from 'styled-components';
import { motion } from 'framer-motion';

import { isMobile } from 'react-device-detect';

export const CursorBox = styled(motion.div)`
  position: fixed;

  transition: all 0.4s ease-out;
  transition-property: width, height, transform, border;
  will-change: width, height, transform, border;

  width: fit-content;
  max-width: 400px;

  height: fit-content;

  display: flex;

  pointer-events: none;
  z-index: 1000;

  p {
    position: relative;

    max-width: 350px;
    height: fit-content;

    padding: 1.4rem;
    background: #fff;

    overflow: hidden;
  }
`;

export const Cursor = styled(motion.div)`
  position: relative;
  overflow: hidden;

  background: #343333;
  background-blend-mode: difference;

  width: 32px;
  height: 32px;

  transform: translateX(-50%) translateY(-50%);

  border-radius: 50%;

  ${isMobile ? `visibility: hidden` : ''}
`;
