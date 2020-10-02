import styled from 'styled-components';

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

export const ProjectsPageS = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;

  @media (max-width: 1500px) {
    padding: 0 8rem;
  }

  @media (max-width: 1000px) {
    padding: 0 5rem;
  }

  @media (max-width: 700px) {
    padding: 0;
  }
`;

export const BigProjectsContent = styled.div`
  margin-top: 12rem;

  width: 100%;
  height: fit-content;

  padding: 4rem;

  display: flex;
  flex-direction: column;

  padding: 0 12rem;
`;

const ProjectMediaQuery = `
    @media (max-width: 470px) {
        min-width: 300px;
        align-self: center;
    }
`;

export const CRWNApp = styled.div`
  width: 43%;
  min-width: 400px;

  ${ProjectMediaQuery}
`;

export const ProjectIMG = styled.img`
  margin-bottom: 2.5rem;

  width: 100%;
  height: 80%;

  object-fit: cover;
`;

export const NatoursAPI = styled.div`
  width: 43%;
  min-width: 400px;

  margin-top: 80px;

  align-self: flex-end;

  ${ProjectMediaQuery}
`;

// Small projects
export const SmallProjectsContent = styled.div`
  height: fit-content;

  margin: auto;
  margin-top: 6rem;
  margin-bottom: 30rem;

  width: 90%;
  min-width: 350px;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
