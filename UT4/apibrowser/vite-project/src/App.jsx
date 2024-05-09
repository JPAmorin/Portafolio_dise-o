import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getDogPhoto } from './api/api'


function App() {
  const [dogPhoto, setDogPhoto] = useState([])
  useEffect(() => {
    const getDogPhotoPayload = async () => {
      const newDogPhoto = await getDogPhoto()
      setDogPhoto(newDogPhoto.url)
    }
    getDogPhotoPayload()
  }, [dogPhoto])
  function updatePhoto(){
    setDogPhoto([])
  }
  return (
    <div id='photoDisplayContainer'>
      <img id='photoDisplay' src={dogPhoto}></img>
      <button onClick={updatePhoto}>Get dog photo!</button>
    </div>
  )
}

export default App
