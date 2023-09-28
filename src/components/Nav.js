import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import logo from "../assets/logo.jpg";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="nav">
      <div className="nav-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Link>
        <button className={`hamburger ${isOpen ? 'rotate' : ''}`} onClick={toggleMenu}>
          ☰
        </button>
        <div className={`navlinks ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/place" onClick={() => setIsOpen(false)}> Trekking Places</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link to="/map" onClick={() => setIsOpen(false)}>Map</Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
