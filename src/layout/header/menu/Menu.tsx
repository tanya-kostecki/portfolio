import React, { FC } from 'react'
import styled from "styled-components";
import { MenuItems } from '../menu-items/MenuItems'
import { theme } from "../../../styles/Theme";

export const Menu: FC = () => {
  return (
    <StyledMenu>
      <MenuItems />
    </StyledMenu>
  );
}

const StyledMenu = styled.nav`
  @media ${theme.media.tablet} {
    display: none;
  }
`;