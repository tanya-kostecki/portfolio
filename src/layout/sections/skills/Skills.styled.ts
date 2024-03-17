import styled from "styled-components";

export const Skills = styled.section`
`

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(13rem, auto));

  @media screen and (max-width: 655px) {
    display: none;
  }
`

export const MobileSkillsContainer = styled.div`
  display: none;

  @media screen and (max-width: 655px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(7rem, auto));
    align-items: center;
    justify-items: center;
  }
`