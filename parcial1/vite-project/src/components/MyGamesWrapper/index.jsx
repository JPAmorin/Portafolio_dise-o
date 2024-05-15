import React from "react";
import "../MyGamesWrapper/index.css";
import MyButton from "../MyButton";
import { useNavigate } from "react-router-dom";

function MyGamesWrapper({ children }) {

    return (
    <div id="gamesWrapper">
        {children}
    </div>);
}
export default MyGamesWrapper