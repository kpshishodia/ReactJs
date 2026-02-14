import { useState } from 'react'
import './App.css'
import {  Route , Routes } from 'react-router-dom'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Navbar from './component/Navbar'
import { AuthContext } from './AuthContext'

function App() {
 
    // State for logged-in user data
     const [user, setUser] = useState({
       username: "",
       email: "",
       isAuth: false   // Tracks if user is authenticated
     });

  return (
    <>
      <div>
        <Navbar/>
        <AuthContext.Provider value={{user, setUser}}>
        <Routes>
          <Route path = "/" element ={<Home/>} />
          <Route path = "/about" element ={<Aboutus/>} />
          <Route path = "/profile" element ={<Profile/>} />
          <Route path = "/login" element ={<Login/>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        </AuthContext.Provider>
      </div>
      
    </>
  )
}

export default App
