import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SkillsPageContent = styled(motion.div)`
  width: 100%;
  height: fit-content;

  margin-top: 10rem;
`;

export const TopContent = styled(motion.div)`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  margin-bottom: 5rem;
`;

export const BottomContent = styled.div`
  width: 100%;
  height: fit-content;

  padding-left: 4rem;

  display: flex;
  flex-direction: column;

  p {
    margin: 4rem 0;
  }

  h3 {
    margin: 2rem 0;
  }

  @media (max-width: 420px) {
    padding-left: 2rem;
  }

  @media (max-width: 800px) {
    padding-left: 0;
  }
`;

export const LeftContent = styled(motion.div)`
  height: fit-content;
  width: 45%;
  min-width: 300px;

  margin-bottom: 6rem;

  display: flex;
  flex-direction: column;

  h3:not(:last-child) {
    margin: 2rem 0;
  }
`;

export const RightContent = styled.div`
  width: 45%;
  min-width: 350px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
`;