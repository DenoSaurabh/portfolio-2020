import gql from 'graphql-tag';

/*

Main SkillSets are:

* FRONTEND DEVELOPER
* BACKEND DEVELOPER
* UI/UX DESIGNER  

*/

export const GET_FRONTEND_SKILLS = gql`
  {
    skillSet(where: { skillgroup: frontend_developer }) {
      id
      skills
      type
    }
  }
`;

export const GET_BACKEND_SKILLS = gql`
  {
    skillSet(where: { skillgroup: backend_developer }) {
      id
      skills
      type
    }
  }
`;

export const GET_UIUX_SKILLS = gql`
  {
    skillSet(where: { skillgroup: uiORux_designer }) {
      id
      skills
      type
    }
  }
`;
