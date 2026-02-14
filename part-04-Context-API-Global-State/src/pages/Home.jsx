import React from 'react'
import { AuthContext } from "../AuthContext";
import { useContext } from 'react';

const Home = () => {

   // Get user from global context
    const { user } = useContext(AuthContext);
  
    
  return (
     <div>
      <h1>
        Hi, I am {user.isAuth ? user.username : "Default User"} – welcome to the Home page
      </h1>
    </div>
  )
}

export default Home