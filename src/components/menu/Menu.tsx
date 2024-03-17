import React from 'react'
import styled from 'styled-components'
import { theme } from '../../styles/Theme'

export const Menu = (props: { menuItems: {title: string, href: string}[] }) => {
  return (
    <StyledMenu>
        <ul>
            {props.menuItems.map((item, index) => <li key={index}><a href={item.href}>{item.title}</a></li>)}
        </ul>
    </StyledMenu>
  )
}

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 40px;
    }

    a {
        font-weight: 500;
        font-size: 16px;
        display: inline-block;
    }

    @media ${theme.media.tablet} {
        display: none;
    }
`