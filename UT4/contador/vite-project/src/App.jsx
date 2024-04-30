import './App.css'
import Button from './components/MyButton'
import React, { useState } from "react";


function App() {
  const [counter, setCounter] = useState(0);
  // Function is called everytime increment button is clicked
  const handleClick1 = () => {
    // Counter state is incremented
    setCounter(counter + 1);
  };

  // Function is called everytime decrement button is clicked
  const handleClick2 = () => {
      // Counter state is decremented
      setCounter(counter - 1);
  };
  const handleClick3 = () => {
    setCounter(0)
  }
  return (
    <>
    <h1>{counter}</h1>
    <Button color="red" text="Add"/>
    <Button color="yellow" text="Subtract"/>
    <Button color="blue" text="Reset"/>
    </>
  )
}


export default App
