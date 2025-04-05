import React from 'react';
import { Link } from 'react-router-dom';
import './styles/header.css';
import logo from "../assets/logo212.png"

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Logo hamburguesa" className="logo" />
        <h1>Hamburguesas 90s</h1>
      </div>
      <nav className="nav">
        <Link to="/" className="nav-link">Menú</Link>
        <Link to="/cart" className="nav-link">Carrito</Link>
        <Link to="/game" className="nav-link">Juego</Link>
      </nav>
    </header>
  );
}

export default Header;
