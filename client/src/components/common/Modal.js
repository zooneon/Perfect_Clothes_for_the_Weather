import React from "react";
import styled from 'styled-components';

const Background = styled.div `
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;        
`;

const Box = styled.div `
    width: 300px;
    padding: 2rem;
    background: white;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
    h2 {
        margin-top: 0;
        margin-bottom: 0.5rem;
        font-size: 2rem;
    }
    p {
        margin-bottom: 2rem;
        font-size: 1.125rem;
    }
    button {
        border: none;
        outline: none;
        border-radius: 4px;
        background: #1b6ca8;
        color: white;
        padding: 10px 10px;
        font-size: 1rem;
        display: flex;
        justify-content: center;
        width: 100%;
        cursor: pointer;
        }
    }            
`;

const Modal = ({visible, title, description, onConfirm}) => {
    if(!visible) return null;
    return (
        <Background>
            <Box>
                <h2>{title}</h2>
                <p>{description}</p>
                <button onClick={onConfirm}>확인</button>
            </Box>
        </Background>
    );
};

export default Modal;