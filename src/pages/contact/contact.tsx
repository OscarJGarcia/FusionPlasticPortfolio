import { useState } from 'react';
import './contact.scss';
import { db } from '../../firebase/firebase-config';
import { addDoc, collection } from 'firebase/firestore';
import Modal, { ModalType } from '../../components/modal/modal';
import { useModal } from '../../hooks/usemodal';
function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [modalMessage, setModalMessage] = useState<any>({
        message: '',
        type: ModalType.CONTENT
    });

    const { isOpen, toggle } = useModal();
    const userCollectionRef = collection(db, "contactData");

    const handleSubmit = async (event: any) => {
        event?.preventDefault();
        const enteredData = {
            name,
            phone,
            email,
            message,
            date: new Date()
        };

        if (name.trim().length === 0 || phone.trim().length === 0 || email.trim().length === 0 || message.trim().length === 0) {
            setModalMessage(
                {
                    message: 'Por favor llena todo el formulario antes de enviar!',
                    type: ModalType.ERROR
                }
            );
            toggle();
            return;
        }

        addDoc(userCollectionRef, enteredData);

        const result = await fetch(
            '/FusionPlasticPortfolio',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...enteredData, secret: process.env.REACT_APP_NODEMAILER_SECRET }),
            }
        );
        if (result.ok) {
            setModalMessage(
                {
                    message: 'Tu mensaje ha sido enviado correctamente!',
                    type: ModalType.INFO
                }
            );
        } else {
            setModalMessage(
                {
                    message: 'Ha ocurrido un problema al enviar tu mensaje',
                    type: ModalType.INFO
                }
            );
        }
        toggle();
        resetForm();
    }

    const resetForm = () => {
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
    }

    return (
        <div id="contact">
            <h2>Contactanos</h2>
            <form className="form-container" onSubmit={handleSubmit} autoComplete="off">
                <div className="input-group">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name='name' value={name} placeholder="Escribe tu nombre" onChange={
                        (event: any) => {
                            setName(event.target.value);
                        }
                    } />
                </div>
                <div className="input-group">
                    <label htmlFor="phone">Tel??fono / Celular:</label>
                    <input type="number" name='phone' value={phone} placeholder="Escribe tu tel??fono"
                        onChange={
                            (event: any) => {
                                setPhone(event.target.value);
                            }
                        } />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Correo:</label>
                    <input type="email" name='email' value={email} placeholder="Escribe tu correo"
                        onChange={
                            (event: any) => {
                                setEmail(event.target.value);
                            }
                        } />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Mensaje:</label>
                    <textarea name="message" value={message} placeholder='Escribe aqui' maxLength={1000}
                        onChange={
                            (event: any) => {
                                setMessage(event.target.value);
                            }
                        }></textarea>
                    <span className='char-length'>{`${message.length}/1000`}</span>
                </div>
                <button className="btn-primary" type="submit">Enviar</button>
            </form >
            <Modal width="20vw" height="150px" type={modalMessage.type} message={modalMessage.message} isOpen={isOpen} toggle={toggle}>;
            </Modal>
        </div >
    );
}

export default Contact;
