import React, { useState } from "react";
import MyButton from "../MyButton/index.jsx"
import { useNavigate } from "react-router-dom";
import "../MyForm/index.css"
import { createTask } from "../../api/api";

function MyForm (){
    const navigate = useNavigate();
    
    // Estado para mantener los datos del nuevo task
    const [newTaskData, setNewTaskData] = useState({
        title: "",
        description: "",
        assignedTo: "",
        start: "",
        end: "",
        status: "",
        priority: "",
        comments: ""
    });

    // Función para manejar cambios en los campos del formulario
    const handleChange = (e) => {
        const { id, value } = e.target;
        setNewTaskData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };
    const navigateMain = () => {
        navigate("/");
    };
    const submitTask = (newTaskData) => {
        createTask(newTaskData)
        navigateMain()
    }
    return (
        <div id="taskForm">
            <input type="text" id="title" placeholder="Insert your task title..." onChange={handleChange} />
            <input type="text" id="description" placeholder="Insert your task description..." onChange={handleChange} />
            <input type="text" id="assignedTo" placeholder="Insert the assigned person..." onChange={handleChange} />
            <input type="text" id="start" placeholder="Insert the start date..." onChange={handleChange} />
            <input type="text" id="end" placeholder="Insert the end date..." onChange={handleChange} />
            <input type="text" id="status" placeholder="Insert the task status..." onChange={handleChange} />
            <input type="text" id="priority" placeholder="Insert the priority of the task..." onChange={handleChange} />
            <input type="text" id="comments" placeholder="Insert any comment about the task..." onChange={handleChange} />
            <MyButton text="Add card" onClick={e => submitTask(newTaskData)} />
            <MyButton text="Cancel" onClick={navigateMain}/>
        </div>
    );
}

export default MyForm;
