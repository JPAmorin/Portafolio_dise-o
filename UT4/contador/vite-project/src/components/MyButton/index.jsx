import React, { Component } from 'react';
import './index.css';

function Button({ color, text }){

    function onClickHandler(color){
        if (color === "red") {
            alert("red")
        } else if (color === "yellow") {
            alert("yellow")
        } else if (color === "blue") {
            alert("blue")
        }
    }

    return <button className={color} onClick={() => onClickHandler(color)}>{text}</button>
}
export default Button;