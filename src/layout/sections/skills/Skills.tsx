import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { Skill } from './skill/Skill'
import { skills } from '../../../constants/skills'
import { Container } from '../../../components/Container'
import { MobileSkill } from './skill/MobileSkill'

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>My Tech Stack</SectionTitle>
        <SkillsContainer >
          {skills.map((skill, index) => <Skill key={index} iconId={skill.iconId} fill={skill.fill} name={skill.name}/>)}
        </SkillsContainer>

        <MobileSkillsContainer>
          {skills.map((skill, index) => <MobileSkill key={index} iconId={skill.iconId} fill={skill.fill} name={skill.name}/>)}
        </MobileSkillsContainer>
      </Container>
        
    </StyledSkills>
  )
}

const StyledSkills = styled.section`
`

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(13rem, auto));

  @media screen and (max-width: 655px) {
    display: none;
  }
`

const MobileSkillsContainer = styled.div`
  display: none;

  @media screen and (max-width: 655px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(7rem, auto));
    align-items: center;
    justify-items: center;
  }
`
