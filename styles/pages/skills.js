import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SkillsPageS = styled(motion.div)`
  width: 100%;
  height: 100%;
`;

export const SkillsPageContent = styled(motion.div)`
  width: 100%;
  height: fit-content;

  margin-top: 10rem;
`;

export const TopContent = styled.div`
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
`;

export const LeftContent = styled.div`
  height: fit-content;
  width: 45%;
  min-width: 300px;

  margin-bottom: 6rem;

  display: flex;
  flex-direction: column;

  h3 {
    margin: 2rem 0;
  }
`;

export const RightContent = styled.div`
  width: 45%;
  min-width: 350px;

  display: flex;
  justify-content: space-between;
`;

export const SkillsBox = styled.div`
  width: 120px;
  min-width: 100px;
  height: fit-content;

  margin: 2rem;

  p {
    margin-bottom: 3rem;
  }
`;
