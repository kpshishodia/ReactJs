// import { NavLink } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav> 
//       <h2>MyApp</h2>

//       <div>
//         <NavLink to="/">Home</NavLink><br />
//         <NavLink to="/about">About</NavLink>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 30px", backgroundColor: "#1e1e2f" }}>
      <h2 style={{ color: "white", margin: 0 }}>MyApp</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        
        <NavLink to="/">Home </NavLink>
        <NavLink to="/about">  About </NavLink>
        <NavLink to="/login">  Login </NavLink>
        

       
         
      </div>
    </nav>
  );
}

export default Navbar;
