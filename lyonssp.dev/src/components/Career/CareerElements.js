import styled from "styled-components"

export const CareerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.background};

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
    margin-bottom: 15px;
    padding; 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 35px;
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