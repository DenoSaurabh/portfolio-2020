import styled from 'styled-components';

export const ProjectInfoPageS = styled.div`
  width: 100%;
  height: 100%;
`;

export const ProjectInfoContent = styled.div`
  width: 70%;
  height: fit-content;

  margin: 12rem auto;

  display: flex;
  flex-direction: column;
  justify-content: center;

  & > p {
    line-height: 3rem;
    padding: 1rem;

    margin: 4rem 0;

    img {
      width: 100%;
      height: 50rem;

      background-position: top;
      /* background-size: fill; */
      object-fit: cover;

      margin-bottom: 2rem;
    }
  }

  b {
    transition: 0.2s;
    transition-delay: 0.05s;

    &:hover {
      background-color: #2a2b2e;
      color: #fff;

      padding: 0.5rem;

      font-weight: 500;
    }
  }

  @media (max-width: 700px) {
    width: 85%;
  }

  @media (max-width: 380px) {
    width: 95%;
  }
`;

export const ProjectIMG = styled.img`
  width: 100%;
  height: auto;

  margin-bottom: 6rem;

  object-fit: cover;
`;

export const LinkButton = styled.button`
  max-width: 400px;
  min-width: 200px;

  width: 20%;

  margin: 2rem;
  padding: 1.5rem 2rem;

  font-family: inherit;

  background-color: #2a2b2e;

  p {
    color: white;
  }

  outline: none;
  border: none;
`;

export const ButtonsBox = styled.div`
  display: flex;
`;
