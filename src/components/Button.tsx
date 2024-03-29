import styled from 'styled-components'
import { theme } from '../styles/Theme'

export const StyledButton = styled.button`
  border-radius: 6px;
  background: linear-gradient(90.00deg, rgb(0, 245, 160),rgb(0, 217, 245) 100%);
  padding: 12px 20px 13px 20px;
  border: none;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    transition: ${theme.animations.transition};
  }
`