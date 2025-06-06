import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { font } from "../../styles/Common";
import { FlexedWrapper } from "../../components/FlexWrapper";

export const Footer = styled.footer`
  padding-bottom: 50px;
  background-color: ${theme.colors.darkBg};
  position: relative;

  @media ${theme.media.tablet} {
    display: none;
  }
`

export const ContactText = styled.span`
  display: block;
  ${font({ family: 'Montserrat, sans-serif', weight: 600, color: theme.colors.darkFont, Fmax: 22, Fmin: 12 })};
  text-align: left;
`

export const FooterWrapper = styled(FlexedWrapper)`
  padding-top: 20px;
  position: relative;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    display: inline-block;
    top: -30%;
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.darkFont};
  }

  @media ${theme.media.tablet} {
    &::before {
      top: 0;
    }
  }
`