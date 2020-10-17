import React from "react";
import styled from 'styled-components';

const HeaderBlock = styled.div `
    border: none;
    text-align: center;
    padding: 30px 0;
    margin-bottom: 3rem;
    font-size: 3.5rem;
    font-weight: bold;
    color: white;
`;

const Header = () => {
    return(
        <HeaderBlock>
            Weather? Wear!
        </HeaderBlock>
    );
};

export default Header;