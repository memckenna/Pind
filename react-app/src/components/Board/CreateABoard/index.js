import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BoardModal } from "../../../context/Modal";
import CreateBoardForm from "./CreateABoard";
import "./CreateBoard.css"

function CreateBoardModal({ id }) {
    const sessionUser = useSelector(state => state.session.user)
    const boards = useSelector(state => state.board)

    const [showModal, setShowModal] = useState(false);
    const onCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="create-board-modal">
                {sessionUser.id === +id && (
                    <button className="create-button">
                        <i
                            className="fas fa-plus"
                            onClick={() => setShowModal(true)}
                        ></i>
                    </button>
                )}
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
