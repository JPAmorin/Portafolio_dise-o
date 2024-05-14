import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import MyButton from '../../../src/components/MyButton/index.jsx';
import MyTask from "../../components/MyTask/index.jsx";
import MyHeader from "../../components/MyHeader/index.jsx";

function Main() {
    const navigate = useNavigate();

    const navigateTaskDetails = () => {
        navigate("/taskdetails");
    };
    const navigateTaskForm = () => {
        navigate("/taskform");
    };

    return (
        <>
            <MyHeader text={"Trello"} />
            <MyTask text={"aaa"} />
            <MyButton text={"Task Details"} onClick={navigateTaskDetails} />
            <MyButton text={"Task Form"} onClick={navigateTaskForm} />
        </>
    );
}

export default Main;
