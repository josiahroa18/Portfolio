import React from 'react';

import { 
    ProjectCard,
    WebIcon,
    GithubIcon,
    LinkWrapper
} from '../styles';

export default ({ project }) => {
    /**
     * Expected project structure:
     * {
     *  @number id 
     *  @string name 
     *  @string description 
     *  @string stack
     *  @string github
     *  @string url
     *  @path img
     *  @array_string tasks
     *  @string start_date
     *  @string end_date
     * }
     */

    return (
        <ProjectCard>
            <div className='info'>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <h4>{project.stack}</h4>
                <div className='task-container'>
                    <ul>
                        {project.tasks.map(task => {
                            return <li key={task}>{task}</li>
                        })}
                    </ul>
                </div>
            </div>
            <div className='card'>
                <img src={project.path} alt={project.name}/>
                <div className='card-footer'>
                    {project.url.length > 0 && (
                        <LinkWrapper href={project.url} target='_blank'>
                            <WebIcon/>
                        </LinkWrapper>
                    )}
                    {project.github.length > 0 && (
                        <LinkWrapper href={project.github} target='_blank'>
                            <GithubIcon/>
                        </LinkWrapper>
                    )}  
                </div>
            </div>
        </ProjectCard>
    );
}