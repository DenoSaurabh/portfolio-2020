import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectMediaQuery = `
    @media (max-width: 470px) {
        min-width: 300px;
        align-self: center;
    }
`;

export const ProjectBoxS = styled(motion.div)`
  flex: 40%;

  height: 40rem;

  margin: 5rem;

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
`;
