// TaskDetails.jsx
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MyButton from '../../../src/components/MyButton/index.jsx';
import { getTaskById } from "../../api/api";

function TaskDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    const taskId = location.state.taskId; // Obtenemos el ID de la tarea del estado de la ubicación

    const [taskDetails, setTaskDetails] = useState(null);

    useEffect(() => {
        async function fetchTaskDetails() {
            try {
                // Consultamos la API para obtener los detalles de la tarea con el ID proporcionado
                const task = await getTaskById(taskId);
                setTaskDetails(task);
            } catch (error) {
                console.error(error);
            }
        }
        fetchTaskDetails();
    }, [taskId]);

    const navigateToBoard = () => {
        navigate("/");
    };

    return (
        <>
            <p>Task details</p>
            {/* Utilizamos taskDetails en lugar de task */}
            <p>{taskDetails && taskDetails.title}</p>
            <p>{taskDetails && taskDetails.description}</p>
            <p>Assigned to {taskDetails && taskDetails.assignedTo}</p>
            <p>Start date: {taskDetails && taskDetails.startDate}</p>
            <p>End date: {taskDetails && taskDetails.endDate}</p>
            <p>Task status: {taskDetails && taskDetails.status}</p>
            <p>Task prioirty: {taskDetails && taskDetails.priority}</p>
            <p>{taskDetails && taskDetails.comments}</p>
            <MyButton text={"Go to board"} onClick={navigateToBoard} />
        </>
    );
}

export default TaskDetails;
