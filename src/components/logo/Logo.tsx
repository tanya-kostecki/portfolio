import React from 'react'
import { Icon } from '../icon/Icon'
import { theme } from '../../styles/Theme'

export const Logo = () => {
  return (
    <a href='#1'>
        <Icon iconId='logo' width='50px' height='50px' viewBox='0 0 130 90' fill={theme.colors.darkFont}/>
    </a>
  )
}
