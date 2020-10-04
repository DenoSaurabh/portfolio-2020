import styled from 'styled-components';
import { motion } from 'framer-motion';

// -------------- Aquire

// Headings
export const AquirePrimaryHeading = styled(motion.h3)`
  font-family: 'Aquire-bold';
  font-size: 10.4rem;

  display: block;
  // letter-spacing: 15rem;
  margin-right: -15rem;
  text-align: right;
`;

export const AquireSecondaryHeading = styled(motion.h3)`
  font-family: 'Aquire-bold';
  font-size: 8rem;
`;

export const AquireTertiaryHeading = styled(motion.h5)`
  font-family: 'Aquire-bold';
  font-size: 4.8rem;
`;

// -------------- Neue

// Headings
export const NeuePrimaryHeading = styled(motion.h3)`
  font-family: 'Neue-ultrabold';
  font-size: 5.6rem;
`;

export const NeueSecondaryHeading = styled(motion.h3)`
  font-family: 'Neue-ultrabold';
  font-size: 4rem;
`;

export const NeueTertiaryHeading = styled(motion.h3)`
  font-family: 'Neue-ultrabold';
  font-size: 2.4rem;
`;

// Paragraphs
export const NeueLightMediumPara = styled(motion.p)`
  font-family: 'Neue-light';
  font-size: 4.8rem;
`;

export const NeueLightSmallPara = styled(motion.p)`
  font-family: 'Neue-bold';
  font-size: 3.2rem;
`;

// Texts
export const NeueLightSmallText = styled(motion.p)`
  font-family: 'Neue-light';
  font-size: 2.4rem;
`;

export const NeueLightMiniText = styled(motion.p)`
  font-family: 'Neue-light';
  font-size: 1.6rem;
`;

export const NeueUBoldMediumText = styled(motion.p)`
  font-family: 'Neue-ultrabold';
  font-size: 3.2rem;
`;

export const NeueUBoldMediumSmallText = styled(motion.p)`
  font-family: 'Neue-ultrabold';
  font-size: 2.4rem;

  color: var(--color-primary);

  overflow: hidden;
`;

export const NeueUBoldSmallText = styled(motion.p)`
  font-family: 'Neue-ultrabold';
  font-size: 1.6rem;
`;
