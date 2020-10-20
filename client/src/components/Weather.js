import React from "react";
import styled from 'styled-components';
import WeatherIconSwitch from "../lib/WeatherIconSwitch";
import {getDate} from "../lib/GetDateTime";

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
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.125rem;
    color: #373a40;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1)
`;

const WeatherBlock = styled.div `
    background: white;
    border-radius: 4px;
    border: none;
    width: 500px;
    height: 200px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1)
`;

const Weather = (/*{weatherData, error}*/) => {
    /*if(error) {
        //모달 추가 해야함
        return <div>에러 발생!</div>
    }*/
    const {year, month, date, day} = getDate();

    return(
        <ContainerBlock>
            <DateBlock>
                <h2>{year}년 {month}월 {date}일 {day} </h2>
            </DateBlock>
            <WeatherBlock>
                weather
            </WeatherBlock>
        </ContainerBlock>
    );
};

export default Weather;