import React, { FC } from 'react'
import styled from 'styled-components';
import { theme } from '../../../../styles/Theme';
import { projectTabs } from '../../../../constants/projects-tabs';
import { StyledButton } from '../../../../components/Button';

type ProjectsTabsPropsType = {
    changeFilterStatus: (value: string) => void
}
export const ProjectsTabs: FC<ProjectsTabsPropsType> = (props) => {
  return (
    <ProjectsTabsList>
        {projectTabs.map((projectTab, index) => <li key={index}><StyledButton onClick={() => props.changeFilterStatus(projectTab.status)}>{projectTab.title}</StyledButton></li>)}
    </ProjectsTabsList>
  )
}

const ProjectsTabsList = styled.ul`
    width: 100%;
    display: flex;
    gap: 20px;
    padding: 0 0 20px 10px;

    /* font: font-style font-variant 400 14px/21px, Montserrat, sans-serif; */
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    text-align: left;
    text-transform: uppercase;

    li {
        cursor: pointer;
        transition: .2s ease-out
    }

    li:hover {
        transform: scale(1.2);
        color: yellow;
    }

    @media ${theme.media.mobile} {
        gap: 13px;
    }
`
