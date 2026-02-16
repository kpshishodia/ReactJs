import { useState } from 'react'
import { Route ,Routes } from 'react-router-dom'
import Auth from './pages/Auth'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import Navbar from './components/Navbar'
import { ModeContext } from './context/ModeContext'
import { AuthContext } from './context/AuthContext'

import './App.css'

function App() {

  const [mode , setMode] = useState("signup")
   // State for logged-in user data
  const [user , setUser] = useState({
    username : "",
    email : "",
    isAuth : false
  })

  return (
    <>
    <AuthContext.Provider value={{user , setUser}}>
    <ModeContext.Provider value={{mode , setMode}}>
      <div className='app'>
        <Navbar/>
        <Routes>
          <Route path='/' element ={<Home/>}/>
          <Route path='/auth' element ={<Auth/>}/>
          <Route path='/checkout' element ={<Checkout/>}/>

        </Routes>
      </div>
      </ModeContext.Provider>
      </AuthContext.Provider>
    </>
  )
}

export default App
