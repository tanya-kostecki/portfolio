import React, { FC } from 'react'
import styled, { css } from 'styled-components';
import { theme } from '../../../../styles/Theme';
import { projectTabs } from "../../../../constants/projects-tabs";

type ProjectsTabsPropsType = {
  changeFilterStatus: (value: string) => void;
  currentFilterStatus: string;
};
export const ProjectsTabs: FC<ProjectsTabsPropsType> = (props) => {
  return (
    <ProjectsTabsList>
      {projectTabs.map((projectTab, index) => (
        <li key={index}>
          <ProjectLink active={props.currentFilterStatus === projectTab.status}
            onClick={() => props.changeFilterStatus(projectTab.status)}
          >
            {projectTab.title}
          </ProjectLink>
        </li>
      ))}
    </ProjectsTabsList>
  );
};

const ProjectsTabsList = styled.ul`
  width: 100%;
  display: flex;
  gap: 20px;
  padding: 0 0 20px 10px;

  li {
    cursor: pointer;
    transition: 0.2s ease-out;
  }

  li:hover {
    transform: scale(1.2);
    color: yellow;
  }

  @media ${theme.media.mobile} {
    gap: 13px;
  }
`;

const ProjectLink = styled.a<{ active: boolean }>`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
  text-transform: uppercase;

  ${(props) =>
    props.active &&
    css<{ active: boolean }>`
      color: yellow;
      font-size: 18px;
    `}
`;
