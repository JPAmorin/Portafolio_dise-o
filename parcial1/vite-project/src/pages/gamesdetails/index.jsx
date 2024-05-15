import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MyButton from '../../../src/components/MyButton/index.jsx';
import { getGameById } from "../../api/api";

function GameDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    const gameId = location.state.gameId; // Obtenemos el ID de la tarea del estado de la ubicación

    const [gameDetails, setgameDetails] = useState(null);

    useEffect(() => {
        async function fetchGameDetails() {
            try {
                // Consultamos la API para obtener los detalles de la tarea con el ID proporcionado
                const task = await getGameById(gameId);
                setgameDetails(task);
            } catch (error) {
                console.error(error);
            }
        }
        fetchGameDetails();
    }, [gameId]);

    const navigateToBoard = () => {
        navigate("/");
    };

    return (
        <>
            <p>Game details</p>
            {/* Utilizamos gameDetails en lugar de task */}
            <p>{gameDetails && gameDetails.title}</p>
            <p>{gameDetails && gameDetails.description}</p>
            <p>{gameDetails && gameDetails.players}</p>
            <p>{gameDetails && gameDetails.categories}</p>
            <MyButton text={"Go to board"} onClick={navigateToBoard} />
        </>
    );
}

export default GameDetails;
