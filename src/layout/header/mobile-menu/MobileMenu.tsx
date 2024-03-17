import React, { FC } from 'react'
import * as S from './MobileMenu.styled'

export const MobileMenu: FC<{ menuItems: {title: string, href: string}[] }> = (props) => {
  return (
    <S.MobileMenu>
        <S.BurgerButton isOpen={false}>
            <span></span>
        </S.BurgerButton>
        <S.MobileMenuPopup isOpen={false}>
            <ul>
                {props.menuItems.map((item, index) => <li key={index}><a href={item.href}>{item.title}</a></li>)}
            </ul>
        </S.MobileMenuPopup>
    </S.MobileMenu>
  )
}