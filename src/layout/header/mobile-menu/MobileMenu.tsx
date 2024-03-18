import React, { FC, useState } from 'react'
import * as S from './MobileMenu.styled'
import { MenuItems } from '../menu-items/MenuItems'

export const MobileMenu: FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  
  const onBurgerBtnClick = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <S.MobileMenu>
        <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
            <span></span>
        </S.BurgerButton>
        <S.MobileMenuPopup isOpen={menuIsOpen} onClick={() => setMenuIsOpen(false)}>
           <MenuItems/>
        </S.MobileMenuPopup>
    </S.MobileMenu>
  )
}