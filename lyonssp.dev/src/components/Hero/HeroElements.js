import styled from "styled-components"

export const HeroContainer = styled.div`
    color: #fff;
    background: '#f9f9f9';

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const HeroWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const HeroRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2';

    @media screen and (max-width: 768px) {
        grid-template-areas: 'col1' 'col2' ;
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding; 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding; 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 540px;
    align-items: center;
    justify-content: center;
`

export const Subtitle = styled.p`
    color: ${props => props.theme.secondary};
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    color: ${props => props.theme.info};
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const ImageWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Image = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`