// import { useState, useContext } from "react";
// import { AuthContext } from "../context/AuthContext"; // Import global AuthContext
// import { Link, useNavigate } from "react-router-dom"; // For page navigation and links

// export default function SignupPage() {
//   // State for controlled form inputs
//   const [name, setName] = useState("");           // Name input (only for signup)
//   const [email, setEmail] = useState("");         // Email input
//   const [password, setPassword] = useState("");   // Password input

//   // Access signup function from AuthContext
//   const { signup } = useContext(AuthContext);

//   // useNavigate allows us to programmatically redirect the user after signup
//   const navigate = useNavigate();

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page refresh

//     // Basic validation
//     if (!name || !email || !password) {
//       alert("All fields are required!"); // Alert if any field is empty
//       return;
//     }

//     signup(name, email);  // Call AuthContext signup function
//     setName("");          // Clear name input
//     setEmail("");         // Clear email input
//     setPassword("");      // Clear password input
//     navigate("/");        // Redirect user to home page after signup
//   };

//   return (
//     <div className="page">
//       <div className="container">
//         <div className="auth-container">

//           {/* Page Title */}
//           <h1 className="page-title">Sign Up</h1>

//           {/* Signup Form */}
//           <form className="auth-form" onSubmit={handleSubmit}>

//             {/* Name Field */}
//             <div className="form-group">
//               <label>Name</label>
//               <input
//                 type="text"
//                 className="form-input"
//                 value={name}                       // Controlled input
//                 onChange={(e) => setName(e.target.value)} // Update state on change
//                 placeholder="Enter your name"
//               />
//             </div>

//             {/* Email Field */}
//             <div className="form-group">
//               <label>Email</label>
//               <input
//                 type="email"
//                 className="form-input"
//                 value={email}                     // Controlled input
//                 onChange={(e) => setEmail(e.target.value)} // Update state on change
//                 placeholder="Enter your email"
//               />
//             </div>

//             {/* Password Field */}
//             <div className="form-group">
//               <label>Password</label>
//               <input
//                 type="password"
//                 className="form-input"
//                 value={password}                  // Controlled input
//                 onChange={(e) => setPassword(e.target.value)} // Update state on change
//                 placeholder="Enter your password"
//               />
//             </div>

//             {/* Submit Button */}
//             <button type="submit" className="btn btn-primary btn-large">Sign Up</button>
//           </form>

//           {/* Link to Login Page */}
//           <div className="auth-switch">
//             <p>
//               Already have an account?{" "}
//               <Link to="/login" className="auth-link">Login</Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

/*
====================================================
SIGNUP PAGE
====================================================

Purpose:
• Collect name, email, password
• Call signup() from AuthContext
• Auto-login user after signup
• Redirect to home
*/

export default function SignupPage() {
  // Local form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Access signup function from context
  const { signup } = useContext(AuthContext);

  const navigate = useNavigate();

  /*
  --------------------------------------------------
  HANDLE SUBMIT
  --------------------------------------------------
  Steps:
  1. Prevent refresh
  2. Call signup()
  3. If success → redirect home
  */
  const handleSubmit = (e) => {
    e.preventDefault();

    const success = signup(name, email, password);

    if (success) {
      navigate("/");
    }
  };

  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">

          <h1 className="page-title">Sign Up</h1>

          <form className="auth-form" onSubmit={handleSubmit}>

            {/* NAME INPUT */}
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>

            {/* EMAIL INPUT */}
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>

            {/* PASSWORD INPUT */}
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>

            <button type="submit" className="btn btn-primary btn-large">
              Sign Up
            </button>
          </form>

          {/* LINK TO LOGIN */}
          <div className="auth-switch">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="auth-link">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
