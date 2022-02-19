import React, { useState } from "react";
import { BoardModal } from "../../../context/Modal";
import CreateBoardForm from "./CreateABoard";
import "./CreateBoard.css"

function CreateBoardModal() {
    const [showModal, setShowModal] = useState(false);
    const onCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="create-board-modal">
                <button className="create-button">
                    <i
                        className="fas fa-plus"
                        onClick={() => setShowModal(true)}
                    ></i>
                </button>
                {/* <button onClick={() => setShowModal(true)}> */}
                {/* Create post */}
                {/* </button> */}
                {showModal && (
                    <BoardModal onClose={() => setShowModal(false)}>
                        <CreateBoardForm onClose={onCloseModal} />
                    </BoardModal>
                )}
            </div>
        </>
    )
}

export default CreateBoardModal;
