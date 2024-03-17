import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../../../components/icon/Icon'
import { font } from '../../../../styles/Common'
import { theme } from '../../../../styles/Theme'

type SkillItemPropsType = {
    iconId: string;
    name?: string;
    fill?: string;
}
export const Skill = (props: SkillItemPropsType) => {
  return (
    <StyledSkillItem>
        <Icon iconId={props.iconId} fill={props.fill}/>
        <SkillName>{props.name}</SkillName>
    </StyledSkillItem>
  )
}

const StyledSkillItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px;
    gap: 10px;
`

const SkillName = styled.span`
  ${font({ family: 'Montserrat, sans-serif', weight: 400, color: theme.colors.darkFont, Fmax: 16, Fmin: 14 })};
  text-align: center;
  text-transform: uppercase;
`