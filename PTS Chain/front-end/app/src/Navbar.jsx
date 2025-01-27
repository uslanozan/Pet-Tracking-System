import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./css/styles.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement logout functionality if needed
    navigate("/");
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-brand">Pet Tracking System</h1>
      <div className="navbar-links">
      <NavLink to="/" className="nav-link">
          Login
        </NavLink>
      <NavLink to="/register" className="nav-link">
          Register
        </NavLink>
        <NavLink to="/dashboard" className="nav-link">
          Dashboard
        </NavLink>
        <NavLink to="/add-pet" className="nav-link">
          Add Pet
        </NavLink>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;