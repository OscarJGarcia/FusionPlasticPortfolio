import React, { useState } from 'react';
import './navbar.scss';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import routes from '../../router';
function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <nav className="app-navbar">
            <div className="app-logo">
                <a href="#home">Fusion Plastic</a>
            </div>
            <ul className="app-navbar-links">
                {
                    routes.map((route) => (
                        <li>
                            <NavLink
                                to={route.path}
                                key={route.name}>
                                {route.name}
                            </NavLink>
                        </li>
                    ))
                }
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
                        <AiOutlineCloseCircle
                            fontSize={27}
                            className="overlay-close"
                            onClick={() => {
                                setToggleMenu(false);
                            }}
                        ></AiOutlineCloseCircle>
                        <ul className="app-navbar-smallscreen-links">
                            {
                                routes.map((route) => (
                                    <li>
                                        <NavLink
                                            to={route.path}
                                            key={route.name}>
                                            {route.name}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
