// import React from 'react'

// const Auth = () => {
//   return (
//     <div>Auth</div>
//   )
// }

// export default Auth



import { useState } from "react";

export default function Auth() {
  const [mode, setMode] = useState("signup");

  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">
          
          {/* Title */}
          <h1 className="page-title">
            {mode === "signup" ? "Sign Up" : "Login"}
          </h1>

          {/* Form */}
          <form className="auth-form">
            
            {/* Email Field */}
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                className="form-input"
                type="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input
                className="form-input"
                type="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>

            {/* Submit Button */}
            <button type="button" className="btn btn-primary btn-large">
              {mode === "signup" ? "Sign Up" : "Login"}
            </button>
          </form>

          {/* Switch Between Login & Signup */}
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
