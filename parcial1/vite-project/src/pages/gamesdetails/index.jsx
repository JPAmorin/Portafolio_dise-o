import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import MyButton from '../../../src/components/MyButton/index.jsx'
import { getGameById } from "../../api/api"

function GameDetails() {
    const location = useLocation()
    const navigate = useNavigate()
    const gameId = location.state.gameId

    const [gameDetails, setgameDetails] = useState(null)

    useEffect(() => {
        async function fetchGameDetails() {
            try {
                const task = await getGameById(gameId)
                setgameDetails(task)
            } catch (error) {
                console.error(error)
            }
        }
        fetchGameDetails()
    }, [gameId])

    const navigateToBoard = () => {
        navigate("/")
    }

    return (
        <>
            <p>Nombre: {gameDetails && gameDetails.title}</p>
            <p>Descripción: {gameDetails && gameDetails.description}</p>
            <p>Cantidad de jugadores: {gameDetails && gameDetails.players}</p>
            <p>Categorías: {gameDetails && gameDetails.categories}</p>
            <MyButton text={"Go to board"} onClick={navigateToBoard} />
        </>
    );
}

export default GameDetails