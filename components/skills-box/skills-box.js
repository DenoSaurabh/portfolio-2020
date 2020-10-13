import styled from 'styled-components';
import { motion } from 'framer-motion';

import { NeueLightMiniText } from '../../styles/typography';

export const SkillsBoxS = styled(motion.div)`
  width: ${({ width = 'fit-content' }) => width};
  min-width: 100px;
  height: ${({ height = 'fit-content' }) => height};
  min-height: 40rem;

  display: flex;
  flex-direction: column;
  flex-wrap: ${({ flexWrap }) => {
    console.log(flexWrap);
    return flexWrap ? 'wrap' : 'unset';
  }};

  align-content: flex-start;
  /* justify-content: left; */

  margin: 2rem;

  p:not(:last-child) {
    width: fit-content;
    margin-bottom: 3rem;
    margin-right: 5rem;
  }

  @media (max-width: 660px) {
    min-height: 45rem;
  }
`;

const SkillsBox = ({ arr, height, width, flexWrap }) => (
  <SkillsBoxS height={height} width={width} flexWrap={flexWrap}>
    {arr.map((el, i) => (
      <NeueLightMiniText
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 + 0.3 * i }}
        key={i}
      >
        {el}
      </NeueLightMiniText>
    ))}
  </SkillsBoxS>
);

export default SkillsBox;
