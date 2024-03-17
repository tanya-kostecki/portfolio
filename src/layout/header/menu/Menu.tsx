import React, { FC } from 'react'
import * as S from './Menu.styled'

export const Menu: FC<{ menuItems: {title: string, href: string}[] }> = (props) => {
  return (
    <S.Menu>
        <ul>
            {props.menuItems.map((item, index) => <li key={index}><a href={item.href}>{item.title}</a></li>)}
        </ul>
    </S.Menu>
  )
}