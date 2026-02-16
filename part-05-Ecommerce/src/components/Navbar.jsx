import { Link } from "react-router-dom"; // React Router Link for client-side navigation
import { AuthContext } from "../context/AuthContext"; // Import the global AuthContext
import { useContext } from "react"; // Hook to consume context

function Navbar() {
  // 1️⃣ Access global user state and logout function from AuthContext
  // - `user` contains: username, email, isAuth
  // - `logout` is a function to clear user state
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* 2️⃣ Brand / Logo */}
        <Link to="/" className="navbar-brand">
          ShopHub
        </Link>

        {/* 3️⃣ Navigation links */}
        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <Link to="/cart" className="navbar-link">
            Cart
          </Link>
        </div>

        {/* 4️⃣ Authentication section */}
        <div className="navbar-auth">
          <div className="navbar-auth-links">

            {/* 4a️⃣ Conditional rendering based on login status */}
            {user.isAuth ? (
              // ✅ If user is logged in
              <>
                {/* Greet the user by username if available, otherwise email */}
                <span>Hello, {user.username || user.email}</span>

                {/* Logout button */}
                {/* Clicking logout calls the logout function from AuthContext */}
                <button onClick={logout} className="btn btn-secondary">
                  Logout
                </button>
              </>
            ) : (
              // ❌ If user is NOT logged in
              <>
                {/* Login button navigates to /login page */}
                <Link to="/login" className="btn btn-secondary">
                  Login
                </Link>

                {/* Signup button navigates to /signup page */}
                <Link to="/signup" className="btn btn-primary">
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
