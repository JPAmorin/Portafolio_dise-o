import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import TaskDetails from './pages/taskdetails';
import TaskForm from './pages/taskform';
import TaskEditForm from './pages/edittaskform';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />} path='/' exact />
        <Route element={<TaskDetails />} path='/taskdetails' exact />
        <Route element={<TaskForm />} path='/taskform' exact />
        <Route element={<TaskEditForm />} path='/taskeditform' exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
