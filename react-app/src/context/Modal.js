import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';


const ModalContext = React.createContext();

export function ModalProvider({ children }) {
    const modalRef = useRef();
    const [value, setValue] = useState();

    useEffect(() => {
        setValue(modalRef.current);
    }, [])

    return (
        <>
            <ModalContext.Provider value={value}>
                {children}
            </ModalContext.Provider>
            <div ref={modalRef} />
        </>
    );
}

export function Modal({ onClose, children }) {
    const modalNode = useContext(ModalContext);
    if (!modalNode) return null;

    return ReactDOM.createPortal(
        <div id="modal">
            <div id="modal-background" onClick={onClose} />
            <div id="modal-content">
                {children}
            </div>
        </div>,
        modalNode
    );
}


export function BoardModal({ onClose, children }) {
    const modalNode = useContext(ModalContext);
    if (!modalNode) return null;

    return ReactDOM.createPortal(
        <div id="board-modal">
            <div id="board-modal-background" onClick={onClose} />
            <div id="board-modal-content">
                {children}
            </div>
        </div>,
        modalNode
    );
}


export function EditBoardModal({ onClose, children }) {
    const modalNode = useContext(ModalContext);
    if (!modalNode) return null;

    return ReactDOM.createPortal(
        <div id="edit-board-modal">
            <div id="edit-board-modal-background" onClick={onClose} />
            <div id="edit-board-modal-content">
                {children}
            </div>
        </div>,
        modalNode
    );
}


export function SignUpModal({ onClose, children }) {
    const modalNode = useContext(ModalContext);
    if (!modalNode) return null;

    return ReactDOM.createPortal(
        <div id="signup-modal">
            <div id="signup-modal-background" onClick={onClose} />
            <div id="signup-modal-content">
                {children}
            </div>
        </div>,
        modalNode
    );
}
