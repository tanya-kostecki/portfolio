import React, { FC } from "react";
import { items } from "../../../constants/menu-items";
import { Link } from "react-scroll";
import styled from "styled-components";

export const MenuItems: FC = () => {
  return (
    <ul>
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
    </ul>
  );
};

const NavLink = styled(Link)`
  cursor: pointer;

  &.active {
    transform: scale(1.4);
    color: yellow;
  }
`;
