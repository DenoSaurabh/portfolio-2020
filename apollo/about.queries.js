import gql from 'graphql-tag';

export const GET_ABOUT = gql`
  {
    abouts(orderBy: level_ASC) {
      id
      title
      stage
      description {
        html
      }
    }

    denosaurabh(where: { name: "denosaurabh" }) {
      discord
      resume {
        url
      }
    }
  }
`;
