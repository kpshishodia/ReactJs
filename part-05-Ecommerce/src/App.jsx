import { useState } from 'react'
import { Route ,Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Error from './pages/Error'
import SignUp from './pages/SignUp'
import Navbar from './components/Navbar'
import { AuthContext } from './context/AuthContext'

import './App.css'

function App() {

   // State for logged-in user data
  const [user , setUser] = useState({
    username : "",
    email : "",
    isAuth : false
  })

  return (
    <>
    <AuthContext.Provider value={{user , setUser}}>
      <div className='app'>
        <Navbar/>
        <Routes>
          <Route path='/' element ={<Home/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />

        </Routes>
      </div>
      </AuthContext.Provider>
    </>
  )
}

export default App
