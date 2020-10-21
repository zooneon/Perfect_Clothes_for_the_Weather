import React from "react";
import {useSelector} from "react-redux";
import Recommend from "../components/Recommend";

const RecommendContainer = () => {
    const {clothesData, error} = useSelector(({weather}) => ({
        clothesData: weather.clothesData,
        error: weather.error
    }));

    return(
        <div>
            <Recommend
                clothesData={clothesData}
                error={error}
            />
        </div>
    );
};

export default RecommendContainer;