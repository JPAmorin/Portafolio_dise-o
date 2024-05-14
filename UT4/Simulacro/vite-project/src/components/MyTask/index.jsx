import React from "react";
import MyButton from "../MyButton";

function MyTask ({ title }){
    return (
    <div>
        <h3>{title}</h3>
        <MyButton text={"Ver detalles"} onClick={e => alert("aa")} />
    </div>);
}
export default MyTask