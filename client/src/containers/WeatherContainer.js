import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Weather from "../components/Weather";
import {loadWeather} from "../modules/weather";

const WeatherContainer = () => {
    const dispatch = useDispatch();
    const {weatherData, clothesData, error} = useSelector(({weather}) => ({
        weatherData: weather.weatherData,
        clothesData: weather.clothesData,
        error: weather.error
    }));
    //기본 위치 설정
    const defaultLatitude = 37.58;
    const defaultLongitude = 127;

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(pos) {
            //사용자가 위치 권한을 허용했을 경우
            const latitude = pos.coords.latitude;
            const longitude = pos.coords.longitude;
            dispatch(loadWeather({latitude, longitude}));
        }, function(e){
            //사용자가 위치 권한을 거부했을 경우 기본값 사용
            console.log(e);
            dispatch(loadWeather({defaultLatitude, defaultLongitude}));
        });
    }, [dispatch]);

    return(
        <Weather
            weatherData={weatherData}
            clothesData={clothesData}
            error={error}
        />
    );
};

export default WeatherContainer;
