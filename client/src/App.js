import React from 'react';
import Main from "./pages/Main";
import {Route} from 'react-router-dom';
import styled, {css} from 'styled-components';
import night from './Assets/background/night.png';
import daytime from './Assets/background/daytime.png';

const ContainerBlock = styled.div` 
    ${props => props.time > 6 && props.time < 19 ?      //7시부터 18시까지는 주간, 19시부터 6시까지 밤으로 배경 설정
    css `
        background-image: url(${daytime});
    ` :
    css `
        background-image: url(${night});
    `}
    background-size: cover;
`;

const App = () => {
    //현재 시간을 불러옴
    const getTime = () => {
        let today = new Date();
        let hours = today.getHours();
        return hours;
    };

    return (
        <ContainerBlock time={getTime()}>
            <Route component={Main} path='/' exact/>
        </ContainerBlock>
    );
}


export default App;