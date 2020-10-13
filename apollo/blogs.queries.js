import gql from 'graphql-tag';

export const GET_BLOGS = gql`
  {
    blogs(stage: PUBLISHED, locales: en) {
      id
      title
      blogUrl
      smallDescription
      img {
        url
        fileName
      }
    }
  }
`;
