import React from "react";
import WeatherContainer from "../containers/WeatherContainer";
import Header from "../components/Header";
import CitySearch from "../components/CitySearch";

const Main = () => {
    return(
        <>
            <Header/>
            <CitySearch/>
            <WeatherContainer/>
        </>
    );
}

export default Main;
