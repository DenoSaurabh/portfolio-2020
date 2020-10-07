import Link from 'next/link';
import Head from 'next/head';

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
import CustomCursor from '../components/cursor/CustomCursor';

const ProjectsPage = () => (
  <ProjectsPageS
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.7, delay: 1 }}
    key="projects"
  >
    <Head>
      <title>projects - denosaurabh</title>
      <meta
        name="denosaurabh projects"
        content="Projects made by denosaurabh"
      />
    </Head>
    <CustomCursor />
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
        <Link href="/projects/crwn-app">
          <a>
            <ProjectIMG src="/assets/img/projects/crwnapp.png" alt="crwn-app" />
          </a>
        </Link>
        <InlineStyle>
          <NeueTertiaryHeading>CRWN Project</NeueTertiaryHeading>
          <NeueLightMiniText>
            is a ecommerce project made with react, firebase.
          </NeueLightMiniText>
        </InlineStyle>
      </CRWNApp>
      <NatoursAPI>
        <Link href="/projects/natours-api">
          <a>
            <ProjectIMG
              src="/assets/img/projects/natours-api.png"
              alt="natours-api"
            />
          </a>
        </Link>
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
      <ProjectBox
        imgName="walkie-talkie"
        title="Walkie Talkie"
        projectUrl="walkie-talkie"
        i={1}
      >
        is a real-time chat application project made with vue, firebase.
      </ProjectBox>
      <ProjectBox imgName="natours" title="Natours" projectUrl="natours" i={2}>
        is a design project made with SASS and advance concepts of css.
      </ProjectBox>
      <ProjectBox
        imgName="trello"
        title="Trello Hotel"
        projectUrl="trello"
        i={3}
      >
        is a design project powered with Advance CSS and Flexbox.
      </ProjectBox>
      <ProjectBox
        imgName="self-driving-car"
        title="Self Driving Car"
        projectUrl="self-driving-car"
        i={4}
      >
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
      <ProjectBox
        imgName="card-game"
        title="Card Game"
        projectUrl="https://heuristic-goldwasser-31429c.netlify.app"
      >
        is my old javascript project I made to refine my programming knowledge.
      </ProjectBox>
      <ProjectBox
        imgName="stone-paper-scissor"
        title="Stone Paper Scissor"
        projectUrl="https://thirsty-heisenberg-ba589f.netlify.app/"
      >
        is a design project made with SASS and advance concepts of css. is my
        first ReactJS project I made, even before I learned the Course.
      </ProjectBox>
      <ProjectBox
        imgName="portfolio-1"
        title="Portfolio 1.0"
        projectUrl="https://portfolio-u6s9.onrender.com/"
      >
        is my first portfolio I made last year.
      </ProjectBox>
      <ProjectBox
        imgName="notes-app"
        title="Notes App"
        projectUrl="https://github.com/DenoSaurabh/notes-app"
      >
        is my move to make classic notes app with HTML, CSS and JS to refine my
        programming knowledge in early days.
      </ProjectBox>
      <ProjectBox imgName="quiz-app" title="Quiz App" projectUrl="">
        is also a HTML, CSS and JS project in my early days. This was very
        deliberation for me.
      </ProjectBox>
    </SmallProjectsContent>
  </ProjectsPageS>
);

export default ProjectsPage;
