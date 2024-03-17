import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { FlexedWrapper } from "../../components/FlexWrapper";

export const Header = styled.header`
  width: 100%;
  position: fixed;
  z-index: 99;
  background-color: ${theme.colors.darkBg};
  padding: 10px 0;
`
export const LinksWrapper = styled(FlexedWrapper)`
   @media ${theme.media.tablet} {
      display: none;
    }
`