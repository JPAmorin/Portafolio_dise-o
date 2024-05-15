import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getApiGames } from '../../api/api';
import MyDashboard from "../../components/MyDashboard/index.jsx";
import MyHeader from "../../components/MyHeader/index.jsx";
import MyGamesWrapper from "../../components/MyGamesWrapper/index.jsx";
import MyGame from "../../components/MyGame/index.jsx"
import MyButton from "../../components/MyButton/index.jsx";

function Main() {
    const [games, setGames] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadApiGames();
    }, []);

    const loadApiGames = async () => {
        try {
            const payload = await getApiGames();
            console.log(payload)
            setGames(payload);
        } catch (error) {
            console.error(error);
        }
    };
    const navigateGameForm = () => {
        navigate("/gameform")
    }
    
    const handleDeleteGame = (gameId) => {
        // Filtramos las tareas para eliminar la tarea con el ID correspondiente
        const updatedGames = games.filter(game => game.id !== gameId);
        setGames(updatedGames); // Actualizamos el estado
    };
    return (
    <>
        <MyDashboard>
            <MyHeader text={"Home"} />
            <MyGamesWrapper>
                {games.map(game => {
                    return <MyGame key={game.id} title={game.title} id={game.id} onDelete={handleDeleteGame}/>
                })}
            </MyGamesWrapper>
            <MyButton text={"Agregar juego"} onClick={navigateGameForm}/>
        </MyDashboard>
    </>
    );
}

export default Main;
