import React from 'react'

const Profile = () => {
  return (
    <div>
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
        
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <img 
            src="https://via.placeholder.com/100"
            alt="Profile"
            style={{ 
              borderRadius: "50%", 
              width: "100px", 
              height: "100px" 
            }}
          />
          <h2 style={{ marginTop: "15px" }}>John Doe</h2>
          <p style={{ color: "gray" }}>john@example.com</p>
        </div>

        <hr />

        <div style={{ marginTop: "20px" }}>
          <p><strong>Username:</strong> johndoe123</p>
          <p><strong>Role:</strong> User</p>
          <p><strong>Joined:</strong> Jan 2025</p>
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
    </div>
  )
}

export default Profile