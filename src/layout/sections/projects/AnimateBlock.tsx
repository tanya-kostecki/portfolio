import React, { FC } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { Project } from './project/Project';

type ProjectType = {
    id?: number;
    title: string;
    description: string;
    image: string;
    type?: string;
    href?: string
    deploy?: string
}
type ProjectsPropsType = {
    projects: ProjectType[];
}
export const AnimateBlock: FC<ProjectsPropsType> = (props) => {
  return (
    <AnimatePresence>
        {props.projects.map((project) => (
        <motion.div style={{ width: '330px',
            flexGrow: 1, maxWidth: '540px'}}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={project.id}
        >
            <Project
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            type={project.type}
            href={project.href}
            deploy={project.deploy}
            />
        </motion.div>
        ))}
    </AnimatePresence>
  )
}
