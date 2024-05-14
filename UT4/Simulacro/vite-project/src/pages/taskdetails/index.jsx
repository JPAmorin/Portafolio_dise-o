import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import MyButton from '../../../src/components/MyButton/index.jsx';

function TaskDetails() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/");
    };
    return (
    <>
        <p>Task details</p>
        <MyButton text={"holaaa"} onClick={handleButtonClick} />

    </>);
}
export default TaskDetails