import React, { useState } from "react";
import { useSelector } from "react-redux";
import { EditBoardModal } from "../../../context/Modal";
import EditABoardForm from "./EditABoardForm";
import './EditBoard.css';


const EditUserBoardModal = ({id, user, board}) => {    //id = boardId
    const [showModal, setShowModal] = useState(false);
    const sessionUser = useSelector(state => state.session.user)
    // console.log("ID", id)
    // console.log("BOARD", board)
    // console.log("USER", user)
    // let userOfBoard = board.boards.filter((board) => board.user_id === +sessionUser.id)
    // console.log("THIS IS USER OF BOARD", userOfBoard[0].user_id)

    const onCloseModal = () => {
        setShowModal(false)
        // if (onCloseMenuModal) {
        //     onCloseMenuModal()

        // }
    }

    console.log("MODAL", id)
    return (
        <>
            {/* <div className="edit-board-modal"> */}
                {sessionUser.id === board.user_id && (
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
