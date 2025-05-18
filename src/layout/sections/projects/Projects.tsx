import React, { FC, useState } from "react";
import * as S from "./Projects.styled";
import { SectionTitle } from "../../../components/SectionTitle";
import { projects } from "../../../constants/projects";
import { Container } from "../../../components/Container";
import { useGetWindowWidth } from "../../../hooks/useWindowWidth";
import { ProjectsTabs } from "./projects-tabs/ProjectsTabs";
import { AnimateBlock } from "./AnimateBlock";

export const Projects: FC = () => {
  const screen = useGetWindowWidth();

  const [currentFilterStatus, setCurrentFilterStatus] = useState<'all' | 'team' | 'personal'>("all");
  let filteredProjects = projects;
  const mobileProjects = projects.slice(4);

  if (currentFilterStatus === "personal") {
    filteredProjects = projects.filter((project) => project.type === "personal");
  }

  if (currentFilterStatus === "team") {
    filteredProjects = projects.filter((project) => project.type === "team");
  }


  const changeFilterStatus = (value: 'all' | 'team' | 'personal') => {
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
        <S.ProjectsGrid>
          {screen.width > 768 ? (
              <AnimateBlock projects={filteredProjects}/>
          ) : currentFilterStatus === "all" && !showMore ? (
              <>
                <AnimateBlock projects={mobileProjects}/>
                <S.ProjectsButton onClick={toggleMoreOnClick}>
                  SHOW MORE
                </S.ProjectsButton>
              </>
          ) : (
              <>
                <AnimateBlock projects={filteredProjects}/>
                {currentFilterStatus === "all" ? (
                    <S.ProjectsButton onClick={toggleMoreOnClick}>
                      SHOW LESS
                    </S.ProjectsButton>
                ) : null}
              </>
          )}
        </S.ProjectsGrid>
      </Container>
    </S.Projects>
  );
};
