import styled from 'styled-components'

export const HobbiesContainer = styled.div`
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

export const HobbiesWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
`

export const HobbiesRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const CardWrapper = styled.div`
    position: sticky;
    top: 150px;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    width: 25%;
    max-width: 540px;
    align-items: center;
    margin-top: 100px;
    margin-bottom: 100px;
    
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const CardImage = styled.img`
    width: 320px;
    height: 240px;
    margin: 0 0 10px 0;
`

export const CardDescription = styled.h1`
    color: ${props => props.theme.info};
    font-size: 24px;
    line-height: 1.1;
    font-weight: 300;
    text-transform: uppercase;
`