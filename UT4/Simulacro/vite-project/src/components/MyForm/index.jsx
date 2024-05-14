import { Component } from "react";
import MyButton from "../MyButton/index.jsx"

function MyForm (){
    return (
        <div>
            <input type="text" id="taskTitle" placeholder="Insert your task title..." />
            <input type="text" id="taskDescription" placeholder="Insert your task description..." />
            <input type="text" id="taskStart" placeholder="Insert the start date..." />
            <input type="text" id="taskEnd" placeholder="Insert the end date..." />
            <input type="text" id="taskStatus" placeholder="Insert the task status..." />
            <input type="text" id="taskPriority" placeholder="Insert the priority of the task..." />
            <input type="text" id="taskComments" placeholder="Insert any comment about the task..." />
            <MyButton text="Add card" />
            <MyButton text="Cancel" />
        </div>
    );
}

export default MyForm;
