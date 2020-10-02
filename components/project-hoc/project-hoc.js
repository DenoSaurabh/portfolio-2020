import Link from 'next/link';

import {
  ProjectInfoPageS,
  ProjectInfoContent,
  ProjectIMG,
  LinkButton,
  ButtonsBox,
} from '../../styles/components/project-hoc';

import {
  AquireSecondaryHeading,
  NeueUBoldMediumSmallText,
  NeueLightSmallText,
  NeueLightMiniText,
} from '../../styles/typography';

const ProjectHOC = ({
  children,
  title,
  nextAppName,
  nextAppURL,
  imgName,
  githubLink,
  projectLink,
}) => (
  <ProjectInfoPageS>
    <NeueUBoldMediumSmallText
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Link href="/projects"> denosaurabh. </Link>
      {nextAppName ? (
        <Link href={`/projects/${nextAppURL}`}>
            <NeueLightMiniText>
              <u>{nextAppName}</u>
            </NeueLightMiniText>
        </Link>
      ) : null}
    </NeueUBoldMediumSmallText>
    <AquireSecondaryHeading> {title} </AquireSecondaryHeading>
    <ProjectInfoContent>
      <ProjectIMG src={`/assets/img/projects/${imgName}.png`} alt={imgName} />
      <ButtonsBox>
        <LinkButton>
          <NeueLightMiniText>
            <a href={projectLink}> Project Link </a>
          </NeueLightMiniText>
        </LinkButton>
        <LinkButton>
          <NeueLightMiniText>
            <a href={githubLink}> Github </a>
          </NeueLightMiniText>
        </LinkButton>
      </ButtonsBox>
      <NeueLightMiniText> {children} </NeueLightMiniText>
    </ProjectInfoContent>
  </ProjectInfoPageS>
);

export default ProjectHOC;
