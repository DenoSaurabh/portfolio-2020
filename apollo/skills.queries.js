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
      skillgroup
    }

    backEndSkills: skillSet(where: { type: "Backend Developer" }) {
      id
      skills
      type
      skillgroup
    }

    UIUXSkills: skillSet(where: { type: "UI/UX Designer" }) {
      id
      skills
      type
      skillgroup
    }

    mobileDeveloper: skillSet(
      where: { type: "Mobile Development (Experimental)" }
    ) {
      id
      skills
      type
      skillgroup
    }
  }
`;

export const GET_ALL_SKILLS = gql`
  {
    skillsSet {
      type
      skills
      skillgroup
      display
      id
    }
  }
`;
