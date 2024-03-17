import styled from "styled-components";
import { theme } from "../../../../styles/Theme";
import { FlexedWrapper } from "../../../../components/FlexWrapper";

export const ProjectItem = styled.div`
    background-color: #222525;
    border-radius: 30px 30px 0px 0px;
    margin: 10px;
    max-width: 540px;
    width: 330px;
    transition: .4s ease;
    flex-grow: 1;

    &:hover {
        transform: scale(1.05);
        filter: drop-shadow(0px 0px 5px ${theme.colors.darkGradientFirst}) drop-shadow(0px 0px 5px ${theme.colors.darkGradientSecond});
    }
`

export const Image = styled.img`
    object-fit: cover;
    width: 100%;
    border-radius: 30px 30px 0px 0px;
`

export const ProjectContent = styled.div`
    padding: 30px;
`

export const Title = styled.h3`
    width: 100%;
    padding-bottom: 17px;
`

export const Description = styled.p`
    width: 100%;
`

export const ProjectWrapper = styled(FlexedWrapper)`
    padding-top: 20px;
`
export const Link = styled.a`
    margin-left: 10px;
`