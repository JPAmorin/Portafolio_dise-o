import React from "react";
import MyButton from "../MyButton";
import { Navigate, useNavigate } from "react-router-dom";
import "../MyColumn/index.css"

function MyColumn({ children, title }) {
    
    const navigate = useNavigate();
    
    const navigateTaskDetails = () => {
        navigate("/taskdetails");
    };
    const navigateTaskForm = () => {
        navigate("/taskform");
    };
    return (
    <div className="column">
        <h2 id={title}>{title}</h2>
        {children}
        <MyButton text={"Add a task"} onClick={navigateTaskForm}/>
    </div>);
}
export default MyColumn