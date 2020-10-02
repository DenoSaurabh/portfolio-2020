import styled from 'styled-components';

const ProjectMediaQuery = `
    @media (max-width: 470px) {
        min-width: 300px;
        align-self: center;
    }
`;

export const ProjectBoxS = styled.div`
  width: 32%;
  min-width: 400px;

  height: 35rem;

  margin: 5rem auto;

  ${ProjectMediaQuery}
`;

export const ProjectIMG = styled.img`
  margin-bottom: 2.5rem;

  width: 100%;
  height: 80%;

  object-fit: cover;
`;

// Snippets
export const InlineStyle = styled.div`
  h3,
  p {
    display: inline;
    line-height: 2.5rem;
  }

  h3 {
    padding-right: 1rem;
  }
`;
