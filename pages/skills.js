import React from 'react';
import Link from 'next/link';
import { useQuery } from '@apollo/client';

import withApollo from '../lib/apollo';
import {
  GET_SKILLS_SET
} from '../apollo/skills.queries';

import {
  SkillsPageContent,
  LeftContent as LeftContentS,
  RightContent as RightContentS,
  SkillsBox,
  TopContent,
  BottomContent as BottomContentS,
} from '../styles/pages/skills';

import {
  NeuePrimaryHeading,
  NeueSecondaryHeading,
  NeueLightSmallText,
  NeueLightMiniText,
} from '../styles/typography';

import Page from '../layouts/page/page';

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

const SkillsPage = () => {
  return (
    <Page
      id="skills"
      title="Skills"
      metaName="skill-set denosaurabh"
      metaDes="frontend, backend and ui/ux knowledge of denosaurabh"
      nextPageLink="/about"
      nextPageTitle="about"
    >
      <SkillsPageContent>
        <TopContent>
          <LeftContent />
          <RightContent />
        </TopContent>
        <BottomContent />
      </SkillsPageContent>
    </Page>
  );
};

function LeftContent() {
  return (
    <LeftContentS>
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
    </LeftContentS>
  );
}

function RightContent() {
  const {
    loading,
    error,
    data,
  } = useQuery(GET_SKILLS_SET);

  if (loading) return <h1>loading</h1>;

  const {frontEndSkills, backEndSkills, UIUXSkills} = data;

  return (
    <RightContentS>
      <SkillsBox>
        {frontEndSkills.skills.map((el, i) => {
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
        {backEndSkills.skills.map((el, i) => {
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
        {UIUXSkills.skills.map((el, i) => (
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
    </RightContentS>
  );
}

function BottomContent() {
  return (
    <BottomContentS>
      <NeueLightSmallText>
        not only those, every single app made by me has great focus on:
      </NeueLightSmallText>
      <NeuePrimaryHeading>PERFORMANCE</NeuePrimaryHeading>
      <NeuePrimaryHeading>ERROR HANDLING</NeuePrimaryHeading>
      <NeuePrimaryHeading>SECURITY</NeuePrimaryHeading>
      <NeuePrimaryHeading>ACCESSIBILITY</NeuePrimaryHeading>
      <NeueLightSmallText>
        want exactly these kinds of apps, you are in right place :thumbs_up: .
        <Link href="mailto:denosaurabh@gmail.com">
          <u>let’s talk</u>
        </Link>
      </NeueLightSmallText>
    </BottomContentS>
  );
}

export default withApollo({ ssr: true })(SkillsPage);
