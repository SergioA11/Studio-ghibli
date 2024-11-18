import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <h1 className="navbar-title">Studio Ghibli Films</h1>
    <Link to="/" className="nav-link">Inicio</Link>
  </nav>
);

export default Navbar;
