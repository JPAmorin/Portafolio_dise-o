import React, { useState } from "react";
import MyButton from "../MyButton/index.jsx";
import { useNavigate, useLocation } from "react-router-dom";
import "../MyForm/index.css";
import { updateTask } from "../../api/api";

function MyEditForm () {
    const navigate = useNavigate();
    const location = useLocation();
    const [tasks, setTasks] = useState([]);
    const { taskId } = location.state; // Obtener el taskId de la ubicación

    // Estado para mantener los datos del nuevo task
    const [newTaskData, setNewTaskData] = useState({
        id: taskId, // Establecer el taskId
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

    const submitTask = async () => {
        try {
            const success = await updateTask(newTaskData);
            if (success) {
                console.log("Task updated successfully.");
                // Actualizar la tarea en el estado `tasks` si la actualización fue exitosa
                const updatedTasks = tasks.map((task) => {
                    if (task.id === newTaskData.id) {
                        return newTaskData; // Actualizar la tarea modificada
                    } else {
                        return task; // Mantener las otras tareas sin cambios
                    }
                });
                setTasks(updatedTasks);
                navigateMain();
            } else {
                console.error("Failed to update task.");
            }
        } catch (error) {
            console.error("Error updating task:", error);
        }
    };
    
    return (
        <div id="taskForm">
            <p>Actualizar tarea</p>
            <input type="text" id="title" placeholder="Insert your task title..." onChange={handleChange} />
            <input type="text" id="description" placeholder="Insert your task description..." onChange={handleChange} />
            <input type="text" id="assignedTo" placeholder="Insert the assigned person..." onChange={handleChange} />
            <input type="text" id="start" placeholder="Insert the start date..." onChange={handleChange} />
            <input type="text" id="end" placeholder="Insert the end date..." onChange={handleChange} />
            <input type="text" id="status" placeholder="Insert the task status..." onChange={handleChange} />
            <input type="text" id="priority" placeholder="Insert the priority of the task..." onChange={handleChange} />
            <input type="text" id="comments" placeholder="Insert any comment about the task..." onChange={handleChange} />
            <MyButton text="Update Task" onClick={submitTask} />
            <MyButton text="Cancel" onClick={navigateMain} />
        </div>
    );
}

export default MyEditForm;
