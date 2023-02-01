import React, { useState } from 'react';
import './navbar.scss';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import routes from '../../router';
function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <nav className="app-navbar">
            <div className="app-logo">
                <NavLink to="/">Fusion Plastic</NavLink>
            </div>
            <div className="app-navbar-links">
                {
                    routes.map((route) => (
                        <NavHashLink
                            to={route.path}
                            key={route.name}
                            className='app-navbar-link'
                        >
                            {route.name}
                        </NavHashLink>
                    ))
                }
            </div>
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
                        <div className="app-navbar-smallscreen-links">
                            {
                                routes.map((route) => (
                                    <NavHashLink
                                        to={route.path}
                                        key={route.name}
                                        className="app-navbar-smallscreen-link"
                                        onClick={() => {
                                            setToggleMenu(false);
                                        }}
                                    >
                                        {route.name}
                                    </NavHashLink>
                                ))
                            }
                        </div>
                    </div>
                )}
            </div>
        </nav >
    );
}

export default Navbar;
