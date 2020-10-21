import React from "react";
import styled from 'styled-components';
import WeatherIconSwitch from "../lib/WeatherIconSwitch";
import {getDate} from "../lib/GetDateTime";

const ContainerBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 400px;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
`;
//날짜
const DateBlock = styled.div`
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
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1); 
`;
//날씨
const WeatherBlock = styled.div`
    border: 1px solid black;
    background: white;
    border-radius: 4px;
    border: none;
    width: 500px;
    height: 200px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    color: #373a40;
    display: grid;
    grid-template: 
        "Icon City City" 100px
        "Icon Temp Humid" 100px
        /2fr 1fr 1.5fr;
`;
//날씨 아이콘
const Icon = styled.div`
    grid-area: Icon;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 100px;
    padding-left: 20px;
`;
//도시 이름
const City = styled.div`
    grid-area: City;
    padding-top: 40px;
    font-size: 40px;
    font-weight: 600;
`;
//기온
const Temp = styled.div`
    grid-area: Temp;
    padding-top: 10px;
    font-size: 40px;
    font-weight: 500;
`;
//습도
const Humid = styled.div`
    grid-area: Humid;
    font-size: 30px;
    padding-top: 20px;
`;


const Weather = (/*{weatherData, error}*/) => {
    /*if(error) {
        //모달 추가 해야함
        return <div>에러 발생!</div>
    }*/
    const {year, month, date, day} = getDate();

    return (
        //나중에 데이터 받아오도록 수정
        <ContainerBlock>
            <DateBlock>
                <h2>{year}년 {month}월 {date}일 {day} </h2>
            </DateBlock>
            <WeatherBlock>
                <Icon>
                    {WeatherIconSwitch('Clouds')}
                </Icon>
                <City>Seoul, kr</City>
                <Temp>16°</Temp>
                <Humid>
                    <i className='wi wi-raindrop'> 50%</i>
                </Humid>
            </WeatherBlock>
        </ContainerBlock>
    );
};

export default Weather;