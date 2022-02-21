import styled from "styled-components"

export const CareerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.darkBackground};

    @media screen and (max-width: 768px) {
        padding: 80px 0;
    }
`;

export const Header = styled.h1`
    position: sticky;
    top: 90px;
    color: ${props => props.theme.sectionHeader};
    opacity: 0.2;
    width: 100%:
    font-size: 48px;
    margin-top: 20px;
    margin-bottom: 60px;
    text-transform: uppercase;
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
    position: absolute;
    top: 10px;
    left: 10px;
    width: 48px;
    height: 48px;
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
    font-size: 32px;
    line-height: 1.1;
    font-weight: 600;
`

export const CardDescription = styled.p`
    color: ${props => props.theme.info};
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
`