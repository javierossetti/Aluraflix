import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">AluraFlix</Link>
      </div>
      <nav className="navbar">
        <Link to="/" className="nav-button">
          Inicio
        </Link>
        <Link to="/nuevo-video" className="nav-button">
          Nuevo video
        </Link>
      </nav>
    </header>
  );
};

export default Header;
