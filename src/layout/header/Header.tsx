import React from 'react'
import styled from 'styled-components'
import { Logo } from '../../components/logo/Logo'
import { Menu } from '../../components/menu/Menu'
import { FlexedWrapper } from '../../components/FlexWrapper'
import { Socials } from '../../components/socials/Socials'
import { items } from '../../constants/menu-items'
import { Container } from '../../components/Container'
import { theme } from '../../styles/Theme'
import { MobileMenu } from './mobile-menu/MobileMenu'


export const Header = () => {
  return (
    <StyledHeader>
        <Container>
          <FlexedWrapper justify='space-between' align='center'>
            <Logo/>
            <LinksWrapper gap='20px' justify='space-between' align='center'>
              <Menu menuItems={items}/>
              <Socials/> 
            </LinksWrapper>
            <MobileMenu menuItems={items}/>
            {/* <Menu menuItems={items}/>

            <MobileMenu menuItems={items}/>

            <Socials/>  */}
          </FlexedWrapper> 
        </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  z-index: 99;
  background-color: ${theme.colors.darkBg};
  padding: 10px 0;
`
const LinksWrapper = styled(FlexedWrapper)`
   @media ${theme.media.tablet} {
      display: none;
    }
`