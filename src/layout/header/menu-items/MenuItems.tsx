import React, { FC } from "react";
import { items } from "../../../constants/menu-items";
import { Link } from "react-scroll";
import styled from "styled-components";
import { font } from "../../../styles/Common";

export const MenuItems: FC = () => {
  return (
    <StyledMenuItems>
      {items.map((item, index) => (
        <li key={index}>
          <NavLink
            to={item.href}
            smooth={true}
            activeClass="active"
            spy={true}
            offset={-100}
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </StyledMenuItems>
  );
};

const StyledMenuItems = styled.ul`
  display: flex;
  gap: 40px;
`;
const NavLink = styled(Link)`
  cursor: pointer;
  ${font({ family: "Montserrat", weight: 500, Fmin: 16, Fmax: 16 })};
  display: inline-block;

  &.active {
    transform: scale(1.4);
    color: yellow;
  }

  &:hover {
    transform: scale(1.4);
    color: yellow;
  }
`;
