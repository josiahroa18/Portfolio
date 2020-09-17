import React from 'react';

import { Skills, Hexagon } from './styles';
import { IconStyleWrapper } from '../icons';

import styled from 'styled-components';

import { 
    Javascript, 
    Html5, 
    Css3, 
    Sass,
    ReactLogo,
    Redux,
    Nodejs,
    Git,
    Github
} from '@styled-icons/boxicons-logos/';

import { 
    Cplusplus, 
    Graphql, 
    Postgresql, 
    Java,
    Python,
    Jest,
    Apollographql,
    Spring,
    Postman,
} from '@styled-icons/simple-icons/';

const Skill = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 100px;
    margin: 0 20px;
    position: relative;
    p{
        position: absolute;
        bottom: 0;
        margin: 0;
    }
`;

const SkillWrapper = ({children, name}) => {
    return (
        <Skill>
            <Hexagon>
                <IconStyleWrapper>
                    {children}
                </IconStyleWrapper>
            </Hexagon>
            <p>{name}</p>
        </Skill>
    )
}

export default () => {
    return (
        <Skills id='skills'>
            <h1>Skills</h1>
            <h3>Languages</h3>
            <div className='skills-wrapper'>
                <SkillWrapper children={<Javascript/>} name='Javascript'/>
                <SkillWrapper children={<Python/>} name='Python'/>
                <SkillWrapper children={<Cplusplus/>} name='C++'/>
                <SkillWrapper children={<Html5/>} name='HTML'/>
                <SkillWrapper children={<Css3/>} name='CSS'/>
                <SkillWrapper children={<Sass/>} name='Sass'/>
                <SkillWrapper children={<Graphql/>} name='GraphQL'/>
                <SkillWrapper children={<Postgresql/>} name='PostgreSQL'/>
                <SkillWrapper children={<Java/>} name='Java'/>
            </div>
            <h3>Frameworks/Libraries</h3>
            <div className='skills-wrapper'>
                <SkillWrapper children={<ReactLogo/>} name='React.js'></SkillWrapper>
                <SkillWrapper children={<Redux/>} name='Redux'></SkillWrapper>
                <SkillWrapper children={<Jest/>} name='Jest'></SkillWrapper>
                <SkillWrapper children={<Nodejs/>} name='Node.js'></SkillWrapper>
                <SkillWrapper children={<Apollographql/>} name='Apollo'></SkillWrapper>
                <SkillWrapper children={<Spring/>} name='Spring'></SkillWrapper>
            </div>
            <h3>Tools</h3>
            <div className='skills-wrapper'>
                <SkillWrapper children={<Git/>} name='Git'></SkillWrapper>
                <SkillWrapper children={<Github/>} name='Github'></SkillWrapper>
                <SkillWrapper children={<Postman/>} name='Postman'></SkillWrapper>
            </div>
        </Skills>
    );
}