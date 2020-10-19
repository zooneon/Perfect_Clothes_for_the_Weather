import React, {useState} from "react";
import {useDispatch} from "react-redux";
import styled from 'styled-components';
import CityList from "../Assets/CityList";

const CitySearchBlock = styled.div`
    display: flex;
    margin-bottom: 100px;
    align-items: center;
    justify-content: center;
`;

const StyledInput = styled.input `
    border: none;
    outline: none;
    width: 250px;
    height: 40px;
    padding: 0px 10px;
    border-radius: 5px 0px 0px 5px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1); 
`;

const StyledButton = styled.button `
    background: #686d76;
    outline: none;
    border: none;
    border-radius: 0px 5px 5px 0px;
    color: white;
    padding: 10px 20px;
    height: 40px;
    cursor: pointer;
    &:hover {
        background: #373a40;
    }
    transition: 0.1s background;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1); 
`;

const CitySearch = () => {
    const dispatch = useDispatch();
    const [city, setCity] = useState('');

    const searchCity = city => {
        //입력 받은 도시를 CityList에서 찾아 도시 정보 반환
        const findingCity = CityList.find(c => c.name === city);
        return findingCity;
    };

    const onChange = e => {
        setCity(e.target.value);
    };

    const onSubmit = e => {
        e.preventDefault();
        const cityInfo = searchCity(city);
        if (!cityInfo) {
            //CityList에 해당하는 도시가 없을 경우
            //alert 대신 모달 추가 예정
            alert('도시 정보를 찾을 수 없습니다. 다시 검색해주세요.');
            setCity('');
            return;
        }
        console.log(cityInfo.latitude, cityInfo.longitude)
        //추후에 서버에 데이터 요청하도록 수정
        //dispatch(citySearch(cityInfo.latitude, cityInfo.longitude));
        setCity('');
    };

    return (
        <CitySearchBlock>
            <form onSubmit={onSubmit}>
                <StyledInput
                    placeholder="도시를 검색하세요. ex) 서울, Seoul"
                    onChange={onChange}
                    value={city}
                />
                <StyledButton type='submit'>검색</StyledButton>
            </form>
        </CitySearchBlock>
    );

};

export default CitySearch;