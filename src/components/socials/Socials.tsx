import React, { FC } from 'react'
import styled from 'styled-components'
import { Icon } from '../icon/Icon'
import { theme } from '../../styles/Theme'

export const Socials: FC = () => {
  return (
    <StyledSocials>
      <a href="https://github.com/tanya-kostecki"><Icon iconId='github' width='50px' height='50px' viewBox='0 0 180 90' fill={theme.colors.darkFont}/></a>
      <a href="https://www.instagram.com/tanya.kostecki"><Icon iconId='instagram' width='50px' height='50px' viewBox='0 0 180 90' fill={theme.colors.darkFont}/></a>
      <a href="https://t.me/tanyakostecki"><Icon iconId='telegram' width='50px' height='50px' viewBox='0 0 180 90' fill={theme.colors.darkFont}/></a>
    </StyledSocials>
  )
}

const StyledSocials = styled.div`
  display: flex;
  gap: 20px;
`

