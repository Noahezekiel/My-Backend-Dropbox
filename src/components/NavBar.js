import React from "react";
import "./NavBar.css";



const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="/" className="navbar-logo">
          <img src="/logo.png" alt="Dropbox" />
        </a>

        {/* Menu */}
        <ul className="nav-menu">
          <li><a href="#features">Features</a></li>
          <li><a href="#solutions">Solutions</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#enterprise">Enterprise</a></li>
        </ul>

        {/* Buttons */}
        <div className="nav-buttons">
          <a href="/login" className="nav-signin">Sign In</a>
          <a href="/signup" className="nav-get-started">Get Started</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
