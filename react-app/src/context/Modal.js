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

export function EditPinModal({ onClose, children }) {
    const modalNode = useContext(ModalContext);
    if (!modalNode) return null;

    return ReactDOM.createPortal(
        <div id="edit-pin-modal">
            <div id="edit-pin-modal-background" onClick={onClose} />
            <div id="edit-pin-modal-content">
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


export function CreatePinModal({ onClose, children }) {
    const modalNode = useContext(ModalContext);
    if (!modalNode) return null;

    return ReactDOM.createPortal(
        <div id="create-pin-modal">
            <div id="create-pin-modal-background" onClick={onClose} />
            <div id="create-pin-modal-content">
                {children}
            </div>
        </div>,
        modalNode
    );
}

export function GetAllBoardsModal({ onClose, children }) {
    const modalNode = useContext(ModalContext);
    if (!modalNode) return null;

    return ReactDOM.createPortal(
        <div id="boardpin-modal">
            <div id="boardpin-modal-background" onClick={onClose} />
            <div id="boardpin-modal-content">
                {children}
            </div>
        </div>,
        modalNode
    );
}


export function GetAllBoardsOnSinglePinModal({ onClose, children }) {
    const modalNode = useContext(ModalContext);
    if (!modalNode) return null;

    return ReactDOM.createPortal(
        <div id="single-boardpin-modal">
            <div id="single-boardpin-modal-background" onClick={onClose} />
            <div id="single-boardpin-modal-content">
                {children}
            </div>
        </div>,
        modalNode
    );
}


export function GetAllFollowsModal({ onClose, children }) {
    const modalNode = useContext(ModalContext);
    if (!modalNode) return null;

    return ReactDOM.createPortal(
        <div id="follows-modal">
            <div id="follows-modal-background" onClick={onClose} />
            <div id="follows-modal-content">
                {children}
            </div>
        </div>,
        modalNode
    );
}

// export function EditAndDeleteCommentModal({ onClose, children }) {
//     const modalNode = useContext(ModalContext);
//     if (!modalNode) return null;

//     return ReactDOM.createPortal(
//         <div id="edit-delete-comment-modal">
//             <div id="edit-delete-comment-modal-background" onClick={onClose} />
//             <div id="edit-delete-comment-modal-content">
//                 {children}
//             </div>
//         </div>,
//         modalNode
//     );
// }

export function EditAndDeleteCommentModal({ onClose, children }) {
    const modalNode = useContext(ModalContext);
    if (!modalNode) return null;

    return ReactDOM.createPortal(
        <div id="edit-comment-modal">
            <div id="edit-comment-modal-background" onClick={onClose} />
            <div id="edit-comment-modal-content">
                {children}
            </div>
        </div>,
        modalNode
    );
}
