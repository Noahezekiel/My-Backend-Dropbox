// Sidebar.js
import React from "react";
import { FiHome, FiFolder, FiSettings, FiLogOut } from "react-icons/fi";
import "./Sidebar.css";

const Sidebar = ({ user, signOut }) => {
  return (
    <div className="sidebar">
      <h2>My Dropbox</h2>
      <ul>
        <li><FiHome /> Home</li>
        <li><FiFolder /> Files</li>
        <li><FiSettings /> Settings</li>
      </ul>
      <button className="logout-btn" onClick={signOut}>
        <FiLogOut /> Logout
      </button>
    </div>
  );
};

export default Sidebar;
