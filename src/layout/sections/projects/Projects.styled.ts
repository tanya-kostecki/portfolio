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
    margin: 0 auto;
    padding: 18px 100px 18px 100px;
    margin-top: 36px;
  }
`