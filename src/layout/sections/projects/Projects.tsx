import React, { FC, useState } from "react";
import * as S from "./Projects.styled";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexedWrapper } from "../../../components/FlexWrapper";
import { Project } from "./project/Project";
import { projects } from "../../../constants/projects";
import { Container } from "../../../components/Container";
import { useGetWindowWidth } from "../../../hooks/useWindowWidth";
import { ProjectsTabs } from "./projects-tabs/ProjectsTabs";

export const Projects: FC = () => {
  const screen = useGetWindowWidth();

  const [currentFilterStatus, setCurrentFilterStatus] = useState("all");
  let filteredProjects = projects;
  const mobileProjects = projects.slice(4);

  if (currentFilterStatus === "landing") {
    filteredProjects = projects.filter((project) => project.type === "landing");
  }

  if (currentFilterStatus === "react") {
    filteredProjects = projects.filter((project) => project.type === "react");
  }

  if (currentFilterStatus === "spa") {
    filteredProjects = projects.filter((project) => project.type === "spa");
  }

  const changeFilterStatus = (value: string) => {
    setCurrentFilterStatus(value);
  };

  const [showMore, setShowMore] = useState<boolean>(false);

  const toggleMoreOnClick = () => {
    setShowMore(!showMore);
  };
  return (
    <S.Projects id="projects">
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <ProjectsTabs
          changeFilterStatus={changeFilterStatus}
          currentFilterStatus={currentFilterStatus}
        />
        {screen.width > 768 ? (
          <FlexedWrapper wrap="wrap" justify="center">
            {filteredProjects.map((project, index) => (
              <Project
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                type={project.type}
                href={project.href}
              />
            ))}
          </FlexedWrapper>
        ) : currentFilterStatus === "all" && showMore === false ? (
          <>
            <S.TabletWrapper wrap="wrap" justify="center">
              {mobileProjects.map((project, index) => (
                <Project
                  key={index}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                />
              ))}
            </S.TabletWrapper>
            <S.ProjectsButton onClick={toggleMoreOnClick}>
              SEE ALL PROJECTS
            </S.ProjectsButton>
          </>
        ) : (
          <>
            <S.TabletWrapper wrap="wrap" justify="center">
              {filteredProjects.map((project, index) => (
                <Project
                  key={index}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                />
              ))}
            </S.TabletWrapper>
            {currentFilterStatus === "all" ? (
              <S.ProjectsButton onClick={toggleMoreOnClick}>
                SEE LESS
              </S.ProjectsButton>
            ) : null}
          </>
        )}
      </Container>
    </S.Projects>
  );
};
