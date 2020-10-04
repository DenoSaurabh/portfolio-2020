import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
      <NeueUBoldSmallText
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        2020
      </NeueUBoldSmallText>
    </HeaderS>
  );
};

export default Header;
