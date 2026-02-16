
// import { useState } from "react";
// import { useContext } from "react";
// import { ModeContext } from "../context/ModeContext";
// import { AuthContext } from "../context/AuthContext";




// export default function Auth() {
// const { mode, setMode } = useContext(ModeContext);
//  const { setUser } = useContext(AuthContext);

//   // State for form inputs
//   const [email, setEmail] = useState("");         // Stores email input
//   const [password, setPassword] = useState("");   // Stores password input

//   // Function runs when form is submitted
//   const handleSubmit = (e) => {
//     e.preventDefault();  // Prevent page reload

//     // Simple validation check
//     if (!email.trim() || !password.trim()) {
//   alert("All fields are required!");
//   return;
// }

//     // Save logged-in user data
//     setUser({
//       email: email,
//       isAuth: true
//     });

//     // Print login data in console
//     console.log("Login Data:", { email, password });

//     // Clear form fields after login
   
//     setEmail("");
//     setPassword("");
//   };



//   return (
//     <div className="page">
//       <div className="container">
//         <div className="auth-container">
          
//           {/* Title */}
//           <h1 className="page-title">
//             {mode === "signup" ? "Sign Up" : "Login"}
//           </h1>

//           {/* Form */}
//           <form className="auth-form" onSubmit={handleSubmit}>
            
//             {/* Email Field */}
//             <div className="form-group">
//               <label className="form-label" htmlFor="email">
//                 Email
//               </label>
//               <input
//                 className="form-input"
//                 type="email"
//                 id="email"
//                 placeholder="Enter your email"
//                 onChange={(e) => setEmail(e.target.value)}
//                 value={email}
//               />
//             </div>

//             {/* Password Field */}
//             <div className="form-group">
//               <label className="form-label" htmlFor="password">
//                 Password
//               </label>
//               <input
//                 className="form-input"
//                 type="password"
//                 id="password"
//                 placeholder="Enter your password"
//                 onChange={(e) => setPassword(e.target.value)}
//                 value={password}
//               />
//             </div>

//             {/* Submit Button */}
//             <button type="submit" className="btn btn-primary btn-large">
//               {mode === "signup" ? "Sign Up" : "Login"}
//             </button>
//           </form>

//           {/* Switch Between Login & Signup */}
//           <div className="auth-switch">
//             {mode === "signup" ? (
//               <p>
//                 Already have an account?{" "}
//                 <span
//                   className="auth-link"
//                   onClick={() => setMode("login")}
//                   style={{ cursor: "pointer" }}
//                 >
//                   Login
//                 </span>
//               </p>
//             ) : (
//               <p>
//                 Don't have an account?{" "}
//                 <span
//                   className="auth-link"
//                   onClick={() => setMode("signup")}
//                   style={{ cursor: "pointer" }}
//                 >
//                   Sign Up
//                 </span>
//               </p>
//             )}
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }



import { useState, useContext } from "react";
import { ModeContext } from "../context/ModeContext";
import { AuthContext } from "../context/AuthContext";

export default function Auth() {

  // Get mode (login/signup) from ModeContext
  const { mode, setMode } = useContext(ModeContext);

  // Get setUser function from AuthContext
  const { setUser } = useContext(AuthContext);

  // -----------------------------
  // Local state for form inputs
  // -----------------------------

  const [name, setName] = useState("");        // Used only in signup
  const [email, setEmail] = useState("");      // Used in both login & signup
  const [password, setPassword] = useState(""); // Used in both

  // -----------------------------
  // Handle form submit
  // -----------------------------

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh

    // Basic validation
    if (
      (mode === "signup" && !name.trim()) || 
      !email.trim() || 
      !password.trim()
    ) {
      alert("All required fields must be filled!");
      return;
    }

    // Save user data in global AuthContext
    setUser({
      username: mode === "signup" ? name : "",  // Only save name in signup
      email: email,
      isAuth: true
    });

    console.log("Form Submitted:", { name, email, password });

    // Clear inputs after submission
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">

          {/* Dynamic Title Based on Mode */}
          <h1 className="page-title">
            {mode === "signup" ? "Sign Up" : "Login"}
          </h1>

          {/* Form */}
          <form className="auth-form" onSubmit={handleSubmit}>

            {/* -------------------------------- */}
            {/* Show Name Input ONLY in Signup */}
            {/* -------------------------------- */}
            {mode === "signup" && (
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}

            {/* Email Field (Always Visible) */}
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Field (Always Visible) */}
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-input"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary btn-large">
              {mode === "signup" ? "Create Account" : "Login"}
            </button>

          </form>

          {/* Switch Between Login and Signup */}
          <div className="auth-switch">
            {mode === "signup" ? (
              <p>
                Already have an account?{" "}
                <span
                  className="auth-link"
                  onClick={() => setMode("login")}
                  style={{ cursor: "pointer" }}
                >
                  Login
                </span>
              </p>
            ) : (
              <p>
                Don't have an account?{" "}
                <span
                  className="auth-link"
                  onClick={() => setMode("signup")}
                  style={{ cursor: "pointer" }}
                >
                  Sign Up
                </span>
              </p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
