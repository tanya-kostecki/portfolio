import React, { FC } from 'react'
import * as S from './Skill.styled'
import { Icon } from '../../../../components/icon/Icon'

type SkillItemPropsType = {
    iconId: string;
    name?: string;
    fill?: string;
}
export const Skill: FC<SkillItemPropsType> = (props) => {
  return (
    <S.SkillItem>
        <Icon iconId={props.iconId} fill={props.fill}/>
        <S.SkillName>{props.name}</S.SkillName>
    </S.SkillItem>
  )
}