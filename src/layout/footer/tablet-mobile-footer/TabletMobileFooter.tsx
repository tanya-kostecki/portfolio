import React, { FC } from 'react'
import styled from 'styled-components'
import { Container } from '../../../components/Container'
import { FooterWrapper } from '../Footer.styled'
import { Socials } from '../../../components/socials/Socials'
import { ContactText } from '../Footer.styled'
import { theme } from '../../../styles/Theme'

export const TabletMobileFooter: FC = () => {
  return (
    <StyledFooter>
        <Container>
            <FooterWrapper direction='column' justify='center' align='center' gap='20px'>
                <Socials/>
                <ContactText as='a' href='mailto:example@mail.com'>tatianakostecki@gmail.com</ContactText>
            </FooterWrapper>
        </Container>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
    padding-bottom: 20px;
    position: relative;
    background-color: ${theme.colors.darkBg};
`