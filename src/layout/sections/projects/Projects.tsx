import React, { FC, useState } from "react";
import * as S from "./Projects.styled";
import { SectionTitle } from "../../../components/SectionTitle";
import { projects } from "../../../constants/projects";
import { Container } from "../../../components/Container";
import { ProjectsTabs } from "./projects-tabs/ProjectsTabs";
import { AnimateBlock } from "./AnimateBlock";

export const Projects: FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = useState<'all' | 'team' | 'personal'>("all");
  let filteredProjects = projects;

  if (currentFilterStatus === "personal") {
    filteredProjects = projects.filter((project) => project.type === "personal");
  }

  if (currentFilterStatus === "team") {
    filteredProjects = projects.filter((project) => project.type === "team");
  }


  const changeFilterStatus = (value: 'all' | 'team' | 'personal') => {
    setCurrentFilterStatus(value);
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
          <AnimateBlock projects={filteredProjects}/>
        </S.ProjectsGrid>
      </Container>
    </S.Projects>
  );
};
