import React, { useState } from 'react';
import Link from 'next/link';
import { isMobile } from 'react-device-detect';

import {
  NeueTertiaryHeading,
  NeueLightMiniText,
} from '../../styles/typography';

import {
  InlineStyle,
  ProjectBoxS,
  ProjectIMG,
} from '../../styles/components/project-box';

const ProjectBox = ({ imgName, title, children, projectUrl, i }) => {
  const [imgHovered, setImgHovered] = useState(false);

  return (
    <ProjectBoxS
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.3 }}
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
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 1.3 + 0.15 * i,
              ease: 'linear',
            }}
            onHoverStart={() => setImgHovered(true)}
            onHoverEnd={() => setImgHovered(false)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            src={`/assets/img/projects/${imgName}.png`}
            alt={imgName}
          />
        </a>
      </Link>

      <InlineStyle>
        <NeueTertiaryHeading
          initial={{ opacity: 0, y: 10 }}
          animate={
            isMobile
              ? { opacity: 1, y: 0 }
              : { opacity: imgHovered ? 1 : 0, y: imgHovered ? 0 : 10 }
          }
        >
          {title}
        </NeueTertiaryHeading>
        <NeueLightMiniText
          initial={{ opacity: 0, y: 10 }}
          animate={
            isMobile
              ? { opacity: 1, y: 0 }
              : { opacity: imgHovered ? 1 : 0, y: imgHovered ? 0 : 10 }
          }
        >
          {children}
        </NeueLightMiniText>
      </InlineStyle>
    </ProjectBoxS>
  );
};

export default ProjectBox;
