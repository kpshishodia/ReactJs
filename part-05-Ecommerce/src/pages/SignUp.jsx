import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext"; // Import global AuthContext
import { Link, useNavigate } from "react-router-dom"; // For page navigation and links

export default function SignupPage() {
  // State for controlled form inputs
  const [name, setName] = useState("");           // Name input (only for signup)
  const [email, setEmail] = useState("");         // Email input
  const [password, setPassword] = useState("");   // Password input

  // Access signup function from AuthContext
  const { signup } = useContext(AuthContext);

  // useNavigate allows us to programmatically redirect the user after signup
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh

    // Basic validation
    if (!name || !email || !password) {
      alert("All fields are required!"); // Alert if any field is empty
      return;
    }

    signup(name, email);  // Call AuthContext signup function
    setName("");          // Clear name input
    setEmail("");         // Clear email input
    setPassword("");      // Clear password input
    navigate("/");        // Redirect user to home page after signup
  };

  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">

          {/* Page Title */}
          <h1 className="page-title">Sign Up</h1>

          {/* Signup Form */}
          <form className="auth-form" onSubmit={handleSubmit}>

            {/* Name Field */}
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-input"
                value={name}                       // Controlled input
                onChange={(e) => setName(e.target.value)} // Update state on change
                placeholder="Enter your name"
              />
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-input"
                value={email}                     // Controlled input
                onChange={(e) => setEmail(e.target.value)} // Update state on change
                placeholder="Enter your email"
              />
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-input"
                value={password}                  // Controlled input
                onChange={(e) => setPassword(e.target.value)} // Update state on change
                placeholder="Enter your password"
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary btn-large">Sign Up</button>
          </form>

          {/* Link to Login Page */}
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