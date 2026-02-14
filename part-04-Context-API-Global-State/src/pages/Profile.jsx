
// import React from 'react'
// import React, { useContext } from "react";

// import { AuthContext } from "../AuthContext";

// const Profile = () => {

//      const { user } = useContext(AuthContext);

//       if (!user.isAuth) {
//     return <h2>Please login first</h2>; 
//   }
//   return (
//     <div style={{ 
//       display: "flex", 
//       justifyContent: "center", 
//       marginTop: "50px" 
//     }}>
//       <div style={{ 
//         width: "400px", 
//         padding: "30px", 
//         border: "1px solid #ddd", 
//         borderRadius: "10px", 
//         boxShadow: "0 4px 10px rgba(0,0,0,0.1)" 
//       }}>
        
//         <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
//           Profile
//         </h2>

//         <hr />

//         <div style={{ marginTop: "20px" }}>
//           <p><strong>Username:</strong> johndoe123</p>
//           <p><strong>Email:</strong> john@example.com</p>
//         </div>

//         <button style={{
//           marginTop: "20px",
//           width: "100%",
//           padding: "10px",
//           backgroundColor: "#1e1e2f",
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer"
//         }}>
//           Edit Profile
//         </button>

//       </div>
//     </div>
//   )
// }

// export default Profile


import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";

const Profile = () => {

  // Get user from global context
  const { user } = useContext(AuthContext);

  // If not logged in
  if (!user.isAuth) {
    return <h2>Please login first</h2>;
  }

  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      marginTop: "50px" 
    }}>
      <div style={{ 
        width: "400px", 
        padding: "30px", 
        border: "1px solid #ddd", 
        borderRadius: "10px", 
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)" 
      }}>
        
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Profile
        </h2>

        <hr />

        <div style={{ marginTop: "20px" }}>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>

        <button style={{
          marginTop: "20px",
          width: "100%",
          padding: "10px",
          backgroundColor: "#1e1e2f",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}>
          Edit Profile
        </button>

      </div>
    </div>
  )
}

export default Profile;
