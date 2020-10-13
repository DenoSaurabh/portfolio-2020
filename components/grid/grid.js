import styled from 'styled-components';

const GridS = styled.div`
    width: 80%;
    height: fit-content;

    margin: 10rem auto;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 40%));
    grid-template-rows: repeat(auto-fit, minmax(max-content, max-content));

    justify-content: space-between;

    grid-column-gap: 8rem;
    grid-row-gap: 12rem;

    @media only screen and (max-width: 950px) {
        width: 100%;
    }

    @media only screen and (max-width: 830px) {
        width: 80%;
        min-width: 310px;
        grid-template-columns: 1fr;
    }
`;

const Grid = ({children}) => (
    <GridS>
        {children}
    </GridS>
)

export default Grid;