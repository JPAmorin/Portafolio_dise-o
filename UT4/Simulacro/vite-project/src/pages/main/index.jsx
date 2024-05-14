import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import MyButton from '../../../src/components/MyButton/index.jsx';

function Main() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/hola");
    };

    return (
        <>
            <p>hola</p>
            <MyButton text={"holaaa"} onClick={handleButtonClick} />
        </>
    );
}

export default Main;
