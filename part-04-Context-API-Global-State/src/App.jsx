import { useState } from 'react'
import './App.css'
import {  Route , Routes } from 'react-router-dom'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'
import Login from './pages/Login'
import Navbar from './component/Navbar'

function App() {
 

  return (
    <>
      <div>
        <Navbar/>
        <Routes>
          <Route path = "/" element ={<Home/>} />
          <Route path = "/about" element ={<Aboutus/>} />
          <Route path = "/login" element ={<Login/>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
      
    </>
  )
}

export default App
