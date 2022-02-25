import React, { useEffect, useState } from "react";
import { NavLink, Redirect, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createBoardPin } from "../../store/boards_pins";
import BoardPinSelectionDetails from "./BoardPinDetails";
import "./BoardPins.css"


const GetAllBoardsForPin = ({ id, onClose }) => { //id = pin.id
    const [boardId, setBoardId] = useState(null)

    const dispatch = useDispatch()
    const boards = useSelector(state => state.board.boards)
    console.log("BOARDPINS", boards[id])
    const boardsArr = Object.values(boards)
    console.log("BOARDS OBJECT VALUES", boardsArr)
    const board_pins = useSelector(state => state.boardPin)
    console.log("THIS IS board_pins", board_pins)




    useEffect(() => {
        dispatch(createBoardPin(boards[id], id))
    }, [dispatch])

    return (
        <>
            <div className="board-pins-container">
                {boards.boards?.map(board => (

                    <div key={board.id} className="board-pin-details-div">
                        {console.log("BOARD IN COMP", board)}
                        <div className="board-pin-details">
                            <BoardPinSelectionDetails id={id} board={board} />
                        </div>
                    </div>

                ))}
            </div>
        </>
    )
}


export default GetAllBoardsForPin;
