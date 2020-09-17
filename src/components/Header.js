import React from 'react';
import Particles from 'react-particles-js';
import { Header } from './styles';
import theme from '../theme';

/**
 * The Header component renders a header with a clean
 * particle-js background behind some title text. h
 * Highlighting who I am, and my career title.
 * 
 * Includes a nav bar to navigate to different sections on the page.
 */
export default () => {
    return (
        <Header>
            <div className='header-content-wrapper'>
                <h1>Hello, I'm <span>Josiah Roa</span></h1>
                <h2>I'm a Software Engineer</h2>
            </div>
            <Particles
                height= '250px'
                style={{
                    backgroundColor: `${theme.colors.darkGrey}`
                }}
                params={{
                    "particles": {
                        "number": {
                            "value": 60,
                            "density": {
                                "enable": true,
                                "value_area": 1500
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "opacity": 0.02
                        },
                        "move": {
                            "direction": "right",
                            "speed": 0.05
                        },
                        "size": {
                            "value": 1.5
                        },
                        "opacity": {
                            "anim": {
                                "enable": true,
                                "speed": 1,
                                "opacity_min": 0.05
                            }
                        }
                    },
                    "retina_detect": true
            }} />
            <section className='header-nav-wrapper'>
                <a href='#skills'>Skills</a>
                <a href='#'>Projects</a>
                <a href='#'>Resume</a>
                <a href='#'>Contact</a>
                {/* TODO: Add linkedin and github link */}
            </section>
        </Header>
    );
}