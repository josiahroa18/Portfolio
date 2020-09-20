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
     *  @number @required id 
     *  @string @required name 
     *  @string @required description 
     *  @string @required stack
     *  @string github
     *  @string url
     *  @string img
     *  @array @string @required tasks
     *  @string @required start_date
     *  @string @required end_date
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
                {project.img.length > 0 && (
                    <img src={project.img} alt={project.name}/>
                )}
                {(project.url.length > 0 || project.github.length > 0) && (
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
                )}
            </div>
        </ProjectCard>
    );
}