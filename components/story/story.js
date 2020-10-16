import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ReactHtmlParser from 'react-html-parser';

import {
  NeueUBoldSmallText,
  NeueLightMiniText,
  NeueLightSmallPara,
} from '../../styles/typography';

const StoryS = styled.div`
  height: fit-content;
  width: 100%;

  padding: 5rem 0;

  border-top: 2px solid #343333;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media only screen and (max-width: 530px) {
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
  }
`;

const Story = ({ children, title, date }) => {
  const [visible, setVisible] = useState(false);

  return (
    <StoryS>
      <motion.div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        onTap={() => setVisible(!visible)}
      >
        <NeueLightSmallPara>{title}</NeueLightSmallPara>
        <NeueUBoldSmallText>{date}</NeueUBoldSmallText>
      </motion.div>
      <NeueLightMiniText
        initial={{ opacity: 0, height: 0 }}
        animate={
          visible
            ? { opacity: 1, height: 'fit-content', marginTop: '5rem' }
            : { opacity: 0, height: 0, marginTop: '0rem' }
        }
        transition={{ duration: 0.4 }}
        style={{
          flexGrow: '100%',
          lineHeight: '28px',
        }}
      >
        {ReactHtmlParser(children)}
      </NeueLightMiniText>
    </StoryS>
  );
};

export default Story;
