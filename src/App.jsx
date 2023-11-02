import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

// Pages
import HomePage from './pages/Home'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'

// Router
import PublicRouter from './router/PublicRouter'
import PrivateRouter from './router/PrivateRouter'

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <PrivateRouter>
              <HomePage />
            </PrivateRouter>
          }
        />
        <Route
          exact
          path='/login'
          element={
            <PublicRouter>
              <LoginPage />
            </PublicRouter>
          }
        />
        <Route
          exact
          path='/registro'
          element={
            <PublicRouter>
              <RegisterPage />
            </PublicRouter>
          }
        />
      </Routes>
    </div>
  )
}

export default App
