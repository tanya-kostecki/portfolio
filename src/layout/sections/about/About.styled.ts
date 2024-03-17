import styled from "styled-components";
import { theme } from "../../../styles/Theme";

export const About = styled.section`
  display: flex;
`

export const Paragraph = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  text-align: left;
  max-width: 840px;
  padding-left: 10px;

  display: flex;
  gap: 10px;

  &::before {
    content: "";
    display: inline-block;
    width: 5px;
    height: 100%;
    background-color: ${theme.colors.darkFont};
  }
`