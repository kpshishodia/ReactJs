// import React, { useState } from "react";

// function Login() {

//   // State for form inputs
//   const [username, setUsername] = useState("");   // Stores username input
//   const [email, setEmail] = useState("");         // Stores email input
//   const [password, setPassword] = useState("");   // Stores password input

//   // State for logged-in user data
//   const [user, setUser] = useState({
//     username: "",
//     email: "",
//     isAuth: false   // Tracks if user is authenticated
//   });

//   // Function runs when form is submitted
//   const handleSubmit = (e) => {
//     e.preventDefault();  // Prevent page reload

//     // Simple validation check
//     if (!username.trim() || !email.trim() || !password.trim()) {
//   alert("All fields are required!");
//   return;
// }

//     // Save logged-in user data
//     setUser({
//       username: username,
//       email: email,
//       isAuth: true
//     });

//     // Print login data in console
//     console.log("Login Data:", { username, email, password });

//     // Clear form fields after login
//     setUsername("");
//     setEmail("");
//     setPassword("");
//   };

//   return (
//     <div>
//       <h1>Login Form</h1>

//       {/* Login Form */}
//       <form onSubmit={handleSubmit}>
        
//         {/* Username Input */}
//         <div>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             required
//             value={username}
//             onChange={(e) => setUsername(e.target.value)} // Updates username state
//           />
//         </div>

//         {/* Email Input */}
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)} // Updates email state
//           />
//         </div>

//         {/* Password Input */}
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)} // Updates password state
//           />
//         </div>

//         {/* Submit Button */}
//         <button type="submit">Login</button>
//       </form>

//       {/* Show message only if user is authenticated */}
//       {user.isAuth && (
//         <p>{user.username} Logged In.</p>
//       )}
//     </div>
//   );
// }

// export default Login;



import React, { useState , useContext } from "react";
import { AuthContext } from "../AuthContext";

function Login() {

  const { user, setUser } = useContext(AuthContext);

  // State for form inputs
  const [username, setUsername] = useState("");   // Stores username input
  const [email, setEmail] = useState("");         // Stores email input
  const [password, setPassword] = useState("");   // Stores password input



  // Function runs when form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent page reload

    // Simple validation check
    if (!username.trim() || !email.trim() || !password.trim()) {
  alert("All fields are required!");
  return;
}

    // Save logged-in user data
    setUser({
      username: username,
      email: email,
      isAuth: true
    });

    // Print login data in console
    console.log("Login Data:", { username, email, password });

    // Clear form fields after login
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Login Form</h1>

      {/* Login Form */}
      <form onSubmit={handleSubmit}>
        
        {/* Username Input */}
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Username..."
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Updates username state
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Email.."
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Updates email state
          />
        </div>

        {/* Password Input */}
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Password.."
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Updates password state
          />
        </div>

        {/* Submit Button */}
        <button type="submit">Login</button>
      </form>

      {/* Show message only if user is authenticated */}
      {user.isAuth && (
        <p>{user.username} Logged In.</p>
      )}
    </div>
  );
}

export default Login;
