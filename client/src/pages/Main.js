import React from "react";
import WeatherContainer from "../containers/WeatherContainer";
import Header from "../components/Header";
import CitySearch from "../components/CitySearch";
import RecommendContainer from "../containers/RecommendContainer";

const Main = () => {
    return(
        <>
            <Header/>
            <CitySearch/>
            <WeatherContainer/>
            <RecommendContainer/>
        </>
    );
}

export default Main;
