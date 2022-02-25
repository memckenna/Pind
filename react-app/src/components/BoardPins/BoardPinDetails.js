import React, { useEffect, useState } from "react";
import { NavLink, Redirect, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createBoard, getBoardsByUser } from "../../store/board";
import { createBoardPin } from "../../store/boards_pins";
import kitchen from '../../images/kitchen.jpg'

import "./BoardPins.css"

const BoardPinSelectionDetails = ({ id, board }) => { //id = pin.id
    const dispatch = useDispatch()
    const boards = useSelector(state => state.board)
    const sessionUser = useSelector(state => state.session.user)
    console.log("BOARD PIN DETAILS", boards)

    const [pinId, setPinId] = useState(null)
    const [boardId, setBoardId] = useState(null)


    useEffect(() => {
        dispatch(getBoardsByUser(sessionUser.id))
    }, [dispatch])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = await dispatch(createBoard(boardId, pinId))
        
    }


    return (
        <>
            <div className="boards-on-pin-details">
                <div className="boards-on-pin-left-details">
                    <div className="boards-on-pin-img-div">
                        {!board.pins[0]?.photo_url ?
                            <img className="boards-on-pin-img" src={kitchen} /> :
                            <img className="boards-on-pin-img" src={board.pins[0]?.photo_url} />
                        }
                    </div>
                    <div className="boards-on-pin-title">
                        {board.title}
                    </div>

                </div>
                <div className="boards-on-pin-save-btn-container">
                    <div className="boards-on-pin-save-btn-div">
                        <button className="boards-on-pin-save-btn">Save</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BoardPinSelectionDetails;
