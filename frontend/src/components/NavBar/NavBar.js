// import React from 'react';
import './NavBar.css'; // Assuming you'll create a CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation">
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/events">Events</a>
        </li>
        <li>
          <a href="/fighters">Fighters</a>
        </li>
        <li>
          <a href="/register" style={{color:"gold"}}>Register</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
