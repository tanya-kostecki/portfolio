import React, { FC } from 'react'
import * as S from './Skill.styled'
import { Icon } from '../../../../components/icon/Icon'

type MobileSkillItemPropsType = {
    iconId: string;
    name?: string;
    fill?: string;
}
export const MobileSkill: FC<MobileSkillItemPropsType> = (props) => {
  return (
    <S.MobileStyledSkillItem>
        <Icon iconId={props.iconId} fill={props.fill} width='75px' height='75px'/>
        <S.MobileSkillName>{props.name}</S.MobileSkillName>
    </S.MobileStyledSkillItem>
  )
}