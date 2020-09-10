import styled from 'styled-components';
import theme from './theme';
import {StyledIconBase} from '@styled-icons/styled-icon'

export const IconStyleWrapper = styled.div`
    ${StyledIconBase}{
        color: ${theme.colors.white};
        width: 40px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;


