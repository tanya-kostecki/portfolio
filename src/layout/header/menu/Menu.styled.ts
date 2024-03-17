import styled from "styled-components";
import { theme } from "../../../styles/Theme";

export const Menu = styled.nav`
  ul {
    display: flex;
    gap: 40px;
  }

  a {
    font-weight: 500;
    font-size: 16px;
    display: inline-block;
  }

  @media ${theme.media.tablet} {
    display: none;
  }
`;
