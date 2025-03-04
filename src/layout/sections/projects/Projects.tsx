import React, { FC, useState } from "react";
import * as S from "./Projects.styled";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexedWrapper } from "../../../components/FlexWrapper";
import { projects } from "../../../constants/projects";
import { Container } from "../../../components/Container";
import { useGetWindowWidth } from "../../../hooks/useWindowWidth";
import { ProjectsTabs } from "./projects-tabs/ProjectsTabs";
import { AnimateBlock } from "./AnimateBlock";

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
        <FlexedWrapper wrap="wrap" justify="center">
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
        </FlexedWrapper>
      </Container>
    </S.Projects>
  );
};
