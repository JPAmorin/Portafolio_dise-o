import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from '../../../src/components/MyButton/index.jsx';
import MyTask from "../../components/MyTask/index.jsx";
import MyHeader from "../../components/MyHeader/index.jsx";
import MyDashboard from "../../components/MyDashboard/index.jsx"
import MyColumnWrapper from "../../components/MyColumnWrapper/index.jsx"
import MyColumn from "../../components/MyColumn/index.jsx"
import { getApiTasks } from '../../api/api';

function Main() {
    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadApiTasks();
    }, []);

    const loadApiTasks = async () => {
        try {
            const payload = await getApiTasks();
            setTasks(payload);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDeleteTask = (taskId) => {
        // Filtramos las tareas para eliminar la tarea con el ID correspondiente
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks); // Actualizamos el estado
    };

    const navigateTaskDetails = () => {
        navigate("/taskdetails");
    };

    const navigateTaskForm = () => {
        navigate("/taskform");
    };

    return (
        <>
            <MyDashboard>
                <MyHeader text={"Trello"} />
                <MyColumnWrapper>
                    <MyColumn title={"To Do"}>
                        {tasks.map(task => {
                            if (task.status === "To Do") {
                                return <MyTask key={task.id} title={task.title} id={task.id} onDelete={handleDeleteTask} />;
                            }
                        })}
                    </MyColumn>
                    <MyColumn title={"In Progress"}>
                        {tasks.map(task => {
                            if (task.status === "In Progress") {
                                return <MyTask key={task.id} title={task.title} id={task.id} onDelete={handleDeleteTask} />;
                            }
                        })}
                    </MyColumn>
                    <MyColumn title={"Done"}>
                        {tasks.map(task => {
                            if (task.status === "Done") {
                                return <MyTask key={task.id} title={task.title} id={task.id} onDelete={handleDeleteTask} />;
                            }
                        })}
                    </MyColumn>
                </MyColumnWrapper>
            </MyDashboard>
        </>
    );
}

export default Main;
