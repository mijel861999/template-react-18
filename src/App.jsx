import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

// Pages
import HomePage from './pages/Home'
import LoginPage from './pages/Login'

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </div>
  )
}

export default App
