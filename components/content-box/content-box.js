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

const ContentBox = ({
  imgName,
  imgUrl,
  title,
  children,
  url,
  i,
  row,
  column,
  appKey,
}) => {
  const [imgHovered, setImgHovered] = useState(false);

  return (
    <ProjectBoxS
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.3 }}
      row={row}
      column={column}
    >
      <Link href={appKey ? `projects/${appKey}` : url ? url : ''}>
        <a>
          <ProjectIMG
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 1.3 + 0.15 * i,
              ease: 'linear',
            }}
            onHoverStart={() => setImgHovered(true)}
            onHoverEnd={() => setImgHovered(false)}
            src={imgUrl}
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

export default ContentBox;
