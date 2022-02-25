import React, { useState } from "react";
import { useSelector } from "react-redux";
import { GetAllBoardsModal } from "../../context/Modal";
import GetAllBoardsForPin from "./BoardPins";
import "./BoardPins.css"

const GetAllBoardsOnPinModal = ({ id }) => {  //id = pin.id
    const sessionUser = useSelector(state => state.session.user)
    const [showModal, setShowModal] = useState(false);
    const onCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div>
                <button className="drop-down-button">
                    <i
                        className="fas fa-angle-down"
                        onClick={() => setShowModal(true)}
                    ></i>
                </button>
                {showModal && (
                    <GetAllBoardsModal onClose={() => setShowModal(false)}>
                        <h1>Save to board</h1>
                        <GetAllBoardsForPin id={id} onClose={onCloseModal} />
                    </GetAllBoardsModal>
                )}
            </div>
        </>
    )
}

export default GetAllBoardsOnPinModal;
