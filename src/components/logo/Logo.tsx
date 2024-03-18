import React from 'react'
import { Icon } from '../icon/Icon'
import { theme } from '../../styles/Theme'
import { animateScroll as scroll } from "react-scroll";
import styled from "styled-components";

export const Logo = () => {
  return (
    <LogoLink onClick={() => scroll.scrollToTop()}>
      <Icon
        iconId="logo"
        width="50px"
        height="50px"
        viewBox="0 0 130 90"
        fill={theme.colors.darkFont}
      />
    </LogoLink>
  );
}

const LogoLink = styled.a`
  cursor: pointer;
`;
