import React, { Component } from 'react';
import './index.css';

function Button({ color, text, onClick }){
    return <button className={color} onClick={onClick}>{text}</button>
}
export default Button;