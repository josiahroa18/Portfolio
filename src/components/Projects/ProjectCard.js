import React from 'react';

import { 
    ProjectCard,
    WebIcon,
    GithubIcon,
    LinkWrapper
} from '../styles';

export default () => {
    return (
        <ProjectCard>
            <div className='info'>
                <h2>Project Name</h2>
                <h4>Tech stack goes here</h4>
                <p>Project description goes here</p>
            </div>
            <div className='card'>
                <img/>
                <div className='card-footer'>
                    {/* TODO: Conditionally render */}
                    <LinkWrapper>
                        <WebIcon/>
                    </LinkWrapper>
                    <LinkWrapper>
                        <GithubIcon/>
                    </LinkWrapper>
                </div>
            </div>
        </ProjectCard>
    );
}