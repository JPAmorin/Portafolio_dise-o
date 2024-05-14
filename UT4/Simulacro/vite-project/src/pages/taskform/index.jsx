import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import MyForm from "../../components/MyForm/index.jsx"
import MyButton from "../../components/MyButton";

function TaskForm(){
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/")
    }
    return <>
    <MyForm />
    <MyButton text={"Main"} onClick={handleButtonClick}/>
    </>
}
export default TaskForm