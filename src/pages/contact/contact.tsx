import React from 'react';
import './contact.scss';

function Contact() {
    return (
        <div id="contact">
            <h2>Contactanos</h2>
            <div className="form-container">
                <div className="input-group">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name='name' placeholder="Escribe tu nombre" />
                </div>
                <div className="input-group">
                    <label htmlFor="phone">Telefono / Celular:</label>
                    <input type="number" name='phone' placeholder="Escribe tu telefono" />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Correo:</label>
                    <input type="email" name='email' placeholder="Escribe tu correo" />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Mensaje:</label>
                    <textarea name="message" placeholder='Escribe aqui'></textarea>
                </div>
                <button className="btn-primary">Enviar</button>
            </div>

        </div>
    );
}

export default Contact;
