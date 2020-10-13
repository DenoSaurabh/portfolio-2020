import styled from 'styled-components';
import { motion } from 'framer-motion';
export const ProjectBoxS = styled(motion.div)`
  ${({ row, column }) =>
    row && column
      ? `
    grid-row: ${row};
    grid-column: ${column};
  `
      : ''}

  overflow: hidden;
`;

export const ProjectIMG = styled(motion.img)`
  margin-bottom: 2.5rem;

  width: 100%;
  height: 80%;

  object-fit: cover;
`;

// Snippets
export const InlineStyle = styled.div`
  h3,
  p {
    display: inline;
    line-height: 2.5rem;
  }

  h3 {
    padding-right: 1rem;
  }

  padding-bottom: 2rem;
`;
