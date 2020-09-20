import React from 'react';

import ProjectCard from './ProjectCard';
import { Projects } from '../styles';

// TODO: Store in database
const projects = [
    {
        id: 1,
        name: 'SEAK Clinical',
        description: 'A marketplace connecting clinical trial sponsors to the right service providers for their needs.',
        stack: 'React.js | GraphQL | CSS3 | Agile Project Mangement',
        github: '',
        url: 'https://bio-bid-portal2.herokuapp.com/',
        img: '/assets/project_images/project_image_placeholder.png',
        tasks: [
            'Collaborate on a 3 person remote team consisting of a project manager and the CEO to expand and develop platform features.',
            'Analyze existing codebase in order to contribute new features.',
            'Contributing with rapid application development and management of technological issues for assigned projects.'
        ],
        start_date: '06/2020',
        end_date: 'Current',
        
    },
    {
        id: 2,
        name: 'Roadetrix Records',
        description: 'A website for an up and coming record label for an audience of 140,000+ monthly listeners on Spotify.',
        stack: 'React.js | Node.js | Express.js | PostgreSQL',
        github: 'https://github.com/Roadetrix-Records',
        url: 'https://roadetrix.com/',
        img: '/assets/project_images/project_image_placeholder.png',
        tasks: [
            'Develop a full-stack web application that will be used by a large user base.',
            'Utilize the spotify API to collect and update data from Roadeetrix and their users for an optimal experience.'
        ],
        start_date: '02/2020',
        end_date: 'Current',
    },
    {
        id: 3,
        name: "Conway's Game of Life",
        description: "An application that allows you to play Conway’s game of life on the web.",
        stack: 'React.js',
        github: 'https://github.com/josiahroa18/Game-Of-Life',
        url: 'https://master.d3qwxtqj51z44s.amplifyapp.com/',
        img: '/assets/project_images/project_image_placeholder.png',
        tasks: [
            'Utilized advance React hooks to create an optimal algorithm for conway’s game of life.'
        ],
        start_date: '07/2020',
        end_date: '08/2020'
    },
    {
        id: 4,
        name: "Hashing Implementation & Analysis",
        description: "This project takes a handful of collision implementations for hash tables and evaluates their insertion, look up, and deletion times for different load factors.",
        stack: 'C++ | Python',
        github: 'https://github.com/josiahroa18/Hashing-Implementation-And-Analysis',
        url: '',
        img: '',
        tasks: [
            'Implemented hashtable collision method using chaining.',
            'Implemented hashtable collision method using binary search tree.',
            'Implemented hashtable collision method using linear probing.',
            'Implemented hashtable collision method using cuckoo hashing.',
            'Visualized collision method runtimes using Python matplotlib.'
        ],
        start_date: '10/2019',
        end_date: '12/2019'
    }
]

export default () => {
    return (
        <Projects id='projects'>
            <h1>Projects</h1>
            {projects.map(project => {
                return <ProjectCard key={project.id} project={project}/>
            })}
        </Projects>
    )
}

