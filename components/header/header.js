import React from 'react';
// import { motion } from 'framer-motion';

import { HeaderS, SocialBox } from '../../styles/components/header.styles';

import {
  NeueUBoldSmallText,
  NeueUBoldMediumSmallText,
  NeueLightMiniText,
} from '../../styles/typography';

const Header = () => {
  return (
    <HeaderS>
      <NeueUBoldMediumSmallText>denosaurabh.</NeueUBoldMediumSmallText>
      <SocialBox>
        <NeueLightMiniText>Gmail</NeueLightMiniText>
        <NeueLightMiniText>Twitter</NeueLightMiniText>
        <NeueLightMiniText>Github</NeueLightMiniText>
        <NeueLightMiniText>Dribble</NeueLightMiniText>
        <NeueLightMiniText>LinkedIn</NeueLightMiniText>
      </SocialBox>
      <NeueUBoldSmallText>2020</NeueUBoldSmallText>
    </HeaderS>
  );
};

export default Header;
