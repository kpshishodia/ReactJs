import { useState } from 'react'
import { Route ,Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Error from './pages/Error'
import SignUp from './pages/SignUp'
import Navbar from './components/Navbar'
import Productdetails from './pages/Productdetails'
import { AuthProvider } from './context/AuthContext'

import './App.css'

function App() {
  return (
    <>
    <AuthProvider>
      <div className='app'>
        <Navbar/>
        <Routes>
          <Route path='/' element ={<Home/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<Productdetails />} />
          <Route path="*" element={<Error />} />

        </Routes>
      </div>
      </AuthProvider>
    </>
  )
}

export default App
