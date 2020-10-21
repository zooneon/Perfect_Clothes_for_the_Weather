import React from "react";

const WeatherIconSwitch = (weather) => {
    //현재 날씨 정보를 받아 아이콘을 반환
    switch (weather) {
        case 'Thunderstorm':
            return <i className="wi wi-owm-200"></i>
        case 'Drizzle':
            return <i className="wi wi-owm-300"></i>
        case 'Rain':
            return <i className="wi wi-owm-500"></i>
        case 'Snow':
            return <i className="wi wi-owm-600"></i>
        case 'Mist':
            return <i className="wi wi-owm-701"></i>
        case 'Smoke':
            return <i className="wi wi-owm-711"></i>
        case 'Haze':
            return <i className="wi wi-owm-721"></i>
        case 'Dust':
            return <i className="wi wi-owm-731"></i>
        case 'Fog':
            return <i className="wi wi-owm-741"></i>
        case 'Sand':
            return <i className="wi wi-owm-761"></i>
        case 'Ash':
            return <i className="wi wi-owm-762"></i>
        case 'Squall':
            return <i className="wi wi-owm-762"></i>
        case 'Tornado':
            return <i className="wi wi-owm-781"></i>
        case 'Clear':
            return <i className="wi wi-owm-800"></i>
        case 'Clouds':
            return <i className="wi wi-owm-804"></i>
        default:
            return <div>error</div>
    }
};

export default WeatherIconSwitch;