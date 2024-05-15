import React from "react";
import MyButton from "../MyButton";
import "../MyTask/index.css";
import { useNavigate } from "react-router-dom";
import { deleteTask } from "../../api/api";

function MyTask({ title, id, onDelete }) {
    const taskId = id;
    const navigate = useNavigate();
    
    const navigateTaskDetails = () => {
        navigate(`/taskdetails`, { state: { taskId } }); 
    };

    const navigateTaskEditForm = () => {
        navigate("/taskeditform", { state: { taskId } }); 
    };

    const handleDelete = async () => {
        try {
            const success = await deleteTask(taskId);
            if (success) {
                onDelete(taskId); // Llamamos a la función onDelete para actualizar el estado en Main
            } else {
                console.error("Failed to delete task.");
            }
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    return (
        <div className="task">
            <MyButton text={title} onClick={navigateTaskDetails}/>
            <MyButton text={"Editar tarea"} onClick={navigateTaskEditForm}/>
            <MyButton text={"Eliminar tarea"} onClick={handleDelete} /> 
        </div>
    );
}

export default MyTask;
