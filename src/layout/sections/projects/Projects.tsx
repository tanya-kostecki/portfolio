import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { FlexedWrapper } from '../../../components/FlexWrapper'
import { Project } from './project/Project'
import { projects } from '../../../constants/projects'
import { Container } from '../../../components/Container'
import { StyledButton } from '../../../components/button/Button'
import { theme } from '../../../styles/Theme'
import { useGetWindowWidth } from '../../../hooks/useWindowWidth'

const mobileProjects = projects.slice(4)
export const Projects = () => {
  const screen = useGetWindowWidth()

  return (
    <StyledProjects>
      <Container>
        <SectionTitle>Projects</SectionTitle>
        {screen.width > 768 ? (
          <FlexedWrapper wrap='wrap' justify='center'>
            {projects.map((project, index) => <Project key={index} title={project.title} description={project.description} image={project.image}/>)}
          </FlexedWrapper>
        ) : (
          <TabletWrapper wrap='wrap' justify='center'>
              {mobileProjects.map((project, index) => <Project key={index} title={project.title} description={project.description} image={project.image}/>)}
          </TabletWrapper>
        )}        
          <ProjectsButton>SEE ALL PROJECTS</ProjectsButton>
      </Container>
    </StyledProjects>
  )
}

const StyledProjects = styled.section`
`

const ProjectsButton = styled(StyledButton)`
  display: none;

  @media ${theme.media.tablet} {
    display: block;
    margin: 0 auto;
    padding: 18px 100px 18px 100px;
  }
`

const TabletWrapper = styled(FlexedWrapper)`
  margin-bottom: 36px;
`