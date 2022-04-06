import React, { useState } from "react";
import { useSelector } from "react-redux";
import { EditBoardModal } from "../../../context/Modal";
import EditABoardForm from "./EditABoardForm";
import './EditBoard.css';


const EditUserBoardModal = ({id, user, board}) => {    //id = boardId
    const [showModal, setShowModal] = useState(false);
    const sessionUser = useSelector(state => state.session.user)

    const onCloseModal = () => {
        setShowModal(false)
        // if (onCloseMenuModal) {
        //     onCloseMenuModal()
        // }
    }

    return (
        <>
            {/* <div className="edit-board-modal"> */}
                {sessionUser?.id === board.user_id && (
                    <button className="edit-pen-btn">
                        <i
                            className="fas fa-pen"
                            onClick={() => setShowModal(true)}
                        ></i>
                    </button>
                 )}
                {showModal && (
                    <EditBoardModal onClose={() => setShowModal(false)}>
                        <EditABoardForm id={id} onClose={onCloseModal} />
                    </EditBoardModal>
                )}
            {/* </div> */}
        </>
    )
}

export default EditUserBoardModal;
