import styled from 'styled-components'

export const SkillsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: ${props => props.theme.background};
    height: 760px;

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

    @media screen and (max-width: 480px) {
        padding-top: 80px;
        justify-content: space-between;
        flex-direction: column;
    }
`

export const SkillsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height; 100%;
`

export const ChartHeader = styled.h3`
    color: #a9a9a9;
    font-size: 16px;
`
