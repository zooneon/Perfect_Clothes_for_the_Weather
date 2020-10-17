import React from 'react';
import Main from "./pages/Main";
import {Route} from 'react-router-dom';
import styled, {css} from 'styled-components';
import night from './background/night.png';
import morning from './background/morning.png';

const ContainerBlock = styled.div` 
    ${props => props.hour > 18 && props.hour < 7 ?      //7시부터 18시까지는 아침, 19시부터 7시까지 밤으로 배경 설정
    css `
        background-image: url(${night});
    ` :
    css `
        background-image: url(${morning});
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
        <ContainerBlock {...getTime()}>     //현재 시간을 props로 받음
            <Route component={Main} path='/' exact/>
        </ContainerBlock>
    );
}


export default App;