import './App.css'
import React from 'react'
import Login from './LoginPage.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './Home.jsx'
import Dashboard from './Dashboard.jsx'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* Public Route */}
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      {/* Protected Route */}
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard/>
        </ProtectedRoute>
      }/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
