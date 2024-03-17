import React, { FC } from 'react'
import styled from 'styled-components'
import { Container } from '../../../components/Container'
import { FlexedWrapper } from '../../../components/FlexWrapper'
import { FooterWrapper } from '../Footer.styled'
import { Socials } from '../../../components/socials/Socials'
import { ContactText } from '../Footer.styled'

export const TabletMobileFooter: FC = () => {
  return (
    <StyledFooter>
        <Container>
            <FooterWrapper direction='column' justify='center' align='center' gap='20px'>
                <Socials/>
                <FlexedWrapper justify='center' gap='40px'>
                    <ContactText as='a' href='tel:+123-456-789'>+123-456-789</ContactText>
                    <ContactText as='a' href='mailto:example@mail.com'>example@mail.com</ContactText>
                </FlexedWrapper>
            </FooterWrapper>
        </Container>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
    padding-bottom: 20px;
`