import gql from 'graphql-tag';

export const GET_BLOGS = gql`
  {
    shortStories {
      date
      description {
        html
      }
      id
      title
    }
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
