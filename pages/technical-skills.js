import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';

import withApollo from '../lib/apollo';
import { GET_ALL_SKILLS } from '../apollo/skills.queries';

import { NeueSecondaryHeading } from '../styles/typography';

import Page from '../layouts/page/page';
import SkillsBox from '../components/skills-box/skills-box';

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ display }) => (display === 'small' ? '50%' : '100%')}};

  h3 {
    margin: 4rem 2rem;
  }
`;

const TechnicalSkillsContent = styled.div`
  margin-top: 7rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const TechnicalSkills = () => {
  const { loading, error, data } = useQuery(GET_ALL_SKILLS);

  if (error) return <h1>Error!</h1>;
  if (loading) return <h1>Loading...</h1>;

  const { skillsSet } = data;

  return (
    <Page
      id="technical skills"
      title="Technical Skills"
      metaName="complete skills denosaurabh"
      metaDes="full complete skills of denosaurabh"
      previousPageLink="/skills"
    >
      <TechnicalSkillsContent>
        {skillsSet.map(({ skillgroup, type, skills, display }) => {
          return (
            <SkillsContainer key={skillgroup} display={display}>
              <NeueSecondaryHeading>{type}</NeueSecondaryHeading>
              <SkillsBox
                height={display === 'small' ? 'fit-content' : '40rem'}
                width="70%"
                flexWrap={true}
                style={{
                  alignItems: 'flex-start',
                  justifyContent: 'left',
                }}
                arr={skills}
              />
            </SkillsContainer>
          );
        })}
      </TechnicalSkillsContent>
    </Page>
  );
};

export default withApollo({ ssr: true })(TechnicalSkills);
