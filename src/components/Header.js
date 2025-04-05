import React from 'react';
import '../components/styles/header.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Logo hamburguesa" className="logo" />
        <h1>Hamburguesas 90s</h1>
      </div>
      <nav className="nav-links">
        <a href="#">Inicio</a>
        <a href="#">Menú</a>
        <a href="#">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;
