import Link from 'next/link';
import Head from 'next/head';

import {
  SkillsPageS,
  SkillsPageContent,
  LeftContent,
  RightContent,
  SkillsBox,
  TopContent,
  BottomContent,
} from '../styles/pages/skills';

import {
  AquireSecondaryHeading,
  NeuePrimaryHeading,
  NeueSecondaryHeading,
  NeueUBoldMediumSmallText,
  NeueLightSmallText,
  NeueLightMiniText,
} from '../styles/typography';

import CustomCursor from '../components/cursor/CustomCursor';

const SkillsPage = () => (
  <SkillsPageS>
    <Head>
      <title>skills - denosaurabh</title>
      <meta
        name="denosaurabh"
        content="Most skill set of denosaurabh, from front-end development, back-end development to design."
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
      <Link href="/about">
        <a>
          <u>about</u>
        </a>
      </Link>
    </NeueUBoldMediumSmallText>
    <AquireSecondaryHeading>Skills</AquireSecondaryHeading>
    <SkillsPageContent
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TopContent>
        <LeftContent>
          <NeueSecondaryHeading>
            01 <br /> FRONTEND DEVELOPER.
          </NeueSecondaryHeading>
          <NeueSecondaryHeading>
            02 <br /> BACKEND DEVELOPER.
          </NeueSecondaryHeading>
          <NeueSecondaryHeading>
            03 <br /> UI/UX DESIGNER.
          </NeueSecondaryHeading>
        </LeftContent>
        <RightContent>
          <SkillsBox>
            <NeueLightMiniText>HTML5</NeueLightMiniText>
            <NeueLightMiniText>CSS3</NeueLightMiniText>
            <NeueLightMiniText>JavaScript</NeueLightMiniText>
            <NeueLightMiniText>TypeScript</NeueLightMiniText>
            <NeueLightMiniText>ReactJS & Redux</NeueLightMiniText>
            <NeueLightMiniText>Firebase</NeueLightMiniText>
            <NeueLightMiniText>GraphQL</NeueLightMiniText>
            <NeueLightMiniText>VueJS</NeueLightMiniText>
          </SkillsBox>
          <SkillsBox>
            <NeueLightMiniText>SASS</NeueLightMiniText>
            <NeueLightMiniText>Styled Components</NeueLightMiniText>
            <NeueLightMiniText>
              Responsive <br /> Design & Images
            </NeueLightMiniText>
            <NeueLightMiniText>
              CSS <br /> Flexbox & Grid
            </NeueLightMiniText>
            <NeueLightMiniText>Figma</NeueLightMiniText>
            <NeueLightMiniText>Sketching</NeueLightMiniText>
            <NeueLightMiniText>Wireframe</NeueLightMiniText>
            <NeueLightMiniText>Prototype</NeueLightMiniText>
          </SkillsBox>
          <SkillsBox>
            <NeueLightMiniText>NodeJS</NeueLightMiniText>
            <NeueLightMiniText>Express</NeueLightMiniText>
            <NeueLightMiniText>MongoDB</NeueLightMiniText>
            <NeueLightMiniText>Mongoose</NeueLightMiniText>
            <NeueLightMiniText>Stripe</NeueLightMiniText>
            <NeueLightMiniText>GCP</NeueLightMiniText>
            <NeueLightMiniText>Docker</NeueLightMiniText>
            <NeueLightMiniText>NPM</NeueLightMiniText>
            <NeueLightMiniText>Deployment</NeueLightMiniText>
          </SkillsBox>
        </RightContent>
      </TopContent>
      <BottomContent>
        <NeueLightSmallText>
          not only those, every single app made by me has great focus on :
        </NeueLightSmallText>
        <NeuePrimaryHeading>PERFORMANCE</NeuePrimaryHeading>
        <NeuePrimaryHeading>ERROR HANDLING</NeuePrimaryHeading>
        <NeuePrimaryHeading>SECURITY</NeuePrimaryHeading>
        <NeuePrimaryHeading>ACCESSIBILITY</NeuePrimaryHeading>
        <NeueLightSmallText>
          If you want exactly these kinds of apps, you are in right place
          :thumbs_up:. let’s talk
        </NeueLightSmallText>
      </BottomContent>
    </SkillsPageContent>
  </SkillsPageS>
);

export default SkillsPage;
