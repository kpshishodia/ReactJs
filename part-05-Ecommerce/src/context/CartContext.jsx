



import { createContext, useState } from "react";

/*
====================================================
AUTH CONTEXT – GLOBAL LOGIN SYSTEM
====================================================

This file creates a global authentication system
that can be accessed from ANY component.

Main responsibilities:
1. Store logged-in user state
2. Provide signup, login, logout functions
3. Share everything using React Context
*/

// Step 1 → Create Context object
export const CartContext = createContext();

export function CartProvider({ children }) {
  /*
  --------------------------------------------------
  GLOBAL USER STATE
  --------------------------------------------------
  This state stores currently logged-in user info.

  username → display name
  email    → unique identifier
  isAuth   → true if logged in, false if logged out
  */
  const [user, setUser] = useState({
    username: "",
    email: "",
    isAuth: false,
  });

  /*
  ==================================================
  SIGNUP FUNCTION
  ==================================================
  Flow:
  1. Validate inputs
  2. Get existing users from localStorage
  3. Check duplicate email
  4. Save new user
  5. Log user in by updating global state
  6. Return true/false to page
  */
  const signup = (name, email, password) => {
    // 1️⃣ Input validation
    if (!name || !email || !password) {
      alert("All fields are required!");
      return false;
    }

    // 2️⃣ Get saved users from browser storage
    const existingUsers =
      JSON.parse(localStorage.getItem("users")) || [];

    // 3️⃣ Check if email already exists
    const userExists = existingUsers.find((user) => user.email === email);

    if (userExists) {
      alert("User already exists!");
      return false;
    }

    // 4️⃣ Create new user object
    const newUser = { username: name, email, password };

    // 5️⃣ Save to localStorage
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    // 6️⃣ Update global state → auto login
    setUser({ username: name, email, isAuth: true });

    return true; // tell page → signup success
  };

  /*
  ==================================================
  LOGIN FUNCTION
  ==================================================
  Flow:
  1. Validate email & password
  2. Read users from localStorage
  3. Find matching user
  4. If found → update global state
  5. Return success status
  */
  const login = (email, password) => {
    if (!email || !password) {
      alert("Email and password required!");
      return false;
    }

    const existingUsers =
      JSON.parse(localStorage.getItem("users")) || [];

    // find user with matching email + password
    const foundUser = existingUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (!foundUser) {
      alert("Invalid email or password!");
      return false;
    }

    // update global state → user is now logged in
    setUser({
      username: foundUser.username,
      email: foundUser.email,
      isAuth: true,
    });

    return true;
  };

  /*
  ==================================================
  LOGOUT FUNCTION
  ==================================================
  Simply reset global user state.
  */
  const logout = () => {
    setUser({ username: "", email: "", isAuth: false });
  };

  /*
  ==================================================
  CONTEXT PROVIDER
  ==================================================
  Makes user state + auth functions available
  to the entire React application.
  */
  return (
    <CartContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </CartContext.Provider>
  );
}