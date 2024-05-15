import React from "react";
import MyButton from "../MyButton/index.jsx"
import { useNavigate } from "react-router-dom";
import { deleteGame } from "../../api/api";


function MyGame({ title, id, onDelete }){
    const gameId = id
    const navigate = useNavigate();
    
    const navigateGameDetails = () => {
        navigate(`/gamedetails`, { state: { gameId } }); 
    };

    const handleDelete = async () => {
        try {
            const success = await deleteGame(gameId);
            if (success) {
                onDelete(gameId); // Llamamos a la función onDelete para actualizar el estado en Main
            } else {
                console.error("Failed to delete game.");
            }
        } catch (error) {
            console.error("Error deleting game:", error);
        }
    };

    return (
        <div className="game">
            <p>{title}</p>
            <MyButton text={"Ver detalles"} onClick={navigateGameDetails}/>
            <MyButton text={"Eliminar tarea"} onClick={handleDelete} />
        </div>
    );
}
export default MyGame