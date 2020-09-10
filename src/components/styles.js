import styled from 'styled-components';
import theme from '../theme';

// ============= Main styles for the header =============
export const Header = styled.header`
    position: relative;
    .header-content-wrapper{
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100px;
        h1, h2{
            margin: 0;
            color: ${theme.colors.white};
        }
        h1{
            font-size: 2rem;
        }
        span{
            color: ${theme.colors.pink};
        }
    }
    section.header-nav-wrapper{
        margin-top: -6px;
        width: 100%;
        height: 50px;
        border-top: 5px solid ${theme.colors.lightBlue};
        background-color: ${theme.colors.darkBlue};
        display: flex;
        justify-content: center;
        align-items: center;
        a{
            color: ${theme.colors.white};
            text-decoration: none;
            margin: 0 10px;
            font-size: 1.2rem;
            cursor: pointer;
            &:hover{
                color: ${theme.colors.pink};
                transition: color .5s ease;
            }
        }
    }
`;

// ============= Main styles for the skills section =============
export const Skills = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1, h2, p{
        text-align: center;
    }
    h1{
        font-size: 1.8rem;
        margin: 0;
    }
    .skills-wrapper{
        width: 80%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

// ============= Main styles for the skills section =============
export const Projects = styled.section`
    width: 100%;
`;

// ============= Global Styled Components =============
export const SectionWrapper = styled.div`
    margin: 50px auto;
    width: 80%;
`;

export const Hexagon = styled.div`
    position: absolute;
    top: 10px;
    width: 60px; 
    height: 34.64px;
    background-color: #07c2ca;
    margin: 17.32px 0;
    :before, :after{
        content: "";
        position: absolute;
        width: 0;
        border-left: 30px solid transparent;
        border-right: 30px solid transparent;
    }
    :before{
        bottom: 100%;
        border-bottom: 17.32px solid #07c2ca;
    }
    :after{
        top: 100%;
        width: 0;
        border-top: 17.32px solid #07c2ca;
    }
`;