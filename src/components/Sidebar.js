import React from 'react';
import './Sidebar.css';
import logo from '../assets/logo.png'; // adjust the path if needed

function Sidebar({ currentView, setView }) {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>
          <img src={logo} alt="Logo" className="logo-img" />
          My Dropbox
        </h2>
      </div>
      <nav>
        <button 
          className={currentView === 'files' ? 'active' : ''} 
          onClick={() => setView('files')}
        >
          <span className="icon">🗂️</span> Files
        </button>
        <button 
          className={currentView === 'profile' ? 'active' : ''} 
          onClick={() => setView('profile')}
        >
          <span className="icon">🧑</span> Profile
        </button>
      </nav>
    </div>
  );
}

export default Sidebar;