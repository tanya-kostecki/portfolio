import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../../../components/icon/Icon'

type MobileSkillItemPropsType = {
    iconId: string;
    name?: string;
    fill?: string;
}
export const MobileSkill = (props: MobileSkillItemPropsType) => {
  return (
    <MobileStyledSkillItem>
        <Icon iconId={props.iconId} fill={props.fill} width='75px' height='75px'/>
        <MobileSkillName>{props.name}</MobileSkillName>
    </MobileStyledSkillItem>
  )
}

const MobileStyledSkillItem = styled.div`
   display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    gap: 10px;
`

const MobileSkillName = styled.span`
  text-align: center;
`