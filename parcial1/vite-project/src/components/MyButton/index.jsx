import React from "react";

function MyButton({ text, onClick }) {
    return <button className={text} onClick={onClick}>{text}</button>;
}

export default MyButton;
