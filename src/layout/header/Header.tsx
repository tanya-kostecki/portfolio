import React, { FC } from 'react'
import * as S from './Header.styled'
import { Logo } from '../../components/logo/Logo'
import { Menu } from "./menu/Menu";
import { FlexedWrapper } from '../../components/FlexWrapper'
import { Socials } from '../../components/socials/Socials'
import { Container } from '../../components/Container'
import { MobileMenu } from './mobile-menu/MobileMenu'


export const Header: FC = () => {
  return (
    <S.Header>
      <Container>
        <FlexedWrapper justify="space-between" align="center">
          <Logo />
          <S.LinksWrapper gap="20px" justify="space-between" align="center">
            <Menu />
            <Socials />
          </S.LinksWrapper>
          <MobileMenu/>
        </FlexedWrapper>
      </Container>
    </S.Header>
  );
}