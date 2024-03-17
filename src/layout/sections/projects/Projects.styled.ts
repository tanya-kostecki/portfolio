import styled from "styled-components";
import { StyledButton } from "../../../components/Button";
import { theme } from "../../../styles/Theme";
import { FlexedWrapper } from "../../../components/FlexWrapper";

export const Projects = styled.section`
`
export const ProjectsButton = styled(StyledButton)`
  display: none;

  @media ${theme.media.tablet} {
    display: block;
    margin: 0 auto;
    padding: 18px 100px 18px 100px;
  }
`
export const TabletWrapper = styled(FlexedWrapper)`
  margin-bottom: 36px;
`