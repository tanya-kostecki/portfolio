import styled from "styled-components";
import { theme } from "../../../styles/Theme";

export const Skills = styled.section`
  position: relative;
  background-color: ${theme.colors.darkBg};
`;

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(13rem, auto));

  @media screen and (max-width: 655px) {
    grid-template-columns: repeat(auto-fill, minmax(7rem, auto));
    align-items: center;
    justify-items: center;
  }
`