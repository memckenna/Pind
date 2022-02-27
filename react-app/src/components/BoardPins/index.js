import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { GetAllBoardsModal } from "../../context/Modal";
import { getBoardsByUser } from "../../store/board";
import { getASingleBoard } from "../../store/board";
import { getASinglePin } from "../../store/pin";
import { getAllBoardsForPin } from "../../store/boards_pins";
import { createBoardPin } from "../../store/boards_pins";
import GetAllBoardsForPin from "./BoardPins";
import "./BoardPins.css"

const GetAllBoardsOnPinModal = ({ id }) => {  //id = pin.id
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)

    const [showModal, setShowModal] = useState(false);
    const onCloseModal = () => {
        setShowModal(false);
    };

    // const { boardId } = useParams()
    // console.log(boardId)

    useEffect(() => {
        // dispatch(getAllBoardsForPin(boardId))
        dispatch(getBoardsByUser(sessionUser?.id))
        dispatch(getASinglePin(id))
        // dispatch(getASingleBoard(boardId))
        // dispatch(createBoardPin(boardId, id))
    }, [dispatch, showModal])

    return (
        <>
            <div>
                <button className="save-drop-down-button">
                    <i
                        className="fas fa-angle-down down-arrow"
                        onClick={() => setShowModal(true)}
                    ></i>
                    {/* <div>Save</div> */}
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
