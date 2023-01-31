import { ReactNode, useRef } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './modal.scss';


export enum ModalType {
    INFO,
    ERROR,
    CONTENT
}
interface IModal {
    width: string;
    height: string;
    children?: ReactNode;
    isOpen: boolean;
    type: ModalType;
    message?: string;
    toggle: () => void;
}

export default function Modal(props: IModal) {
    const color = props.type === ModalType.ERROR ? '#d62828' : '#2a9134';
    // let width: string = props.width;
    // let height: string = props.height;
    // const windowWidth = useRef(window.innerWidth);
    // const windowHeight = useRef(window.innerHeight);
    // if (+windowWidth.current < 920) {
    //     width = ((windowWidth.current * 80) / 100) + 'px';
    //     height = ((windowHeight.current * 0) / 100) + 'px';
    // }

    return (
        <>
            {props.isOpen &&
                <div id="modal-container">
                    <div className="overlay" onClick={
                        props.toggle} />
                    <div className="modal" style={{ width: props.width, height: props.height }}>
                        <AiOutlineCloseCircle
                            fontSize={27}
                            className="overlay-close"
                            style={{ color: color }}
                            onClick={
                                props.toggle
                            }
                        ></AiOutlineCloseCircle>
                        <div className="modal-content scrollbar" onClick={(e) => { e.stopPropagation(); }}>
                            {
                                props.type === ModalType.INFO &&
                                <p className='modal-info'>{props.message}</p>
                            }
                            {
                                props.type === ModalType.ERROR &&
                                <p className='modal-error'>{props.message}</p>
                            }
                            {
                                props.type === ModalType.CONTENT &&
                                props.children
                            }
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
