import { createContext, useState } from "react";

// 1️⃣ Create the AuthContext
// This context will hold the global authentication state and functions
export const AuthContext = createContext();

/*
  2️⃣ AuthProvider component
  - This wraps the app (or part of the app) and provides access to auth state.
  - Any child component wrapped inside this provider can access user state and auth functions.
*/
export function AuthProvider({ children }) {
  
  // 3️⃣ State to store the logged-in user's info
  // - username: optional name of the user
  // - email: user's email
  // - isAuth: boolean flag to track if the user is logged in
  const [user, setUser] = useState({
    username: "",
    email: "",
    isAuth: false,
  });

  // 4️⃣ Login function
  // - Accepts an email (for simplicity, no password yet)
  // - Updates user state to mark the user as logged in
  const login = (email) => {
    setUser({
      username: "", // no name provided for login
      email,        // set email
      isAuth: true, // mark as authenticated
    });
  };

  // 5️⃣ Signup function
  // - Accepts name and email
  // - Updates user state to mark the user as logged in after signup
  const signup = (name, email) => {
    setUser({
      username: name, // set the provided name
      email,
      isAuth: true,
    });
  };

  // 6️⃣ Logout function
  // - Clears user info and sets isAuth to false
  const logout = () => {
    setUser({
      username: "",
      email: "",
      isAuth: false,
    });
  };

  /*
    7️⃣ Provide context values to children
    - user: current user state
    - setUser: directly update user state (optional)
    - login, signup, logout: functions to update authentication
  */
  return (
    <AuthContext.Provider value={{ user, setUser, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
