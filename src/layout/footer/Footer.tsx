import React from 'react'
import styled from 'styled-components'
import { Logo } from '../../components/logo/Logo'
import { FlexedWrapper } from '../../components/FlexWrapper'
import { Container } from '../../components/Container'
import { Socials } from '../../components/socials/Socials'
import { theme } from '../../styles/Theme'
import { font } from '../../styles/Common'

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterWrapper justify='space-between'>
          <Logo/>
          <ContactDetails>
            <ContactText>Call me:</ContactText>
            <ContactText as='a' href='tel:+123-456-789'>+123-456-789</ContactText>
          </ContactDetails>
          <ContactDetails>
            <ContactText>Email:</ContactText>
            <ContactText as='a' href='mailto:example@mail.com'>example@mail.com</ContactText>
          </ContactDetails>
          <Socials/>
        </FooterWrapper>
      </Container>      
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  padding-bottom: 50px;

  @media ${theme.media.tablet} {
    display: none;
  }
`
const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
`
export const ContactText = styled.span`
  display: block;
  ${font({ family: 'Montserrat, sans-serif', weight: 600, color: theme.colors.darkFont, Fmax: 22, Fmin: 12 })};
  text-align: left;
`

export const FooterWrapper = styled(FlexedWrapper)`
  padding-top: 20px;
  position: relative;

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