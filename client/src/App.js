import React from 'react';
import Main from "./pages/Main";
import {Route} from 'react-router-dom';
import styled, {css} from 'styled-components';
import night from './background/night.png';
import morning from './background/morning.png';

const ContainerBlock = styled.div`
    ${props => props.hour > 18 && props.hour < 7 ?
    css `
        background-image: url(${night});
    ` :
    css `
        background-image: url(${morning});
    `}
    background-size: cover;
`;

const App = () => {
    const getTime = () => {
        let today = new Date();
        let hours = today.getHours();
        return hours;
    };

    return (
        <ContainerBlock {...getTime()}>
            <Route component={Main} path='/' exact/>
        </ContainerBlock>
    );
}


export default App;