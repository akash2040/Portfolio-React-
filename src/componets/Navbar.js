import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/Portfolio-React-/">Home</Link>
        <Link to="/Portfolio-React-/skill">Skill</Link>
        <Link to="/Portfolio-React-/contact">Contact</Link>
        <Link to="/Portfolio-React-/project">Project</Link>
      </div>
    </div>
  );
}

export default Navbar;
