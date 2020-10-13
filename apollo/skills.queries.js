import gql from 'graphql-tag';

/*

Main SkillSets are:

* FRONTEND DEVELOPER
* BACKEND DEVELOPER
* UI/UX DESIGNER  

*/

export const GET_SKILLS_SET = gql`
  {
    frontEndSkills: skillSet(where: { type: "Frontend Developer" }) {
      id
      skills
      type
    }

    backEndSkills: skillSet(where: { type: "Backend Developer" }) {
      id
      skills
      type
    }

    UIUXSkills: skillSet(where: { type: "UI/UX Designer" }) {
      id
      skills
      type
    }
  }
`;
