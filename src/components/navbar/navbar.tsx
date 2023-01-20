import React, { useState } from 'react';
import './navbar.scss';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
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
            <div className="app-navbar-smallscreen">
                <GiHamburgerMenu
                    color="#000"
                    fontSize={27}
                    cursor="pointer"
                    onClick={() => {
                        setToggleMenu(true);
                    }}
                ></GiHamburgerMenu>
                {toggleMenu && (
                    <div className="app-navbar-smallscreen-overlay">
                        <MdOutlineRestaurantMenu
                            fontSize={27}
                            className="overlay-close"
                            onClick={() => {
                                setToggleMenu(false);
                            }}
                        ></MdOutlineRestaurantMenu>

                        <ul className="app-navbar-smallscreen-links">
                            <li>
                                <a onClick={() => {
                                    setToggleMenu(false);
                                }} href="#home">Inicio</a>
                            </li>
                            <li>
                                <a onClick={() => {
                                    setToggleMenu(false);
                                }} href="#about">Nosotros</a>
                            </li>
                            <li>
                                <a onClick={() => {
                                    setToggleMenu(false);
                                }} href="#product">Productos</a>
                            </li>
                            <li>
                                <button onClick={() => {
                                    setToggleMenu(false);
                                }} className="btn-primary">
                                    Contactar
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
