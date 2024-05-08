import React, { useState } from 'react'
import './App.css'
import Button from './Components/MyButton'

function App() {
  let max = 100
  let min = 1
  const [ganaste, setGanaste] = useState(false)
  const [randNum, setRandNum] = useState(Math.floor(Math.random() * (100 - 1 + 1)) + 1);

  const mayor = () => {
    max = randNum
    setRandNum(Math.floor(Math.random() * (max - min + 1)) + 1);
  }

  const menor = () => {
    min = randNum
    setRandNum(Math.floor(Math.random() * (max - min + 1)) + min);
  }

  const igual = () => {
    setGanaste(true)
  }
  const ganador = () => {
    max = 100
    min = 1
    setRandNum(Math.floor(Math.random() * (max - min + 1)) + 1);
    setGanaste(false)
  }

  return (
    <>
      {!ganaste? (
      <>
        <h1>Adivinador</h1>
        <p>Reglas: El jugador comienza eligiendo un número del 1 al 100 y la computadora tiene que adivinarlo.<br></br>
        Si el número generado por la computadora es mayor al elegido por el jugador, presionar el botón de menor.<br></br>
        Si el número generado por la computadora es menor al elegido por el jugador, presionar el botón de mayor.<br></br>
        Si el número generado por la computadora es el elegido por el jugador, presionar el botón de igual.
        </p>
        <p>{randNum}</p>
        <Button color="green" onClick={mayor} text="mayor"></Button>
        <Button color="blue" onClick={igual} text="igual"></Button>
        <Button color="yellow" onClick={menor} text="menor"></Button>
      </>
      ) : (
          <>
          <h1>Ganaste!</h1>
          <Button color="green" onClick={ganador} text="Reiniciar"></Button>
        </>
      )}
      
    </>
  )
}

export default App
