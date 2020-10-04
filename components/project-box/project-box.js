import React, { useState, useRef, useLayoutEffect } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

import {
  NeueTertiaryHeading,
  NeueLightMiniText,
} from '../../styles/typography';

import {
  InlineStyle,
  ProjectBoxS,
  ProjectIMG,
} from '../../styles/components/project-box';

const ProjectBox = ({ imgName, title, children, projectUrl }) => {
  return (
    <ProjectBoxS
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <Link
        href={
          projectUrl.includes('https://')
            ? projectUrl
            : `projects/${projectUrl}`
        }
      >
        <a>
          <ProjectIMG
            initial={{ filter: 'grayscale(100%)' }}
            whileHover={{ filter: 'grayscale(0%)' }}
            whileTap={{ scale: 0.95 }}
            src={`/assets/img/projects/${imgName}.png`}
            alt={imgName}
          />
        </a>
      </Link>

      <InlineStyle>
        <NeueTertiaryHeading>{title}</NeueTertiaryHeading>
        <NeueLightMiniText>{children}</NeueLightMiniText>
      </InlineStyle>
    </ProjectBoxS>
  );
};

export default ProjectBox;
