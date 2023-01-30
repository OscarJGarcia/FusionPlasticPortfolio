import React from 'react';
import './not-found.scss';
import images from '../../shared/constants/images';
import { NavLink } from 'react-router-dom';
function NotFound() {

    return (
        <div id="not-found">
            <div className="left-container">
                <img src={images.ship} alt="ship" />
            </div>
            <div className="right-container">
                <h1>404</h1>
                <h2>Lo siento al parecer estas perdido.</h2>
                <p>
                    La pagina que estabas buscando no fue encontrada.
                </p>
                <NavLink className="btn-info" to="/">Inicio</NavLink>
            </div>

        </div>
    );
}

export default NotFound;
