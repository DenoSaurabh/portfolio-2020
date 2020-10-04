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
  const [imgHovered, setImgHovered] = useState(false);

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
            onHoverStart={() => setImgHovered(true)}
            onHoverEnd={() => setImgHovered(false)}
            whileHover={{ backgroundPosition: 'top' }}
            whileTap={{ scale: 0.95 }}
            src={`/assets/img/projects/${imgName}.png`}
            alt={imgName}
          />
        </a>
      </Link>

      <InlineStyle>
        <NeueTertiaryHeading
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: imgHovered ? 1 : 0, y: imgHovered ? 0 : 10 }}
        >
          {title}
        </NeueTertiaryHeading>
        <NeueLightMiniText
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: imgHovered ? 1 : 0, y: imgHovered ? 0 : 10 }}
        >
          {children}
        </NeueLightMiniText>
      </InlineStyle>
    </ProjectBoxS>
  );
};

export default ProjectBox;
