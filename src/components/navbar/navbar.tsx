import React from 'react';
import './navbar.css';

function Navbar() {
    return (
        <nav className="app-navbar">
            <div className="app-logo">
                <a href="#home">Fusion Plastic</a>
            </div>
            <ul className="app-navbar-links">
                <li>
                    <a href="#home">Inicio</a>
                </li>
                <li>
                    <a href="#about">Nosotros</a>
                </li>
                <li>
                    <a href="#product">Productos</a>
                </li>
                <li>
                    <button className="btn-primary">
                        Contactar
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
