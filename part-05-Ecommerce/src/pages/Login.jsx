import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext"; // Import global AuthContext
import { Link, useNavigate } from "react-router-dom"; // For page navigation and links

export default function LoginPage() {
  // State for controlled form inputs
  const [email, setEmail] = useState("");        // Store email input
  const [password, setPassword] = useState("");  // Store password input

  // Access login function from AuthContext
  const { login } = useContext(AuthContext);

  // useNavigate allows us to programmatically redirect the user after login
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh

    // Basic validation
    if (!email || !password) {
      alert("All fields are required!"); // Alert if any field is empty
      return;
    }

    login(email);        // Call AuthContext login function
    setEmail("");        // Clear email input
    setPassword("");     // Clear password input
    navigate("/");       // Redirect user to home page after login
  };

  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">

          {/* Page Title */}
          <h1 className="page-title">Login</h1>

          {/* Login Form */}
          <form className="auth-form" onSubmit={handleSubmit}>

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
            <button type="submit" className="btn btn-primary btn-large">Login</button>
          </form>

          {/* Link to Signup Page */}
          <div className="auth-switch">
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="auth-link">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
