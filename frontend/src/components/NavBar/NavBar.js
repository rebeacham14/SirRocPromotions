// Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // ✅ Import NavLink
import './NavBar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar" role="navigation">
      {/* Hamburger for mobile */}
      <div 
        className="menu-toggle" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'active' : ''}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/events" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Events
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/fighters" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Fighters
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/register" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

