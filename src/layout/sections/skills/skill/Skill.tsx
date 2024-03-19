import React, { FC } from 'react'
import * as S from './Skill.styled'
import { Icon } from '../../../../components/icon/Icon'

type SkillItemPropsType = {
  iconId: string;
  fill?: string;
  width?: string;
  height?: string;
};
export const Skill: FC<SkillItemPropsType> = (props) => {
  return (
    <S.SkillItem>
      <Icon iconId={props.iconId} fill={props.fill} width={props.width} height={props.height}/>
    </S.SkillItem>
  );
};