import React from "react";
import styled from 'styled-components';
import WeatherIconSwitch from "../lib/WeatherIconSwitch";

const ContainerBlock = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 500px;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
`;

const DateBlock = styled.div `
    background: white;
    border-radius: 4px;
    border: none;
    width: 500px;
    height: 50px;
    margin-bottom: 20px;
    align-items: center;
    justify-content: center;
`;

const WeatherBlock = styled.div `
    background: white;
    border-radius: 4px;
    border: none;
    width: 500px;
    height: 200px;
`;

const Weather = (/*{weatherData, error}*/) => {
    /*if(error) {
        //모달 추가 해야함
        return <div>에러 발생!</div>
    }*/

    return(
        <ContainerBlock>
            <DateBlock>
                date
            </DateBlock>
            <WeatherBlock>
                weather
            </WeatherBlock>
        </ContainerBlock>
    );
};

export default Weather;