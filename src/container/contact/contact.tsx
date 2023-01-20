import React from 'react';
import './contact.scss';

function Contact() {
    return (
        <div id="contact">
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
                            Maribel Garcia Gomez
                        </p>
                    </div>
                </div>
            </div>
            <div className="other-links">
                <h2>
                    Enlaces rapidos
                </h2>
                <div>
                    <a href="#">Terminos y condiciones</a>
                    <a href="#">Política de privacidad</a>
                </div>
            </div>

            <div className="social-networks">
                <h2>
                    Redes Sociales
                </h2>
                <div>
                    <a href="#">Facebook</a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
