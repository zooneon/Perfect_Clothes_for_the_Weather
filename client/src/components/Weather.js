import React from "react";
import WeatherIconSwitch from "../lib/WeatherIconSwitch";

const Weather = ({weatherData, clothesData, error}) => {
    if(error) {
        return <div>에러 발생!</div>
    }

    return(
        <div>
            <div>
                국가 : {weatherData.country}
            </div>
            <div>
                도시 : {weatherData.city}
            </div>
            <div>
                날씨 : {WeatherIconSwitch(weatherData.weather)}
            </div>
            <div>
                습도 : {weatherData.humid}
            </div>
            <div>
                온도 : {weatherData.temp}
            </div>
            <div>
                top : {clothesData.top}
            </div>
            <div>
                bottom : {clothesData.bottom}
            </div>
            <div>
                outer : {clothesData.outer}
            </div>
            <div>
                inner : {clothesData.inner}
            </div>
            <div>
                item : {clothesData.item}
            </div>
        </div>
    );
};

export default Weather;