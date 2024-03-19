import React, { FC } from 'react'
import * as S from './Skills.styled'
import { SectionTitle } from '../../../components/SectionTitle'
import { Skill } from './skill/Skill'
import { skills } from '../../../constants/skills'
import { Container } from '../../../components/Container'
import { MobileSkill } from './skill/MobileSkill'
import { Fade } from "react-awesome-reveal";

export const Skills: FC = () => {
  return (
    <S.Skills id="tech">
      <Container>
        <SectionTitle>My Tech Stack</SectionTitle>

        <S.SkillsContainer>
          <Fade cascade damping={0.2}>
            {skills.map((skill, index) => (
              <Skill
                key={index}
                iconId={skill.iconId}
                fill={skill.fill}
                name={skill.name}
              />
            ))}
          </Fade>
        </S.SkillsContainer>

        <S.MobileSkillsContainer>
          <Fade cascade damping={0.2}>
            {skills.map((skill, index) => (
              <MobileSkill
                key={index}
                iconId={skill.iconId}
                fill={skill.fill}
                name={skill.name}
              />
            ))}
          </Fade>
        </S.MobileSkillsContainer>
      </Container>
    </S.Skills>
  );
};