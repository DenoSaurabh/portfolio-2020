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
          <NeueSecondaryHeading
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, ease: 'easeOut', duration: 0.7 }}
          >
            01 <br /> FRONTEND DEVELOPER.
          </NeueSecondaryHeading>
          <NeueSecondaryHeading
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.15, ease: 'easeOut', duration: 0.7 }}
          >
            02 <br /> BACKEND DEVELOPER.
          </NeueSecondaryHeading>
          <NeueSecondaryHeading
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.3, ease: 'easeOut', duration: 0.7 }}
          >
            03 <br /> UI/UX DESIGNER.
          </NeueSecondaryHeading>
        </LeftContent>
        <RightContent>
          <SkillsBox>
            {[
              'HTML5',
              'CSS3',
              'JavaScript',
              'React & Redux',
              'Firebase',
              'GraphQL',
              'VueJS',
              'NextJS',
            ].map((el, i) => (
              <NeueLightMiniText
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + 0.3 * i }}
                key={i}
              >
                {el}
              </NeueLightMiniText>
            ))}
          </SkillsBox>
          <SkillsBox>
            {[
              'SASS',
              'Styled Components',
              `Responsive Design & Images`,
              `CSS Flexbox & Grid`,
              'Figma',
              'Sketching',
              'Wireframing',
              'Prototyping',
            ].map((el, i) => (
              <NeueLightMiniText
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + 0.3 * i }}
                key={i}
              >
                {el}
              </NeueLightMiniText>
            ))}
          </SkillsBox>
          <SkillsBox>
            {[
              'NodeJS',
              'Express',
              `MongoDB`,
              `Mongoose`,
              'Stripe',
              'GCP',
              'Docker',
              'NPM',
              'Deployment',
            ].map((el, i) => (
              <NeueLightMiniText
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + 0.3 * i }}
                key={i}
              >
                {el}
              </NeueLightMiniText>
            ))}
          </SkillsBox>
        </RightContent>
      </TopContent>
      <BottomContent>
        <NeueLightSmallText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.05 }}
        >
          not only those, every single app made by me has great focus on :
        </NeueLightSmallText>
        <NeuePrimaryHeading
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.15, ease: 'easeOut', duration: 0.7 }}
        >
          PERFORMANCE
        </NeuePrimaryHeading>
        <NeuePrimaryHeading
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.15, ease: 'easeOut', duration: 0.7 }}
        >
          ERROR HANDLING
        </NeuePrimaryHeading>
        <NeuePrimaryHeading
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.15, ease: 'easeOut', duration: 0.7 }}
        >
          SECURITY
        </NeuePrimaryHeading>
        <NeuePrimaryHeading
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.15, ease: 'easeOut', duration: 0.7 }}
        >
          ACCESSIBILITY
        </NeuePrimaryHeading>
        <NeueLightSmallText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          If you want exactly these kinds of apps, you are in right place
          :thumbs_up:. let’s talk
        </NeueLightSmallText>
      </BottomContent>
    </SkillsPageContent>
  </SkillsPageS>
);

export default SkillsPage;
