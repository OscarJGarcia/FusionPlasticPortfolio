import { ReactNode } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './modal.scss';

interface ModalType {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
}


export default function ContactModal(props: ModalType) {
    return (
        <>
            {props.isOpen &&
                <div id="contact-modal">
                    <div className="overlay" onClick={
                        props.toggle} />
                    <div className="modal" >
                        <AiOutlineCloseCircle
                            fontSize={27}
                            className="overlay-close"
                            onClick={
                                props.toggle
                            }
                        ></AiOutlineCloseCircle>
                        <div className="modal-content" onClick={(e) => { e.stopPropagation(); }}>
                            {props.children}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
