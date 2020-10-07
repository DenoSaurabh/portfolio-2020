import React, { useEffect } from 'react';
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

import { useCursor } from '../state/cursor.recoil';

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeFromLeft = {
  initial: {
    x: -300,
    opacity: 0,
  },
  animate: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: 1 + i * 0.15,
      duration: 0.7,
      ease: 'easeOut',
    },
  }),
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 1,
    },
  },
};

const SkillsPage = () => {
  const { updateCursorStatus } = useCursor();

  useEffect(() => {
    return () => updateCursorStatus(null);
  }, []);

  return (
    <SkillsPageS
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 1 }}
    >
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
      <SkillsPageContent>
        <TopContent>
          <LeftContent variants={stagger}>
            <NeueSecondaryHeading
              initial="initial"
              animate="animate"
              custom={1}
              key="1"
              variants={fadeFromLeft}
            >
              01 <br /> FRONTEND DEVELOPER.
            </NeueSecondaryHeading>
            <NeueSecondaryHeading
              initial="initial"
              animate="animate"
              custom={2}
              key="2"
              variants={fadeFromLeft}
            >
              02 <br /> BACKEND DEVELOPER.
            </NeueSecondaryHeading>
            <NeueSecondaryHeading
              initial="initial"
              animate="animate"
              custom={3}
              key="3"
              variants={fadeFromLeft}
            >
              03 <br /> UI/UX DESIGNER.
            </NeueSecondaryHeading>
          </LeftContent>
          <RightContent>
            <SkillsBox variants={stagger}>
              {[
                'HTML5',
                'CSS3',
                'JavaScript',
                'React & Redux',
                'Firebase',
                'GraphQL',
                'VueJS',
                'NextJS',
              ].map((el, i) => {
                return (
                  <NeueLightMiniText
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 + 0.3 * i }}
                    key={i}
                  >
                    {el}
                  </NeueLightMiniText>
                );
              })}
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
              ].map((el, i) => {
                if (el === 'CSS Flexbox & Grid') {
                  return (
                    <NeueLightMiniText
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 + 0.3 * i }}
                      onHoverStart={() =>
                        updateCursorStatus({
                          text:
                            'I always get confused between rows & columns xD.',
                          alignment: 'right',
                        })
                      }
                      onHoverEnd={() => updateCursorStatus(null)}
                      key={i}
                    >
                      {el}
                    </NeueLightMiniText>
                  );
                } else {
                  return (
                    <NeueLightMiniText
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 + 0.3 * i }}
                      key={i}
                    >
                      {el}
                    </NeueLightMiniText>
                  );
                }
              })}
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
};

export default SkillsPage;
