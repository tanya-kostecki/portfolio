import React, { FC } from 'react'
import * as S from './Footer.styled'
import { Logo } from '../../components/logo/Logo'
import { Container } from '../../components/Container'
import { Socials } from '../../components/socials/Socials'


export const Footer: FC = () => {
  return (
    <S.Footer>
      <Container>
        <S.FooterWrapper justify='space-between'>
          <Logo/>
          <S.ContactDetails>
            <S.ContactText>Call me:</S.ContactText>
            <S.ContactText as='a' href='tel:+123-456-789'>+123-456-789</S.ContactText>
          </S.ContactDetails>
          <S.ContactDetails>
            <S.ContactText>Email:</S.ContactText>
            <S.ContactText as='a' href='mailto:example@mail.com'>example@mail.com</S.ContactText>
          </S.ContactDetails>
          <Socials/>
        </S.FooterWrapper>
      </Container>      
    </S.Footer>
  )
}