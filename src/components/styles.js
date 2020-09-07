import styled from 'styled-components';
import theme from '../theme';

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