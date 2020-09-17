import React from 'react';

import ProjectCard from './ProjectCard';
import { Projects } from '../styles';

const projects = [
    {
        name: '',
        description: '',
        stack: '',
        github: '',
        url: '',
        img: ''
    },
    {
        name: '',
        description: '',
        stack: '',
        github: '',
        url: '',
        img: ''
    },
    {
        name: '',
        description: '',
        stack: '',
        github: '',
        url: '',
        img: ''
    }
]

export default () => {
    return (
        <Projects id='projects'>
            <h1>Projects</h1>
            {projects.map(project => {
                return <ProjectCard/>
            })}
        </Projects>
    )
}