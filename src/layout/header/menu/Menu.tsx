import React, { FC } from 'react'
import * as S from './Menu.styled'
import { MenuItems } from '../menu-items/MenuItems'

export const Menu: FC = () => {
  return (
    <S.Menu>
        <MenuItems/>
    </S.Menu>
  )
}