import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from '../src/pages/main/index.jsx'
import GameDetails from './pages/gamesdetails/index.jsx'
import GameForm from './pages/gameform/index.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />}  path='/' exact />
        <Route element={<GameDetails />}  path='/gamedetails' exact />
        <Route element={<GameForm />}  path='/gameform' exact />
      </Routes>
    </BrowserRouter>
  )
}

export default App
