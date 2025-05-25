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
          <S.ContactText as='a' href='mailto:example@mail.com'>tatianakostecki@gmail.com</S.ContactText>
          <Socials/>
        </S.FooterWrapper>
      </Container>      
    </S.Footer>
  )
}