import './App.css'
import Button from './components/MyButton'
import React, { useState } from "react";


function App() {
  const [counter, setCounter] = useState(0);

  const handleClick1 = () => {
    setCounter(counter + 1);
  };

  const handleClick2 = () => {
    setCounter(counter - 1);
  };
  const handleClick3 = () => {
    setCounter(0)
  }
  return (
    <>
      <h1 id='counterDislpay'>{counter}</h1>
      <div id='buttonContainer'>
        <Button color="red" text="Add" onClick={handleClick1} />
        <Button color="yellow" text="Subtract" onClick={handleClick2} />
        <Button color="blue" text="Reset" onClick={handleClick3} />
      </div>
    </>
  )
}


export default App