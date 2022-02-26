import styled from "styled-components"

export const CareerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.background};

    padding-top: 80px;
    padding-bottom: 80px;

    position: relative;
    border-top: .1rem dashed #c9c9c9;
    &:before {
        background: #c9c9c9;
        color: #e9e9e9;
        content: "</>";
        width: 3.5rem;
        height: 3.5rem;
        border-style: solid;
        border-width: .1rem;
        border-color: #c9c9c9;
        border-radius: 100%;
        position: absolute;
        top: -1.75rem;
        left: calc(50% - 1.75rem);
        line-height: 3.25rem;
        text-indent: .325rem;
        font-size: 2rem;
        font-weight: 1rem;
    }

    @media screen and (max-width: 768px) {
        padding: 80px 0;
    }
`;

export const Header = styled.h1`
    color: ${props => props.theme.sectionHeader};
    opacity: 0.2;
    width: 100%:
    font-size: 48px;
    margin-top: 20px;
    margin-bottom: 60px;
    text-transform: uppercase;
`

export const CareerRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2';

    margin: 35px 0;
    height: 100%;
    width: 100%;

    @media screen and (max-width: 768px) {
        grid-template-areas: 'col1' 'col2' ;
    }
`

export const Column1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding; 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0px 150px;
    grid-area: col2;
`

export const CardWrapper = styled.div`
    position: sticky;
    top: 150px;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 540px;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 2px solid #ccc;
    border-radius: 10px;
`

export const CardImage = styled.img`
    width: 128px;
    height: 128px;

    @media screen and (max-width: 480px) {
        width: 64px;
        height: 64px;
    }
`

export const CardDates = styled.p`
    color: ${props => props.theme.info};
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
`

export const CardCompanyName = styled.h1`
    color: ${props => props.theme.info};
    font-size: 24px;
    line-height: 1.1;
    font-weight: 600;
`

export const CardDescription = styled.p`
    color: ${props => props.theme.info};
    font-size: 18px;
    line-height: 24px;

    @media screen and (max-width: 480px) {
        display: none;
    }
`
