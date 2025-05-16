import React from "react";
import logo from "../assets/logo.svg"; // Ensure correct path
import Button from "./Button"; // Import the reusable Button component
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="QTify Logo" />
      </div>
      
      <div className="search-bar">
        <input type="text" placeholder="Search an album of your choice" />
        <button className="search-icon">🔍</button>
      </div>
      
      {/* Fixed Button Component (Now Properly Closed) */}
      <Button text="Give Feedback" onClick={() => alert("Feedback form Coming Soon!!")} />
    </nav>
  );
};

export default Navbar;