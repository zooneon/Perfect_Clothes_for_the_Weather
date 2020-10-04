import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Weather from "../components/Weather";
import {loadWeather} from "../modules/weather";

const WeatherContainer = () => {
    const dispatch = useDispatch();
    const {weatherData, error} = useSelector(({weather}) => ({
        weatherData: weather.weatherData,
        error: weather.error
    }));

    useEffect(() => {
        navigator.geolocation.watchPosition(function(pos) {
            const latitude = pos.coords.latitude;
            const longitude = pos.coords.longitude;
            console.log({latitude, longitude});
            dispatch(loadWeather({latitude, longitude}));
        }, function(e){
            alert("위치 정보를 받아올 수 없습니다.");
            console.log(e);
        });
    }, [dispatch]);

    return(
        <Weather
            weatherData={weatherData}
            error={error}
        />
    );
};

export default WeatherContainer;
