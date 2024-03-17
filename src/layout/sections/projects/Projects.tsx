import React, { FC } from 'react'
import * as S from './Projects.styled'
import { SectionTitle } from '../../../components/SectionTitle'
import { FlexedWrapper } from '../../../components/FlexWrapper'
import { Project } from './project/Project'
import { projects } from '../../../constants/projects'
import { Container } from '../../../components/Container'
import { useGetWindowWidth } from '../../../hooks/useWindowWidth'

const mobileProjects = projects.slice(4)
export const Projects: FC = () => {
  const screen = useGetWindowWidth()

  return (
    <S.Projects>
      <Container>
        <SectionTitle>Projects</SectionTitle>
        {screen.width > 768 ? (
          <FlexedWrapper wrap='wrap' justify='center'>
            {projects.map((project, index) => <Project key={index} title={project.title} description={project.description} image={project.image}/>)}
          </FlexedWrapper>
        ) : (
          <S.TabletWrapper wrap='wrap' justify='center'>
              {mobileProjects.map((project, index) => <Project key={index} title={project.title} description={project.description} image={project.image}/>)}
          </S.TabletWrapper>
        )}        
          <S.ProjectsButton>SEE ALL PROJECTS</S.ProjectsButton>
      </Container>
    </S.Projects>
  )
}