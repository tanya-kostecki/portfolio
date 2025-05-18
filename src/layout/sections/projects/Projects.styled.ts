import styled from "styled-components";
import { StyledButton } from "../../../components/Button";
import { theme } from "../../../styles/Theme";

export const Projects = styled.section`
  position: relative;
  background-color: ${theme.colors.darkBg};
`
export const ProjectsButton = styled(StyledButton)`
    display: none;

    @media ${theme.media.tablet} {
        display: block;
        padding: 18px 100px 18px 100px;
        margin: 36px auto 0;
    }
`

export const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    row-gap: 20px;

    @media ${theme.media.tablet} {
        justify-items: center;
    }
`