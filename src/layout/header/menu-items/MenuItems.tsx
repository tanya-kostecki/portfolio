import React, {FC, useEffect, useState} from "react";
import { items } from "../../../constants/menu-items";
import {Link, scroller} from "react-scroll";
import styled from "styled-components";
import { font } from "../../../styles/Common";
import { theme } from "../../../styles/Theme";

export const MenuItems: FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    scroller.scrollTo("home", {
      duration: 0,
      delay: 0,
      smooth: false,
      offset: 0,
      // offset: -50
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
              setActiveSection(entry.target.id);
            }
          });
        },
        {
          root: null,
          threshold: 0.5,
        }
    );
    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <StyledMenuItems>
      {items.map((item, index) => (
        <li key={index}>
          <NavLink
            to={item.href}
            smooth={true}
            activeClass="active"
            spy={true}
            // offset={-50}
            $isActive={item.href === activeSection}
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
const NavLink = styled(Link)<{ $isActive: boolean }>`
  cursor: pointer;
  ${font({ family: "Montserrat", weight: 500, Fmin: 16, Fmax: 16 })};
  display: inline-block;
  text-decoration: none;
  ${({ $isActive }) =>
    $isActive &&
    `
    transform: scale(1.4);
    background-image: ${theme.colors.darkAccent};
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  `};

  &:hover {
    transform: scale(1.4);
    background-image: ${theme.colors.darkAccent};
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
`;
// const NavLink = styled(Link)`
//   cursor: pointer;
//   ${font({ family: "Montserrat", weight: 500, Fmin: 16, Fmax: 16 })};
//   display: inline-block;
//
//   &.active, &:hover {
//     transform: scale(1.4);
//     background-image: ${theme.colors.darkAccent};
//     background-clip: text;
//     -webkit-background-clip: text;
//     color: transparent;
//   }
// `;
