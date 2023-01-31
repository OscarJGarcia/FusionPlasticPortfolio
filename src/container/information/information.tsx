import React from 'react';
import { NavLink } from 'react-router-dom';
import './information.scss';

function Information() {
    return (
        <div id="information">
            <div className="contact-info">
                <h2>
                    Contacto
                </h2>
                <div className="container">
                    <div>
                        <p>
                            Dirección:
                        </p>

                        <p>
                            Bogotá Colombia
                        </p>
                        <p>
                            Calle 22b # 22 - 07
                        </p>
                    </div>
                    <div>
                        <p>
                            Celular:
                        </p>

                        <p>
                            Cel: 3115162887
                        </p>
                    </div>
                    <div>
                        <p>
                            Email:
                        </p>
                        <p>
                            correo@correo.com
                        </p>
                    </div>
                </div>
            </div>
            <div className="other-links">
                <h2>
                    Enlaces rapidos
                </h2>
                <div>
                    <NavLink to="/privacy-policy">Terminos y condiciones</NavLink>
                </div>
            </div>

            <div className="social-networks">
                <h2>
                    Redes Sociales
                </h2>
                <div>
                    <a href="https://www.facebook.com/profile.php?id=100081858037504">Facebook</a>
                </div>
            </div>
        </div>
    );
}

export default Information;
