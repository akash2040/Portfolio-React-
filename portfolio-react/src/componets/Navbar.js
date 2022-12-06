import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/skill">Skill</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/project">Project</Link>
      </div>
    </div>
  );
}

export default Navbar;
