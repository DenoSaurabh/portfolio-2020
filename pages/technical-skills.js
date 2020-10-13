import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';

import withApollo from '../lib/apollo';
import { GET_SKILLS_SET } from '../apollo/skills.queries';

import { NeueSecondaryHeading } from '../styles/typography';

import Page from '../layouts/page/page';
import SkillsBox from '../components/skills-box/skills-box';

const SkillBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h3 {
    margin: 4rem 2rem;
  }

  &:first-child {
      /* margin-top: 17rem; */
  } 
`;

const TechnicalSkills = () => {
  const { loading, error, data } = useQuery(GET_SKILLS_SET);

  if (error) return <h1>Error!</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <Page
      id="technical-skills"
      title="Technical Skills"
      metaName="complete skills denosaurabh"
      metaDes="full complete skills of denosaurabh"
      previousPageLink="/skills"
    >
      
      {Object.keys(data).map((context) => {
        console.log(context, data[context]);
        const { skillgroup, type, skills } = data[context];

        return (
          <SkillBlock key={skillgroup}>
            <NeueSecondaryHeading>{type}</NeueSecondaryHeading>
            <SkillsBox
              height="40rem"
              width="70%"
              flexWrap={true}
              style={{
                alignItems: 'flex-start',
                justifyContent: 'left',
              }}
              arr={skills}
            />
          </SkillBlock>
        );
      })}
    </Page>
  );
};

export default withApollo({ ssr: true })(TechnicalSkills);
