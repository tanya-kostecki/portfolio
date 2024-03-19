import React, { FC } from 'react'
import * as S from './Skills.styled'
import { SectionTitle } from '../../../components/SectionTitle'
import { Skill } from './skill/Skill'
import { skills } from '../../../constants/skills'
import { Container } from '../../../components/Container'
import { Fade } from "react-awesome-reveal";
import { useGetWindowWidth } from '../../../hooks/useWindowWidth'

export const Skills: FC = () => {
  const screen = useGetWindowWidth()
  const maxWidth = 655
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
                width={screen.width > maxWidth ? '120px' : '75px'}
                height={screen.width > maxWidth ? '120px' : '75px'}
              />
            ))}
          </Fade>
        </S.SkillsContainer>
      </Container>
    </S.Skills>
  );
};