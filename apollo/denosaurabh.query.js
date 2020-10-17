import gql from 'graphql-tag';

export const GET_DENOSAURABH = gql`
  {
    denosaurabh(where: { name: "denosaurabh" }) {
      name
      season
      currentStatus
      discord

      resume {
        url
      }
    }
  }
`;
