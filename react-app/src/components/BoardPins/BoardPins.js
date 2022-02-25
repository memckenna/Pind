import React, { useEffect, useState } from "react";
import { NavLink, Redirect, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createBoardPin, getAllBoardsForPin } from "../../store/boards_pins";
import { getBoardsByUser } from "../../store/board";
import { getASinglePin } from "../../store/pin";
import BoardPinSelectionDetails from "./BoardPinDetails";
import "./BoardPins.css"


const GetAllBoardsForPin = ({ id, onClose }) => { //id = pin.id
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const boards = useSelector(state => state.board)

    console.log("BOARDPINS", boards)
    const { boardId } = useParams()



    useEffect(() => {
        // dispatch(getAllBoardsForPin(boardId))
        dispatch(getBoardsByUser(sessionUser.id))
        dispatch(getASinglePin(id))
        dispatch(createBoardPin(boardId, id))
    }, [dispatch, sessionUser, boardId, id])


    return (
        <>
            <div className="board-pins-container">
                {boards.boards?.map(board => (
                    <div key={board.id} className="board-pin-details-div">
                        {console.log("BOARD IN COMP", board)}
                        <div className="board-pin-details">
                            <BoardPinSelectionDetails onClose={onClose} id={id} board={board} />
                        </div>
                    </div>

                ))}
            </div>
        </>
    )
}


export default GetAllBoardsForPin;
