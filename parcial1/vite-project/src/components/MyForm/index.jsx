import React, { useState } from "react"
import MyButton from "../MyButton/index.jsx"
import { useNavigate } from "react-router-dom"
import "../MyForm/index.css"
import { createGame } from "../../api/api"

function MyForm() {
    const navigate = useNavigate()
    const [games, setGames] = useState([])

    const [newGameData, setNewGameData] = useState({
        title: "",
        description: "",
        players: "",
        categories: "",
    })

    const handleChange = (e) => {
        const { id, value } = e.target;
        setNewGameData(prevState => ({
            ...prevState,
            [id]: value
        }))
    }
    const navigateMain = () => {
        navigate("/");
    }
    const handleCreateGame = (newGame) => {
        const updatedGames = prevState => prevState + newGame;
        setGames(updatedGames)
    }

    const submitGame = async (newGameData) => {
        try {
            const createdGame = await createGame(newGameData)
            handleCreateGame(createdGame)
            navigateMain()
        } catch (error) {
            console.error("Error creating game:", error)
        }
    }
    return (
        <div id="gameForm">
            <p>Crear tarea</p>
            <input type="text" id="title" placeholder="Insert your game title..." onChange={handleChange} />
            <input type="text" id="description" placeholder="Insert your game description..." onChange={handleChange} />
            <input type="text" id="players" placeholder="Insert your game players..." onChange={handleChange} />
            <input type="text" id="categories" placeholder="Insert your game categories..." onChange={handleChange} />
            <MyButton text="Add card" onClick={e => submitGame(newGameData)} />
            <MyButton text="Cancel" onClick={navigateMain} />
        </div>
    );
}

export default MyForm