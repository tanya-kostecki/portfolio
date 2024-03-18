import React, { FC, useState } from 'react'
import * as S from './MobileMenu.styled'

export const MobileMenu: FC<{ menuItems: {title: string, href: string}[] }> = (props) => {
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
            <ul>
                {props.menuItems.map((item, index) => <li key={index}><a href={item.href}>{item.title}</a></li>)}
            </ul>
        </S.MobileMenuPopup>
    </S.MobileMenu>
  )
}