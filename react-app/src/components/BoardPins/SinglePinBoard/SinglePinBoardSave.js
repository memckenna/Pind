import React, { useEffect, useState } from "react";
import { NavLink, Redirect, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createBoardPin } from "../../../store/boards_pins";
import { getASinglePin } from "../../../store/pin";
import { getBoardsByUser } from "../../../store/board";
import SinglePinBoardSaveDetails from "./SinglePinBoardDetails";

import "../BoardPins.css"


const GetAllBoardsForSinglePin = ({ id, onClose }) => {  //id = pinId
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const boards = useSelector(state => state.board)

    console.log(sessionUser)

    useEffect(() => {
        dispatch(getBoardsByUser(sessionUser.id))
        dispatch(getASinglePin(id))
        // dispatch(createBoardPin(boardId, id))
    },[dispatch, sessionUser, id])

    return (
        <>
            <div className="board-pins-container">
                {boards.boards?.map(board => (
                    <div key={board.id} className="board-pin-details-div">
                        {console.log(board)}
                        <div className="board-pin-details">
                            <SinglePinBoardSaveDetails onClose={onClose} id={id} board={board}  />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default GetAllBoardsForSinglePin;
