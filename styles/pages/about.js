import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AboutPageS = styled.div`
  width: 100%;
  height: fit-content;
`;

export const AboutContent = styled(motion.div)`
  width: 100%;
  height: fit-content;

  margin-top: 8rem;

  line-height: 3.2rem;

  display flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    width: 100%;
  } 
`;

export const LeftContent = styled(motion.div)`
  flex-basis: 50%;
  min-width: 250px;

  height: 100%;
`;

export const RightContent = styled(motion.div)`
  flex-basis: 40%;
  min-width: 250px;

  height: 100%;
`;

export const SmallBoldText = styled.b`
  display: block;
  margin: 15px 0;
`;

export const ChatsBox = styled.div`
  width: 100%;
  height: fit-content;

  margin: 7rem 0;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const SocialBox = styled(motion.div)`
  width: 100%;

  margin: 3rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: grey;
`;
