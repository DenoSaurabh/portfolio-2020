import Link from 'next/link';

import {
  ProjectsPageS,
  BigProjectsContent,
  CRWNApp,
  NatoursAPI,
  ProjectIMG,
  SmallProjectsContent,
  InlineStyle,
} from '../styles/pages/projects';

import {
  AquireSecondaryHeading,
  AquireTertiaryHeading,
  NeueUBoldMediumSmallText,
  NeueTertiaryHeading,
  NeueLightMiniText,
} from '../styles/typography';

import ProjectBox from '../components/project-box/project-box';

const ProjectsPage = () => (
  <ProjectsPageS>
    <NeueUBoldMediumSmallText
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Link href="/">denosaurabh.</Link>
      <Link href="/skills">
        <a>
          <u>skills</u>
        </a>
      </Link>
    </NeueUBoldMediumSmallText>
    <AquireSecondaryHeading>Projects</AquireSecondaryHeading>
    <BigProjectsContent>
      <CRWNApp>
        <ProjectIMG src="/assets/img/projects/crwnapp.png" alt="crwn-app" />
        <InlineStyle>
          <NeueTertiaryHeading>CRWN Project</NeueTertiaryHeading>
          <NeueLightMiniText>
            is a ecommerce project made with react, firebase.
          </NeueLightMiniText>
        </InlineStyle>
      </CRWNApp>
      <NatoursAPI>
        <ProjectIMG
          src="/assets/img/projects/natours-api.png"
          alt="natours-api"
        />
        <InlineStyle>
          <NeueTertiaryHeading>Natours API</NeueTertiaryHeading>
          <NeueLightMiniText>
            is a Rest API made with NodeJS, Express, MongoDB & Mongoose, for
            booking nature tours.
          </NeueLightMiniText>
        </InlineStyle>
      </NatoursAPI>
    </BigProjectsContent>
    <SmallProjectsContent>
      <ProjectBox imgName="walkie-talkie" title="Walkie Talkie">
        is a real-time chat application project made with vue, firebase.
      </ProjectBox>
      <ProjectBox imgName="natours" title="Natours">
        is a design project made with SASS and advance concepts of css.
      </ProjectBox>
      <ProjectBox imgName="trello" title="Trello Hotel">
        is a design project powered with Advance CSS and Flexbox.
      </ProjectBox>
      <ProjectBox imgName="self-driving-car" title="Self Driving Car">
        is a personal project I made for a science/tech exibition.
      </ProjectBox>
    </SmallProjectsContent>
    <AquireTertiaryHeading>Archived Projects</AquireTertiaryHeading>
    &nbsp; &nbsp;
    <NeueLightMiniText style={{ width: '50%', minWidth: '300px' }}>
      Want to know some of my oldest projects when I was getting into
      programming, let’s check out :D
    </NeueLightMiniText>
    <SmallProjectsContent>
      <ProjectBox imgName="card-game" title="Card Game">
        is my old javascript project I made to refine my programming knowledge.
      </ProjectBox>
      <ProjectBox imgName="stone-paper-scissor" title="Stone Paper Scissor">
        is a design project made with SASS and advance concepts of css. is my
        first ReactJS project I made, even before I learned the Course.
      </ProjectBox>
      <ProjectBox imgName="portfolio-1" title="Portfolio 1.0">
        is my first portfolio I made last year.
      </ProjectBox>
      <ProjectBox imgName="notes-app" title="Notes App">
        is my move to make classic notes app with HTML, CSS and JS to refine my
        programming knowledge in early days.
      </ProjectBox>
      <ProjectBox imgName="quiz-app" title="Quiz App">
        is also a HTML, CSS and JS project in my early days. This was very
        deliberation for me.
      </ProjectBox>
    </SmallProjectsContent>
  </ProjectsPageS>
);

export default ProjectsPage;
