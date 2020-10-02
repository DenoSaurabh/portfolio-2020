import styled from 'styled-components';

export const HomePageS = styled.div`
  width: 100%;
  height: 100%;

  display: grid;

  grid-template-rows: minmax(min-content, auto) 1fr minmax(min-content, auto);
  grid-template-columns: 1fr;
`;

export const ContentS = styled.div`
  grid-row: 2 / 3;
  grid-column: 1 / 2;

  img,
  h3 {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  & > p {
    width: 100%;

    text-align: center;

    position: absolute;
    top: 70%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);

    @media (max-width: 900px) {
      top: 64%;
    }
  }

  img {
    width: 70%;
    min-width: 1000px;
  }

  h3 {
    // letter-spacing: 10rem;
    // margin-right: -10rem;
    color: white;
  }
`;
