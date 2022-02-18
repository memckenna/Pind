import React, { useState } from "react";
import { EditBoardModal } from "../../../context/Modal";
import EditABoardForm from "./EditABoardForm";
import './EditBoard.css';


const EditUserBoardModal = ({id}) => {
    const [showModal, setShowModal] = useState(false);
    const onCloseModal = () => {
        setShowModal(false)
        // if (onCloseMenuModal) {
        //     onCloseMenuModal()

        // }
    }

    console.log("MODAL", id)
    return (
        <>
            <div className="edit-board-modal">
                <i
                    className="far fa-edit"
                    onClick={() => setShowModal(true)}
                ></i>
                {showModal && (
                    <EditBoardModal onClose={() => setShowModal(false)}>
                        <EditABoardForm id={id} onClose={onCloseModal} />
                    </EditBoardModal>
                )}
            </div>
        </>
    )
}

export default EditUserBoardModal;
