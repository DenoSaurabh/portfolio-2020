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

const ProjectBox = ({ imgName, title, children, projectUrl }) => (
    <ProjectBoxS>
        <Link
    href={
      projectUrl.includes('https://') ? projectUrl : `projects/${projectUrl}`
    }
  >

      <a>
        <ProjectIMG src={`/assets/img/projects/${imgName}.png`} alt={imgName} />
      </a>
      </Link>

      <InlineStyle>
        <NeueTertiaryHeading>{title}</NeueTertiaryHeading>
        <NeueLightMiniText>{children}</NeueLightMiniText>
      </InlineStyle>
    </ProjectBoxS>
);

export default ProjectBox;
