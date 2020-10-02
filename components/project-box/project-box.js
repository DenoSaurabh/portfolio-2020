import {
  NeueTertiaryHeading,
  NeueLightMiniText,
} from '../../styles/typography';

import {
  InlineStyle,
  ProjectBoxS,
  ProjectIMG,
} from '../../styles/components/project-box';

const ProjectBox = ({ imgName, title, children }) => (
  <ProjectBoxS>
    <ProjectIMG src={`/assets/img/projects/${imgName}.png`} alt={imgName} />
    <InlineStyle>
      <NeueTertiaryHeading>{title}</NeueTertiaryHeading>
      <NeueLightMiniText>{children}</NeueLightMiniText>
    </InlineStyle>
  </ProjectBoxS>
);

export default ProjectBox;
