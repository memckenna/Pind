import React, { useEffect, useState } from "react";
// import { NavLink, Redirect, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetAllBoardsOnSinglePinModal } from "../../../context/Modal";
import GetAllBoardsForSinglePin from "./SinglePinBoardSave";
import { getBoardsByUser } from "../../../store/board";
import { getASinglePin } from "../../../store/pin";

import "../BoardPins.css"
import { useParams } from "react-router-dom";


const SinglePinBoardSaveModal = ({ id }) => { //id = pinId
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const [showModal, setShowModal] = useState(false);
    const onCloseModal = () => {
        setShowModal(false);
    };

    // const { boardId } = useParams()

    useEffect(() => {
        dispatch(getBoardsByUser(sessionUser?.id))
        dispatch(getASinglePin(id))

    }, [dispatch, showModal, sessionUser])


    return (
        <>
            <div>
                <button className="single-save-drop-down-button" onClick={() => setShowModal(true)}>
                    <i
                        className="fas fa-angle-down down-arrow-single"
                        onClick={() => setShowModal(true)}
                    ></i>
                    {/* <div>Save</div> */}
                </button>
                {showModal && (
                    <GetAllBoardsOnSinglePinModal onClose={() => setShowModal(false)}>
                        <h1>Save to board</h1>
                        <GetAllBoardsForSinglePin id={id} onClose={onCloseModal} />
                        {/* <GetAllBoardsForPin id={id} onClose={onCloseModal} /> */}
                    </GetAllBoardsOnSinglePinModal>
                )}
            </div>
        </>
    )
}

export default SinglePinBoardSaveModal;
