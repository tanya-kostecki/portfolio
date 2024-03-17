import React, { ReactNode } from 'react'
import styled from 'styled-components'

type ButtonPropsType = {
    text?: string;
    children?: ReactNode
    type?: string;
}
export const Button = (props: ButtonPropsType) => {
  return (
    <StyledButton>{props.text}{props.children}</StyledButton>
  )
}

export const StyledButton = styled.button`
  border-radius: 6px;
  background: linear-gradient(90.00deg, rgb(0, 245, 160),rgb(0, 217, 245) 100%);
  padding: 12px 20px 13px 20px;
  border: none;
  cursor: pointer;
`